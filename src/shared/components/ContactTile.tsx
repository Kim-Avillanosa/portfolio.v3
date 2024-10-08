import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

interface ContactTileProps {
    color: string,
    url: string;
    label: string;
    caption: string;
    logoUrl: string;
}

const ContactTile: React.FC<ContactTileProps> = ({
    color,
    url,
    label,
    caption,
    logoUrl,
}) => {
    const { theme } = useTheme();


    const textColor: string = theme === "light" ? "#dfe4ea" : "#ced6e0"

    return (
        <div
            style={{
                background: color,
                alignItems: "center",
                padding: "20px",
                textAlign: "center",
                justifyContent: "center",
                color: textColor
            }}
            onClick={() => window.open(url, "_blank")}
        >
            <Image
                style={{
                    maxWidth: "100 %",
                    display: "block",
                    margin: " 0 auto",
                }}
                width={50}
                height={50}
                src={logoUrl}
                alt={label}
            />
            <h1 style={{ fontSize: "40px", }}>
                <strong>{label}</strong>
            </h1>
            <p>{caption}</p>
        </div>
    );
};

export default ContactTile;
