"use client";

import React, { useState } from "react";

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState<"record" | "test">("record");

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            <span className="text-gradient">How Keploy </span>
            <span className="text-gradient-orange italic">Works</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Keploy sits alongside your application and automatically captures API calls and dependencies to generate tests and mocks.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center bg-card-bg border border-border rounded-3xl p-8 shadow-2xl relative">
           {/* Glow Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

          {/* Steps Description */}
          <div className="flex-1 space-y-8 z-10">
            <div 
              className={`p-6 rounded-2xl cursor-pointer transition-all border ${activeTab === "record" ? "border-primary/50 bg-primary/10 shadow-sm" : "border-transparent hover:border-black/10"}`}
              onClick={() => setActiveTab("record")}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center font-bold text-white">1</div>
                <h3 className="text-xl font-bold text-gray-900">Record Traffic</h3>
              </div>
              <p className="text-gray-600 pl-12 leading-relaxed">
                Run your application with Keploy. It transparently intercepts all API requests and external dependency calls, saving them as YAML files.
              </p>
            </div>

            <div 
              className={`p-6 rounded-2xl cursor-pointer transition-all border ${activeTab === "test" ? "border-primary/50 bg-primary/10 shadow-sm" : "border-transparent hover:border-black/10"}`}
              onClick={() => setActiveTab("test")}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center font-bold text-white">2</div>
                <h3 className="text-xl font-bold text-gray-900">Replay in CI</h3>
              </div>
              <p className="text-gray-600 pl-12 leading-relaxed">
                Run Keploy in test mode. It feeds recorded requests to your app and mocks the dependencies. It compares the response to ensure no regressions.
              </p>
            </div>
          </div>

          {/* Terminal Window - Now fully light mode */}
          <div className="flex-1 w-full z-10">
            <div className="rounded-xl overflow-hidden bg-white border border-gray-200 shadow-2xl">
              {/* Terminal Header */}
              <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                <span className="ml-4 text-xs text-gray-500 font-mono">bash - keploy</span>
              </div>
              
              {/* Terminal Body */}
              <div className="p-6 font-mono text-sm leading-relaxed overflow-hidden h-[300px] text-gray-800">
                {activeTab === "record" ? (
                  <div className="animate-fade-in">
                    <p className="text-gray-500 mb-2"># Start your application with Keploy record mode</p>
                    <p><span className="text-green-600">➜</span> <span className="text-blue-600">keploy</span> record -c "node app.js"</p>
                    <p className="mt-4 text-gray-600">Keploy: 2024/01/01 10:00:00 starting Keploy in record mode...</p>
                    <p className="text-gray-600">Keploy: 2024/01/01 10:00:01 proxy started at port 16789</p>
                    <br/>
                    <p className="text-yellow-600"># Sending a request to your API...</p>
                    <p className="mt-2 text-gray-600">Keploy: 2024/01/01 10:00:05 captured mock for MongoDB</p>
                    <p className="text-gray-600">Keploy: 2024/01/01 10:00:05 generated test-case-1.yaml</p>
                  </div>
                ) : (
                  <div className="animate-fade-in">
                    <p className="text-gray-500 mb-2"># Run tests in your CI/CD pipeline</p>
                    <p><span className="text-green-600">➜</span> <span className="text-blue-600">keploy</span> test -c "node app.js"</p>
                    <p className="mt-4 text-gray-600">Keploy: 2024/01/01 10:05:00 starting Keploy in test mode...</p>
                    <p className="text-gray-600">Keploy: 2024/01/01 10:05:01 serving mocks for MongoDB</p>
                    <br/>
                    <p className="text-green-600 font-bold">Test-case-1: PASSED</p>
                    <p className="text-gray-400 mt-2">====================================</p>
                    <p className="text-gray-900 font-bold">Total Tests: 1, Passed: 1, Failed: 0</p>
                    <p className="text-gray-400">====================================</p>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
