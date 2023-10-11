import LargeHeadline from "@/shared/components/LargeHeadline";
import { Container, Row, Col } from "react-grid-system";
import WorkExperience from "../QuickBackground/WorkExperience";

const TechStack = () => {
    return (
        <div style={{ height: "100vh" }}>
            <Container style={{ padding: "30px" }}>
                <Row>
                    <Col>
                        <LargeHeadline
                            color="#26de81"
                            speed={1}
                            size={5}
                            text={["What I use."]}
                        />
                    </Col>
                    <Col>
                        <WorkExperience />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TechStack;
