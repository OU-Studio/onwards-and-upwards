'use client'

import React from "react";
import {
  Navbar,
  Button,
  Collapse,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface NavItemPropsType {
  children: React.ReactNode;
}

function NavItem({ children }: NavItemPropsType) {
  return (
    <li>
      <Typography as="a" href="#" variant="small" className="font-medium">
        {children}
      </Typography>
    </li>
  );
}

export function HeroSection13() {

  return (
    <>
      <div className="relative min-h-screen w-full bg-[url('https://www.material-tailwind.com/image/image-4.jpeg')] bg-bottom bg-cover bg-no-repeat">
        <div className="absolute inset-0 h-full w-full bg-black/70" />
        <div className="grid min-h-screen px-8">
          <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
            <Typography
              variant="h1"
              color="white"
              className="text-4xl !leading-snug lg:text-5xl"
            >
              Work with an amazing
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mt-4 mb-6 w-full md:max-w-full lg:mb-12 lg:max-w-3xl"
            >
              We&apos;re constantly trying to express ourselves and actualize
              our dreams. If you have the opportunity to play this game
            </Typography>
            <Typography
              variant="paragraph"
              color="white"
              className="mt-1 mb-7 font-normal uppercase"
            >
              Connect with us on:
            </Typography>
            <div className="flex !gap-4">
              <IconButton variant="text" color="white" size="md">
                <i className="fa-brands fa-facebook text-xl" />
              </IconButton>
              <IconButton variant="text" color="white" size="md">
                <i className="fa-brands fa-instagram text-xl" />
              </IconButton>
              <IconButton variant="text" color="white" size="md">
                <i className="fa-brands fa-dribbble text-xl" />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection13;