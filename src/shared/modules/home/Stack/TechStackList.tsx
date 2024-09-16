import React from "react";
import { AvatarGroup, Avatar } from "@nextui-org/react";
import useSWR from "swr";

const TechStackList: React.FC = () => {
    const { data } = useSWR<OfferedServices[]>("/api/services");

    return (
        <div >
            <AvatarGroup isBordered isGrid >
                {data?.map((item, index) => (
                    <Avatar key={index} size="lg" isBordered radius="lg" src={item.imgUrl} />
                ))}
            </AvatarGroup>
        </div>
    );
};

export default TechStackList;
