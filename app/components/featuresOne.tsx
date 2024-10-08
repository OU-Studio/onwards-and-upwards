'use client'

import React from "react";
import { Card, CardBody, Typography, Avatar, Button } from "@material-tailwind/react";

export function FeatureSection16() {
  return (
    <section className=" mb-8 px-8 pt-32">
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
              Generate more sales
            </Typography>
            <Typography className="text-center mb-0 max-w-s mx-auto text-base font-normal leading-7 !text-gray-500 p-4 pt-0 pb-0">
              We all want more sales and a new website can drive more conversions.
            </Typography>
            <img
              src="/images/uxui.jpeg"
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
              Find new customers 
            </Typography>
            <Typography className="text-center mb-0 max-w-s mx-auto text-base font-normal leading-7 !text-gray-500 p-4 pt-0 pb-0">
              A well crafted website will attract new customers and get you into new markets.
            </Typography>
            <img
              src="/images/responsivedesign.jpeg"
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
              Competitive advantage
            </Typography>
            <Typography className="text-center mb-0 max-w-s mx-auto text-base font-normal leading-7 !text-gray-500 p-4 pt-0 pb-0">
              With so many new businesses starting up every day, make sure you are ahead of the competition.
            </Typography>
            <img
              src="/images/websitedesign.jpeg"
              alt="laptop"
              className="w-full xl:h-[370px] lg:h-[360px] object-cover object-center rounded-lg mt-4"
            />
          </CardBody>
        </Card>
        <Card className="col-span-1 bg-brandLightBlue rounded-lg flex flex-col content-center justify-center" shadow={false}>
          <CardBody className="text-center">
            <Typography
              variant="h3"
              color="black"
              className="mb-2 font-medium"
            >
              How much will it cost?
            </Typography>
            <Typography className="text-center max-w-xs mx-auto text-base font-normal leading-7 !text-black">
              Spoiler alert! It&apos;s less than you might think.
            </Typography>

            <div className="relative bg-clip-border text-gray-700 col-span-2  overflow-hidden rounded-lg mt-8">
              <Typography className="text-center max-w-xs mx-auto text-base font-normal leading-7 !text-black">
                Websites start from just £300!<br></br>If your interested in a new website, get in contact using the button below.
              </Typography>
              <Button
                color="black"
                className="w-s px-4 md:w-[12rem] text-center mt-8"
              >
                get started
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
export default FeatureSection16;