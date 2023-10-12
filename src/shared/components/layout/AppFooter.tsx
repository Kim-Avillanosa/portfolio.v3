import { Container } from "react-grid-system";
import useSWR from "swr";

const AppFooter: React.FC = () => {

    const { data } = useSWR<Me>("/me");

    return (
        <div style={{ height: "50vh", paddingTop: "100px", backgroundColor: "#1e272e" }}>
            <div>
                {data?.socials.github}
            </div>
        </div>
    );
};

export default AppFooter;
