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
    title: "Modular Components",
    description:
      "The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.",
  },
  {
    icon: <ArrowTrendingUpIcon className="text-gray-900 h-7 w-7" />,
    title: "Awesome Support",
    description:
      "The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color.",
  },
  {
    icon: <SquaresPlusIcon className="text-gray-900 h-7 w-7" />,
    title: "Great Features",
    description:
      "People are so scared to lose that they don't even try. Like, one thing people can't say is that I'm not trying, and I'm not trying my hardest.",
  },
  {
    icon: <LightBulbIcon className="text-gray-900 h-7 w-7" />,
    title: "Modern Interface",
    description:
      "If everything I did failed - which it doesn't, it actually succeeds - just the fact that I'm willing to fail is an inspiration.",
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
          co-working
        </Typography>
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4 !text-2xl !leading-tight lg:!text-5xl"
        >
          Full-Funnel Social Analytics
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 max-w-6xl"
        >
          If you can&apos;t decide, the answer is no. If two equally difficult
          paths, choose the one more painful in the short term (pain avoidance
          is creating an illusion of equality).
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