'use client'

import {
    Card,
    CardBody,
    CardHeader,
    IconButton,
    Typography,
  } from "@material-tailwind/react";
  
  interface TeamCardPropsType {
    img: string;
    name: string;
    title: string;
    desc: string;
  }
  
  function TeamCard({ img, name, title, desc }: TeamCardPropsType) {
    return (
      <Card
        color="transparent"
        shadow={false}
        className="grid gap-4 md:grid-cols-1 lg:grid-cols-12 lg:place-items-center"
      >
        <CardHeader
          floated={false}
          className="!m-0 h-full max-h-[12rem] w-full max-w-[12rem] lg:col-span-5 lg:max-h-[30rem] lg:max-w-[30rem]"
        >
          <img
            src={img}
            alt={name}
            className="h-full w-full object-fit-contain object-center"
          />
        </CardHeader>
        <CardBody className="p-0 lg:col-span-7">
          <Typography variant="h5" color="blue-gray">
            {name}
          </Typography>
          <Typography
            variant="small"
            className="mb-3 mt-2 font-bold uppercase !text-gray-500"
          >
            {title}
          </Typography>
          <Typography className="mb-2 w-full font-normal !text-gray-500 xl:w-72">
            {desc}
          </Typography>
          <div className="flex items-center gap-1.5">
            <IconButton variant="text" color="gray">
              <i className="fa-brands fa-facebook text-lg" />
            </IconButton>
            <IconButton variant="text" color="gray">
              <i className="fa-brands fa-twitter text-lg" />
            </IconButton>
            <IconButton variant="text" color="gray" className="text-gray-900">
              <i className="fa-brands fa-dribbble text-lg" />
            </IconButton>
          </div>
        </CardBody>
      </Card>
    );
  }
  
  const members = [
    {
      img: "/images/mmwlogo.png",
      name: "Manage My Website",
      title: "SEO Partner",
      desc: "When it comes to search engine optimization (or SEO), they really know their stuff. Their specialist Squarespace SEO service will ensure that my website can be picked up and read easily by the search engines. While they can't guarantee a specific position in the rankings, I can be confident that my site will be recognized.",
    },
    {
      img: "/images/edslogo.png",
      name: "Electric Design Studio",
      title: "Design Partner",
      desc: "",
    },
  ];
  
  export function TeamSection4() {
    return (
      <section className="py-10 px-8 lg:py-28">
        <div className="container mx-auto max-w-screen-lg">
          <div className="mb-20 text-center lg:mb-28">
            <Typography variant="h2" color="blue-gray" className="mb-4">
              Our Trusted Partners
            </Typography>
            <Typography
              variant="lead"
              className="mx-auto max-w-4xl !text-gray-500"
            >
              I work with some great companies to help offer my clients all the services they require.
            </Typography>
          </div>
          <div className="grid gap-24 md:grid-cols-1 lg:grid-cols-1">
            {members.map((props, key) => (
              <TeamCard key={key} {...props} />
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default TeamSection4;