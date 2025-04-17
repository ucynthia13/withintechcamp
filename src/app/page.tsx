import About from '@/components/site-components/About';
import FAQs from '@/components/site-components/FAQs';
import Footer from '@/components/site-components/Footer';
import Hero from '@/components/site-components/Hero';
import Navbar from '@/components/site-components/Navbar';
import OurTeam from '@/components/site-components/OurTeam';
import ProjectVideo from '@/components/site-components/ProjectVideo';
import Statistics from '@/components/site-components/Statistics';
import React from 'react';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center ">
      <Navbar />
      <Hero />
      <About />
      <Statistics />
      <ProjectVideo />
      <OurTeam />
      <FAQs />
      <Footer />
      </main>
  );
}
