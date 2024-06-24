'use client'

import React from "react";
import { Card, CardBody, Typography, Avatar } from "@material-tailwind/react";

export function FeatureSection16() {
  return (
    <section className="lg:py-28 py-10 px-8">
      <div className="mb-8 container mx-auto grid lg:gap-x-8 gap-y-8 grid-cols-1 lg:grid-cols-3">
        <Card
          className="col-span-1 bg-gray-100/50 overflow-hidden rounded-lg"
          shadow={false}
        >
          <CardBody className="text-center">
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              UX Focused
            </Typography>
            <Typography className="text-center mb-0 max-w-s mx-auto text-base font-normal leading-7 !text-gray-500 p-4 pt-0 pb-0">
              Our website designs focus on a great user experience. We ensure our designs are visually appealing and easy to navigate, keeping visitors engaged and helping them find what they need.
            </Typography>
            <img
              src="/images/c8.jpg"
              alt="iphone"
              className="w-full xl:h-[370px] lg:h-[360px] object-cover object-center rounded-lg mt-4"
            />
          </CardBody>
        </Card>
        <Card
          className="col-span-2 bg-gray-100/50 overflow-hidden rounded-lg"
          shadow={false}
        >
          <CardBody className="text-center">
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Responsive Design
            </Typography>
            <Typography className="text-center mb-0 max-w-s mx-auto text-base font-normal leading-7 !text-gray-500 p-4 pt-0 pb-0">
              With the vast array of devices today, from smartphones to large desktop monitors, we prioritize a responsive design to ensure that your website performs seamlessly across all screen sizes. This approach maintains consistency, enhances user engagement, and preserves functionality and aesthetics on every platform for every user.
            </Typography>
            <img
              src="/images/c8.jpg"
              alt="laptop"
              className="w-full xl:h-[370px] lg:h-[360px] object-cover object-center rounded-lg mt-4"
            />
          </CardBody>
        </Card>
      </div>
      <div className="container mx-auto grid lg:gap-x-8 gap-y-8 grid-cols-1 lg:grid-cols-3">
        <Card
          className="col-span-2 bg-gray-100/50 overflow-hidden rounded-lg"
          shadow={false}
        >
          <CardBody className="text-center">
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Custom Design Solutions
            </Typography>
            <Typography className="text-center mb-0 max-w-s mx-auto text-base font-normal leading-7 !text-gray-500 p-4 pt-0 pb-0">
              Our Custom Design Solutions are tailored to reflect your unique brand identity and meet your specific business needs. We take the time to understand your vision and objectives, ensuring that every element of the design is crafted to enhance your online presence. By focusing on bespoke visuals and practical features, we deliver a distinct and compelling website that stands out in your industry.
            </Typography>
            <img
              src="/images/c8.jpg"
              alt="laptop"
              className="w-full xl:h-[370px] lg:h-[360px] object-cover object-center rounded-lg mt-4"
            />
          </CardBody>
        </Card>
        <Card className="col-span-1 bg-gray-100/50 rounded-lg" shadow={false}>
          <CardBody className="text-center">
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Want to get started?
            </Typography>
            <Typography className="text-center max-w-xs mx-auto text-base font-normal leading-7 !text-gray-500">
              Take the first step to a new website design.
            </Typography>
            <div className="flex justify-between items-end mt-[144px]">
              <div className="flex gap-2">
                <img
                  src="https://www.material-tailwind.com/image/mt-logo.svg"
                  alt="logo"
                />
                <Typography
                  as="a"
                  href="#"
                  color="blue-gray"
                  className="mr-4 text-xs font-bold cursor-pointer"
                >
                  Material <br /> Tailwind
                </Typography>
              </div>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="text-xs font-bold cursor-pointer"
              >
                material-tailwind.com
              </Typography>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
export default FeatureSection16;