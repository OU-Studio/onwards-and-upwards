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
            className="h-full w-full object-cover object-top"
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
      img: "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/studio-5.jpg",
      name: "Ryan Samuel",
      title: "financial examiner",
      desc: "Today you are you! That is truer than true! There is no one alive who is you-er than you!",
    },
    {
      img: "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/studio-3.jpg",
      name: "Jordan Michael",
      title: "ui designer",
      desc: "Artist is a term applied to a person who engages in an activity deemed to be an art.",
    },
  ];
  
  export function TeamSection4() {
    return (
      <section className="py-10 px-8 lg:py-28">
        <div className="container mx-auto">
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
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-2">
            {members.map((props, key) => (
              <TeamCard key={key} {...props} />
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default TeamSection4;