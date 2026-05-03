"use client";

import React from "react";

const MCPValidation = () => {
  return (
    <section className="py-32 px-6 relative bg-[#fcfcfc] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-orange-100/30 blur-[100px] rounded-full -z-10 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white shadow-sm mb-8">
          <span className="text-orange-500 font-mono font-bold text-xs">&gt;_</span>
          <span className="text-gray-500 text-xs font-mono tracking-widest uppercase">Zero-Trust · AI Security</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 leading-[1.1] text-[#1a1a1a]">
          The compliance layer for <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ea580c] to-[#c2410c]">
            Autonomous Agents
          </span>
        </h2>

        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Citadel.ai enforces <strong className="text-gray-900">context-aware safety policies</strong> at every step of the agent loop. It ensures that no matter what the LLM generates, the external actions remain within secure, authorized boundaries.
        </p>

        {/* Mock Policy architecture visual */}
        <div className="mt-16 relative w-full h-[200px] flex items-center justify-center">
            {/* Simple decorative lines to simulate connections */}
            <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent top-1/2 -translate-y-1/2"></div>
            <div className="w-24 h-24 rounded-full bg-white border border-gray-200 shadow-xl z-10 flex items-center justify-center relative">
               <div className="absolute w-32 h-32 rounded-full border border-orange-200 animate-ping opacity-20"></div>
               <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
        </div>
      </div>
    </section>
  );
};

export default MCPValidation;
