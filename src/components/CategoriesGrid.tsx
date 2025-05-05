"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface CategoryProps {
  id: string;
  title: string;
  icon: string;
  description: string[];
  bgClass: string;
}

const categories: CategoryProps[] = [
  {
    id: "university",
    title: "University Programmes",
    icon: "https://ext.same-assets.com/3127512174/3656594530.svg",
    description: [
      "Are you a student or professional looking for a bachelor's or postgraduate degree programme on sustainability to make a real-world impact?",
      "Are you a university looking to advertise your sustainability-focused degree programs globally?",
      "Discover top universities offering sustainability-focused degree programs across the globe."
    ],
    bgClass: "from-emerald-500/10 to-emerald-500/5"
  },
  {
    id: "courses",
    title: "Free Courses",
    icon: "https://ext.same-assets.com/3127512174/3834364945.svg",
    description: [
      "Do you want to learn about anything sustainability without spending a dime?",
      "Do you want a curated list of free online courses from world-class institutions and organizations?"
    ],
    bgClass: "from-blue-500/10 to-blue-500/5"
  },
  {
    id: "training",
    title: "Professional Training",
    icon: "https://ext.same-assets.com/3127512174/1024432776.svg",
    description: [
      "Are you a professional ready to upgrade your skills and take your career to the next level?",
      "Are you a professional training provider looking for a platform to promote sustainability-related courses and training?"
    ],
    bgClass: "from-purple-500/10 to-purple-500/5"
  },
  {
    id: "events",
    title: "Events",
    icon: "https://ext.same-assets.com/3127512174/1813570699.svg",
    description: [
      "Are you looking for a one-stop shop to find all sustainability events such as conferences, webinars, and seminars?",
      "Do you want to network and gain insights from sustainability experts?",
      "Are you an organizer looking to increase visibility for your sustainability events?"
    ],
    bgClass: "from-orange-500/10 to-orange-500/5"
  },
  {
    id: "scholarships",
    title: "Scholarships",
    icon: "https://ext.same-assets.com/3127512174/305884868.svg",
    description: [
      "It can be a headache looking for financial support to pursue your educational interests. But we are here to make your search seamless.",
      "Are you looking to explore scholarships dedicated to students pursuing sustainability studies?"
    ],
    bgClass: "from-yellow-500/10 to-yellow-500/5"
  },
  {
    id: "grants",
    title: "Grants",
    icon: "https://ext.same-assets.com/3127512174/1945121146.svg",
    description: [
      "Are you an innovator or an initiator of change? Do you have a sparking sustainability idea you want to turn into a project? Do you need funding to start now?",
      "Browse several grant opportunities allotted to innovators and researchers in sustainability."
    ],
    bgClass: "from-red-500/10 to-red-500/5"
  },
  {
    id: "fellowships",
    title: "Fellowships",
    icon: "https://ext.same-assets.com/3127512174/2435425323.svg",
    description: [
      "Want to work alongside industry leaders and expand your expertise?",
      "Do you want to explore fellowship programmes in the sustainability space across the globe?"
    ],
    bgClass: "from-pink-500/10 to-pink-500/5"
  },
  {
    id: "jobs",
    title: "Jobs",
    icon: "https://ext.same-assets.com/3127512174/2939481017.svg",
    description: [
      "We can be your go-to platform to land your dream job in sustainability.",
      "Are you ready to start or advance your career in sustainability?",
      "Find the latest job openings in sustainability, ESG, and related fields."
    ],
    bgClass: "from-teal-500/10 to-teal-500/5"
  },
  {
    id: "careers",
    title: "Career Catalogue",
    icon: "https://ext.same-assets.com/3127512174/3656594530.svg",
    description: [
      "Many are unsure about the career paths in sustainability?",
      "Are you one of them? Are you uncertain about what career path to focus on?",
      "Explore our detailed guide to careers in sustainability."
    ],
    bgClass: "from-cyan-500/10 to-cyan-500/5"
  },
  {
    id: "mentors",
    title: "Mentors Connect",
    icon: "https://ext.same-assets.com/3127512174/3656594530.svg",
    description: [
      "Are you passionate about sustainability and seeking real-time guidance or engagement with a sustainability coach?",
      "Do you want to explore career options, build your skills, or launch a project?",
      "We've got you covered. The right mentor can help you achieve your goals."
    ],
    bgClass: "from-lime-500/10 to-lime-500/5"
  },
  {
    id: "students",
    title: "Student Services",
    icon: "https://ext.same-assets.com/3127512174/3656594530.svg",
    description: [
      "Are you a student or professional seeking help to find the right program/course, or do you need tailored support throughout your application process?",
      "Let's give you a helping hand.",
      "We've got you covered. The right mentor can help you achieve your goals."
    ],
    bgClass: "from-indigo-500/10 to-indigo-500/5"
  },
  {
    id: "kids",
    title: "Kids",
    icon: "https://ext.same-assets.com/3127512174/3656594530.svg",
    description: [
      "How can we inspire the next generation to care for the planet?",
      "We have fun and educational resources for kids to learn about sustainability."
    ],
    bgClass: "from-amber-500/10 to-amber-500/5"
  }
];

export default function CategoriesGrid() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#040505]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Explore Our <span className="text-[#1aa066]">Sustainability</span> Hub
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto px-2 sm:px-0 text-sm sm:text-base">
            Your one-stop destination for all sustainability resources, from education and training to career opportunities and funding
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ category }: { category: CategoryProps }) {
  return (
    <Card id={category.id} className={`bg-gradient-to-br ${category.bgClass} border border-[#1aa066]/20 hover:border-[#1aa066]/50 transition-all hover:shadow-lg hover:shadow-[#1aa066]/5 overflow-hidden group h-full`}>
      <CardHeader className="pb-2 pt-4 sm:pt-6">
        <div className="flex items-start justify-between mb-2">
          <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-[#1aa066]/10 flex items-center justify-center p-3">
            <div className="relative w-full h-full">
              <Image
                src={category.icon}
                alt={category.title}
                fill
                className="object-contain opacity-90"
              />
            </div>
          </div>
          <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-[#1aa066]/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <FaArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#1aa066]" />
          </div>
        </div>
        <CardTitle className="text-lg sm:text-xl text-white">{category.title}</CardTitle>
      </CardHeader>
      <CardContent className="pb-3 sm:pb-4">
        <ul className="space-y-2 mt-2 text-xs sm:text-sm text-gray-300">
          {category.description.map((item, index) => (
            <li key={`${category.id}-desc-${index}`} className="flex items-start">
              <span className="inline-block h-1.5 w-1.5 bg-[#1aa066] rounded-full mt-1.5 mr-2 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Link href={`#${category.id}`} className="text-[#1aa066] hover:text-[#15604d] text-xs sm:text-sm font-medium flex items-center gap-2">
          Learn more
          <FaArrowRight className="h-2.5 w-2.5 sm:h-3 sm:w-3 transition-transform group-hover:translate-x-1" />
        </Link>
      </CardFooter>
    </Card>
  );
}
