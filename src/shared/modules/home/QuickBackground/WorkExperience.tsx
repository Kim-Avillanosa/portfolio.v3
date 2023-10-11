import { fetcher } from "@/shared/utils/fetcher";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Divider,
    Link,
    Image,
    Spinner,
} from "@nextui-org/react";

import useSWR from "swr";

const WorkExperience: React.FC = () => {
    const { data, isLoading } = useSWR<Experience[]>("/experience");

    if (isLoading)
        return (
            <div style={{ textAlign: "center", marginTop: "50px" }}>
                <Spinner />
            </div>
        );



    return data?.map((item, idx) => {
        return (
            <Card
                style={{
                    margin: "20px",
                }}
                key={idx}
            >
                <CardHeader className="flex gap-3">
                    <Image
                        alt="nextui logo"
                        height={40}
                        radius="sm"
                        src={item.companyLogo}
                        width={40}
                    />
                    <div className="flex flex-col">
                        <p className="text-md">
                            <strong>{item.position}</strong>
                        </p>
                        <p className="text-small text-default-500">{item.company}</p>
                        <p className="text-small text-default-500">{item.period}</p>
                    </div>
                </CardHeader>

            </Card>
        );
    });
};
export default WorkExperience;
