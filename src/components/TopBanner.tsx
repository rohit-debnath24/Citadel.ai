"use client";

import React from "react";
import Link from "next/link";

const TopBanner = () => {
  return (
    <div className="bg-gradient-to-r from-[#d9b8ff] via-[#f7c2d0] to-[#ffb3a1] text-gray-900 py-2 px-4 relative flex items-center justify-center gap-4 text-sm font-medium z-50">
      <div className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        Event LIVE
      </div>
      <p className="hidden md:block">
        Keploy is hosting a community meetup in San Francisco! • GitTogether SF • May 14, 2026 • San Francisco
      </p>
      <Link href="#" className="bg-black hover:bg-gray-800 text-white text-xs font-bold px-4 py-1.5 rounded-full transition-colors flex items-center gap-2">
        Register NOW &rarr;
      </Link>
      <button className="absolute right-4 text-gray-700 hover:text-black transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default TopBanner;
