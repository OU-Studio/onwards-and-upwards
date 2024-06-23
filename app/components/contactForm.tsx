'use client'

import React from "react";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";

export function ContactSection15() {
  const [activePrice, setActivePrice] = React.useState<string>("");
  const [activeService, setActiveService] = React.useState<string>("");

  return (
    <section className="px-8 py-8 lg:py-16">
      <div className="max-w-[84rem] !mx-auto text-center">
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-4 !text-base lg:!text-2xl"
        >
          Request Our Services
        </Typography>
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4 !text-3xl lg:!text-5xl"
        >
          Explore Our Diverse Services
        </Typography>
        <Typography className="mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-2xl !text-gray-500">
          From creative design and marketing to technical support and
          consultancy, we cover a broad spectrum to ensure your requirements are
          fully met.
        </Typography>
        <div className="grid grid-cols-1 gap-x-12 gap-y-6 xl:grid-cols-2 items-start place-items-center">
          <form action="#" className="flex flex-col gap-4">
            <Typography
              variant="small"
              className="text-left !font-semibold !text-gray-600"
            >
              Select Service
            </Typography>
            <div className="flex flex-wrap gap-4">
              <Button
                variant={activeService === "web" ? "outlined" : "text"}
                className={`max-w-fit ${activeService === "web" ? "" : "border text-gray-800 border-gray-300"}`}
                onClick={() => setActiveService("web")}
              >
                Web Development
              </Button>
              <Button
                variant={activeService === "marketing" ? "outlined" : "text"}
                className={`max-w-fit ${activeService === "marketing" ? "" : "border text-gray-800 border-gray-300"}`}
                onClick={() => setActiveService("marketing")}
              >
                Digital Marketing
              </Button>
              <Button
                variant={activeService === "copywriting" ? "outlined" : "text"}
                className={`max-w-fit ${activeService === "copywriting" ? "" : "border text-gray-800 border-gray-300"}`}
                onClick={() => setActiveService("copywriting")}
              >
                Copywriting
              </Button>
              <Button
                variant={activeService === "analysis" ? "outlined" : "text"}
                className={`max-w-fit ${activeService === "analysis" ? "" : "border text-gray-800 border-gray-300"}`}
                onClick={() => setActiveService("analysis")}
              >
                Data Analysis
              </Button>
              <Button
                variant={activeService === "consultancy" ? "outlined" : "text"}
                className={`max-w-fit ${activeService === "consultancy" ? "" : "border text-gray-800 border-gray-300"}`}
                onClick={() => setActiveService("consultancy")}
              >
                Business Consultancy
              </Button>
              <Button
                variant={activeService === "social" ? "outlined" : "text"}
                className={`max-w-fit ${activeService === "social" ? "" : "border text-gray-800 border-gray-300"}`}
                onClick={() => setActiveService("social")}
              >
                Social Media
              </Button>
            </div>
            <Typography
              variant="small"
              className="text-left !font-semibold !text-gray-600"
            >
              Estimated Expenses
            </Typography>
            <div className="flex flex-wrap gap-4">
              <Button
                variant="outlined"
                className={`max-w-fit ${activePrice === "1000" ? "" : "border text-gray-800 border-gray-300"}`}
                onClick={() => setActivePrice("1000")}
              >
                less than $1,000
              </Button>
              <Button
                variant="outlined"
                className={`max-w-fit ${activePrice === "5000" ? "" : "border text-gray-800 border-gray-300"}`}
                onClick={() => setActivePrice("5000")}
              >
                $1,000 - $5,000
              </Button>
              <Button
                variant="outlined"
                className={`max-w-fit ${activePrice === "+5000" ? "" : "border text-gray-800 border-gray-300"}`}
                onClick={() => setActivePrice("+5000")}
              >
                More than $5,000
              </Button>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
              <div className="grid grid-cols-2 w-full gap-4">
                <div>
                  <Typography
                    variant="small"
                    className="mb-2 text-left font-medium !text-gray-900"
                  >
                    First Name
                  </Typography>
                  <Input
                                      color="gray"
                                      size="lg"
                                      placeholder="First Name"
                                      name="first-name"
                                      className="focus:border-t-gray-900"
                                      containerProps={{
                                          className: "!min-w-full",
                                      }}
                                      labelProps={{
                                          className: "hidden",
                                      }} crossOrigin={undefined}                  />
                </div>
                <div>
                  <Typography
                    variant="small"
                    className="mb-2 text-left font-medium !text-gray-900"
                  >
                    Last Name
                  </Typography>
                  <Input
                                      color="gray"
                                      size="lg"
                                      placeholder="Last Name"
                                      name="last-name"
                                      className="focus:border-t-gray-900"
                                      containerProps={{
                                          className: "!min-w-full",
                                      }}
                                      labelProps={{
                                          className: "hidden",
                                      }} crossOrigin={undefined}                  />
                </div>
              </div>
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium !text-gray-900"
                >
                  Your Email
                </Typography>
                <Input
                                  color="gray"
                                  size="lg"
                                  placeholder="name@email.com"
                                  name="email"
                                  className="focus:border-t-gray-900"
                                  containerProps={{
                                      className: "!min-w-full",
                                  }}
                                  labelProps={{
                                      className: "hidden",
                                  }} crossOrigin={undefined}                />
              </div>
            </div>
            <div>
              <Typography
                variant="small"
                className="mb-2 text-left font-medium !text-gray-900"
              >
                Your Message
              </Typography>
              <Textarea
                rows={6}
                color="gray"
                placeholder="Message"
                name="message"
                className="focus:border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <Button className="w-full lg:max-w-fit" color="gray">
              Send request
            </Button>
          </form>
          <img
            src="/image/dark-image.png"
            alt="map"
            className="w-full xl:max-w-xl h-full rounded-2xl lg:max-h-[510px]"
          />
        </div>
      </div>
    </section>
  );
}

export default ContactSection15;