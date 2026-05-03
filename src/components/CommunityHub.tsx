"use client";

import React from "react";
import Link from "next/link";

const CommunityHub = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Dark Theme - Community Section */}
      <section className="bg-[#05070a] text-white py-32 px-6 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30 z-0"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight">
            Join the <span className="text-orange-500">LLMSec</span> Movement
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* GitHub Card */}
            <Link href="#" className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center transition-all group backdrop-blur-sm">
              <svg height="48" viewBox="0 0 16 16" width="48" fill="currentColor" className="mb-6 text-gray-300 group-hover:text-white transition-colors">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
              <h3 className="text-xl font-bold mb-2">GitHub</h3>
              <p className="text-gray-400 text-sm">Contribute to the core proxy and classification engine.</p>
            </Link>

            {/* Discord Card */}
            <Link href="#" className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center transition-all group backdrop-blur-sm">
              <svg className="w-12 h-12 mb-6 text-gray-300 group-hover:text-[#5865F2] transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.372.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.419c0 1.334-.947 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.419c0 1.334-.946 2.419-2.157 2.419z"/>
              </svg>
              <h3 className="text-xl font-bold mb-2">Discord</h3>
              <p className="text-gray-400 text-sm">Join the real-time discussion with AI security engineers.</p>
            </Link>

            {/* X (Twitter) Card */}
            <Link href="#" className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center transition-all group backdrop-blur-sm">
              <svg className="w-12 h-12 mb-6 text-gray-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <h3 className="text-xl font-bold mb-2">Twitter / X</h3>
              <p className="text-gray-400 text-sm">Follow us for real-time threat alerts and updates.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Light Theme - Analytics & Proof Section */}
      <section className="bg-[#fcfcfc] py-32 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#1a1a1a]">
              Born at Hackolution 2026
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
            {/* Documentation Card */}
            <Link href="#" className="bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col">
              <div className="h-48 bg-orange-50 border-b border-gray-100 relative overflow-hidden flex items-center justify-center p-6">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDUgTCAyMCA1IE0gNSAwIEwgNSAyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDIzNCwgODgsIDEyLCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-60"></div>
                <div className="w-32 h-24 bg-white rounded-xl shadow-sm border border-orange-100 flex flex-col p-2 transform group-hover:-translate-y-2 group-hover:scale-105 transition-transform duration-500 z-10">
                   <div className="h-2 w-1/2 bg-orange-200 rounded mb-2"></div>
                   <div className="h-2 w-full bg-gray-100 rounded mb-1"></div>
                   <div className="h-2 w-3/4 bg-gray-100 rounded mb-1"></div>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">Documentation &rarr;</h3>
                <p className="text-gray-600 leading-relaxed">Explore the technical PRD, model architectures, and integration guides.</p>
              </div>
            </Link>

            {/* Metrics Card */}
            <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col">
              <div className="h-48 bg-blue-50 border-b border-gray-100 relative overflow-hidden flex items-center justify-center p-6">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/50 blur-[50px] rounded-full"></div>
                 <div className="text-4xl font-black text-blue-600 z-10">&lt;300ms</div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">High Performance</h3>
                <p className="text-gray-600 leading-relaxed">The "Security Tax" is minimal. Every scan completes in real-time streaming mode.</p>
              </div>
            </div>

            {/* Threat Card */}
            <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col lg:col-span-1 md:col-span-2">
              <div className="h-48 bg-red-50 border-b border-gray-100 relative overflow-hidden flex items-center justify-center p-6">
                 <div className="w-full max-w-[200px] h-20 bg-gray-900 rounded-xl shadow-lg border border-red-900 flex flex-col p-3 transform group-hover:scale-105 transition-transform duration-500">
                    <div className="text-red-500 font-mono text-[10px]">&gt; INJECTION_DETECTED</div>
                    <div className="text-gray-400 font-mono text-[10px] mt-1">Intercepting payload...</div>
                 </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-3 group-hover:text-red-600 transition-colors">Attack Interception</h3>
                <p className="text-gray-600 leading-relaxed">Neutralize 99% of indirect prompt injection attempts on day zero.</p>
              </div>
            </div>
          </div>

          {/* Social Proof Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center border-t border-gray-200 pt-20">
            <div>
              <h4 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-3">14K+</h4>
              <p className="text-gray-500 font-medium">Attacks intercepted during testing.</p>
            </div>
            <div>
              <h4 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-3">0</h4>
              <p className="text-gray-500 font-medium">Data leakage events in production.</p>
            </div>
            <div>
              <h4 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-3">Hackathon</h4>
              <p className="text-gray-500 font-medium">Winner of the Security Innovation track.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityHub;
