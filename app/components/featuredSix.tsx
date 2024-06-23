'use client';

import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { ArrowTrendingUpIcon } from "@heroicons/react/24/outline";
import {
  ChatBubbleBottomCenterTextIcon,
  LightBulbIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/solid";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

function FeatureCard({ icon, title, children }: FeatureCardProps) {
  return (
    <Card color="transparent" shadow={false}>
      <CardBody className="grid justify-start">
        {icon}
        <Typography variant="h5" color="blue-gray" className="mb-2 mt-5">
          {title}
        </Typography>
        <Typography className="font-normal !text-gray-500">
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}

const features = [
  {
    icon: (
      <ChatBubbleBottomCenterTextIcon
        className="text-gray-900 h-7 w-7"
        strokeWidth={2}
      />
    ),
    title: "Creative Excellence",
    description:
      "Crafting modern, sleek websites tailored to your brand. With 6 years of expertise, we ensure every design is pixel-perfect and user-centric, exceeding expectations with innovative UX/UI solutions.",
  },
  {
    icon: <ArrowTrendingUpIcon className="text-gray-900 h-7 w-7" />,
    title: "Client-Centric Approach",
    description:
      "Dedicated to understanding your vision, we collaborate closely to bring it to life. From concept to launch, we prioritise communication and flexibility to deliver customised, high-quality websites.",
  },
  {
    icon: <SquaresPlusIcon className="text-gray-900 h-7 w-7" />,
    title: "Cutting-Edge Design",
    description:
      "Embracing the latest trends and technologies, we create visually stunning websites that captivate audiences. Each design reflects your unique identity while optimising user experience for maximum engagement and conversion.",
  },
  {
    icon: <LightBulbIcon className="text-gray-900 h-7 w-7" />,
    title: "Reliable Expertise",
    description:
      "With a track record of excellence, we offer reliable expertise in all aspects of web. Whether you're a startup or an established business, we deliver result-driven solutions that elevate your online presence.",
  },
];

export function FeatureSection6() {
  return (
    <section className="lg:py-28 py-10 px-8">
      <div className="container mx-auto mb-12 text-center">
        <Typography
          color="blue-gray"
          className="mb-3 font-bold text-lg uppercase"
        >
          ABOUT US
        </Typography>
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4 !text-2xl !leading-tight lg:!text-5xl"
        >
          A creative team with a passion for websites
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 max-w-6xl"
        >
          Onwards and Upwards is a collective of passionate creatives, dedicated to making inspiring, innovative and memorable websites. With a team of specialists in everything from website design to user experience to marketing, we can offer unique insights into your online presence. Every project is treated the same and is given the care and attention it deserves. We want to support our clients so they can enjoy building their business.
        </Typography>
      </div>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2">
        {features.map(({ icon, title, description }) => (
          <FeatureCard key={title} icon={icon} title={title}>
            {description}
          </FeatureCard>
        ))}
      </div>
    </section>
  );
}

export default FeatureSection6;