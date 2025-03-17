import { Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full mt-14 sm:mt-16 lg:mt-0 py-4 lg:py-8 bg-black text-white">
      <div className="px-5 sm:px-10 md:px-12 lg:px-5 lg:items-center">
        <div className="flex flex-row justify-around items-center">
          <div className="flex gap-4">
            <Twitter className="w-8 h-8 text-white" />
            <Instagram className="w-8 h-8 text-white" />
            <Linkedin className="w-8 h-8 text-white" />
          </div>
          <p>
            Get into tech summer camp is sponsored by @ Withintech Rwanda
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
