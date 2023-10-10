import { fetcher } from "@/shared/utils/fetcher";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import useSWR from "swr";

const MyInfo = () => {
    const { data, isLoading } = useSWR<Me>("/me");

    if (isLoading) return <div>Please wait</div>;

    return (
        <div>
            <Card shadow="none" style={{
                padding: "20px"
            }}>
                <CardHeader>
                    <div>
                        <p className="text-md">
                            <strong>{data?.name}</strong>
                        </p>
                        <p className="text-small text-default-500">{data?.email}</p>
                        <p className="text-small text-default-500">{data?.phone}</p>
                    </div>
                </CardHeader>
                <CardBody>
                    <strong>I offer the following services:</strong>
                    {data?.offer.map((item, idx) => {
                        return (
                            <p key={idx} className="text-small text-default-500">
                                {item}
                            </p>
                        );
                    })}
                </CardBody>
            </Card>
        </div>
    );
};

export default MyInfo;
