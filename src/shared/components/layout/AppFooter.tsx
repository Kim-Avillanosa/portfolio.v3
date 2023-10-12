import { Container } from "react-grid-system";
import useSWR from "swr";
import ContactTile from "../ContactTile";

const AppFooter: React.FC = () => {
    const { data } = useSWR<Me>("/me");

    const containerStyle: React.CSSProperties = {
        display: "flex",
        flexDirection: "row", // This makes child divs stack horizontally
        justifyContent: "space-between", // To space the children evenly
        alignItems: "flex-start", // Align child divs to the top
    };

    const childStyle: React.CSSProperties = {
        flex: "1", // Each child div takes up an equal portion of the available space
        minHeight: "200px", // Minimum height for child div
    };

    return (
        <div
            style={{
                height: "50vh",
                backgroundColor: "#1e272e",
            }}
        >
            <div style={containerStyle}>
                <div style={childStyle}>
                    <ContactTile color="#222f3e"
                        label="Github"
                        url={data?.socials.github ?? ""}
                        caption="Follow me on Github"
                        logoUrl="/assets/github.png"
                    />
                </div>
                <div style={childStyle}>
                    <ContactTile color="#1e3799"
                        label="LinkedIn"
                        url={data?.socials.linkedIn ?? ""}
                        caption="Connect with me on LinkedIn"
                        logoUrl="/assets/linkedin.png"
                    />
                </div>
                <div style={childStyle}>
                    <ContactTile color="#3c6382"
                        label="More"
                        url={data?.socials.more ?? ""}
                        caption="Connect with me on other socials"
                        logoUrl="/assets/link.png"
                    />
                </div>

            </div>
        </div>
    );
};

export default AppFooter;
