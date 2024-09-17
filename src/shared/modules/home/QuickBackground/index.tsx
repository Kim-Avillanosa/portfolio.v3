import { Container, Row, Col } from "react-grid-system";
import WorkExperience from "./WorkExperience";
import { useTheme } from "next-themes";
const QuickBackground = () => {

    
    return (
        <div
            className="workExperienceBg"
            id="quickbackground"
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <Container style={{ padding: "60px", textAlign: "center" }}>
                <div style={{ paddingBottom: "50px", justifyContent: "center" }}>
                    <h1 style={{ fontSize: "70px", fontWeight : "bold" }}>Expertise provided to</h1>
                </div>
                <WorkExperience />
            </Container>
        </div>
    );
};

export default QuickBackground;
