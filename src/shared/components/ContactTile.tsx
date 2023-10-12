import React from "react";

interface ContactTileProps {
    url: string;
    label: string;
    caption: string;
    logoUrl: string;
}

const ContactTile: React.FC<ContactTileProps> = ({
    url,
    label,
    caption,
    logoUrl,
}) => {
    return <div></div>;
};

export default ContactTile;
