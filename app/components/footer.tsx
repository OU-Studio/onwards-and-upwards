'use client'

import { Typography, IconButton } from "@material-tailwind/react";
const links = ["Home", "About Us", "Press", "Blog", "Service"];
const currentYear = new Date().getFullYear();

export function Footer8() {
  return (
    <footer className="px-8 py-28">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between gap-y-4 md:flex-row">
          <div className="flex flex-col gap-4">
            <Typography variant="h6">MATERIAL TAILWIND</Typography>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              {links.map((link, index) => (
                <ul key={index} className="">
                  <li>
                    <Typography
                      as="a"
                      href="#"
                      color="white"
                      className="font-medium !text-gray-500 transition-colors hover:!text-gray-900"
                    >
                      {link}
                    </Typography>
                  </li>
                </ul>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:items-end">
            <Typography className="mb-4 text-lg !font-semibold text-left md:!text-right max-w-sm">
              The reward for getting on the stage is fame. The price of fame is
              you can&apos;t get off the stage.
            </Typography>
            <div className="flex gap-2">
              <a href="#buttons-with-link">
                <IconButton variant="text" size="sm">
                  <i className="fa-brands fa-twitter text-lg text-gray-500 transition-colors hover:text-blue-gray-900" />
                </IconButton>
              </a>
              <a href="#buttons-with-link">
                <IconButton variant="text" size="sm">
                  <i className="fa-brands fa-youtube text-lg text-gray-500 transition-colors hover:text-blue-gray-900" />
                </IconButton>
              </a>
              <a href="#buttons-with-link">
                <IconButton variant="text" size="sm">
                  <i className="fa-brands fa-instagram text-lg text-gray-500 transition-colors hover:text-blue-gray-900" />
                </IconButton>
              </a>
              <a href="#buttons-with-link">
                <IconButton variant="text" size="sm">
                  <i className="fa-brands fa-github text-lg text-gray-500 transition-colors hover:text-blue-gray-900" />
                </IconButton>
              </a>
            </div>
          </div>
        </div>
        <Typography
          color="blue-gray"
          className="text-left !text-sm font-medium text-gray-500 lg:mt-0 mt-4"
        >
          All rights reserved. &copy; {currentYear} Material Tailwind
        </Typography>
      </div>
    </footer>
  );
}
export default Footer8;