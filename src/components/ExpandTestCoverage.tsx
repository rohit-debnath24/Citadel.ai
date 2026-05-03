"use client";

import React from "react";

const ExpandTestCoverage = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden border-t border-gray-200">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDUgTCAyMCA1IE0gNSAwIEwgNSAyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDIzNCwgODgsIDEyLCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-60"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-16 text-[#1a1a1a]">
          Expand Test Coverage with AI
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Top Left: Test Generation UI Mock */}
          <div className="bg-[#f4f5f6] border border-gray-200 rounded-3xl overflow-hidden shadow-sm flex flex-col min-h-[400px] relative group hover:shadow-lg transition-shadow">
            <div className="flex-1 p-6 flex items-center justify-center relative overflow-hidden">
                <div className="w-full max-w-sm bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
                    {/* Mock UI Header */}
                    <div className="bg-gray-50 border-b border-gray-100 p-3 flex gap-2">
                       <div className="w-3 h-3 rounded-full bg-red-400"></div>
                       <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                       <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    {/* Mock UI Body */}
                    <div className="p-4 bg-gray-50/50 font-mono text-[9px] sm:text-[10px] text-gray-500 relative">
                        <div className="text-blue-500 mb-2">POST /api/checkout</div>
                        <div>{"{"}</div>
                        <div className="ml-4 text-green-600">"status": "success"</div>
                        <div className="ml-4 text-orange-500">"transaction_id": "tx_123"</div>
                        <div>{"}"}</div>

                        {/* Floating Buttons */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2 shadow-2xl">
                           <button className="px-4 py-2 bg-orange-500 text-white rounded-full font-sans font-bold shadow-lg shadow-orange-500/30 flex items-center gap-2 text-xs">
                             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                             Generate Tests
                           </button>
                           <button className="px-4 py-2 bg-white text-orange-500 border border-orange-200 rounded-full font-sans font-bold shadow-lg flex items-center justify-center text-xs hover:bg-orange-50">
                             Generate Mocks
                           </button>
                        </div>
                    </div>
                    {/* Mock UI Bottom */}
                    <div className="p-3 border-t border-gray-100 bg-white flex gap-4 text-[10px]">
                       <div>
                         <span className="font-bold text-gray-700">Assertions (4)</span>
                         <div className="mt-1 flex items-center gap-1 text-green-600 bg-green-50 px-2 py-0.5 rounded"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Status 200</div>
                       </div>
                    </div>
                </div>
            </div>
          </div>

          {/* Top Right: Smart Assertions */}
          <div className="bg-[#fcfcfc] border border-gray-200 rounded-3xl overflow-hidden shadow-sm flex flex-col min-h-[400px] relative group hover:shadow-lg transition-shadow">
            <div className="p-8 pb-0">
               <div className="flex justify-between items-start mb-4">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 border border-orange-100">
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                   </div>
                   <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Smart Assertions</h3>
                 </div>
                 <div className="bg-white border border-gray-200 px-3 py-1 rounded-full text-xs font-bold text-gray-700 flex items-center gap-2 shadow-sm">
                   <div className="w-2 h-2 rounded-full bg-orange-500"></div> Catch Regressions
                 </div>
               </div>
               <p className="text-gray-600 text-lg">Auto-assert what matters, ignore noisy fields.</p>
            </div>
            <div className="flex-1 mt-8 relative overflow-hidden flex items-end justify-center">
               <div className="w-full max-w-sm absolute -bottom-6 flex items-end">
                 {/* Mock Graphic */}
                 <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-xl w-[60%] z-10 transform translate-x-4 -translate-y-4">
                    <div className="text-xs font-bold text-orange-500 mb-2 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                      Noise detected by Keploy
                    </div>
                    <div className="font-mono text-[9px] text-gray-400 bg-gray-50 p-2 rounded">
                      "timestamp": "..." // NOISE DETECTED<br/>
                      "uuid": "..." // NOISE DETECTED
                    </div>
                 </div>
                 <div className="bg-white border border-green-200 p-4 rounded-xl shadow-xl w-[60%] z-20">
                    <div className="text-xs font-bold text-green-600 mb-2 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      Stable Tests
                    </div>
                    <div className="font-mono text-[9px] text-gray-600 bg-green-50 p-2 rounded">
                      "user": "john_doe"<br/>
                      "timestamp": "&lt;ignored&gt;"
                    </div>
                 </div>
               </div>
            </div>
          </div>

          {/* Bottom Left: Auto Bug Detection */}
          <div className="bg-[#fcfcfc] border border-gray-200 rounded-3xl overflow-hidden shadow-sm flex flex-col min-h-[400px] relative group hover:shadow-lg transition-shadow">
            <div className="p-8 pb-0">
               <div className="flex justify-between items-start mb-4">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 border border-orange-100">
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" /></svg>
                   </div>
                   <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Auto Bug Detection</h3>
                 </div>
                 <div className="bg-white border border-gray-200 px-3 py-1 rounded-full text-xs font-bold text-gray-700 flex items-center gap-2 shadow-sm">
                   <div className="w-2 h-2 rounded-full bg-orange-500"></div> Anomaly flags
                 </div>
               </div>
               <p className="text-gray-600 text-lg">Detect anomalies in API responses and surface likely bugs—without writing manual checks.</p>
            </div>
            <div className="flex-1 mt-8 relative overflow-hidden flex items-center justify-center p-8">
               <div className="bg-white border border-orange-200 shadow-xl rounded-2xl p-4 w-full max-w-sm transform group-hover:scale-105 transition-transform duration-500">
                  <div className="absolute -top-3 -right-3 bg-red-50 text-red-600 border border-red-200 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    Buggy
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700 font-bold mb-3 border-b border-gray-100 pb-2">
                    <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                    Visit_CRUD_cycle
                  </div>
                  <div className="flex flex-col gap-2 font-mono text-xs">
                     <div className="flex items-center gap-2 text-gray-500"><span className="text-orange-400 font-bold">GET</span> Verify_visit_update</div>
                     <div className="flex items-center gap-2 text-red-500 bg-red-50 px-2 py-1 rounded"><span className="text-orange-400 font-bold">GET</span> Create_pet_for_visit <svg className="w-3 h-3 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></div>
                     <div className="flex items-center gap-2 text-gray-500"><span className="text-orange-400 font-bold">GET</span> Get_visit</div>
                  </div>
               </div>
            </div>
          </div>

          {/* Bottom Right: Regression Alerts */}
          <div className="bg-[#fcfcfc] border border-gray-200 rounded-3xl overflow-hidden shadow-sm flex flex-col min-h-[400px] relative group hover:shadow-lg transition-shadow">
            <div className="p-8 pb-0">
               <div className="flex justify-between items-start mb-4">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 border border-orange-100">
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                   </div>
                   <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Regression Alerts + Self-Healing</h3>
                 </div>
                 <div className="bg-white border border-gray-200 px-3 py-1 rounded-full text-xs font-bold text-gray-700 flex items-center gap-2 shadow-sm">
                   <div className="w-2 h-2 rounded-full bg-orange-500"></div> Auto-fixes
                 </div>
               </div>
               <p className="text-gray-600 text-lg">Detect regressions, notify fast, and keep tests updated as APIs evolve.</p>
            </div>
            
            <div className="flex-1 mt-8 p-6 grid grid-cols-2 md:grid-cols-4 gap-4 items-end">
               <div className="bg-gray-50 border border-gray-100 p-4 rounded-xl shadow-sm text-center transform group-hover:-translate-y-1 transition-transform">
                 <div className="text-orange-500 font-bold text-2xl mb-1">2.1K</div>
                 <div className="text-[9px] text-gray-500 uppercase tracking-wider font-bold">Total Failing APIs</div>
               </div>
               <div className="bg-gray-50 border border-gray-100 p-4 rounded-xl shadow-sm text-center transform group-hover:-translate-y-1 transition-transform delay-75">
                 <div className="text-green-500 font-bold text-2xl mb-1">75%</div>
                 <div className="text-[9px] text-gray-500 uppercase tracking-wider font-bold">Overall pass rate</div>
               </div>
               <div className="bg-gray-50 border border-gray-100 p-4 rounded-xl shadow-sm text-center transform group-hover:-translate-y-1 transition-transform delay-150">
                 <div className="text-red-500 font-bold text-2xl mb-1">25%</div>
                 <div className="text-[9px] text-gray-500 uppercase tracking-wider font-bold">Bugs caught pre-prod</div>
               </div>
               <div className="bg-gray-50 border border-gray-100 p-4 rounded-xl shadow-sm text-center transform group-hover:-translate-y-1 transition-transform delay-200">
                 <div className="text-orange-500 font-bold text-2xl mb-1">45%</div>
                 <div className="text-[9px] text-gray-500 uppercase tracking-wider font-bold">Manual QA hours saved</div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExpandTestCoverage;
