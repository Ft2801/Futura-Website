import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Process', href: '/process' },
  { name: 'Work', href: '/work' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine if we are on the home page for the initial animation delay
  const isHome = location.pathname === '/';
  // Updated delay to 2.0 seconds as requested
  const initialDelay = isHome ? 2.0 : 0.5;

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: initialDelay, ease: "easeOut" }}
        // Changed bg-[#030014]/80 to bg-[#030014]/30 to maintain brightness while keeping the blur effect
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || mobileMenuOpen ? 'bg-[#030014]/30 backdrop-blur-md py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-display font-bold text-white tracking-tighter hover:opacity-80 transition-opacity">
            FUTURA
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-light hover:text-white hover:tracking-widest transition-all duration-300 uppercase ${location.pathname === link.href ? 'text-white tracking-wide border-b border-cyan-500/50' : 'text-slate-300'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact"
              className="px-5 py-2 text-xs font-medium text-black bg-white rounded-full hover:bg-cyan-200 transition-colors uppercase tracking-wider"
            >
              Start Project
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white z-50 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#030014]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1 }}
              >
                <Link
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-display font-light text-white hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
             >
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl font-display font-medium text-black bg-white px-8 py-3 rounded-full mt-4 inline-block"
                >
                  Start Project
                </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;