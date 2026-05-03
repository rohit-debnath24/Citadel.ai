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
             
             <div className="relative z-10 text-white">
               <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                 Start testing for free.
               </h2>
               <p className="text-lg text-orange-100 mb-8 max-w-sm">
                 Join thousands of developers automating their regression tests today.
               </p>
               
               <div className="flex flex-col sm:flex-row gap-4">
                 <Link href="#" className="inline-block bg-white text-[#ea580c] hover:bg-gray-50 px-8 py-3.5 rounded-full font-bold text-lg transition-colors shadow-sm text-center">
                   Get Started
                 </Link>
                 <div className="hidden sm:flex items-center px-6 py-3.5 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 font-mono text-sm">
                   $ curl -O https://keploy.io/install.sh
                 </div>
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BottomCTA;
