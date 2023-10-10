import useSWR from "swr";
import {
    Avatar,
    Tooltip,
    Button,
    Card,
    CardHeader,
    CardBody,
    Image,
    CardFooter,
    AvatarGroup,
    Divider,
} from "@nextui-org/react";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { useRouter } from "next/router";
import { fetcher } from "@/shared/utils/fetcher";

interface StackProps { }

interface StackDetailsProps {
    stack: TechStack;
}

const StackDetails: React.FC<StackDetailsProps> = ({ stack }) => {
    return (
        <Card
            style={{
                maxWidth: "300px",
            }}
        >
            <CardHeader>
                <Avatar style={{ margin: "5px" }} size="lg" src={stack.imgUrl} />
                <strong>{stack.name}</strong>
            </CardHeader>
            <CardBody>
                <p>{stack.description}</p>
            </CardBody>
            <CardFooter>
                <Link target="_blank" href={stack.docUrl}>
                    View Documentation
                </Link>
            </CardFooter>
        </Card>
    );
};

const Stack: React.FC<StackProps> = () => {
    const { data, isLoading } = useSWR<TechStack[]>(`/stack`, fetcher);

    const router = useRouter();

    if (isLoading) return <div>Please wait</div>;

    return (
        <Card
            shadow="none"
            style={{
                padding: "30px",
            }}
        >
            <CardHeader>
                <strong>Tech Stack</strong>
            </CardHeader>
            <CardBody>
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "start",
                    }}
                >
                    {data?.map((item, index) => (
                        <Card
                            style={{ margin: "5px" }}
                            shadow="sm"
                            key={index}
                            isPressable
                            onPress={() => {
                                window.open(item.docUrl, "_blank");
                            }}
                        >
                            <CardHeader>
                                <Avatar src={item.imgUrl} />
                                <b style={{ margin: "10px" }} className="text-small">
                                    {item.name}
                                </b>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </CardBody>
        </Card>
    );
};

export default Stack;
