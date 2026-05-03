"use client";

import React from "react";
import Link from "next/link";

const BottomCTA = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Read Documentation */}
          <div className="rounded-3xl p-12 relative overflow-hidden group bg-gradient-to-br from-orange-100 to-orange-50 border border-orange-200 shadow-sm hover:shadow-xl transition-all duration-500">
             <div className="absolute top-0 right-0 w-64 h-64 bg-orange-400/20 blur-[80px] rounded-full group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
             
             <div className="relative z-10">
               <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                 Ready to deep dive?
               </h2>
               <p className="text-lg text-gray-700 mb-8 max-w-sm">
                 Explore the official Keploy documentation to master AI-native testing.
               </p>
               
               <Link href="#" className="inline-block bg-white text-gray-900 border border-gray-200 hover:border-orange-500 hover:text-orange-600 px-8 py-3.5 rounded-full font-bold text-lg transition-colors shadow-sm">
                 Read Documentation &rarr;
               </Link>
             </div>
          </div>

          {/* Card 2: Start Open Source */}
          <div className="rounded-3xl p-12 relative overflow-hidden group bg-gradient-to-br from-[#ff7b25] to-[#ea580c] shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/20 blur-[80px] rounded-full group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
             
             <section className="py-32 px-6 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter mb-8 leading-tight">
          READY TO SECURE<br />
          <span className="text-orange-600 underline decoration-orange-500/20 underline-offset-8">YOUR AI AGENTS?</span>
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-medium">
          Deploy the firewall in minutes. Sub-300ms latency. Zero security tax.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#" className="bg-orange-600 text-white font-black px-10 py-5 rounded-2xl text-xl hover:bg-orange-700 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-orange-600/30">
            Get The Guardian Free
          </Link>
          <Link href="#" className="bg-white text-gray-900 border-2 border-gray-100 font-black px-10 py-5 rounded-2xl text-xl hover:bg-gray-50 transition-all hover:scale-105 active:scale-95 shadow-sm">
            Contact Security Ops
          </Link>
        </div>
      </div>
    </section>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BottomCTA;
