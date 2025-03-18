import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Svg from "./Svg";

const Hero = () => {
  return (
    <section className="mt-14 lg:mt-0 py-4 lg:py-24 w-full">
      <div className="mx-auto lg:max-w-6xl px-5 sm:px-10 md:px-12 grid lg:grid-cols-2 lg:items-center gap-10">
        <div className="flex flex-col space-y-6 sm:space-y-8 lg:text-left max-w-2xl md:max-w-3xl mx-auto">
          <Badge variant="default" className="bg-black h-8 rounded-full px-8">
            # Cohort 2
          </Badge>
          <h1 className="text-3xl lg:text-5xl font-bold text-primary max-w-xs md:max-w-lg">
            Get Into Tech Summer Camp Cohort 2
          </h1>
          <p className="flex text-black text-[15px] md:font-normal max-w-md">
            GetIntoTech Summer Camp empowers young learners with coding,
            robotics, and digital skills through hands-on workshops, mentorship,
            and innovation challenges.
          </p>
          <Link
            href="#"
            className="px-6 items-center h-12 rounded-3xl bg-primary text-white duration-300 ease-linear flex justify-center w-[25vh] lg:text-[15px]"
          >
            Apply Now
          </Link>
        </div>
        <div className="relative flex justify-center items-center p-6">
      <div className="relative w-80 md:w-96 lg:w-[400px] h-[60vh] lg:h-[65vh]">
        <Image
          src="/images/heromain.jpg" 
          alt="Main Image"
          width={400}
          height={400}
          className="rounded-sm w-full h-full shadow-lg object-cover"
        />
      </div>

      <div className="absolute top-2 left-8 lg:-left-12 w-24 h-24 md:w-26 md:h-26 border-4 border-white rounded-full shadow-md overflow-hidden">
        <Image
          src="/images/heromain.jpg" 
          alt="Top Left Image"
          width={80}
          height={80}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="absolute bottom-2 right-8 lg:-right-8 w-14 h-14 md:w-22 md:h-22 border-4 border-white rounded-full shadow-md overflow-hidden">
        <Image
          src="/images/hero.jpg" 
          alt="Bottom Right Image"
          width={80}
          height={80}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
        <div className="absolute top-0 right-0 z-0 opacity-40">
         <Svg />
        </div>
      </div>
    </section>
  );
};

export default Hero;
