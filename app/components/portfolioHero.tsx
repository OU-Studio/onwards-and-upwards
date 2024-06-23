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
  PlayIcon,
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
export function HeroSection9() {

  return (
    <>
      <div className="relative min-h-screen w-full bg-[url('https://www.material-tailwind.com/image/bg-video.jpg')] bg-cover bg-no-repeat">
        <div className="absolute inset-0 h-full w-full bg-gray-900/50" />
        <div className="grid min-h-screen px-8">
          <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
            <Typography
              variant="h3"
              color="white"
              className="mb-2 text-lg !leading-snug lg:text-2xl"
            >
              Join Our Team
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className="text-4xl !leading-snug lg:text-5xl"
            >
              Work with the rockets
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mt-1 mb-12 max-w-2xl"
            >
              We&apos;re constantly trying to express ourselves and actualize
              our dreams. If you have the opportunity to play this game
            </Typography>
            <div className="flex items-center gap-4">
              <Button variant="gradient" color="white">
                Join us
              </Button>
              <IconButton className="rounded-full" color="white">
                <PlayIcon className="h-4 w-4 text-gray-900" />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection9;