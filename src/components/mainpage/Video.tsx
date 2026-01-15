"use client";

import React, { useState } from "react";
import { Play, X } from "lucide-react";
import { VideoProps } from "@/types";
import { cn } from "@/lib/utils";

/**
 * Video section component with play button overlay
 * Can optionally open video in modal
 */
const Video: React.FC<VideoProps> = ({ thumbnail = "/video-img-2.jpg", videoUrl, buttonText = "PLAY VIDEO" }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    if (videoUrl) {
      setIsPlaying(true);
    }
  };

  return (
    <>
      <div className="mx-auto px-4 sm:px-6 lg:px-32 py-8 sm:py-12 lg:py-20 relative flex items-center justify-center cursor-pointer group" onClick={handleClick}>
        {/* Play Button Container */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 z-10">
          {/* Gray Circle Background */}
          <div className="absolute inset-0 bg-gray-100 rounded-full" />

          {/* Rotating Text SVG */}
          <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 200 200">
            <defs>
              <path id="videoCirclePath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
            </defs>
            <text
              className="uppercase"
              style={{
                fontSize: "13px",
                letterSpacing: "0.4em",
                fill: "#1a1a1a",
                fontWeight: 800,
              }}
            >
              <textPath href="#videoCirclePath" startOffset="0%">
                {buttonText} - {buttonText} - {buttonText} -
              </textPath>
            </text>
          </svg>

          {/* Center Play Button */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Play className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" fill="white" />
          </div>
        </div>

        {/* Background Image */}
        <div className="w-full">
          <img src={thumbnail} alt="Video thumbnail" className="w-full h-48 sm:h-64 md:h-80 lg:h-auto object-cover" />
        </div>
      </div>

      {/* Video Modal */}
      {videoUrl && isPlaying && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center" onClick={() => setIsPlaying(false)}>
          <button className="absolute top-8 right-8 text-white hover:text-gray-300 transition-colors" onClick={() => setIsPlaying(false)}>
            <X className="w-8 h-8" />
          </button>
          <div className="w-full max-w-5xl aspect-video">
            <iframe src={videoUrl} className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>
        </div>
      )}
    </>
  );
};

export default Video;
