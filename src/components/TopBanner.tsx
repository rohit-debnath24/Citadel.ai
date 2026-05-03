"use client";

import React from "react";

const TopBanner = () => {
  return (
    <div className="bg-gradient-to-r from-[#ffbd2e] via-[#ea580c] to-[#ffbd2e] text-white py-2 px-4 text-center relative z-50 overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 text-xs md:text-sm font-medium">
        <span className="bg-white/20 px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider animate-pulse">Hackolution Live</span>
        <p className="tracking-tight">
          Citadel.ai is now live at Hackolution! — <span className="font-bold">Protecting LLM Agents in real-time</span>
        </p>
        <button className="hidden md:flex items-center gap-1 bg-black/20 hover:bg-black/30 px-3 py-1 rounded-full transition-colors font-bold">
          See the Demo <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
        </button>
      </div>
      <button className="absolute right-4 top-2 text-white/70 hover:text-white transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default TopBanner;
