import { Button, Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import { useRef, useState } from "react";
import { Container, Row, Col } from "react-grid-system";
import useSWR from "swr";
import { motion, useAnimation } from "framer-motion";

const ProjectList = () => {
    const { data } = useSWR<Project[]>("/projects");

    return data?.map((item, idx) => {
        return (
            <motion.div
                key={idx}
                whileHover={{
                    scale: 1.2,
                    margin: "20px",
                }}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                }}
            >
                <Card
                    style={{
                        margin: "20px",
                    }}
                    radius="lg"
                >
                    <Image
                        alt="Woman listing to music"
                        className="object-cover"
                        height={100}
                        src={item.bannerUrl}
                        width={1000}
                    />
                    <CardBody>
                        <strong className="text-tiny text-white/80">{item.title}</strong>
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
    });
};

export default ProjectList;
