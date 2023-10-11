import { Button } from "@nextui-org/react";
import LargeHeadline from "../../components/LargeHeadline";
import { motion } from "framer-motion";
import { useRef } from "react";
import { scrollToMyDiv } from "@/shared/utils/scrollToDiv";
import useSWR from "swr";
const Headline = () => {
    return (
        <div
            id="headline"
            className="quickInfoBg"
            style={{ padding: "70px", height: "100vh" }}
        >
            <div
                style={{
                    padding: "20px",
                    borderRadius: "10px",
                }}
            >
                <LargeHeadline
                    color="#ffffff"
                    speed={60}
                    text={["Hi, my name is"]}
                    size={2}
                />
                <div
                    style={{
                        fontSize: "5em",
                        fontWeight: "bold",
                        color: "#26de81",
                    }}
                >
                    Kim Avillanosa
                </div>
                <div>
                    <LargeHeadline
                        speed={60}
                        color="#ffffff"
                        text={["I'm a Senior Fullstack Software Engineer."]}
                        size={1}
                    />
                </div>

                <div style={{ marginTop: "100px" }}>
                    <Button
                        size="lg"
                        color="default"
                        onClick={() => scrollToMyDiv("quickbackground")}
                    >
                        See more
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Headline;
