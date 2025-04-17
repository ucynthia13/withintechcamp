import React from 'react';
import Navbar from './components/site-components/Navbar';
import Hero from './components/site-components/Hero';
import About from './components/site-components/About';
import OurTeam from './components/site-components/OurTeam';
import FAQs from './components/site-components/FAQs';
import Statistics from './components/site-components/Statistics';
import ProjectVideo from './components/site-components/ProjectVideo';
import Footer from './components/site-components/Footer';
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
