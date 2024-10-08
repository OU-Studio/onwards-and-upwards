'use client'

import { Avatar, Card, CardBody, Typography } from "@material-tailwind/react";

export function TestimonialSection14() {
  return (
    <section className="py-12 px-5 lg:px-12 lg:py-24">
      <div className="container mx-auto max-w-screen-lg">
        <Card color="transparent" shadow={false} className="py-8">
          <CardBody className="grid gap-10 lg:grid-cols-2">
            <div className="row-start-2 lg:row-auto">
              <Typography variant="h2" color="blue-gray" className="mb-4">
                Work with me
              </Typography>
              <Typography className="mb-3 font-normal !text-gray-500 max-w-sm">
              I&apos;m a passionate designer and developer who loves solving problems and bringing my clients&apos; ideas to life. With a keen eye for detail and a commitment to doing my best, I aim to deliver top-notch results in every project.
              </Typography>
              <Typography variant="h6" color="blue-gray" className="mb-0.5">
                Joe Cory
              </Typography>
              <div className="mt-8 flex items-center gap-4">
                <div></div>
              </div>
            </div>
            <div className="h-36 w-36 md:h-[16rem] md:w-[16rem] lg:ml-auto lg:h-[22rem] lg:w-[20rem]">
              <img
                src={`/images/me.jpg`}
                alt="testimonial image"
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default TestimonialSection14;