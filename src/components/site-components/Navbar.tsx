"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full h-[12vh] flex justify-around items-center py-6 px-4 sticky top-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white" :"bg-transparent"
      }`}
    >
      <Image src="/images/withintech.png" alt="logo" width={80} height={80} />
      <div className="flex gap-4 lg:gap-12 text-[15px]">
        <Link href="/" className="text-black">Home</Link>
        <Link href="mailto:info@withintech.org" className="text-black" target="_blank">Donate</Link>
      </div>
      <Link className="h-11 rounded-full px-8" href="https://docs.google.com/forms/d/e/1FAIpQLSfyc4wFl4mANFM1cmAEgwy7Df_cXiPcYnUBTxaTyeTFwfF-mg/viewform?usp=header" target="_blank">Apply</Link>
    </nav>
  );
};

export default Navbar;
