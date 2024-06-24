'use client'

import React from "react";
import {
  Navbar,
  Collapse,
  Button,
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

function HeroSection16() {

  return (
    <>
      <header className="bg-white p-8">
        <div className="grid mt-16 w-full place-items-stretch bg-[url('/image/bg-hero-17.svg')] bg-center bg-contain bg-no-repeat">
          <div className="container mx-auto px-4 text-center">
            <Typography className="inline-flex text-xs rounded-lg border-[1.5px] border-blue-gray-50 bg-white py-1 lg:px-4 px-1 font-medium text-primary">
              Get the dream website you have always wanted!
            </Typography>
            <Typography
              variant="h1"
              color="blue-gray"
              className="mx-auto my-6 w-full leading-snug  !text-2xl lg:max-w-3xl lg:!text-5xl"
            >
              Elevate you online presence with a{" "}
              <span className="text-brandLightBlue leading-snug ">
                new
              </span>{" "}
              and{" "}
              <span className="leading-snug text-brandPurple">
                unique
              </span>
              {" "}website design.
            </Typography>
            <Typography
              variant="lead"
              className="mx-auto w-full !text-gray-500 lg:text-lg text-base"
            >
              Why settle for an &apos;okay&apos; looking website when you can have a great one.
            </Typography>
            <div className="mt-8 grid w-full place-items-start md:justify-center">
              <div className="mb-2 flex w-full flex-col gap-4 md:flex-row">
                <Input color="gray" label="Enter your email" size="lg" placeholder="" crossOrigin={undefined} />
                <Button
                  className="w-full px-4 md:w-[12rem] bg-brandOrange"
                >
                  get started
                </Button>
              </div>
            </div>
            <div className="w-full lg:container lg:mx-auto mt-8">
              <img
                src="https://www.material-tailwind.com/image/image-3.jpeg"
                alt="credit cards"
                className="h-96 w-full rounded-lg object-cover lg:h-[35rem]"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeroSection16;