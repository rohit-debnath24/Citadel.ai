"use client";

import React from "react";

const SecurityLayers = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden border-t border-gray-200">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDUgTCAyMCA1IE0gNSAwIEwgNSAyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDIzNCwgODgsIDEyLCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-60"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-16 text-[#1a1a1a]">
          Multi-Layer Security Stack
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Top Left: Outbound DLP */}
          <div className="bg-[#f4f5f6] border border-gray-200 rounded-3xl overflow-hidden shadow-sm flex flex-col min-h-[400px] relative group hover:shadow-lg transition-shadow">
            <div className="p-8 pb-0">
               <div className="flex justify-between items-start mb-4">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500 border border-blue-100">
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                   </div>
                   <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Outbound DLP</h3>
                 </div>
                 <div className="bg-white border border-gray-200 px-3 py-1 rounded-full text-xs font-bold text-gray-700 flex items-center gap-2 shadow-sm">
                   <div className="w-2 h-2 rounded-full bg-blue-500"></div> PII & Secret Redaction
                 </div>
               </div>
               <p className="text-gray-600 text-lg">Prevent sensitive data leakage through LLM responses in real-time.</p>
            </div>
            <div className="flex-1 p-6 flex items-center justify-center relative overflow-hidden">
                <div className="w-full max-w-sm bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden font-mono text-[10px] sm:text-xs">
                    <div className="bg-gray-50 border-b border-gray-100 p-3 text-gray-400">Response Inspector</div>
                    <div className="p-4 space-y-3">
                       <div className="text-gray-500 italic">"Here is the user profile: "</div>
                       <div className="flex flex-col gap-2">
                          <div className="flex justify-between items-center bg-gray-50 p-2 rounded border border-gray-100">
                             <span className="text-gray-400">Email: <span className="text-red-400 blur-[2px]">john@private.com</span></span>
                             <span className="text-[9px] bg-blue-500 text-white px-1 rounded">REDACTED</span>
                          </div>
                          <div className="flex justify-between items-center bg-gray-50 p-2 rounded border border-gray-100">
                             <span className="text-gray-400">API_KEY: <span className="text-red-400 blur-[2px]">sk_live_987654321</span></span>
                             <span className="text-[9px] bg-blue-500 text-white px-1 rounded">MASKED</span>
                          </div>
                       </div>
                    </div>
                </div>
            </div>
          </div>

          {/* Top Right: Policy Engine */}
          <div className="bg-[#fcfcfc] border border-gray-200 rounded-3xl overflow-hidden shadow-sm flex flex-col min-h-[400px] relative group hover:shadow-lg transition-shadow">
            <div className="p-8 pb-0">
               <div className="flex justify-between items-start mb-4">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 border border-orange-100">
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                   </div>
                   <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Policy Engine</h3>
                 </div>
                 <div className="bg-white border border-gray-200 px-3 py-1 rounded-full text-xs font-bold text-gray-700 flex items-center gap-2 shadow-sm">
                   <div className="w-2 h-2 rounded-full bg-orange-500"></div> Rule Enforcement
                 </div>
               </div>
               <p className="text-gray-600 text-lg">Enforce custom security policies and intent drift thresholds.</p>
            </div>
            <div className="flex-1 mt-8 relative overflow-hidden flex items-center justify-center p-6">
               <div className="w-full max-w-sm bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden font-mono text-xs">
                  <div className="bg-gray-50 p-2 border-b border-gray-100 text-[10px] text-gray-400">active_policies.yaml</div>
                  <div className="p-4 space-y-2">
                     <div className="flex items-center gap-2 text-green-600">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                        <span>block_external_exfil: true</span>
                     </div>
                     <div className="flex items-center gap-2 text-green-600">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                        <span>intent_drift_threshold: 0.45</span>
                     </div>
                     <div className="flex items-center gap-2 text-orange-500">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                        <span>flag_unknown_tools: warn</span>
                     </div>
                  </div>
               </div>
            </div>
          </div>

          {/* Bottom Left: Adversarial Classifier */}
          <div className="bg-[#fcfcfc] border border-gray-200 rounded-3xl overflow-hidden shadow-sm flex flex-col min-h-[400px] relative group hover:shadow-lg transition-shadow">
            <div className="p-8 pb-0">
               <div className="flex justify-between items-start mb-4">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-500 border border-red-100">
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" /></svg>
                   </div>
                   <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Shadow Model</h3>
                 </div>
                 <div className="bg-white border border-gray-200 px-3 py-1 rounded-full text-xs font-bold text-gray-700 flex items-center gap-2 shadow-sm">
                   <div className="w-2 h-2 rounded-full bg-red-500"></div> LLM Guard
                 </div>
               </div>
               <p className="text-gray-600 text-lg">High-speed adversarial classification using fine-tuned LlamaGuard & DistilBERT.</p>
            </div>
            <div className="flex-1 mt-8 relative overflow-hidden flex items-center justify-center p-8">
               <div className="bg-[#0e1117] border border-red-500/30 shadow-xl rounded-2xl p-4 w-full max-w-sm font-mono text-xs">
                  <div className="flex justify-between text-gray-500 mb-2"><span>Scanning...</span> <span className="text-red-400">99.9% Prob.</span></div>
                  <div className="p-2 bg-red-500/10 rounded border border-red-500/20 text-red-400 mb-2 italic">"SYSTEM_OVERRIDE_ATTEMPT"</div>
                  <div className="h-1 bg-white/10 rounded-full"><div className="h-full bg-red-500 w-full"></div></div>
               </div>
            </div>
          </div>

          {/* Bottom Right: Real-time Metrics */}
          <div className="bg-[#fcfcfc] border border-gray-200 rounded-3xl overflow-hidden shadow-sm flex flex-col min-h-[400px] relative group hover:shadow-lg transition-shadow">
            <div className="p-8 pb-0">
               <div className="flex justify-between items-start mb-4">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-500 border border-green-100">
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                   </div>
                   <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Latency & Security KPIs</h3>
                 </div>
                 <div className="bg-white border border-gray-200 px-3 py-1 rounded-full text-xs font-bold text-gray-700 flex items-center gap-2 shadow-sm">
                   <div className="w-2 h-2 rounded-full bg-green-500"></div> Low Overhead
                 </div>
               </div>
               <p className="text-gray-600 text-lg">Maintain sub-300ms latency while ensuring total session integrity.</p>
            </div>
            
            <div className="flex-1 mt-8 p-6 grid grid-cols-2 md:grid-cols-4 gap-4 items-end">
               <div className="bg-gray-50 border border-gray-100 p-4 rounded-xl shadow-sm text-center">
                 <div className="text-blue-500 font-bold text-2xl mb-1">&lt;300ms</div>
                 <div className="text-[9px] text-gray-500 uppercase tracking-wider font-bold">Latency Tax</div>
               </div>
               <div className="bg-gray-50 border border-gray-100 p-4 rounded-xl shadow-sm text-center">
                 <div className="text-green-500 font-bold text-2xl mb-1">99.9%</div>
                 <div className="text-[9px] text-gray-500 uppercase tracking-wider font-bold">Detection rate</div>
               </div>
               <div className="bg-gray-50 border border-gray-100 p-4 rounded-xl shadow-sm text-center">
                 <div className="text-red-500 font-bold text-2xl mb-1">0</div>
                 <div className="text-[9px] text-gray-500 uppercase tracking-wider font-bold">Leakage Events</div>
               </div>
               <div className="bg-gray-50 border border-gray-100 p-4 rounded-xl shadow-sm text-center">
                 <div className="text-orange-500 font-bold text-2xl mb-1">24/7</div>
                 <div className="text-[9px] text-gray-500 uppercase tracking-wider font-bold">Active Proxy</div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SecurityLayers;
