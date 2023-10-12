import LargeHeadline from "@/shared/components/LargeHeadline";
import { Container, Row, Col } from "react-grid-system";
import WorkExperience from "../QuickBackground/WorkExperience";
import WorkProjectSlide from "./WorkProjectSlide";

const WorkProjects = () => {
    return (
        <div
            id="workProjects"
            className="projectBg"
            style={{ paddingTop: "100px", height: "100%" }}
        >
            <Container style={{ padding: "30px" }}>
                <Row>
                    <Col>
                        <WorkProjectSlide />
                    </Col>
                    <Col
                        xl={4}
                        style={{
                            textAlign: "center",
                            padding: "10px",
                        }}
                    >
                        <LargeHeadline
                            color="#212121"
                            speed={1}
                            size={4}
                            text={["Development Projects"]}
                        />
                        <p style={{ color: "#212121" }}>(Slide up)</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default WorkProjects;
