import React from "react";
import { AvatarGroup, Avatar } from "@nextui-org/react";
import useSWR from "swr";

const TechStackList: React.FC = () => {
    const { data } = useSWR<TechStack[]>("/stack");

    return (
        <div >
            <AvatarGroup isBordered isGrid max={1000}>
                {data?.map((item, index) => (
                    <Avatar size="lg" isBordered radius="lg" src={item.imgUrl} />
                ))}
            </AvatarGroup>
        </div>
    );
};

export default TechStackList;
