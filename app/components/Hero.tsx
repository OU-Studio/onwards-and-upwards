'use client'

import React from "react";
import {
  Navbar,
  Collapse,
  Button,
  Checkbox,
  IconButton,
  Typography,
  Input,
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
}

function NavItem({ children }: NavItemPropsType) {
  return (
    <li>
      <Typography
        as="a"
        href="#"
        variant="paragraph"
        color="blue-gray"
        className="text-blue-gray-700 flex items-center gap-2 font-medium"
      >
        {children}
      </Typography>
    </li>
  );
}

function HeroSection10() {
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
          <Typography color="blue-gray" className="text-lg font-bold">
            Material Tailwind
          </Typography>
          <ul className="ml-10 hidden items-center gap-6 lg:flex">
            <NavItem>
              <RectangleStackIcon className="h-5 w-5" />
              Pages
            </NavItem>
            <NavItem>
              <UserCircleIcon className="h-5 w-5" />
              Account
            </NavItem>
            <NavItem>
              <Squares2X2Icon className="h-5 w-5" />
              Blocks
            </NavItem>
            <NavItem>
              <CommandLineIcon className="h-5 w-5" />
              Docs
            </NavItem>
          </ul>
          <div className="hidden items-center gap-4 lg:flex">
            <Button variant="text">Log in</Button>
            <Button color="gray">sign in</Button>
          </div>
          <IconButton
            variant="text"
            color="gray"
            onClick={handleOpen}
            className="ml-auto inline-block lg:hidden"
          >
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
              <NavItem>
                <RectangleStackIcon className="h-5 w-5" />
                Pages
              </NavItem>
              <NavItem>
                <UserCircleIcon className="h-5 w-5" />
                Account
              </NavItem>
              <NavItem>
                <Squares2X2Icon className="h-5 w-5" />
                Blocks
              </NavItem>
              <NavItem>
                <CommandLineIcon className="h-5 w-5" />
                Docs
              </NavItem>
            </ul>
            <div className="mt-6 mb-4 flex items-center gap-4">
              <Button variant="text">Log in</Button>
              <Button color="gray">sign in</Button>
            </div>
          </div>
        </Collapse>
      </Navbar>
      <header className="bg-white p-8">
        <div className="w-w-full container mx-auto pt-12 pb-6 text-center lg:pb-20">
          <Typography
            variant="h1"
            color="blue-gray"
            className="!lg:leading-tight mx-auto mb-6 w-full text-3xl !leading-snug lg:max-w-3xl lg:text-5xl"
          >
            Our company mission is to lead the web development.
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full !text-gray-500 lg:w-10/12 lg:px-12 xl:w-9/12 xl:px-20"
          >
            The time is now for it to be okay to be great. People in this world
            shun people for being great. For being a bright color.
          </Typography>
          <div className="mt-8 mb-2 flex items-start w-full flex-col gap-4 md:flex-row md:justify-center">
            <div className="grid lg:w-96 md:w-80 w-full">
              <Input crossOrigin color="gray" label="Enter your email" size="lg" />
              <Checkbox crossOrigin
                label={
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex font-medium items-center !text-gray-500"
                  >
                    See our &nbsp;
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      className="underline font-medium transition-colors hover:text-gray-900"
                    >
                      Terms and Conditions
                    </Typography>
                  </Typography>
                }
                containerProps={{
                  className: "-ml-2.5",
                }}
              />
            </div>
            <Button
              color="gray"
              className="w-full py-[14px] md:w-[10rem]"
            >
              get started
            </Button>
          </div>
        </div>
        <div className="w-full lg:container lg:mx-auto">
          <img
            src="https://www.material-tailwind.com/image/image-3.jpeg"
            alt="credit cards"
            className="h-96 w-full rounded-lg object-cover lg:h-[21rem]"
          />
        </div>
      </header>
    </>
  );
}

export default HeroSection10;