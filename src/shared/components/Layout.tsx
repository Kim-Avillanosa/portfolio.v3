import { ReactNode } from "react";
import { useTheme as useNextTheme } from "next-themes";

import { Navbar, Button, useTheme, Switch, Grid } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/router";
import SunIcon from "./SunIcon";
import MoonIcon from "./MoonIcon";

interface LayoutProps {
  children: ReactNode;
}

interface NavLink {
  text: string;
  url: string;
}

const links: NavLink[] = [];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useRouter();

  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  return (
    <>
      <Navbar disableShadow shouldHideOnScroll variant="sticky">
        <Navbar.Brand>
          <img height={50} src="/images/logo/default.png" />
          <h3 style={{ margin: "10px" }}>
            <strong>kmavillanosa</strong>
          </h3>
        </Navbar.Brand>
        <Navbar.Content>
          {links.map((item, idx) => {
            const isActive = pathname === item.url;
            return (
              <Navbar.Link isActive={isActive} href={item.url}>
                {item.text}
              </Navbar.Link>
            );
          })}
        </Navbar.Content>
        <Navbar.Content>
          <Switch
            size="xl"
            color={isDark ? "warning" : "default"}
            iconOn={<SunIcon />}
            iconOff={<MoonIcon />}
            checked={isDark}
            onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
          />
          <Link href={"/a"}>Download my resume</Link>
          <Button as={Link} href="/contact">
            Say Hello
          </Button>
        </Navbar.Content>
      </Navbar>

      {children}
    </>
  );
};

export default Layout;
