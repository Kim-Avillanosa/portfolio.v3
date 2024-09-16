import { fetcher } from "@/shared/utils/fetcher";
import { Card, Image, Spinner } from "@nextui-org/react";
import useSWR from "swr";
import styles from "../../../../styles/WorkExperience.module.css"; // Assuming you use CSS modules

const WorkExperience: React.FC = () => {
    const { data, isLoading } = useSWR<Experience[]>("/experience");

    if (isLoading)
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh" // full viewport height to vertically center
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
                        <Image
                            alt={item.company}
                            src={item.companyLogo}
                            height={200}
                            width={200}
                        />
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default WorkExperience;
