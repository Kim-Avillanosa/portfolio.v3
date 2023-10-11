import { Container, Row, Col } from "react-grid-system";
import WorkExperience from "./WorkExperience";
import LargeHeadline from "@/shared/components/LargeHeadline";
const QuickBackground = () => {
    return (
        <div
            id="quickbackground"
            style={{ height: "100vh", background: "#0D47A1" }}
        >
            <Container style={{ padding: "30px" }}>
                <Row>
                    <Col>
                        <LargeHeadline
                            color="#26de81"
                            speed={1}
                            size={5}
                            text={["Professional Experience"]}
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

export default QuickBackground;
