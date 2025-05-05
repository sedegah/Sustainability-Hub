"use client";

import { Button } from "@/components/ui/button";
import { FaCheck } from "react-icons/fa";

export default function AdvertiseSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#040505] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#1aa066]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-0" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#1aa066]/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <div className="rounded-lg bg-gradient-to-br from-[#040505] to-[#1a1a1a] p-1 inline-block mb-4 sm:mb-6">
              <span className="bg-[#1aa066]/10 text-[#1aa066] px-3 sm:px-4 py-1.5 rounded text-xs sm:text-sm font-medium">
                Advertise with us
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Promote your brand to <span className="text-[#1aa066]">sustainability enthusiasts</span>
            </h2>

            <p className="text-gray-300 mb-6 sm:mb-8 max-w-xl text-sm sm:text-base">
              Want to reach students and professionals passionate about sustainability?
              Partner with us to connect with a targeted audience through our platform.
            </p>

            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <li className="flex items-start">
                <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-[#1aa066]/20 flex items-center justify-center mr-2 sm:mr-3 mt-0.5">
                  <FaCheck className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-[#1aa066]" />
                </div>
                <span className="text-gray-200 text-sm sm:text-base">
                  Connect with a large audience passionate about sustainability initiatives
                </span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-[#1aa066]/20 flex items-center justify-center mr-2 sm:mr-3 mt-0.5">
                  <FaCheck className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-[#1aa066]" />
                </div>
                <span className="text-gray-200 text-sm sm:text-base">
                  Advertise to universities or educational institutions interested in sustainability
                </span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-[#1aa066]/20 flex items-center justify-center mr-2 sm:mr-3 mt-0.5">
                  <FaCheck className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-[#1aa066]" />
                </div>
                <span className="text-gray-200 text-sm sm:text-base">
                  Grow brand recognition among the target audience about your sustainable products
                </span>
              </li>
            </ul>

            <Button className="bg-[#1aa066] hover:bg-[#15604d] text-white rounded-md px-4 py-2 sm:px-8 sm:py-6 text-sm sm:text-lg
              shadow-[0_0_15px_rgba(26,160,102,0.4)] hover:shadow-[0_0_25px_rgba(26,160,102,0.6)]
              transition-all duration-300">
              Contact us
            </Button>
          </div>

          <div className="relative order-first lg:order-last mb-8 lg:mb-0">
            <div className="aspect-square max-w-sm mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1aa066]/20 to-transparent rounded-full blur-3xl z-0" />
              <div className="relative z-10 w-full h-full flex items-center justify-center p-4 sm:p-0">
                <img
                  src="https://ext.same-assets.com/3127512174/3078949690.svg"
                  alt="Sustainability Icons"
                  className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
