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
        color="gray"
        className="flex items-center gap-2 font-medium text-gray-900"
      >
        {children}
      </Typography>
    </li>
  );
}

export function HeroSection1() {

  return (
    <>
      <header className="bg-white p-8 pt-0">
        <div className="container mx-auto grid h-full min-h-[85vh] w-full grid-cols-1 gap-y-8 items-center lg:grid-cols-2">
          <div className="row-start-2 lg:row-auto">
            <Typography
              variant="h1"
              color="blue-gray"
              className="mb-4 text-3xl !leading-tight lg:text-5xl"
            >
              Passionate
              <br></br>
              People
            </Typography>
            <Typography
              variant="lead"
              className="mb-12 !text-gray-500 md:pr-16 xl:pr-28"
            >
              My team is made up of dedicated professionals from amazing partner companies that allow me to give you every service you need.
            </Typography>
            <div className="grid">
              <div className="mb-2 flex items-start w-full flex-col md:w-9/12 gap-4 md:flex-row">
              </div>
            </div>
          </div>
          <img
            src={`https://www.material-tailwind.com/img/features1.jpg`}
            alt="team work"
            className="h-full lg:h-5/6 w-full rounded-xl object-cover"
          />
        </div>
      </header>
    </>
  );
}

export default HeroSection1;