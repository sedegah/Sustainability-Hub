"use client";

import Link from "next/link";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import Image from "next/image";

const footerLinks = [
  {
    id: "explore",
    title: "Explore",
    links: [
      { id: "university", name: "University Programmes", href: "#university" },
      { id: "courses", name: "Free Courses", href: "#courses" },
      { id: "training", name: "Professional Training", href: "#training" },
      { id: "events", name: "Events", href: "#events" },
    ],
  },
  {
    id: "resources",
    title: "Resources",
    links: [
      { id: "scholarships", name: "Scholarships", href: "#scholarships" },
      { id: "grants", name: "Grants", href: "#grants" },
      { id: "fellowships", name: "Fellowships", href: "#fellowships" },
      { id: "jobs", name: "Jobs", href: "#jobs" },
    ],
  },
  {
    id: "support",
    title: "Support",
    links: [
      { id: "careers", name: "Career Catalogue", href: "#careers" },
      { id: "mentors", name: "Mentors Connect", href: "#mentors" },
      { id: "students", name: "Student Services", href: "#students" },
      { id: "kids", name: "Kids Resources", href: "#kids" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white">
      {/* Main Footer */}
      <div className="container max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and Contact */}
          <div className="col-span-1 md:col-span-4">
            <Link href="/" className="flex items-center mb-6">
              <div className="relative h-12 w-32">
                <Image
                  src="https://ext.same-assets.com/3127512174/1583010581.svg"
                  alt="Study Sustainability Hub Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
            <p className="text-gray-400 mb-6 max-w-xs">
              Building the world's first and largest sustainability hub and marketplace for students and professionals.
            </p>
            <div className="flex flex-col space-y-2 text-gray-300">
              <div className="flex items-center gap-2">
                <div className="relative w-5 h-5">
                  <Image
                    src="https://ext.same-assets.com/3127512174/3475969876.svg"
                    alt="Email icon"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-sm">enquiries@studysustainabilityhub.com</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative w-5 h-5">
                  <Image
                    src="https://ext.same-assets.com/3127512174/431074125.svg"
                    alt="Phone icon"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-sm">+44 7549795000</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="col-span-1 md:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {footerLinks.map((group) => (
              <div key={group.id}>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <span className="block w-1.5 h-1.5 rounded-full bg-[#1aa066] mr-2" />
                  {group.title}
                </h3>
                <ul className="space-y-2">
                  {group.links.map((link) => (
                    <li key={link.id}>
                      <Link href={link.href} className="text-gray-400 hover:text-[#1aa066] transition-colors text-sm">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <span className="block w-1.5 h-1.5 rounded-full bg-[#1aa066] mr-2" />
              Connect
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Link
                  href="https://www.facebook.com/share/1BNgZGic8T/"
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-[#1a1a1a] hover:bg-[#1aa066]/20 flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook size={18} className="text-[#1aa066]" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/study-sustainability-hub/"
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-[#1a1a1a] hover:bg-[#1aa066]/20 flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={18} className="text-[#1aa066]" />
                </Link>
                <Link
                  href="https://x.com/studysustainhub?t=ag3nNgP9XpijKQ28PrBSRA&s=09"
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-[#1a1a1a] hover:bg-[#1aa066]/20 flex items-center justify-center transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter size={18} className="text-[#1aa066]" />
                </Link>
                <Link
                  href="https://youtube.com/@studysustainabilityhub?si=OJtpjVUYogplieIS"
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-[#1a1a1a] hover:bg-[#1aa066]/20 flex items-center justify-center transition-colors"
                  aria-label="YouTube"
                >
                  <FaYoutube size={18} className="text-[#1aa066]" />
                </Link>
              </div>
              <p className="text-xs text-gray-500">
                Follow us to get updated with our latest events and resources
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Footer */}
      <div className="border-t border-gray-800">
        <div className="container max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Study Sustainability Hub. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="text-xs text-gray-500 hover:text-[#1aa066] transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs text-gray-500 hover:text-[#1aa066] transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-xs text-gray-500 hover:text-[#1aa066] transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
