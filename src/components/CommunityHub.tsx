"use client";

import React from "react";
import Link from "next/link";

const CommunityHub = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Dark Theme - Community Section */}
              <p className="text-gray-400 text-sm">Star us on GitHub and contribute to the project.</p>
            </Link>

            {/* Slack Card */}
            <Link href="#" className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center transition-all group backdrop-blur-sm">
              <svg className="w-12 h-12 mb-6 text-gray-300 group-hover:text-[#4A154B] transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.523-2.522v-2.522h2.523zM15.165 17.688a2.527 2.527 0 0 1-2.523-2.523 2.526 2.526 0 0 1 2.523-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.52H15.165z"/>
              </svg>
              <h3 className="text-xl font-bold mb-2">Slack</h3>
              <p className="text-gray-400 text-sm">Join our Slack to get support and talk to maintainers.</p>
            </Link>

            {/* X (Twitter) Card */}
            <Link href="#" className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center transition-all group backdrop-blur-sm">
              <svg className="w-12 h-12 mb-6 text-gray-300 group-hover:text-[#1DA1F2] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <h3 className="text-xl font-bold mb-2">Twitter / X</h3>
              <p className="text-gray-400 text-sm">Follow us for product updates and news.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Light Theme - Resources & Social Proof Section */}
      <section className="bg-[#fcfcfc] py-32 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#1a1a1a]">
              Go deeper with Keploy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
            {/* Documentation Card */}
            <Link href="#" className="bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col">
              <div className="h-48 bg-orange-50 border-b border-gray-100 relative overflow-hidden flex items-center justify-center p-6">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDUgTCAyMCA1IE0gNSAwIEwgNSAyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDIzNCwgODgsIDEyLCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-60"></div>
                {/* Mock illustration */}
                <div className="w-32 h-24 bg-white rounded-xl shadow-sm border border-orange-100 flex flex-col p-2 transform group-hover:-translate-y-2 group-hover:scale-105 transition-transform duration-500 z-10">
                   <div className="h-2 w-1/2 bg-orange-200 rounded mb-2"></div>
                   <div className="h-2 w-full bg-gray-100 rounded mb-1"></div>
                   <div className="h-2 w-3/4 bg-gray-100 rounded mb-1"></div>
                   <div className="h-2 w-full bg-gray-100 rounded mb-1"></div>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">Documentation &rarr;</h3>
                <p className="text-gray-600 leading-relaxed">Explore comprehensive guides, API references, and architecture docs.</p>
              </div>
            </Link>

            {/* Blog Card */}
            <Link href="#" className="bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col">
              <div className="h-48 bg-blue-50 border-b border-gray-100 relative overflow-hidden flex items-center justify-center p-6">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/50 blur-[50px] rounded-full"></div>
                 {/* Mock illustration */}
                <div className="flex gap-3 z-10 transform group-hover:translate-x-2 transition-transform duration-500">
                  <div className="w-16 h-24 bg-white rounded-lg shadow-sm border border-blue-100 flex flex-col p-2">
                     <div className="h-10 w-full bg-blue-100 rounded mb-2"></div>
                     <div className="h-2 w-full bg-gray-100 rounded mb-1"></div>
                  </div>
                  <div className="w-16 h-24 bg-white rounded-lg shadow-sm border border-blue-100 flex flex-col p-2 -translate-y-4">
                     <div className="h-10 w-full bg-blue-100 rounded mb-2"></div>
                     <div className="h-2 w-full bg-gray-100 rounded mb-1"></div>
                  </div>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Blog &rarr;</h3>
                <p className="text-gray-600 leading-relaxed">Read the latest engineering articles, case studies, and tutorials.</p>
              </div>
            </Link>

            {/* Quickstarts Card */}
            <Link href="#" className="bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col lg:col-span-1 md:col-span-2">
              <div className="h-48 bg-gray-50 border-b border-gray-100 relative overflow-hidden flex items-center justify-center p-6">
                 <div className="w-full max-w-[200px] h-20 bg-gray-900 rounded-xl shadow-lg border border-gray-700 flex flex-col p-3 transform group-hover:scale-105 transition-transform duration-500">
                    <div className="flex items-center gap-1.5 mb-3">
                       <div className="w-2 h-2 rounded-full bg-red-500"></div>
                       <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                       <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-green-400 font-mono text-[10px]">&gt; npm install -g keploy</div>
                    <div className="text-gray-400 font-mono text-[10px] mt-1">Installing...</div>
                 </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-3 group-hover:text-gray-600 transition-colors">Quickstarts &rarr;</h3>
                <p className="text-gray-600 leading-relaxed">Get up and running with Keploy in under 5 minutes for your specific stack.</p>
              </div>
            </Link>
          </div>

          {/* Social Proof */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center border-t border-gray-200 pt-20">
            <div>
              <h4 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-3">Open Source</h4>
              <p className="text-gray-500 font-medium">Built in the open. 17k+ stars on GitHub.</p>
            </div>
            <div>
              <h4 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-3">Global Networks</h4>
              <p className="text-gray-500 font-medium">Trusted by leading enterprises worldwide.</p>
            </div>
            <div>
              <h4 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-3">Secure</h4>
              <p className="text-gray-500 font-medium">SOC2 Type II & GDPR Compliant.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityHub;
