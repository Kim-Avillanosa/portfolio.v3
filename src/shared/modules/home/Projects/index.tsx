import LargeHeadline from "@/shared/components/LargeHeadline";
import { Container, Row, Col } from "react-grid-system";
import WorkExperience from "../QuickBackground/WorkExperience";
import WorkProjectSlide from "./WorkProjectSlide";
import { Button } from "@nextui-org/react";
import { scrollToMyDiv } from "@/shared/utils/scrollToDiv";

const WorkProjects = () => {
    return (
        <div
            id="workProjects"
            className="projectBg"
            style={{ paddingTop: "100px", height: "100%" }}
        >
            <Container style={{ padding: "60px" }}>
                <Row>
                    <Col>
                        <WorkProjectSlide />
                    </Col>
                    <Col
                        xl={6}
                        style={{
                            textAlign: "center",
                            padding: "10px",
                        }}
                    >
                        <LargeHeadline
                            color="#CAD3C8"
                            speed={1}
                            size={4}
                            text={["Digital Projects"]}
                        />

                        <Button
                            variant="shadow"
                            color="primary"
                            size="lg"
                            onClick={() => scrollToMyDiv("techStack")}
                        >
                            Know what I use
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default WorkProjects;
