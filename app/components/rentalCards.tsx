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
            from/night
          </Button>
        </CardBody>
      </Card>
    );
  }
  
  const contents = [
    {
      img: "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog1.jpg",
      title: "Lovely and cozy apartment",
      details: "Entire Apartment • 3 Guests • 2 Beds",
      desc: "Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers to turn on or off their television, change inputs, fast forward.",
    },
    {
      img: "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog2.jpg",
      title: "Single details in the center of city",
      details: "Private details • 1 Guests • 1 Sofa",
      desc: "As Uber works through a huge amount of internal management turmoil, the company is also consolidating more of its international business.",
    },
    {
      img: "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog3.jpg",
      title: "Independent house beddetails",
      details: "Entire Apartment • 4 Guests • 2 Beds",
      desc: "Music is something that every person has his or her own specific opinion about. Different people have different taste, and various types of music.",
    },
  ];
  
  export function ContentSection6() {
    return (
      <section className="mx-auto container px-8 py-10 lg:py-28">
        <div className="text-center mb-28">
          <Typography variant="h2" color="blue-gray">
            Book your next trip
          </Typography>
          <Typography
            variant="lead"
            className="mt-2 mx-auto font-normal !text-gray-500 max-w-lg"
          >
            An arrangement you make to have a hotel details, tickets, etc. at a
            particular time in the future.
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