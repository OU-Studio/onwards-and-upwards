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

  return (
    <>
      <header className="bg-white p-8">
        <div className="w-w-full container mx-auto pt-12 pb-6 text-center lg:pb-20">
          <Typography
            variant="h1"
            color="blue-gray"
            className="!lg:leading-tight mx-auto mb-6 w-full text-3xl !leading-snug lg:max-w-3xl lg:text-5xl"
          >
            A creative studio with innovative solutions to tackle the modern web
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full !text-gray-500 lg:w-10/12 lg:px-12 xl:w-9/12 xl:px-20"
          >
            Get started with a forward thinking website today!
          </Typography>
          <div className="mt-8 mb-2 flex items-start w-full flex-col gap-4 md:flex-row md:justify-center">
            <div className="grid lg:w-96 md:w-80 w-full">
              <Input color="gray" label="Enter your email" size="lg" crossOrigin={undefined} />
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