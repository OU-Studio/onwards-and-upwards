'use client'

import {
    Typography,
    Card,
    CardBody,
    CardHeader,
    Button,
  } from "@material-tailwind/react";
  
  interface ContentCardPropsType {
    img: string;
    title: string;
    desc: string;
    details: string;
  }
  
  function ContentCard({ img, title, desc, details }: ContentCardPropsType) {
    return (
      <Card shadow={true}>
        <CardHeader color="blue-gray" className="relative h-52">
          <img src={img} alt="card-image" />
        </CardHeader>
        <CardBody>
          <Typography
            variant="small"
            className="mb-3 !font-normal !text-gray-500"
          >
            {details}
          </Typography>
          <Typography
            as="a"
            href="#"
            variant="h5"
            color="blue-gray"
            className="mb-3 normal-case transition-colors hover:text-gray-700"
          >
            {title}
          </Typography>
          <Typography className="mb-5 !text-base !font-normal !text-gray-500">
            {desc}
          </Typography>
          <Button color="gray" variant="outlined">
            MORE INFO
          </Button>
        </CardBody>
      </Card>
    );
  }
  
  const contents = [
    {
      img: "/images/c8.jpg",
      title: "Chair 8 Media",
      details: "Development • Mobile Scaling • Maintenance",
      desc: "Chair 8 Media are passionate people who are continually after the best ways to speak your brand and tell your story. They bring their best every day to see their clients succeed.",
    },
    {
      img: "/images/mmw.jpg",
      title: "Manage My Website",
      details: "Design • Development • Mobile Scaling",
      desc: "MMW build stunning Squarespace websites, train people how to use Squarespace, and advise on online marketing strategies. They also create logos, blog, and write content for websites. ",
    },
    {
      img: "/images/studioore.jpg",
      title: "Studio Ore",
      details: "Design • Development • E-commerce",
      desc: "Studio Ore bathroom and kitchen fittings are produced in small batches. They finish and assemble each product by hand with care and attention. Components are machined from solid brass billets.",
    },
  ];
  
  export function ContentSection6() {
    return (
      <section className="mx-auto container px-8 py-10 lg:py-28">
        <div className="text-center mb-28">
          <Typography variant="h2" color="blue-gray">
          Some of our favourite projects
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-y-16 gap-x-10 md:grid-cols-2 lg:grid-cols-3">
          {contents.map(({ img, title, desc, details }) => (
            <ContentCard
              details={details}
              key={title}
              img={img}
              title={title}
              desc={desc}
            />
          ))}
        </div>
      </section>
    );
  }
  
  export default ContentSection6;