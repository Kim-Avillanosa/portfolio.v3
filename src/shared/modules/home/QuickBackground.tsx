import WorkExperience from "../experience/WorkExperience";
import MyTechStack from "../experience/TechStack";
import { Container, Row, Col } from "react-grid-system";
import MyInfo from "../experience/MyInfo";
const QuickBackground = () => {
    return (
        <div id="quickbackground" style={{ height: "100vh" }}>
            <Container style={{ marginTop: "50px" }}>
                <Row>
                    <Col md={12} xl={6}>
                        <MyInfo />
                    </Col>
                </Row>
                <Row
                    style={{
                        marginTop: "10px",
                    }}
                >
                    <Col md={12} xl={6}>
                        <WorkExperience />
                    </Col>

                    <Col md={12} xl={6}>
                        <Row>
                            <MyTechStack />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default QuickBackground;
