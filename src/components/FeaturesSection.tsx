"use client";

import React, { useState } from "react";

const sections = [
  {
    id: "capture",
    title: "Traffic Capture",
    subtitle: "Capture real API traffic, virtualize dependencies, and replay deterministically anywhere like a digital twin.",
    items: [
      {
        title: "Traffic Capture",
        desc: "Prod / staging / local—record real request/response flows with zero code changes."
      },
      {
        title: "Sandbox your downstreams",
        desc: "Record isolated mocks for your DB, Kafka, Redis, third-party APIs—run anywhere."
      },
      {
        title: "Editable test artifacts",
        desc: "Edit tests, mocks. Run as API / integration / E2E / contract suites."
      }
    ]
  },
  {
    id: "dedup",
    title: "Deduplication",
    subtitle: "Only test what matters so regressions are real—not random.",
    items: [
      {
        title: "Deduplication",
        desc: "Automatically merge duplicates and keep only unique, meaningful flows."
      },
      {
        title: "Noise Filtering",
        desc: "Strip timestamps, IDs, random tokens, and volatile fields for deterministic replay."
      },
      {
        title: "Automated assertions",
        desc: "Generate checks for schema, status codes, and key fields that catch breaking changes."
      }
    ]
  }
];

const FeaturesSection = () => {
  const [activeSection, setActiveSection] = useState("dedup");
  const [activeItem, setActiveItem] = useState(0);

  return (
    <section className="bg-[#05070a] text-white py-32 relative overflow-hidden font-sans border-t border-white/5">
      {/* Dark background grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50 z-0"></div>

      {/* Sticky Left Sidebar Navigation */}
      <div className="hidden lg:flex flex-col items-center gap-4 fixed left-4 top-1/2 -translate-y-1/2 z-50 bg-white/5 p-2 rounded-full border border-white/10 backdrop-blur-md">
        <button className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${activeSection === "capture" ? "bg-white/20 text-white" : "text-gray-500 hover:text-white"}`} onClick={() => setActiveSection("capture")}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
        </button>
        <button className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${activeSection === "dedup" ? "bg-white/20 text-white" : "text-gray-500 hover:text-white"}`} onClick={() => setActiveSection("dedup")}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
        </button>
        <button className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:text-white transition-all">
           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:pl-24 relative z-10">
        
        {sections.map((section) => (
          <div key={section.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh] transition-opacity duration-500 ${activeSection === section.id ? "opacity-100 block" : "opacity-0 hidden"}`}>
            
            {/* Left Content */}
            <div className="max-w-xl">
              <h2 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight" style={{ color: "#f8e5b4" }}>
                {section.title}
              </h2>
              <p className="text-xl text-gray-400 mb-12">
                {section.subtitle}
              </p>

              <div className="space-y-4 mb-12">
                {section.items.map((item, idx) => {
                  const isActive = activeItem === idx;
                  return (
                    <div 
                      key={idx} 
                      className={`p-6 rounded-2xl cursor-pointer transition-all border ${isActive ? "border-orange-500/50 bg-orange-500/5 shadow-[0_0_15px_rgba(234,88,12,0.1)]" : "border-white/10 bg-black/40 hover:bg-white/5"}`}
                      onClick={() => setActiveItem(idx)}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        {isActive ? (
                          <div className="text-orange-500">
                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full border border-gray-600"></div>
                        )}
                        <h3 className={`text-xl font-bold ${isActive ? "text-orange-500" : "text-gray-300"}`}>{item.title}</h3>
                      </div>
                      <p className={`pl-8 text-sm ${isActive ? "text-gray-300" : "text-gray-500"}`}>
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center gap-4">
                <button className="bg-[#ea580c] hover:bg-[#c2410c] text-white px-8 py-3 rounded-full font-bold text-lg transition-all shadow-lg glow-orange">
                  Try Now
                </button>
                <span className="text-gray-500 text-sm">No credit card • 2 min setup</span>
              </div>
            </div>

            {/* Right Content - Visual Representation Placeholder */}
            <div className="relative w-full aspect-square md:aspect-video lg:aspect-square flex justify-center items-center">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-orange-500/20 blur-[120px] rounded-full pointer-events-none" />
               <div className="relative w-full h-full bg-[#111318] rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col">
                  {/* Mock Window Header */}
                  <div className="h-8 bg-[#1e2330] border-b border-white/5 flex items-center px-4 gap-2">
                     <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                     <span className="ml-auto text-[10px] text-gray-500 font-mono tracking-widest uppercase">Keploy Visualizer</span>
                  </div>
                  {activeSection === "dedup" && (
                     <div className="w-full h-full border border-[#ffbd2e]/30 rounded-2xl bg-gradient-to-br from-[#ffbd2e]/5 to-transparent relative overflow-hidden flex items-center justify-center shadow-[0_0_50px_rgba(255,189,46,0.05)] p-6">
                        {/* High-fidelity Mock Diagram for deduplication */}
                        
                        <div className="w-full max-w-lg bg-[#0e1117] rounded-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col font-mono text-[10px] sm:text-xs">
                           
                           {/* Window Header */}
                           <div className="bg-[#161b22] px-4 py-2 border-b border-white/5 flex items-center justify-between">
                              <div className="flex gap-4">
                                <span className="text-gray-400">Captured Flows (1,042)</span>
                                <span className="text-[#ffbd2e] flex items-center gap-1">
                                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg>
                                  Filter Noise & Dedup
                                </span>
                              </div>
                           </div>

                           {/* Body */}
                           <div className="flex flex-col md:flex-row h-full">
                             {/* Left column: List of requests */}
                             <div className="w-full md:w-1/3 border-r border-white/5 bg-[#0a0c10] flex flex-col">
                                <div className="p-3 border-b border-white/5 text-gray-500 uppercase tracking-widest text-[9px] font-bold">API Requests</div>
                                <div className="p-3 border-l-2 border-[#ffbd2e] bg-white/5 flex flex-col gap-1">
                                   <span className="text-green-400">POST /checkout</span>
                                   <span className="text-gray-500">Test Case #1</span>
                                </div>
                                <div className="p-3 flex flex-col gap-1 opacity-30 relative overflow-hidden">
                                   <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTS0xMCwgNTBMNTAsLTEwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+')]"></div>
                                   <span className="text-green-400">POST /checkout</span>
                                   <span className="text-gray-500 strike">Test Case #2 (Duplicate)</span>
                                </div>
                                <div className="p-3 flex flex-col gap-1 opacity-30 relative overflow-hidden">
                                   <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTS0xMCwgNTBMNTAsLTEwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+')]"></div>
                                   <span className="text-green-400">POST /checkout</span>
                                   <span className="text-gray-500">Test Case #3 (Duplicate)</span>
                                </div>
                                <div className="p-3 flex flex-col gap-1">
                                   <span className="text-blue-400">GET /users/1</span>
                                   <span className="text-gray-500">Test Case #4</span>
                                </div>
                             </div>

                             {/* Right column: JSON Body with noise filtering */}
                             <div className="w-full md:w-2/3 p-4 bg-[#0d1117] relative">
                                <div className="absolute top-4 right-4 flex flex-col items-end gap-2 z-10">
                                  <div className="bg-[#2ea043]/10 text-[#2ea043] border border-[#2ea043]/20 px-2 py-1 rounded text-[10px] flex items-center gap-1">
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                                    Merged 12 Duplicates
                                  </div>
                                  <div className="bg-[#ffbd2e]/10 text-[#ffbd2e] border border-[#ffbd2e]/20 px-2 py-1 rounded text-[10px] flex items-center gap-1">
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                                    Filtered 3 Noisy Fields
                                  </div>
                                </div>
                                
                                <div className="text-gray-400 mb-2">Response Body</div>
                                <div className="font-mono leading-relaxed">
                                  <span className="text-gray-300">{"{"}</span><br/>
                                  &nbsp;&nbsp;<span className="text-blue-300">"status"</span>: <span className="text-green-300">"success"</span>,<br/>
                                  &nbsp;&nbsp;<span className="text-blue-300">"transaction_id"</span>: <span className="text-red-400 line-through">"tx_987654321xyz"</span> 
                                  <span className="ml-2 text-[9px] bg-red-500/20 text-red-400 px-1 rounded">Ignore: Random Token</span><br/>
                                  &nbsp;&nbsp;<span className="text-blue-300">"timestamp"</span>: <span className="text-red-400 line-through">"2023-10-24T12:00:00Z"</span>
                                  <span className="ml-2 text-[9px] bg-red-500/20 text-red-400 px-1 rounded">Ignore: Timestamp</span><br/>
                                  &nbsp;&nbsp;<span className="text-blue-300">"user_details"</span>: {"{"}<br/>
                                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">"name"</span>: <span className="text-green-300">"John Doe"</span>,<br/>
                                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">"email"</span>: <span className="text-green-300">"john@example.com"</span><br/>
                                  &nbsp;&nbsp;{"}"}<br/>
                                  <span className="text-gray-300">{"}"}</span>
                                </div>
                             </div>
                           </div>
                        </div>

                     </div>
                  )}
                  {activeSection !== "dedup" && (
                    /* Mock Window Body */
                    <div className="flex-1 p-8 flex items-center justify-center relative">
                       {/* Flow diagram mock */}
                       <div className="w-full max-w-sm flex flex-col gap-8">
                         <div className="p-4 rounded-xl border border-white/20 bg-white/5 text-center relative z-10">
                           <span className="text-orange-400 font-bold font-mono">User Traffic</span>
                         </div>
                         
                         <div className="h-16 w-px bg-gradient-to-b from-orange-400/50 to-transparent mx-auto absolute top-[120px] left-1/2 -translate-x-1/2"></div>
                         
                         <div className="p-4 rounded-xl border border-orange-500/50 bg-orange-500/10 text-center relative z-10 shadow-[0_0_30px_rgba(234,88,12,0.2)]">
                           <span className="text-white font-bold">{section.items[activeItem]?.title}</span>
                         </div>

                         <div className="h-16 w-px bg-gradient-to-b from-orange-400/50 to-transparent mx-auto absolute bottom-[120px] left-1/2 -translate-x-1/2"></div>

                         <div className="p-4 rounded-xl border border-green-500/30 bg-green-500/10 text-center relative z-10">
                           <span className="text-green-400 font-bold font-mono">Automated Test Case</span>
                         </div>
                       </div>
                    </div>
                  )}
               </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
