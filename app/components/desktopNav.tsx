'use client'

import React from "react";
import {
  Navbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface NavItemPropsType {
  children: React.ReactNode;
  href: string;
}

function NavItem({ children, href }: NavItemPropsType) {
  return (
    <li>
      <Typography
        as="a"
        href={href}
        variant="paragraph"
        color="blue-gray"
        className="text-blue-gray-700 flex items-center gap-2 font-medium"
      >
        {children}
      </Typography>
    </li>
  );
}

function DesktopNav() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false),
    );
  }, []);

  return (
    <>
      <Navbar shadow={false} fullWidth className="border-0">
        <div className="container mx-auto flex items-center justify-between">
        <NavItem href="/">Onwards & Upwards</NavItem>
          <ul className="ml-10 hidden items-center gap-6 lg:flex">
          <NavItem href="/about">About</NavItem>
          <NavItem href="/website-design">Services</NavItem>
          <NavItem href="/project/chair8media">Portfolio</NavItem>
          <NavItem href="/contact">Contact</NavItem>
          </ul>
        </div>
        <Collapse open={open}>
          <div className="container mx-auto mt-3 border-t border-blue-gray-50 px-2 pt-4">
            <ul className="flex flex-col gap-4">
            <NavItem href="/about">About</NavItem>
          <NavItem href="/services">Services</NavItem>
          <NavItem href="/portfolio">Portfolio</NavItem>
          <NavItem href="/contact">Contact</NavItem>
            </ul>
          </div>
        </Collapse>
      </Navbar>
    </>
  );
}

export default DesktopNav;