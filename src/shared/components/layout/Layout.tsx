import { ReactNode } from "react";
import { useAddToHomescreenPrompt } from "@/shared/hooks/useAddToHomescreenPrompt";
import GoogleAnalytics from "../GoogleAnalytics";
import AppNavBar from "./AppNavBar";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import AppFooter from "./AppFooter";
import { motion, useScroll } from "framer-motion";

interface LayoutProps {
    children: ReactNode;
}

interface NavLink {
    text: string;
    url: string;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { scrollYProgress } = useScroll();

    const { theme } = useTheme();

    return (
        <NextThemesProvider attribute="class" forcedTheme={theme} defaultTheme="dark">

            <AppNavBar />
            <GoogleAnalytics />
            <div className="z-40 gap-4 items-center">{children}</div>
            <AppFooter />
        </NextThemesProvider>
    );
};

export default Layout;
