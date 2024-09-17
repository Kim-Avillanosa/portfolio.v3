import { Button } from "@nextui-org/react";
import LargeHeadline from "../../components/LargeHeadline";
import { motion } from "framer-motion";
import { useRef } from "react";
import { scrollToMyDiv } from "@/shared/utils/scrollToDiv";
import useSWR from "swr";
import Link from "next/link";
import InstallIcon from "@/shared/components/Icons/InstallIcon";
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
                        text={["Senior Software Engineer from Palawan, Philippines."]}
                        size={1}
                    />
                </div>

                <div style={{ marginTop: "100px" }}>
                    <Button
                        style={{ margin: "2px" }}
                        size="lg"
                        color="default"
                        onClick={() => scrollToMyDiv("addtlInfo")}
                    >
                        See more
                    </Button>

                    <Link href={`/assets/kimavillanosa_resume.pdf`} target="_blank">
                        <Button
                            startContent={<InstallIcon />}
                            style={{ margin: "2px" }}
                            size="lg"
                            color="success"
                            variant="bordered"
                            onClick={() => scrollToMyDiv("quickbackground")}
                        >
                            Download My Resume
                        </Button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Headline;
