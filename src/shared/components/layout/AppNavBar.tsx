import { useAddToHomescreenPrompt } from "@/shared/hooks/useAddToHomescreenPrompt";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    NavbarMenu,
    NavbarMenuItem,
    Button,
    NavbarMenuToggle,
} from "@nextui-org/react";
import AppLogo from "./AppLogo";
import ThemeToggle from "../ThemeToggle";
import InstallIcon from "../Icons/InstallIcon";
import { useState } from "react";
import { scrollToMyDiv } from "@/shared/utils/scrollToDiv";

const AppNavBar = () => {
    const [prompt, promptToInstall] = useAddToHomescreenPrompt();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Navbar
            isBlurred
            isBordered
            // className="w-full"
            position="static"
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent>
                <NavbarBrand>
                    <AppLogo />
                    <h1 style={{ margin: "10px" }}>
                        <b>@kmavillanosa</b>
                    </h1>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem>
                    <ThemeToggle />
                </NavbarItem>
                <NavbarItem>
                    <Link href={`/assets/kim cyriel s. avillanosa.pdf`} target="_blank">
                        <Button
                            startContent={<InstallIcon />}
                            size="md"
                            color="primary"
                            variant="shadow"
                        >
                            Download My Resume
                        </Button>
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
};

export default AppNavBar;
