import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Background from './components/Background';
import Home from './components/Home';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import ProcessPage from './components/ProcessPage';
import WorkPage from './components/WorkPage';
import Contact from './components/Contact';

// Page Transition Wrapper
const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
};

// Internal component to handle routes with useLocation
const AnimatedRoutes: React.FC = () => {
    const location = useLocation();

    // Note: Scroll reset logic moved to AnimatePresence onExitComplete
    // to ensure smooth transitions without jumping.

    return (
        <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
                <Route path="/services" element={<PageTransition><ServicesPage /></PageTransition>} />
                <Route path="/process" element={<PageTransition><ProcessPage /></PageTransition>} />
                <Route path="/work" element={<PageTransition><WorkPage /></PageTransition>} />
                <Route path="/projects" element={<PageTransition><WorkPage /></PageTransition>} />
                <Route path="/contact" element={<PageTransition><div className="pt-20"><Contact /></div></PageTransition>} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </AnimatePresence>
    );
};

const App: React.FC = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <HashRouter>
        <main className="w-full min-h-screen bg-transparent text-white selection:bg-cyan-500/30 selection:text-cyan-200 font-sans font-light">
          
          <Navbar />
          <Background />

          <div className="relative z-10 flex flex-col w-full min-h-screen">
             <AnimatedRoutes />
          </div>
          
          <Footer />
          
          {/* Noise Texture Overlay */}
          <div className="fixed inset-0 opacity-[0.02] pointer-events-none z-50 mix-blend-overlay" 
               style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }}>
          </div>
        </main>
    </HashRouter>
  );
};

export default App;