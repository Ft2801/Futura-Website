import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="w-full pt-20 pb-10 bg-[#030014]/30 backdrop-blur-md border-t border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">

          {/* Brand Column (Span 5) */}
          <div className="md:col-span-5">
            <Link to="/" className="text-2xl font-display font-bold text-white tracking-tighter mb-6 block">
              FUTURA
            </Link>
            <p className="text-slate-400 font-light text-sm leading-relaxed max-w-sm">
              We are a collective of digital artisans, forging the path between human intuition and machine intelligence. Building the digital landmarks of tomorrow.
            </p>
          </div>

          {/* Navigation Column (Span 2, Offset) */}
          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-white font-medium mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-light">
              <li><Link to="/about" className="hover:text-cyan-400 transition-colors duration-300">About</Link></li>
              <li><Link to="/services" className="hover:text-cyan-400 transition-colors duration-300">Services</Link></li>
              <li><Link to="/process" className="hover:text-cyan-400 transition-colors duration-300">Process</Link></li>
              <li><Link to="/work" className="hover:text-cyan-400 transition-colors duration-300">Work</Link></li>
            </ul>
          </div>

          {/* Socials Column (Span 2) */}
          <div className="md:col-span-2">
            <h4 className="text-white font-medium mb-6">Connect</h4>
             <ul className="space-y-4 text-sm text-slate-400 font-light">
              <li><a href="#" className="hover:text-cyan-400 transition-colors duration-300">Twitter / X</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors duration-300">LinkedIn</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors duration-300">Instagram</a></li>
              <li><Link to="/contact" className="hover:text-cyan-400 transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Legal Column (Span 2) */}
           <div className="md:col-span-3 lg:col-span-2">
            <h4 className="text-white font-medium mb-6">Legal</h4>
             <ul className="space-y-4 text-sm text-slate-400 font-light">
              <li><a href="#" className="hover:text-cyan-400 transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors duration-300">Terms of Service</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors duration-300">Cookie Settings</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
           <p className="text-slate-500 text-[10px] font-light uppercase tracking-[0.2em]">
            &copy; {new Date().getFullYear()} Futura Innovations.
          </p>
           <p className="text-slate-600 text-[10px] font-light uppercase tracking-widest">
            San Francisco, CA
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;