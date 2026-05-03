"use client";

import React, { useState } from "react";
import Link from "next/link";

const Hero = () => {
  const [activeCard, setActiveCard] = useState(3); // Shadow Model Detection is active

  const cards = [
    { title: "Input Sanitization", dotColor: "bg-blue-500", activeBg: "bg-blue-50/80", url: "/input-sanitization" },
    { title: "Outbound DLP", dotColor: "bg-orange-500", activeBg: "bg-orange-50/80", url: "/dlp" },
    { title: "Intent Drift Analysis", dotColor: "bg-purple-500", activeBg: "bg-purple-50/80", url: "/intent-monitoring" },
    { title: "Shadow Model Detection", dotColor: "bg-red-500", activeBg: "bg-[#f8e5e5]/90", url: "/adversarial-detection" },
  ];

  return (
    <section className="relative pt-40 pb-24 md:pt-56 md:pb-32 overflow-hidden bg-white font-sans">
      {/* Background radial gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/30 blur-[120px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-100/30 blur-[120px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50 -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column */}
        <div className="max-w-xl z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white/60 backdrop-blur-md mb-8 shadow-sm">
            <span className="text-orange-500">🛡️</span>
            <span className="text-gray-800 text-sm font-semibold tracking-tight">AI Firewall for LLM Agents.</span>
            <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm font-bold underline decoration-2 underline-offset-2 ml-1">
              Live Demo &gt;
            </Link>
          </div>

          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter mb-6 leading-[1.05] text-[#1a1a1a]">
            Citadel.ai <br />
            <span className="text-gray-400 font-medium tracking-normal text-5xl md:text-6xl italic">Because your AI</span> <br />
            <span className="text-[#ea580c]">shouldn't trust</span> <br />
            <span className="text-[#ea580c]">everything it reads.</span>
          </h1>

          <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg tracking-tight">
            Real-time <strong className="text-[#ea580c] font-bold">Proxy Firewall</strong> that intercepts malicious payloads, detects <strong className="text-[#ea580c] font-bold">Prompt Injections</strong>, and prevents sensitive data leakage in autonomous agent workflows.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
             <Link href="#" className="bg-orange-600 text-white font-black px-8 py-4 rounded-xl text-lg hover:bg-orange-700 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-orange-600/30">
                Deploy Citadel.ai
             </Link>
             <Link href="#" className="bg-white text-gray-900 border border-gray-200 font-bold px-8 py-4 rounded-xl text-lg hover:bg-gray-50 transition-all">
                Read Documentation
             </Link>
          </div>
        </div>

        {/* Right Column - Stacked Cards */}
        <div className="relative h-[550px] z-10 lg:ml-10 perspective-1000">
          {cards.map((card, idx) => {
            const isActive = activeCard === idx;
            const visualPos = (idx - activeCard - 1 + cards.length) % cards.length;
            
            const topOffset = visualPos * 45;
            const scale = 1 - (cards.length - 1 - visualPos) * 0.04;
            const zIndex = visualPos;
            
            return (
              <div
                key={idx}
                className="absolute w-full group"
                style={{
                  top: `${topOffset}px`,
                  transform: `scale(${scale})`,
                  transformOrigin: "top center",
                  zIndex: zIndex,
                  transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                onClick={() => setActiveCard(idx)}
              >
                <div
                  className={`w-full rounded-3xl border border-white/40 transition-all duration-500 cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden backdrop-blur-xl
                    ${isActive ? `${card.activeBg} h-[420px] group-hover:shadow-2xl` : "bg-white/80 h-20 hover:bg-white"}
                    transform group-hover:-translate-y-2 group-hover:scale-[1.02]
                  `}
                >
                  <div className="px-8 py-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-3.5 h-3.5 rounded-full shadow-sm ${card.dotColor}`} />
                      <h3 className={`text-xl font-bold tracking-tight ${isActive ? "text-gray-900" : "text-gray-700"}`}>
                        {card.title}
                      </h3>
                    </div>
                    {isActive && (
                      <span className="text-[#ea580c] text-sm font-bold flex items-center gap-1 tracking-tight">
                        Live Monitor &rarr;
                      </span>
                    )}
                  </div>
                  
                  {isActive && (
                    <div className="px-6 pb-6 h-full">
                      <div className="w-full h-full bg-[#111318] rounded-2xl border border-white/20 shadow-2xl relative overflow-hidden flex flex-col group/window">
                         {/* Mock Window Header */}
                         <div className="h-10 bg-[#1e2330] border-b border-white/5 flex items-center px-5 gap-2">
                           <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                           <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                           <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                           <div className="ml-auto flex items-center gap-2 px-3 py-1 bg-white/5 rounded-md text-xs text-gray-400 font-mono">
                             <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                             https://citadel.ai/intercept
                           </div>
                         </div>
                         {/* Mock Content */}
                         <div className="flex-1 p-6 flex flex-col gap-4 relative">
                            {/* Animated scanning line on hover */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-orange-500/50 shadow-[0_0_15px_rgba(234,88,12,0.8)] -translate-y-full group-hover/window:animate-[scan_2s_ease-in-out_infinite] z-20"></div>
                            
                            <div className="flex justify-between items-center mb-2">
                               <div className="h-4 w-1/3 bg-white/10 rounded"></div>
                               <div className="px-2 py-0.5 bg-red-500/20 text-red-400 text-[10px] font-mono rounded border border-red-500/30">THREAT DETECTED</div>
                            </div>
                            
                            <div className="h-32 w-full bg-red-500/5 border border-red-500/20 rounded-xl flex items-center justify-center relative overflow-hidden">
                               {/* Alert graphic */}
                               <div className="flex flex-col items-center gap-2">
                                  <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center border border-red-500/40">
                                     <svg className="w-6 h-6 text-red-500 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                  </div>
                                  <span className="text-red-400 font-mono text-xs">Prompt Injection Attempt Blocked</span>
                               </div>
                            </div>
                            
                            <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                               <div className="flex justify-between text-[10px] font-mono text-gray-500 mb-1">
                                  <span>Confidence</span>
                                  <span>98.4%</span>
                               </div>
                               <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                  <div className="h-full bg-red-500 w-[98.4%]"></div>
                               </div>
                            </div>
                         </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Keyframes for the scan animation */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes scan {
            0% { top: 0; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
          }
        `}} />

      </div>
    </section>
  );
};

export default Hero;
