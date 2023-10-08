import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import SunIcon from "@/shared/components/Icons/SunIcon";
import MoonIcon from "@/shared/components/Icons/MoonIcon";

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();

    return (
        <Switch
            size="md"
            color={theme == "dark" ? "warning" : "primary"}
            thumbIcon={({ isSelected }) => (isSelected ? <SunIcon /> : <MoonIcon />)}
            onChange={(e) => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
        />
    );
};
export default ThemeToggle;
