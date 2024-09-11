'use client';

import React from "react";
import { Typography, Button, Card, CardBody } from "@material-tailwind/react";
import { CheckIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

interface PricingCardPropsType {
  title: string;
  price: string[];
  options: string[];
  marked?: boolean;
}

function PricingCard({ title, price, options }: PricingCardPropsType) {
  return (
    <Card
      variant="gradient"
      className={`lg:h-max lg:scale-105 ${
        title === "starter" || title === "premium"
          ? "lg:translate-y-4"
          : "z-10 translate-y-0"
      }`}
      color="white"
    >
      <CardBody className="text-center ">
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 mt-2 flex justify-center"
        >
          {title}
        </Typography>
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-2 mt-5 flex justify-center"
        >
          <Typography as="span" variant="h5" color="blue-gray">
            {price[0]}
          </Typography>
          {price[1]}
          <Typography
            as="span"
            variant="h5"
            color="blue-gray"
            className="-translate-y-1 self-end"
          >
            /{price[2]}
          </Typography>
        </Typography>

        <ul className="mt-2 mb-5 flex flex-col items-center justify-start gap-3 pt-6">
          <div className="">
            {options.map((option, key) => (
              <li
                key={key}
                className="flex items-center gap-2 py-1 text-gray-700"
              >
                <CheckIcon
                  className="h-5 w-5 text-inherit"
                  strokeWidth={2}
                />
                <Typography className="font-normal text-inherit">
                  {option}
                </Typography>
              </li>
            ))}
          </div>
        </ul>
      </CardBody>
    </Card>
  );
}

export function PricingSection7() {
  const cards = [
    {
      title: "Projects completed",
      price: ["", "950+", ""],
      options: [
        "Hundreds of happy clients and successful projects completed.",
      ],
    },
    {
      title: "Years of experience",
      price: ["", "9+", ""],
      options: [
        "We have a vast amount of knowledge to deliver the best work possible.",
      ],
    },
    {
      title: "Major awards won",
      price: ["", "3", ""],
      options: [
        "Our websites get recognised for their design and functionality.",
      ],
    },
  ];

  return (
    <section className="p-4">
      <Card
        shadow={false}
        className="relative flex h-full min-h-[314px] w-full flex-col items-center overflow-hidden rounded-xl !bg-[url('https://www.material-tailwind.com/img/img.png')] px-8"
      >
        <div className="absolute h-full w-full bg-black/80">
          <div className="container mx-auto py-16 text-center">
            <Typography variant="h2" color="white" className="mb-4">
              We've been around a while...
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-8 opacity-70"
            >
              and ready for a new challenge!
            </Typography>
          </div>
        </div>
      </Card>
      <div className="lg:px-30 -mt-16 px-10 pt-8 pb-16 xl:px-40">
        <div className="container mx-auto grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-0">
          {cards.map((props, key) => (
            <PricingCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingSection7;