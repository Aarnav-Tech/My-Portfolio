"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { FaGithub } from "react-icons/fa"; // GitHub icon
import MenuOverlay from "./MenuOverlay";


const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (Math.abs(currentScroll - lastScroll) < 5) return;

      if (currentScroll > lastScroll && currentScroll > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-10 transition-transform duration-300 rounded-b-2xl backdrop-blur-md bg-white/10 border border-white/20
      ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="flex container py-3 flex-wrap items-center justify-between mx-auto px-4">
        
        {/* Fancy Gradient Name */}
        <Link
          href={"/"}
          className="text-xl md:text-3xl font-bold tracking-wide bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-600 bg-clip-text text-transparent drop-shadow-sm"
        >
          Aarnav Lokesh
        </Link>

        {/* Right Side Items */}
        <div className="flex items-center gap-5">
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex space-x-8 text-white font-medium">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>

          {/* GitHub Icon */}
          <a
            href="https://github.com/Aarnav-Tech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-cyan-300 transition-colors duration-250"
          >
            <FaGithub size={24} />
          </a>

          {/* Mobile Menu Button */}
          <div className="block md:hidden">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-3 py-2 border rounded border-white/50 text-white hover:bg-white/20 transition"
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 py-2 border rounded border-white/50 text-white hover:bg-white/20 transition"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
