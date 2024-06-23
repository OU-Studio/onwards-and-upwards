'use client';

import React from "react";
import {
  Navbar,
  Collapse,
  Button,
  IconButton,
  Typography
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; 

interface NavItemPropsType {
    href: string;
  children: React.ReactNode;
}

function NavItem({href, children }: NavItemPropsType) {
  return (
    <li>
      <Typography
              as="a"
              href={href}
              variant="paragraph"
              color="blue-gray"
              className="text-blue-gray-700 flex items-center gap-2 font-medium" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}      >
        {children}
      </Typography>
    </li>
  );
}

function NavSection() {
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
      <Navbar shadow={false} fullWidth className="border-0"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <div className="container mx-auto flex items-center justify-between">
        <NavItem href="/">
              Home
            </NavItem>
          <ul className="ml-10 hidden items-center gap-6 lg:flex">
            <NavItem href="/about">
              <RectangleStackIcon className="h-5 w-5" />
              About
            </NavItem>
            <NavItem href="#">
              <UserCircleIcon className="h-5 w-5" />
              Account
            </NavItem>
            <NavItem href="#">
              <Squares2X2Icon className="h-5 w-5" />
              Blocks
            </NavItem>
            <NavItem href="#">
              <CommandLineIcon className="h-5 w-5" />
              Docs
            </NavItem>
          </ul>
          <div className="hidden items-center gap-4 lg:flex">
            <Button variant="text"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Log in</Button>
            <Button color="gray"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>sign in</Button>
          </div>
          <IconButton
                      variant="text"
                      color="gray"
                      onClick={handleOpen}
                      className="ml-auto inline-block lg:hidden"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            {open ? (
              <XMarkIcon strokeWidth={2} className="h-6 w-6" />
            ) : (
              <Bars3Icon strokeWidth={2} className="h-6 w-6" />
            )}
          </IconButton>
        </div>
        <Collapse open={open}>
          <div className="container mx-auto mt-3 border-t border-blue-gray-50 px-2 pt-4">
            <ul className="flex flex-col gap-4">
              <NavItem href="/about">
                <RectangleStackIcon className="h-5 w-5" />
                About
              </NavItem>
              <NavItem href="#">
                <UserCircleIcon className="h-5 w-5" />
                Account
              </NavItem>
              <NavItem href="#">
                <Squares2X2Icon className="h-5 w-5" />
                Blocks
              </NavItem>
              <NavItem href="#">
                <CommandLineIcon className="h-5 w-5" />
                Docs
              </NavItem>
            </ul>
            <div className="mt-6 mb-4 flex items-center gap-4">
              <Button variant="text" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Log in</Button>
              <Button color="gray"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>sign in</Button>
            </div>
          </div>
        </Collapse>
      </Navbar>
    </>
  );
}

export default NavSection;