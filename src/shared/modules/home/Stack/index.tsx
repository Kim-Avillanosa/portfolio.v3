import LargeHeadline from "@/shared/components/LargeHeadline";
import { Container, Row, Col } from "react-grid-system";
import WorkExperience from "../QuickBackground/WorkExperience";
import TechStackList from "./TechStackList";

const TechStack = () => {
    return (
        <div style={{ height: "100vh" }}>
            <Container style={{ padding: "30px" }}>
                <Row>
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
                            text={["Tech Stack"]}
                        />
                    </Col>
                    <Col>
                        <TechStackList />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TechStack;
