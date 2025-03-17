import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="mt-14 sm:mt-16 lg:mt-0 py-4 lg:py-16">
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 grid lg:grid-cols-2 lg:items-center gap-10">
        <div className="flex flex-col space-y-8 sm:space-y-10 lg:text-left max-w-2xl md:max-w-3xl mx-auto">
          <Badge variant="default" className="bg-black h-9 rounded-full px-8">
            # Cohort 2
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-primary">
            Get Into Tech Summer Camp Cohort 2
          </h1>
          <p className=" flex text-black  md:font-normal max-w-md">
          GetIntoTech Summer Camp empowers young learners with coding, robotics, and digital skills through hands-on workshops, mentorship, and innovation challenges.
          </p>
          <Link
            href="#"
            className="px-6 items-center h-12 rounded-3xl bg-primary text-white duration-300 ease-linear flex justify-center w-1/3"
          >
            Apply Now
          </Link>
        </div>
        <div className="flex aspect-square lg:aspect-auto lg:h-[36rem] relative">
          <div className="w-3/5 h-[80%] rounded-xl overflow-clip border-4 border-white z-30">
            <Image
              src="/images/heromain.jpg"
              alt="Students working on a project"
              width={1200}
              height={1200}
              className="w-full h-full object-cover z-30"
            />
          </div>
          <div className="absolute right-0 bottom-0 h-[calc(100%-50px)] w-4/5 rounded-xl overflow-clip border-3 border-white z-10">
            <Image
              src="/images/heromain.jpg"
              alt="Students Working on a"
              height={1300}
              width={1300}
              className="z-10 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
