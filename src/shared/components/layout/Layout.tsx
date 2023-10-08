import { ReactNode } from "react";
import { useAddToHomescreenPrompt } from "@/shared/hooks/useAddToHomescreenPrompt";
import GoogleAnalytics from "../GoogleAnalytics";
import AppNavBar from "./AppNavBar";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Headline from "../../modules/home/Headline";

interface LayoutProps {
    children: ReactNode;
}

interface NavLink {
    text: string;
    url: string;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <NextThemesProvider attribute="class" defaultTheme="light">
            <AppNavBar />
            <GoogleAnalytics />
            <div className="z-40 gap-4 items-center">{children}</div>
        </NextThemesProvider>
    );
};

export default Layout;
