"use client";

import React from "react";

const AINativeBenefits = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-[#1a1a1a]">
          What Keploy unblocks for <span className="text-[#c2410c]">AI-native teams</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#1a1a1a]">
                Testing stops being the bottleneck.
              </h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              AI agents 10x your PR volume. Your test phase doesn't — regressions ship, velocity stalls, and the CFO stops buying the story.
            </p>
            <div className="border-l-4 border-orange-500 pl-4 py-1">
              <p className="text-gray-700 font-medium">
                <span className="text-orange-600 font-bold">With Keploy —</span> Tests write themselves from real production traffic. You ship at AI speed without paying the regression tax.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#1a1a1a]">
                Infra cost stops scaling with code volume.
              </h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              LLM-heavy codebases push teams into integration-heavy test suites. Staging, seed data, and downstream services spin up on every push — the bill grows with PR count.
            </p>
            <div className="border-l-4 border-orange-500 pl-4 py-1">
              <p className="text-gray-700 font-medium">
                <span className="text-orange-600 font-bold">With Keploy —</span> Replay captured traffic with every dependency auto-mocked. CI runs hermetic and local — no staging environment, no per-run infra draw.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AINativeBenefits;
