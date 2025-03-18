"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

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
      className={`w-full h-[10vh] flex justify-around items-center py-6 px-4 sticky top-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white" :"bg-transparent"
      }`}
    >
      <Image src="/images/withintech.png" alt="logo" width={80} height={80} />
      <div className="flex gap-4 lg:gap-12 text-[15px]">
        <a href="#" className="text-black">Home</a>
        <a href="#" className="text-black">Donate</a>
      </div>
      <Button variant="default" className="h-11 rounded-full px-8">Apply</Button>
    </nav>
  );
};

export default Navbar;
