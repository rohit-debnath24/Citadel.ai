import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-20 border-t border-black/5 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold text-white">
                K
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900">keploy</span>
            </Link>
            <p className="text-sm text-gray-500 max-w-xs">
              The open-source testing platform for developers. 
              Built with ❤️ by the community.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-400">Product</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><Link href="#" className="hover:text-primary transition-colors">How it works</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Features</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Roadmap</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-400">Resources</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><Link href="#" className="hover:text-primary transition-colors">Documentation</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Tutorials</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-400">Company</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Legal</Link></li>
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
