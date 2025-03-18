import React from 'react'
import { Clock, MapPin, Users } from 'lucide-react'

const About = () => {
  return (
    <section className="py-4 lg:py-24 px-4 w-full bg-primary/5">
      <div className="mx-auto lg:max-w-6xl flex flex-col items-center gap-10">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-black text-center max-w-lg">
          About Get Into Tech Summer Camp
        </h1>
        <p className="text-black text-center max-w-3xl text-sm">
        GetIntoTech Summer Camp is an immersive program designed to introduce young learners to coding, ai, and digital skills in a fun and interactive way. Through hands-on workshops, expert mentorship, and real-world tech challenges, participants develop problem-solving abilities, creativity, and confidence in using technology. The camp fosters an inclusive learning      environment, ensuring that students from diverse backgrounds gain essential digital literacy skills to prepare them for the future of work and innovation.
        </p>
        <div className="flex flex-col gap-2 items-start justify-start">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            <p className="text-black text-sm">12 August -23th June 2025</p>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            <p className="text-black text-sm">Kimisagara Youth Center</p>
          </div>
          <div className="flex items-center gap-2 ">
            <Users className="w-5 h-5 text-primary" />
            <p className="text-black text-sm">Secondary School Students (From S1-S6) </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
