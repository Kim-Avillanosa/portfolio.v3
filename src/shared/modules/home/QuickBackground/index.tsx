import { Container, Row, Col } from "react-grid-system";
import WorkExperience from "./WorkExperience";
import LargeHeadline from "@/shared/components/LargeHeadline";
const QuickBackground = () => {


    return (
        <div
            id="quickbackground"
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <Container style={{ padding: "60px", textAlign: "center" }}>
                <div style={{ paddingBottom: "50px", justifyContent: "center" }}>
                    <LargeHeadline
                        color="#2ed573"
                        speed={1}
                        size={4}
                        text={["Expertise provided to"]}
                    />
                </div>
                <WorkExperience />
            </Container>
        </div>
    );
};

export default QuickBackground;
