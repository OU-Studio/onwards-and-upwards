'use client'

import React from "react";
import { Typography, Card, CardBody, Button, CardHeader, CardFooter } from "@material-tailwind/react";
import { CheckIcon } from "@heroicons/react/24/outline";

interface PricingCardPropsType {
  title: string;
  price: string[];
  options: string[];
  desc: string;
}

function PricingCard({
  title,
  price,
  options,
  desc,
}: PricingCardPropsType) {
  return (
    <Card className="flex md:!flex-row flex-col justify-between px-2 py-7 md:items-center">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <Typography
          variant="h5"
          color="blue-gray"
          className="!text-2xl"
        >
          {title}
        </Typography>
        <Typography
          variant="small"
          className="!font-normal mt-2 text-gray-600"
        >
          {desc}
        </Typography>
        <Typography
          variant="h2"
          color="blue-gray"
          className="flex mt-1 mb-3 gap-2"
        >
          {price}
          <Typography
            as="span"
            variant="h5"
            color="blue-gray"
            className="-translate-y-1 self-end !font-bold"
          >
            /year
          </Typography>
        </Typography>
        <Button variant="gradient" className="md:max-w-fit w-full">
          buy now
        </Button>
      </CardHeader>
      <hr className="mx-4 h-px my-8" />
      <CardBody className="md:border-l py-0">
        <ul className="flex flex-col gap-3">
          {options.map((option, key) => (
          <li
            key={key}
            className="flex items-center gap-3 py-1 text-gray-600 font-normal"
          >
            <CheckIcon
              className="h-4 w-4 text-gray-700"
              strokeWidth={2}
            />
            <Typography
              variant="small"
              className="font-normal text-inherit"
            >
              {option}
            </Typography>
          </li>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
}

export function PricingSection12() {
  const cards = [
    {
      color: "white",
      actionColor: "gray",
      bg: false,
      title: "Starter",
      desc: "Free access for 2 members",
      price: "$199",
      options: [
        "Complete documentation",
        "Working materials in Sketch",
        "Integration help",
        "40GB Cloud storage",
      ],
    },
    {
      color: "gray",
      actionColor: "white",
      bg: true,
      title: "Premium",
      desc: "Free access for 2 members",
      price: "$499",
      options: [
        "Complete documentation",
        "Working materials in Sketch",
        "Integration help",
        "100GB Cloud storage",
      ],
    },
  ];

  return (
    <section className="px-8 py-20">
        <div className="mx-auto container">
          <Typography color="blue-gray" className="mb-4 font-bold !text-lg">
            Pricing Plans
          </Typography>
          <Typography variant="h2" color="blue-gray" className="mb-4 !leading-snug lg:!text-4xl !text-2xl max-w-2xl">
            Choose Your Perfect Plan        
          </Typography>
          <Typography variant="lead" className="mb-16 font-normal !text-gray-500 max-w-lg">
            Compare the benefits and features of each plan below to find the ideal 
            match for your business&apos;s budget and ambitions.
          </Typography>
          <div className="grid gap-x-10 gap-y-6 md:grid-cols-1 lg:grid-cols-2">
            {cards.map((props, key) => (
              <PricingCard key={key} {...(props as any)} />
            ))}
          </div>
          <Card className="mt-10 flex md:!flex-row flex-col justify-between px-2 py-7 md:items-center">
            <CardBody className="py-0">
              <div className="flex gap-x-6 md:flex-row flex-col">
                <div>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="!text-2xl"
                  >
                    Company
                  </Typography>
                  <Typography
                    variant="small"
                    className="!font-normal mt-2 text-gray-600"
                  >
                    Access for 10+ members.
                  </Typography>
                </div>
                  <hr className="h-px my-5" />
                <div className="md:border-l md:px-6">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-bold mb-1 md:block hidden"
                  >
                    Dedicated account management
                  </Typography>
                  <Typography
                    variant="small"
                    className="!font-normal max-w-lg text-gray-600"
                    >
                    Custom integrations, and strategic consultations to 
                    ensure your growth trajectory remains on the steepest curve.
                  </Typography>
                </div>
              </div>
            </CardBody>
            <CardFooter>
            <Button variant="outlined" className="md:max-w-fit w-full">
                Contact us
            </Button>
            </CardFooter>
          </Card>
          <Typography variant="small" className="mt-10 font-normal !text-gray-500">
            You have Free Unlimited Updates and Premium Support on each package. 
            You also have 30 days to request a refund.
           </Typography>
        </div>
    </section>
  );
}

export default PricingSection12;