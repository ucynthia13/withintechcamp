import React from "react";
import Image from "next/image";
import Link from "next/link";

const Statistics = () => {
  return (
    <section className="mt-14 sm:mt-16 lg:mt-0 py-4 lg:py-16">
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 grid lg:grid-cols-2 lg:items-center gap-10 ">
        <div className="flex aspect-square lg:aspect-auto lg:h-[36rem] relative">
          <div className="w-3/5 h-[60%] rounded-xl overflow-clip border-4 border-white z-30">
            <Image
              src="/images/heromain.jpg"
              alt="Students working on a project"
              width={1200}
              height={1200}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute right-10 bottom-0 h-[calc(100%-100px)] w-4/5 rounded-xl overflow-clip border-3 border-white ">
            <Image
              src="/images/heromain.jpg"
              alt="Students Working on a"
              height={1300}
              width={1300}
              className="z-10 w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col space-y-8 sm:space-y-10 lg:text-left max-w-2xl md:max-w-3xl mx-auto">
          <h1 className="text-xl lg:text-3xl font-bold text-primary">
            Empower Your Tech Journey
          </h1>
          <p className=" flex text-black  md:font-normal max-w-md">
            Join the other in technology lorem ipsum is the text that replace
            other
          </p>
          <div className="flex gap-4 items-center h-12">
            <div className=" text-sm flex flex-col gap-2 items-start w-42 p-4 bg-orange-300/50 rounded-md shadow-md">
              <p className=" font-semibold">100</p>
              <p >Targeted Students</p>
            </div>
            <div className= " text-sm flex flex-col gap-2 items-start w-42 p-4 bg-orange-300/50 rounded-md shadow-md">
              <p className="font-semibold">2 Weeeks</p>
              <p >Camp Duration</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full">
            <Link
              href="#"
              className="px-4 lg:px-6 items-center h-11 rounded-3xl bg-primary text-white duration-300 ease-linear flex justify-center w-full sm:w-auto text-sm"
            >
              Apply Now
            </Link>
            <Link
              href="#"
              className="px-4 lg:px-6 items-center h-11 rounded-3xl text-primary border border-primary duration-300 ease-linear flex justify-center w-full sm:w-auto text-sm"
            >
              Book A Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
