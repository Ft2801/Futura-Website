import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Content Layer */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: -40 }} // Move slightly upwards as requested
          // Increased duration to 5s (doubled) for an extremely slow, cinematic float-in
          transition={{ duration: 5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <h1 className="text-5xl md:text-8xl font-display font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 opacity-75 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            The future is here
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;