"use client";

import { Button } from "@/components/ui/button";
import { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and on resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative overflow-hidden pt-16 md:pt-20">
      {/* Gradient overlay for background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#040505]/80 via-[#040505]/60 to-[#040505] z-0" />

      {/* Hero Content */}
      <div className="container mx-auto px-4 pt-10 md:pt-16 pb-16 md:pb-24 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Welcome to <span className="text-[#1aa066]">Study Sustainability Hub!</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-10 max-w-3xl mx-auto px-2 sm:px-0">
            Get ready to explore the world of sustainability with access to university programmes,{" "}
            free courses, professional training, scholarships, events, careers, and mentorship{" "}
            opportunities to kickstart your journey toward making a difference.
          </p>

          {/* Video Container */}
          <div
            className={`relative w-full max-w-3xl mx-auto overflow-hidden rounded-xl md:rounded-2xl mb-6 md:mb-10 group ${
              isMobile ? "max-w-full px-2" : ""
            }`}
          >
            {/* Video overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 pointer-events-none" />

            <div className="aspect-video w-full">
              <video
                ref={videoRef}
                className="w-full h-full rounded-xl md:rounded-2xl shadow-lg md:shadow-2xl transform transition-transform group-hover:scale-[1.01]"
                src="/sustainability-video.mp4"
                poster="/green-globe.png"
                muted
                loop
                playsInline
              />
            </div>

            {/* Play button overlay */}
            <button
              onClick={togglePlay}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20
                     bg-[#1aa066]/90 hover:bg-[#1aa066] text-white rounded-full p-4 md:p-6
                     transition-all duration-300 ease-in-out hover:scale-110"
              aria-label={isPlaying ? "Pause video" : "Play video"}
              type="button"
            >
              {isPlaying ? (
                <FaPause className="h-4 w-4 md:h-6 md:w-6" />
              ) : (
                <FaPlay className="h-4 w-4 md:h-6 md:w-6 ml-1" />
              )}
            </button>
          </div>

          <p className="text-xs sm:text-sm md:text-base text-gray-400 font-medium px-2 sm:px-0">
            Building the world's first and largest sustainability hub and marketplace
          </p>

          <div className="flex flex-wrap gap-3 md:gap-4 mt-6 md:mt-8 justify-center">
            <Button
              className="bg-[#1aa066] hover:bg-[#15604d] text-white rounded-md px-4 py-2 md:px-8 md:py-6 text-sm md:text-lg
              shadow-[0_0_15px_rgba(26,160,102,0.4)] hover:shadow-[0_0_25px_rgba(26,160,102,0.6)]
              transition-all duration-300"
            >
              Explore Courses
            </Button>
            <Button
              variant="outline"
              className="text-[#1aa066] border-[#1aa066] hover:bg-[#1aa066]/10 rounded-md px-4 py-2 md:px-8 md:py-6 text-sm md:text-lg
              transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom wave effect */}
      <div className="absolute bottom-0 left-0 right-0 h-10 md:h-16 bg-[#040505] z-0">
        <svg
          viewBox="0 0 1440 100"
          className="absolute -top-10 md:-top-16 w-full"
          preserveAspectRatio="none"
          fill="#040505"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M0,64L80,69.3C160,75,320,85,480,90.7C640,96,800,96,960,85.3C1120,75,1280,53,1360,42.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" />
        </svg>
      </div>
    </div>
  );
}
