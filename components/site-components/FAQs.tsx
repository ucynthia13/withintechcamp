import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  return (
    <section className="mt-14 w-full lg:mt-0 py-4 lg:py-24 bg-primary/5">
      <div className="mx-auto lg:max-w-7xl px-5 sm:px-10 md:px-16 grid lg:grid-cols-2 lg:items-center gap-10 ">
        <h1 className="text-xl lg:text-3xl text-primary font-bold max-w-sm">
          Frequently Asked Questions
        </h1>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Who is this camp designed for?</AccordionTrigger>
            <AccordionContent>
              The GetIntoTech Summer Camp is for secondary school students (S1–S6) in Rwanda who are curious about technology, programming, robotics, and digital innovation.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>What will I learn from this camp?</AccordionTrigger>
            <AccordionContent>
              You’ll learn the basics of computer programming, robotics, problem-solving, teamwork, and how technology is used in real-world applications. We also offer hands-on projects and mini-hackathons.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>What is the goal of this camp?</AccordionTrigger>
            <AccordionContent>
              The camp aims to introduce young learners to the world of tech, build confidence in using digital tools, and prepare them for future careers in technology, science, and innovation.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>When does the camp start and end?</AccordionTrigger>
            <AccordionContent>
              The camp runs from <strong>July 21st to August 4th, 2025</strong>. It is a 2-week full-time program, held Monday through Friday from 9AM to 2PM.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>Is there a deadline for enrollment?</AccordionTrigger>
            <AccordionContent>
              Yes. The final date to apply is <strong>June 20, 2025</strong>. Spots are limited, so we encourage early applications.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>How much does the camp cost?</AccordionTrigger>
            <AccordionContent>
              The camp is <strong>20,000 RWF</strong> for all accepted students.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger>Where will the camp be held?</AccordionTrigger>
            <AccordionContent>
              The camp will take place at Kimisagara Youth Center, Kigali. 
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger>How are students selected?</AccordionTrigger>
            <AccordionContent>
              Selection is based on interest, motivation, and basic digital literacy. We aim for equal representation across gender and schools, and no prior coding experience is required.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQs;
