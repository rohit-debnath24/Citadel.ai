"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Offset considering the top banner
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 border-b border-transparent ${
        isScrolled ? "glass py-3 top-0 border-gray-200" : "bg-transparent py-5 top-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Left - Logo */}
        <Link href="/" className="flex items-center gap-2">
          {/* Mock Keploy Logo */}
          <div className="flex items-center">
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
              <path d="M20 0C8.954 0 0 8.954 0 20C0 31.046 8.954 40 20 40C31.046 40 40 31.046 40 20C40 8.954 31.046 0 20 0ZM28.5 28.5H23V21.5L18.5 28.5H12L20 16.5L12 11.5H17.5L22.5 17.5V11.5H28.5V28.5Z" fill="currentColor"/>
            </svg>
            <span className="text-2xl font-bold tracking-tight text-primary ml-2">Keploy</span>
          </div>
        </Link>

        {/* Right - Actions */}
        <div className="flex items-center gap-6">
          <Link href="https://github.com/keploy/keploy" target="_blank" className="hidden md:flex items-center gap-2 text-gray-800 hover:text-black transition-colors font-medium">
            <svg height="24" viewBox="0 0 16 16" width="24" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
            <span>17.2K</span>
          </Link>

          <Link
            href="#"
            className="bg-gradient-to-r from-[#ff7b25] to-[#ea580c] hover:from-[#ea580c] hover:to-[#c2410c] text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-md"
          >
            Sign In
          </Link>

          <button className="text-gray-800 hover:text-black">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
