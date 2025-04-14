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
  url: string; // Add the url property here
}

function ContentCard({ img, title, desc, details, url }: ContentCardPropsType) {
  return (
    <Card shadow={true}>
      <CardHeader color="blue-gray" className="relative h-52 pImgHeight">
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
        <a href={url} target="_blank" rel="noopener noreferrer">
          <Button color="gray" variant="outlined">
            VIEW SITE
          </Button>
        </a>
      </CardBody>
    </Card>
  );
}

const contents = [
  {
    img: "/images/portfolio-1.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/1"
  },
  {
    img: "/images/portfolio-2.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/2"
  },
  {
    img: "/images/portfolio-3.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/3"
  },
  {
    img: "/images/portfolio-4.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/4"
  },
  {
    img: "/images/portfolio-5.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/5"
  },
  {
    img: "/images/portfolio-6.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/6"
  },
  {
    img: "/images/portfolio-7.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/7"
  },
  {
    img: "/images/portfolio-8.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/8"
  },
  {
    img: "/images/portfolio-9.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/9"
  },
  {
    img: "/images/portfolio-10.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/10"
  },
  {
    img: "/images/portfolio-11.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/11"
  },
  {
    img: "/images/portfolio-12.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/12"
  },
  {
    img: "/images/portfolio-13.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/13"
  },
  {
    img: "/images/portfolio-14.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/14"
  },
  {
    img: "/images/portfolio-15.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/15"
  },
  {
    img: "/images/portfolio-16.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/16"
  },
  {
    img: "/images/portfolio-17.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/17"
  },
  {
    img: "/images/portfolio-18.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/18"
  },
  {
    img: "/images/portfolio-19.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/19"
  },
  {
    img: "/images/portfolio-20.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/20"
  },
  {
    img: "/images/portfolio-21.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/21"
  },
  {
    img: "/images/portfolio-22.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/22"
  },
  {
    img: "/images/portfolio-23.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/23"
  },
  {
    img: "/images/portfolio-24.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/24"
  },
  {
    img: "/images/portfolio-25.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/25"
  },
  {
    img: "/images/portfolio-26.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/26"
  },
  {
    img: "/images/portfolio-27.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/27"
  },
  {
    img: "/images/portfolio-28.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/28"
  },
  {
    img: "/images/portfolio-29.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/29"
  },
  {
    img: "/images/portfolio-30.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/30"
  },
  {
    img: "/images/portfolio-31.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/31"
  },
  {
    img: "/images/portfolio-32.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/32"
  },
  {
    img: "/images/portfolio-33.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/33"
  },
  {
    img: "/images/portfolio-34.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/34"
  },
  {
    img: "/images/portfolio-35.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/35"
  },
  {
    img: "/images/portfolio-36.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/36"
  },
  {
    img: "/images/portfolio-37.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/37"
  },
  {
    img: "/images/portfolio-38.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/38"
  },
  {
    img: "/images/portfolio-39.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/39"
  },
  {
    img: "/images/portfolio-40.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/40"
  },
  {
    img: "/images/portfolio-41.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/41"
  },
  {
    img: "/images/portfolio-42.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/42"
  },
  {
    img: "/images/portfolio-43.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/43"
  },
  {
    img: "/images/portfolio-44.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/44"
  },
  {
    img: "/images/portfolio-45.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/45"
  },
  {
    img: "/images/portfolio-46.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/46"
  },
  {
    img: "/images/portfolio-47.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/47"
  },
  {
    img: "/images/portfolio-48.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/48"
  },
  {
    img: "/images/portfolio-49.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/49"
  },
  {
    img: "/images/portfolio-50.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/50"
  },
  {
    img: "/images/portfolio-51.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/51"
  },
  {
    img: "/images/portfolio-52.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/52"
  },
  {
    img: "/images/portfolio-53.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/53"
  },
  {
    img: "/images/portfolio-54.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/54"
  },
  {
    img: "/images/portfolio-55.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/55"
  },
  {
    img: "/images/portfolio-56.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/56"
  },
  {
    img: "/images/portfolio-57.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/57"
  },
  {
    img: "/images/portfolio-58.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/58"
  },
  {
    img: "/images/portfolio-59.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/59"
  },
  {
    img: "/images/portfolio-60.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/60"
  },
  {
    img: "/images/portfolio-61.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/61"
  },
  {
    img: "/images/portfolio-62.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/62"
  },
  {
    img: "/images/portfolio-63.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/63"
  },
  {
    img: "/images/portfolio-64.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/64"
  },
  {
    img: "/images/portfolio-65.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/65"
  },
  {
    img: "/images/portfolio-66.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/66"
  },
  {
    img: "/images/portfolio-67.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/67"
  },
  {
    img: "/images/portfolio-68.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/68"
  },
  {
    img: "/images/portfolio-69.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/69"
  },
  {
    img: "/images/portfolio-70.jpg",
    title: "Client Name",
    details: "Design • Development",
    desc: "Description will go here",
    url: "/project/70"
  }
];

export function ContentSection6t() {
  return (
    <section className="mx-auto container px-8 py-10 lg:py-28">
      <div className="grid grid-cols-1 gap-y-16 gap-x-10 md:grid-cols-2 lg:grid-cols-3">
        {contents.map(({ img, title, desc, details, url }) => (
          <ContentCard
            details={details}
            key={title}
            img={img}
            title={title}
            desc={desc}
            url={url}
          />
        ))}
      </div>
    </section>
  );
}

export default ContentSection6t;
