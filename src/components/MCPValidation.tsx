"use client";

import React from "react";

const MCPValidation = () => {
  return (
    <section className="py-32 px-6 relative bg-[#fcfcfc] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-orange-100/30 blur-[100px] rounded-full -z-10 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white shadow-sm mb-8">
          <span className="text-orange-500 font-mono font-bold text-xs">&gt;_</span>
          <span className="text-gray-500 text-xs font-mono tracking-widest uppercase">MCP · AI-NATIVE TESTING</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 leading-[1.1] text-[#1a1a1a]">
          The validation layer for <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ea580c] to-[#c2410c]">
            AI coding agents
          </span>
        </h2>

        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Keploy exposes tests, mocks, and production sandboxes over the <strong className="text-gray-900">Model Context Protocol</strong>. Your agents don't just write code — they verify it against real user traffic before it reaches main.
        </p>

        {/* Mock MCP architecture visual or decorative element */}
        <div className="mt-16 relative w-full h-[200px] flex items-center justify-center">
            {/* Simple decorative lines to simulate connections */}
            <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent top-1/2 -translate-y-1/2"></div>
            <div className="w-24 h-24 rounded-full bg-white border border-gray-200 shadow-xl z-10 flex items-center justify-center relative">
               <div className="absolute w-32 h-32 rounded-full border border-orange-200 animate-ping opacity-20"></div>
               <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
            </div>
        </div>
      </div>
    </section>
  );
};

export default MCPValidation;
