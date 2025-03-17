"use client";

import React, { useState } from "react";
import { Play } from "lucide-react";

const ProjectVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "dQw4w9WgXcQ";

  return (
    <section className="relative w-full h-[55vh] border">
      <div className="absolute inset-0 w-full h-full">
        {!isPlaying && (
          <div
            className="absolute inset-0 bg-primary/10 flex items-center justify-center cursor-pointer z-10"
            onClick={() => setIsPlaying(true)}
          >
            <Play size={60} className="text-primary bg-white p-3 rounded-full opacity-90 hover:scale-110 transition-transform" />
          </div>
        )}
        {isPlaying ? (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&showinfo=0`}
            title="Project Video"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        ) : (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg')" }}
          ></div>
        )}
      </div>
    </section>
  );
};

export default ProjectVideo;
