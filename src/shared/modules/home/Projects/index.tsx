import LargeHeadline from "@/shared/components/LargeHeadline";
import { Container, Row, Col } from "react-grid-system";
import WorkExperience from "../QuickBackground/WorkExperience";

const WorkProjects = () => {
    return (
        <div
            id="workProjects"
            style={{ height: "100vh", backgroundColor: "#1565C0" }}
        >
            <Container style={{ padding: "30px" }}>
                <Row>
                    <Col>
                        <WorkExperience />
                    </Col>
                    <Col>
                        <LargeHeadline
                            color="#26de81"
                            speed={1}
                            size={5}
                            text={["Projects"]}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default WorkProjects;
