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
    title: "Manage My Website",
    details: "CONSULTANCY • DEVELOPMENT • MAINTENANCE",
    url: "https://www.managemywebsite.com/"
  },
  {
    img: "/images/portfolio-2.jpg",
    title: "South Glos Parent Carers",
    details: "DEVELOPMENT • MAINTENANCE • UI/UX",
    url: "https://sgpc.org.uk/"
  },
  {
    img: "/images/portfolio-3.jpg",
    title: "Ripples",
    details: "DEVELOPMENT • MAINTENANCE • UI/UX",
    url: "https://www.ripplesbathrooms.com/"
  },
  {
    img: "/images/portfolio-4.jpg",
    title: "ACTIV PHYSIOTHERAPY",
    details: "DEVELOPMENT • MAINTENANCE",
    url: "https://www.activphysiotherapy.co.uk/"
  },
  {
    img: "/images/portfolio-5.jpg",
    title: "AQUARIUS",
    details: "DESIGN • DEVELOPMENT • MAINTENANCE",
    url: "https://www.aquarius.com/"
  },
  {
    img: "/images/portfolio-6.jpg",
    title: "Art Publishing Inc",
    details: "DEVELOPMENT • MAINTENANCE",
    url: "https://www.artpublishing.org.uk/"
  },
  {
    img: "/images/portfolio-7.jpg",
    title: "LOLA SWIFT",
    details: "DEVELOPMENT • MAINTENANCE",
    url: "https://www.lolaswift.co.uk/"
  },
  {
    img: "/images/portfolio-8.jpg",
    title: "BLUE DOT CONSTRUCTION",
    details: "DEVELOPMENT • MAINTENANCE",
    url: "https://www.bluedotltd.co.uk/"
  },
  {
    img: "/images/portfolio-9.jpg",
    title: "sleep matters",
    details: "DEVELOPMENT • MAINTENANCE",
    url: "https://www.yoursleepmatters.net/"
  },
  {
    img: "/images/portfolio-10.jpg",
    title: "The Big Think",
    details: "CONSULTANCY • DESIGN • DEVELOPMENT • MAINTENANCE",
    url: "https://www.the-big-think.org/"
  },
  {
    img: "/images/portfolio-11.jpg",
    title: "Little Berry Button",
    details: "CONSULTANCY • DESIGN • DEVELOPMENT • MAINTENANCE",
    url: "https://littleberrybutton.co.uk/"
  },
  {
    img: "/images/portfolio-12.jpg",
    title: "Luke Hope",
    details: "CONSULTANCY • DEVELOPMENT • MAINTENANCE",
    url: "https://lukehope.co/"
  },
  {
    img: "/images/portfolio-13.jpg",
    title: "Wright Boxes",
    details: "CONSULTANCY • DEVELOPMENT • MAINTENANCE",
    url: "https://wrightboxes.co.uk/"
  },
  {
    img: "/images/portfolio-14.jpg",
    title: "JACK EAMES",
    details: "DESIGN • DEVELOPMENT • MAINTENANCE",
    url: "https://jackeames.com/"
  },
  {
    img: "/images/portfolio-15.jpg",
    title: "FOUR COLOUR SOLUTIONS",
    details: "DESIGN • DEVELOPMENT • MAINTENANCE",
    url: "https://www.fourcoloursolutions.co.uk/"
  },
  {
    img: "/images/portfolio-16.jpg",
    title: "The Journey Yoga Studio",
    details: "CONSULTANCY • DESIGN • DEVELOPMENT • MAINTENANCE",
    url: "https://www.thejourneyyogastudio.com/"
  },
  {
    img: "/images/portfolio-17.jpg",
    title: "Kotona Asuen",
    details: "DESIGN • DEVELOPMENT • MAINTENANCE",
    url: "https://www.kotonaasuen.fi/"
  },
  {
    img: "/images/portfolio-18.jpg",
    title: "Contour Boxes",
    details: "DESIGN • DEVELOPMENT • MAINTENANCE",
    url: "https://contourboxes.co.uk/"
  },
  {
    img: "/images/portfolio-19.jpg",
    title: "Captain Fawcett",
    details: "CONSULTANCY • DESIGN • DEVELOPMENT • MAINTENANCE",
    url: "https://www.captainfawcett.com/"
  },
  {
    img: "/images/portfolio-20.jpg",
    title: "YEW DRINKS",
    details: "CONSULTANCY • DESIGN • DEVELOPMENT • MAINTENANCE",
    url: "https://www.yewdrink.com/"
  },
  {
    img: "/images/portfolio-21.jpg",
    title: "STUDIO ORE",
    details: "CONSULTANCY • DESIGN • DEVELOPMENT • MAINTENANCE",
    url: "https://studio-ore.com/"
  },
  {
    img: "/images/portfolio-22.jpg",
    title: "Dix Park Conservancy",
    details: "DEVELOPMENT • MAINTENANCE",
    url: "https://www.dixparkconservancy.org/"
  },
  {
    img: "/images/portfolio-23.jpg",
    title: "First Form",
    details: "DEVELOPMENT • MAINTENANCE",
    url: "/"
  },
  {
    img: "/images/portfolio-24.jpg",
    title: "NORTH HILLS",
    details: "DEVELOPMENT • MAINTENANCE",
    url: "https://www.visitnorthhills.com/"
  },
  {
    img: "/images/portfolio-25.jpg",
    title: "THE NOVUS",
    details: "DEVELOPMENT • MAINTENANCE",
    url: "https://www.thenovus.com/"
  },
  {
    img: "/images/portfolio-26.jpg",
    title: "KATIE BRATTON",
    details: "DEVELOPMENT • MAINTENANCE",
    url: "https://www.katiebrattontravel.com/"
  },
  {
    img: "/images/portfolio-27.jpg",
    title: "SE&M",
    details: "DEVELOPMENT • MAINTENANCE",
    url: "https://www.sem-se.com/"
  },
  {
    img: "/images/portfolio-28.jpg",
    title: "RHODE&apos;S MOTOR LODGE",
    details: "DEVELOPMENT • MAINTENANCE",
    url: "https://www.rhodesmotorlodge.com/"
  },
  {
    img: "/images/portfolio-29.jpg",
    title: "THE WELD",
    details: "DEVELOPMENT • MAINTENANCE",
    url: "https://theweld.com/"
  },
  {
    img: "/images/portfolio-30.jpg",
    title: "Rochambeau",
    details: "DEVELOPMENT • MAINTENANCE",
    url: "https://www.stayrochambeau.com/"
  },
  {
    img: "/images/portfolio-31.jpg",
    title: "WILDERS WAGYU",
    details: "DEVELOPMENT • MAINTENANCE",
    url: "https://wilders.com/"
  },
  {
    img: "/images/portfolio-32.jpg",
    title: "SMOKY HOLLOW",
    details: "DEVELOPMENT • MAINTENANCE",
    url: "https://www.smokyhollowraleigh.com/"
  },
  {
    img: "/images/portfolio-33.jpg",
    title: "FRONT STREET CAPITAL",
    details: "DEVELOPMENT • MAINTENANCE",
    url: "https://www.frontstreetcapital.com/"
  },
  {
    img: "/images/portfolio-34.jpg",
    title: "Blue Derby",
    details: "DEVELOPMENT • MAINTENANCE",
    url: "https://www.blue-derby.com/"
  },
  {
    img: "/images/portfolio-35.jpg",
    title: "MetCap",
    details: "DEVELOPMENT • MAINTENANCE",
    url: "https://metcapcre.com/"
  },
  {
    img: "/images/portfolio-36.jpg",
    title: "Braswell Family Farms",
    details: "DEVELOPMENT • MAINTENANCE",
    url: "https://www.braswellfamilyfarms.com/"
  },
  {
    img: "/images/portfolio-37.jpg",
    title: "Chair 8 Media",
    details: "CONSULTANCY • DEVELOPMENT • MAINTENANCE",
    url: "https://www.chair8media.com/"
  },
  {
    img: "/images/portfolio-38.jpg",
    title: "BRYANT CORP",
    details: "DEVELOPMENT • MAINTENANCE",
    url: "https://www.bryantcorp.com/"
  },
  {
    img: "/images/portfolio-39.jpg",
    title: "NHID",
    details: "DEVELOPMENT • MAINTENANCE",
    url: "https://nhid.com/"
  },
  {
    img: "/images/portfolio-40.jpg",
    title: "JDAVIS",
    details: "DEVELOPMENT • MAINTENANCE",
    url: "https://www.jdavisarchitects.com/"
  },
  {
    img: "/images/portfolio-41.jpg",
    title: "RAGLAN DEFENDERS",
    details: "DEVELOPMENT • MAINTENANCE",
    url: "https://defenders.raglan.com/"
  },
  {
    img: "/images/portfolio-43.jpg",
    title: "ALP",
    details: "DEVELOPMENT • MAINTENANCE",
    url: "https://www.austinlawrencepartners.com/"
  },
  {
    img: "/images/portfolio-44.jpg",
    title: "CITYPORT 2",
    details: "DEVELOPMENT • MAINTENANCE",
    url: "https://www.cityport2durham.com/"
  },
  {
    img: "/images/portfolio-45.jpg",
    title: "Lauren Robbins",
    details: "DEVELOPMENT • MAINTENANCE",
    url: "https://www.laurenrobbinsinteriors.com/"
  },
  {
    img: "/images/portfolio-46.jpg",
    title: "SKYSITE IMAGES",
    details: "DEVELOPMENT • MAINTENANCE",
    url: "https://www.skysiteimages.com/"
  },
  {
    img: "/images/portfolio-47.jpg",
    title: "WINSTEAD & FEINDEL",
    details: "DEVELOPMENT • MAINTENANCE",
    url: "https://www.winsteadfeindel.com/"
  },
  {
    img: "/images/portfolio-48.jpg",
    title: "LONGLEAF",
    details: "DEVELOPMENT • MAINTENANCE",
    url: "https://www.thelongleafhotel.com/"
  },
  {
    img: "/images/portfolio-49.jpg",
    title: "Elaine Burge",
    details: "DEVELOPMENT • MAINTENANCE",
    url: "https://www.elaineburge.com/"
  },
  {
    img: "/images/portfolio-50.jpg",
    title: "ELLY POSTON",
    details: "DEVELOPMENT • MAINTENANCE",
    url: "https://www.ellyposton.com/"
  },
  {
    img: "/images/portfolio-51.jpg",
    title: "GRIFFITH BLYTHE",
    details: "DEVELOPMENT • MAINTENANCE",
    url: "https://www.griffithblytheinteriors.com/"
  },
  {
    img: "/images/portfolio-52.jpg",
    title: "LODEN HOSPITALITY",
    details: "DEVELOPMENT • MAINTENANCE",
    url: "https://www.lodenhospitality.com/"
  },
  {
    img: "/images/portfolio-53.jpg",
    title: "ONE BETTER VENTURES",
    details: "DEVELOPMENT • MAINTENANCE",
    url: "https://www.1bv.co/"
  },
  {
    img: "/images/portfolio-54.jpg",
    title: "DOCK 1053",
    details: "DEVELOPMENT • MAINTENANCE",
    url: "https://www.dock1053.com/"
  },
  {
    img: "/images/portfolio-55.jpg",
    title: "HIFI",
    details: "DEVELOPMENT • MAINTENANCE",
    url: "https://www.hi-fi.nyc/"
  },
  {
    img: "/images/portfolio-56.jpg",
    title: "Maggie Dillon Interiors",
    details: "DEVELOPMENT • MAINTENANCE",
    url: "https://www.maggiedilloninteriors.com/"
  },
  {
    img: "/images/portfolio-57.jpg",
    title: "Mister Pompadour",
    details: "DEVELOPMENT • MAINTENANCE",
    url: "https://www.cutsshavescocktails.com/"
  },
  {
    img: "/images/portfolio-58.jpg",
    title: "MODE",
    details: "DEVELOPMENT • MAINTENANCE",
    url: "https://modeconsignment.com/"
  },
  {
    img: "/images/portfolio-60.jpg",
    title: "BIG SPOON ROASTERS",
    details: "DEVELOPMENT • MAINTENANCE",
    url: "https://bigspoonroasters.com/"
  },
  {
    img: "/images/portfolio-61.jpg",
    title: "WAKERACK",
    details: "DEVELOPMENT • MAINTENANCE",
    url: "https://wakerack.com/"
  },
  {
    img: "/images/portfolio-62.jpg",
    title: "WILDERS",
    details: "DEVELOPMENT • MAINTENANCE",
    url: "https://www.wilderswagyu.com/"
  },
  {
    img: "/images/portfolio-64.jpg",
    title: "FLOWCORPS",
    details: "DEVELOPMENT • MAINTENANCE",
    url: "https://flowcorps.com/"
  },
  {
    img: "/images/portfolio-65.jpg",
    title: "MEAT SWEATS",
    details: "DEVELOPMENT • MAINTENANCE",
    url: "https://meatsweatsusa.com/"
  },
  {
    img: "/images/portfolio-66.jpg",
    title: "Sweetgrass",
    details: "DEVELOPMENT • MAINTENANCE",
    url: "https://sweetgrasshome.com/"
  },
  {
    img: "/images/portfolio-67.jpg",
    title: "Murphy&apos;s Naturals",
    details: "DEVELOPMENT • MAINTENANCE",
    url: "https://www.murphysnaturals.com/"
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
