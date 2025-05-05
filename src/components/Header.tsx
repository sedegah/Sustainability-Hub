"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full py-4 px-4 sm:px-6 md:px-10 flex items-center justify-between z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#040505]/90 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center gap-4 md:gap-6">
        <Link href="/" className="flex items-center">
          <div className="relative h-10 w-28">
            <Image
              src="https://ext.same-assets.com/3127512174/1583010581.svg"
              alt="Study Sustainability Hub Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white hover:bg-[#1aa066]/20">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-[#040505]/95 backdrop-blur-md border-l border-[#1aa066]/20 text-white">
            <div className="flex justify-center mb-8 mt-4">
              <div className="relative h-16 w-40">
                <Image
                  src="https://ext.same-assets.com/3127512174/1583010581.svg"
                  alt="Study Sustainability Hub Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <nav className="flex flex-col gap-6 mt-10">
              <Link href="/" className="text-xl font-medium hover:text-[#1aa066] transition-colors flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#1aa066]" />
                Home
              </Link>
              <Link href="#university" className="text-xl font-medium hover:text-[#1aa066] transition-colors flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#1aa066]" />
                University Programmes
              </Link>
              <Link href="#courses" className="text-xl font-medium hover:text-[#1aa066] transition-colors flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#1aa066]" />
                Free Courses
              </Link>
              <Link href="#training" className="text-xl font-medium hover:text-[#1aa066] transition-colors flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#1aa066]" />
                Professional Training
              </Link>
              <Link href="#scholarships" className="text-xl font-medium hover:text-[#1aa066] transition-colors flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#1aa066]" />
                Scholarships
              </Link>
              <Link href="#jobs" className="text-xl font-medium hover:text-[#1aa066] transition-colors flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#1aa066]" />
                Jobs
              </Link>
              <Link href="#contact" className="text-xl font-medium hover:text-[#1aa066] transition-colors flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#1aa066]" />
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Navigation - Hidden on mobile */}
      <nav className="hidden md:flex items-center gap-6 lg:gap-8">
        <Link href="/" className="text-sm font-medium hover:text-[#1aa066] transition-colors">Home</Link>
        <Link href="#university" className="text-sm font-medium hover:text-[#1aa066] transition-colors">University Programmes</Link>
        <Link href="#courses" className="text-sm font-medium hover:text-[#1aa066] transition-colors">Free Courses</Link>
        <Link href="#training" className="text-sm font-medium hover:text-[#1aa066] transition-colors">Professional Training</Link>
        <Link href="#scholarships" className="text-sm font-medium hover:text-[#1aa066] transition-colors">Scholarships</Link>
        <Link href="#jobs" className="text-sm font-medium hover:text-[#1aa066] transition-colors">Jobs</Link>
        <Link href="#contact" className="text-sm font-medium hover:text-[#1aa066] transition-colors">Contact</Link>
      </nav>

      {/* Sign up Button */}
      <Button className="bg-[#1aa066] hover:bg-[#15604d] text-white rounded-md px-4 py-2 sm:px-5 sm:py-2
        shadow-[0_0_15px_rgba(26,160,102,0.5)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(26,160,102,0.7)]">
        Sign up for free
      </Button>
    </header>
  );
}
