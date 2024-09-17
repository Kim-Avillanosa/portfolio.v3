import LargeHeadline from "@/shared/components/LargeHeadline";
import { Container, Row, Col } from "react-grid-system";
import WorkExperience from "../QuickBackground/WorkExperience";
import TechStackList from "./TechStackList";

const TechStack = () => {
  return (
    <div
      id="techStack"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Container style={{ padding: "60px" }}>
        <Row>
          <Col>
            <LargeHeadline
              color="#2ed573"
              speed={1}
              size={3}
              text={["I offer the following services"]}
            />
          </Col>
          <Col xl={6}>
            <TechStackList />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TechStack;
