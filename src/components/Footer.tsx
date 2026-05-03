import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-20 border-t border-black/5 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                 <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <span className="text-xl font-black text-gray-900 tracking-tighter uppercase">Citadel.ai</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              The real-time AI Firewall for autonomous LLM agents. Born at Hackolution 2026.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-widest">Platform</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><Link href="#" className="hover:text-orange-600 transition-colors">Input Sanitizer</Link></li>
              <li><Link href="#" className="hover:text-orange-600 transition-colors">Shadow Models</Link></li>
              <li><Link href="#" className="hover:text-orange-600 transition-colors">Intent Drift</Link></li>
              <li><Link href="#" className="hover:text-orange-600 transition-colors">DLP Engine</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-widest">Resources</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><Link href="#" className="hover:text-orange-600 transition-colors">Documentation</Link></li>
              <li><Link href="#" className="hover:text-orange-600 transition-colors">Security Blog</Link></li>
              <li><Link href="#" className="hover:text-orange-600 transition-colors">Threat Database</Link></li>
              <li><Link href="#" className="hover:text-orange-600 transition-colors">API Reference</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-widest">Company</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><Link href="#" className="hover:text-orange-600 transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-orange-600 transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-orange-600 transition-colors">Legal</Link></li>
              <li><Link href="#" className="hover:text-orange-600 transition-colors">Privacy</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10 border-t border-black/5">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Keploy Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-gray-500">
             <Link href="#" className="hover:text-gray-900 transition-colors">GitHub</Link>
             <Link href="#" className="hover:text-gray-900 transition-colors">Twitter</Link>
             <Link href="#" className="hover:text-gray-900 transition-colors">LinkedIn</Link>
             <Link href="#" className="hover:text-gray-900 transition-colors">Slack</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
