import LargeHeadline from "@/shared/components/LargeHeadline";
import { Container, Row, Col } from "react-grid-system";
import WorkExperience from "../QuickBackground/WorkExperience";
import ProjectList from "./WorkProjectList";

const WorkProjects = () => {
    return (
        <div id="workProjects" style={{ height: "100%" }}>
            <Container style={{ padding: "30px" }}>
                <Row>
                    <Col>
                        {/* <WorkProjectListSample /> */}
                        <ProjectList />
                    </Col>
                    <Col
                        style={{
                            textAlign: "center",
                            padding: "10px",
                        }}
                    >
                        <LargeHeadline
                            color="#26de81"
                            speed={1}
                            size={3}

                            text={["Projects"]}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default WorkProjects;
