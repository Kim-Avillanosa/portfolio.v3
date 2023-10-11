import LargeHeadline from "@/shared/components/LargeHeadline";
import { Container, Row, Col } from "react-grid-system";
import WorkExperience from "../QuickBackground/WorkExperience";

const ForFun = () => {
    return (
        <div style={{ height: "100vh" }}>
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
                            text={["What I do for fun."]}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ForFun;
