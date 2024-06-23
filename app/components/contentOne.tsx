'use content'

import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import {
  CursorArrowRaysIcon,
  HeartIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";
import {
  Typography,
  Card,
  CardBody,
  Button,
  Chip,
} from "@material-tailwind/react";

interface LogoPropsType {
  logo: string;
}
const logosSrc = [
  {
    logo: "https://www.material-tailwind.com/logos/logo-google.svg",
  },
  {
    logo: "https://www.material-tailwind.com/logos/logo-amazon.svg",
  },
  {
    logo: "https://www.material-tailwind.com/logos/logo-coinbase.svg",
  },
  {
    logo: "https://www.material-tailwind.com/logos/logo-spotify.svg",
  },
  {
    logo: "https://www.material-tailwind.com/logos/logo-netflix.svg",
  },
  {
    logo: "https://www.material-tailwind.com/logos/logo-google.svg",
  },
];
export function Logos({ logo }: LogoPropsType) {
  return (
    <div className="h-[80px] w-[110px] ">
      <img src={logo} className="object-cover" alt={logo} />
    </div>
  );
}

interface ContentCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

function ContentCard({ icon, title, children }: ContentCardProps) {
  return (
    <Card color="transparent" shadow={false}>
      <CardBody className="grid justify-start p-0 md:p-3">
        <div className="mb-4 grid h-12 w-12 place-content-center rounded-lg bg-blue-gray-900 p-2 text-left text-white">
          {icon}
        </div>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography className="mb-2 font-normal !text-gray-500">
          {children}
        </Typography>
        <Button
          size="sm"
          color="gray"
          variant="text"
          className="-ml-4 flex w-fit items-center gap-1"
        >
          Read More <ArrowSmallRightIcon hanging={10} width={20} />
        </Button>
      </CardBody>
    </Card>
  );
}
const contents = [
  {
    icon: <CursorArrowRaysIcon className="h-6 w-6" strokeWidth={2} />,
    title: "Modular Components",
    description:
      "The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.",
  },
  {
    icon: <HeartIcon className="h-6 w-6" strokeWidth={2} />,
    title: "Awesome Support",
    description:
      "You have the opportunity to play this game of life you need to appreciate every moment. A lot of people don’t appreciate the moment until it’s motivating the other doers.",
  },
  {
    icon: <LockClosedIcon className="h-6 w-6" strokeWidth={2} />,
    title: "Great Features",
    description:
      "People are so scared to lose that they don't even try. Like, one thing people can't say is that I'm not trying, and I'm not trying my hardest.",
  },
];

export function ContentSection8() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="mb-10 w-full items-center justify-between md:mb-32 md:!flex lg:gap-x-32">
        <div className="mb-5 w-full md:mb-0 md:w-1/2">
          <Chip
            color="gray"
            value="co-working"
            className="mb-3 max-w-fit"
          />
          <Typography variant="h2" color="blue-gray">
            Beautiful mobile Apps - The Ultimate Secret
          </Typography>
        </div>
        <div className="grid w-full grid-cols-2 md:w-1/2 md:grid-cols-3">
          {logosSrc.map(({ logo }, key) => (
            <Logos logo={logo} key={key} />
          ))}
        </div>
      </div>
      <div className=" grid max-w-6xl grid-cols-1 gap-8 gap-y-12 md:grid-cols-3">
        {contents.map(({ icon, title, description }) => (
          <ContentCard key={title} icon={icon} title={title}>
            {description}
          </ContentCard>
        ))}
      </div>
    </section>
  );
}

export default ContentSection8; 