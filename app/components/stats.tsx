'use client';

import { Typography, Card, CardBody } from "@material-tailwind/react";

interface StatsCardPropsType {
  count: string;
  title: string;
  desc: string;
}

function StatsCard({ count, title, desc }: StatsCardPropsType) {
  return (
    <Card color="transparent" shadow={false}>
      <CardBody className="text-center">
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4 text-6xl"
        >
          {count}
        </Typography>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography className="font-normal !text-gray-500">
          {desc}
        </Typography>
      </CardBody>
    </Card>
  );
}
const stats = [
  {
    count: "950+",
    title: "Projects completed",
    desc: "Hundreds of happy clients and successful projects completed.",
  },
  {
    count: "8+",
    title: "Years of experience",
    desc: "We have a vast amount of knowledge to deliver the best work possible.",
  },
  {
    count: "3",
    title: "Major awards won",
    desc: "Our websites get recognised for their design and functionality.",
  },
];

export function StatsSection3() {
  return (
    <section className="px-8 py-10 lg:py-28">
      <div className="container mx-auto">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {stats.map((props, key) => (
            <StatsCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection3;