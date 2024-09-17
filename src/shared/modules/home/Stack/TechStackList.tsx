import { fetcher } from "@/shared/utils/fetcher";
import { Card, CardFooter, Image, Spinner } from "@nextui-org/react";
import useSWR from "swr";
import styles from "../../../../styles/Services.module.css"; // Assuming you use CSS modules

const TechStackList: React.FC = () => {
  const { data, isLoading } = useSWR<OfferedServices[]>("/api/services");

  if (isLoading)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh", // full viewport height to vertically center
        }}
      >
        <Spinner />
      </div>
    );

  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeContent}>
        {data?.map((item, idx) => (
          <Card key={idx} className={styles.marqueeItem}>
            <Image alt={item.name} src={item.imgUrl} height={200} width={200} />
            <CardFooter className="text-small justify-between">
              <div>
                <b>{item.name}</b>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TechStackList;
