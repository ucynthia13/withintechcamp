import { Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-4 lg:py-6 bg-black text-white">
      <div className="px-5 sm:px-10 md:px-16 lg:items-center">
        <div className="flex flex-row justify-around items-center">
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white hover:text-gray-400 transition" />
            </a>
            <a
              href="https://www.instagram.com/withintechrwanda/"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white hover:text-gray-400 transition" />
            </a>
            <a
              href="https://www.linkedin.com/company/withintechrwanda/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white hover:text-gray-400 transition" />
            </a>
          </div>
          <p className="text-sm md:text-base">
            Sponsored by @ Withintech Rwanda
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
