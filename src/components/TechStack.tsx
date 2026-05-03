"use client";

import React from "react";

const integrations = [
  { name: "Echo", color: "text-blue-500" },
  { name: "GraphQL", color: "text-pink-600" },
  { name: "GitHub", color: "text-gray-900" },
  { name: "GitHub Actions", color: "text-blue-600" },
  { name: "GitLab", color: "text-orange-600" },
  { name: "Docker", color: "text-blue-500" },
  { name: "Kubernetes", color: "text-blue-700" },
  { name: "PostgreSQL", color: "text-blue-800" },
  { name: "MongoDB", color: "text-green-600" },
  { name: "Redis", color: "text-red-600" },
];

const TechStack = () => {
  return (
    <section className="py-16 border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-500 uppercase tracking-widest mb-4">
          Any Frameworks & CI/CD
        </div>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-4 py-4 px-2">
          {/* Double the array for seamless scrolling effect */}
          {[...integrations, ...integrations].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-6 py-3 bg-white border border-gray-200 rounded-full shadow-sm hover:border-gray-300 transition-colors mx-2 cursor-default"
            >
              {/* Fake logo placeholder */}
              <div className={`w-6 h-6 rounded-md bg-gray-50 border border-gray-100 flex items-center justify-center font-bold text-xs ${item.color}`}>
                {item.name.charAt(0)}
              </div>
              <span className="font-bold text-gray-800 text-sm">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Required CSS for the marquee animation (can be added to globals.css, but injected via Tailwind arbitrary variants here for simplicity) */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
};

export default TechStack;
