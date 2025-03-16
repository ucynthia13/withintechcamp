import React from 'react';
import Navbar from './components/site-components/Navbar';
import Hero from './components/site-components/Hero';
import About from './components/site-components/About';
import OurTeam from './components/site-components/OurTeam';
import FAQs from './components/site-components/FAQs';
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Navbar />
      <Hero />
      <About />
      <OurTeam />
      <FAQs />
    </main>
  );
}
