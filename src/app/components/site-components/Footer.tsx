import { Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-4 lg:py-6 bg-black text-white">
      <div className="px-5 sm:px-10 md:px-12 lg:px-5 lg:items-center">
        <div className="flex flex-row justify-around items-center">
          <div className="flex gap-4">
            <Twitter className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" />
            <Instagram className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" />
            <Linkedin className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" />
          </div>
          <p className="text-sm md:text-base">
            Get into tech summer camp is sponsored by @ Withintech Rwanda
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
