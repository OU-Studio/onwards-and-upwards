'use client'

import React from "react";
import {
  Button,
  IconButton,
  Typography,
  Navbar,
  Collapse,
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
        className="flex items-center gap-2 font-medium"
      >
        {children}
      </Typography>
    </li>
  );
}
export function HeroSection17() {

  return (
    <>
      <div className="relative min-h-screen w-full bg-black">
        <div className="bg-[url('/image/bg-hero-17.png')] min-h-screen bg-contain bg-center bg-no-repeat">
          <div className="px-12 container min-h-screen mx-auto grid place-items-center text-center">
            <div className="grid place-items-center">
              <div className="lg:-translate-y-28 -translate-y-14">
                <Typography
                  color="white"
                  className="text-base font-bold !leading-snug"
                >
                  Latest Innovation
                </Typography>
                <Typography
                  variant="h1"
                  color="white"
                  className="!text-2xl my-4 !leading-snug lg:!text-5xl relative"
                >
                  Together, we can make a difference
                </Typography>
                <Typography
                  color="white"
                  className="relative lg:mb-10 mb-20 lg:text-lg text-sm"
                >
                  The time is now for it to be okay to be great. For being a
                  bright color. For standing out.
                </Typography>
              </div>
              <div className="lg:translate-y-44 md:translate-y-24 translate-y-2">
                <Typography color="white" className="text-lg mb-4">
                  <span className="font-bold">100+</span>{" "}
                  <span className="font-normal">Free Tickets</span>
                </Typography>
                <Button variant="outlined" color="white" fullWidth>
                  get started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection17;