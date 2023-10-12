import { Container, Row, Col } from "react-grid-system";
import WorkExperience from "./WorkExperience";
import LargeHeadline from "@/shared/components/LargeHeadline";
import { Button } from "@nextui-org/react";
import { scrollToMyDiv } from "@/shared/utils/scrollToDiv";
const QuickBackground = () => {
    return (
        <div
            className="workExperienceBg"
            id="quickbackground"
            style={{ height: "100vh" }}
        >
            <Container style={{ padding: "30px" }}>
                <Row>
                    <Col
                        xl={7}
                        style={{
                            textAlign: "center",
                            padding: "10px",
                        }}
                    >
                        <LargeHeadline
                            color="#26de81"
                            speed={1}
                            size={5}
                            text={["Career Background"]}
                        />
                        <Button size="lg" onClick={() => scrollToMyDiv("workProjects")}>
                            See my projects
                        </Button>
                    </Col>
                    <Col>
                        <WorkExperience />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default QuickBackground;
