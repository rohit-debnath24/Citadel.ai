"use client";

import React from "react";

const capabilities = [
  {
    title: "100x Faster CI/CD",
    desc: "Stop waiting for slow integration tests. Keploy mocks dependencies so tests run locally in milliseconds.",
    icon: "⚡",
  },
  {
    title: "Zero Flaky Tests",
    desc: "Dynamic data like timestamps and random IDs are automatically handled and normalized.",
    icon: "🎯",
  },
  {
    title: "Native Integration",
    desc: "Works natively with your favorite test frameworks: Jest, GoTest, PyTest, JUnit, and more.",
    icon: "🧩",
  },
  {
    title: "Auto-updating Mocks",
    desc: "Mocks are generated from real traffic and update automatically when your API changes.",
    icon: "🔄",
  },
  {
    title: "High Coverage",
    desc: "Achieve 90% test coverage in minutes by converting production or staging traffic into tests.",
    icon: "📈",
  },
  {
    title: "Safe Sandboxing",
    desc: "Replay requests without mutating your actual database or calling third-party payment gateways.",
    icon: "🛡️",
  },
];

const CapabilitiesGrid = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">
            Why developers choose Keploy
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Built to solve the hardest parts of testing, so you can focus on shipping features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-card-bg border border-border hover:border-primary/50 transition-all shadow-sm hover:shadow-md group"
            >
              <div className="w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                {cap.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{cap.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {cap.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesGrid;
