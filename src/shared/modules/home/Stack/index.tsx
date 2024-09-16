import LargeHeadline from "@/shared/components/LargeHeadline";
import { Container, Row, Col } from "react-grid-system";
import WorkExperience from "../QuickBackground/WorkExperience";
import TechStackList from "./TechStackList";

const TechStack = () => {
    return (
        <div id="techStack"
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh"
            }}>
            <Container style={{ padding: "60px", textAlign: "center" }}>
                <LargeHeadline
                    color="#2ed573"
                    speed={1}
                    size={4}
                    text={["I offer the following services"]}
                />
                <TechStackList />

            </Container>
        </div>
    );
};

export default TechStack;
