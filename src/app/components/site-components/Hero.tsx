import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Svg from "./Svg";

const Hero = () => {
  return (
    <section className="py-4 lg:py-14">
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 grid lg:grid-cols-2 lg:items-center gap-10">
        <div className="flex flex-col space-y-8 sm:space-y-10 lg:text-left max-w-2xl md:max-w-3xl mx-auto">
          <Badge variant="default" className="bg-black h-9 rounded-full px-8">
            # Cohort 2
          </Badge>
          <h1 className="text-4xl lg:text-7xl font-bold text-primary">
            Get Into Tech Summer Camp Cohort 2
          </h1>
          <p className=" flex text-black text-[16px] md:font-normal max-w-lg">
            GetIntoTech Summer Camp empowers young learners with coding,
            robotics, and digital skills through hands-on workshops, mentorship,
            and innovation challenges.
          </p>
          <Link
            href="#"
            className="px-6 items-center h-12 rounded-3xl bg-primary text-white duration-300 ease-linear flex justify-center w-1/3"
          >
            Apply Now
          </Link>
        </div>
        <div className="relative flex justify-center items-center p-6">
      <div className="relative w-80 md:w-96 lg:w-[400px] h-[62vh]">
        <Image
          src="/images/heromain.jpg" 
          alt="Main Image"
          width={400}
          height={400}
          className="rounded-xl w-full h-full shadow-lg object-cover"
        />
      </div>

      <div className="absolute top-2 left-2 w-16 h-16 md:w-20 md:h-20 border-4 border-white rounded-full shadow-md overflow-hidden">
        <Image
          src="/images/heromain.jpg" 
          alt="Top Left Image"
          width={80}
          height={80}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="absolute bottom-2 right-2 w-16 h-16 md:w-20 md:h-20 border-4 border-white rounded-full shadow-md overflow-hidden">
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
