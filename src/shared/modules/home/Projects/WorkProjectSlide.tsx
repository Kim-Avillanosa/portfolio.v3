import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { Button, Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";

const cards: string[] = [
  "#11b1f5",
  "#2dcf0c",
  "#f57411",
  "#f51c11",
  "#740ccf",
  "#e7eb75",
];

function modulo(m: number, n: number): number {
  return ((m % n) + n) % n;
}

const WorkProjectSlide: React.FC = () => {
  const { data, error } = useSWR<Project[]>("/api/projects");

  const cardsLength: number = data ? data.length : 0;

  const [front, setFront] = useState<number>(0);
  const [swipeKeyframes, setSwipeKeyframes] = useState<number>(0);

  function dragEnd(event: any, info: any) {
    if (Math.abs(info.velocity.y) > 100 && Math.abs(info.offset.y) > 200) {
      setFront((prevFront) => (prevFront + 1) % cardsLength);
      setSwipeKeyframes(info.offset.y);
    }
  }

  if (!data || error) return <div>Something went wrong</div>;

  return (
    <motion.section
      className="card-list"
      style={{
        height: "100vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {data.map((item, index) => {
        const diff: number = modulo(index - front, cardsLength);
        return (
          <motion.div
            style={{
              display: "flex",
              flexDirection: "column",
              scrollSnapAlign: "start",
              clear: "both",
              position: "absolute",
            }}
            key={index}
            initial={false}
            animate={{
              zIndex: 10 * (cardsLength - diff),
              scale: 1.0 - 0.05 * diff,
              y: -10 * diff,
              rotate: 0,
            }}
            transition={{
              duration: 0.5,
              rotate: {
                duration: 0.7,
              },
            }}
            drag={front === index ? "y" : false}
            whileDrag={{
              transition: {
                duration: 0.3,
              },
            }}
            onDragEnd={dragEnd}
            dragSnapToOrigin
            className="card"
          >
            <Card radius="lg">
              <Image
                alt="Woman listing to music"
                height={500}
                src={item.bannerUrl}
                width={500}
              />
              <CardBody>
                <strong className="text-tiny text-white/80">
                  {item.title}
                </strong>
                <p className="text-tiny text-white/80">{item.description}</p>
              </CardBody>
              <CardFooter className="justify-end">
                {item.sources.map((sItem, sIdx) => {
                  return (
                    <Image
                      key={sIdx}
                      style={{ margin: "3px" }}
                      onClick={() => {
                        window.open(sItem.projectUrl, "_blank");
                      }}
                      width={25}
                      height={25}
                      alt={sItem.imgUrl}
                      src={sItem.imgUrl}
                    />
                  );
                })}
              </CardFooter>
            </Card>
          </motion.div>
        );
      })}
    </motion.section>
  );
};
export default WorkProjectSlide;
