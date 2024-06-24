'use client';

import React, { useState, useEffect } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
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
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpen(false));
  }, []);

  return (
    <Navbar shadow={false} fullWidth className="border-0">
      <div className="container mx-auto flex items-center justify-between">
        <div className="navLogo">
          <NavItem href="/" >
            <img
              src="/images/OU-Logo-Blue-Purple.png"
              alt="logo"
              className="w-[124.4px] object-contain h-[60px]"
            />
          </NavItem>
        </div>
        <ul className="hidden items-center gap-6 lg:flex rounded-md">
          <NavItem href="/about">About</NavItem>
          <li className="relative group">
            <Typography
              as="a"
              href="#"
              variant="paragraph"
              color="blue-gray"
              className="text-blue-gray-700 flex items-center gap-2 font-medium"
            >
              Services
            </Typography>
            <ul className="absolute left-0 pt-2 hidden w-56 bg-white shadow-lg group-hover:block rounded-md">
              <MenuItem>
                <NavItem href="/website-design">Website Design</NavItem>
              </MenuItem>
              <MenuItem>
                <NavItem href="/website-development">Website Development</NavItem>
              </MenuItem>
              <MenuItem>
                <NavItem href="/seo">SEO</NavItem>
              </MenuItem>
              <MenuItem>
                <NavItem href="/digital-marketing">Digital Marketing</NavItem>
              </MenuItem>
              <MenuItem>
                <NavItem href="/ux-ui-analysis">UX/UI Analysis</NavItem>
              </MenuItem>
              <MenuItem>
                <NavItem href="/mobile-scaling">Mobile Scaling</NavItem>
              </MenuItem>
              <MenuItem>
                <NavItem href="/e-commerce">E-Commerce</NavItem>
              </MenuItem>
              <MenuItem>
                <NavItem href="/branding-logo-design">Branding / Logo Design</NavItem>
              </MenuItem>
              <MenuItem>
                <NavItem href="/website-maintenance">Website Maintenance</NavItem>
              </MenuItem>
            </ul>
          </li>

          <NavItem href="/portfolio">Portfolio</NavItem>
          <NavItem href="/contact">Contact</NavItem>
        </ul>
        <IconButton
          variant="text"
          className="ml-auto lg:hidden"
          onClick={handleOpen}
        >
          {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-blue-gray-50 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            <NavItem href="/about">About</NavItem>
            <li className="relative group">
              <Typography
                as="a"
                href="#"
                variant="paragraph"
                color="blue-gray"
                className="text-blue-gray-700 flex items-center gap-2 font-medium"
              >
                Services
              </Typography>
              <ul className="absolute left-0 pt-2 hidden w-48 bg-white shadow-lg group-hover:block">
                <MenuItem>
                  <NavItem href="/website-design">Website Design</NavItem>
                </MenuItem>
                <MenuItem>
                  <NavItem href="/web-development">Website Development</NavItem>
                </MenuItem>
                <MenuItem>
                  <NavItem href="/seo">SEO</NavItem>
                </MenuItem>
                <MenuItem>
                  <NavItem href="/digital-marketing">Digital Marketing</NavItem>
                </MenuItem>
                <MenuItem>
                  <NavItem href="/ux-ui-analysis">UX/UI Analysis</NavItem>
                </MenuItem>
                <MenuItem>
                  <NavItem href="/mobile-scaling">Mobile Scaling</NavItem>
                </MenuItem>
                <MenuItem>
                  <NavItem href="/e-commerce">E-Commerce</NavItem>
                </MenuItem>
                <MenuItem>
                  <NavItem href="/branding-logo-design">Branding / Logo Design</NavItem>
                </MenuItem>
                <MenuItem>
                  <NavItem href="/website-maintenance">Website Maintenance</NavItem>
                </MenuItem>
              </ul>
            </li>

            <NavItem href="/portfolio">Portfolio</NavItem>
            <NavItem href="/contact">Contact</NavItem>
          </ul>
        </div>
      </Collapse>
    </Navbar>
  );
}

export default DesktopNav;
