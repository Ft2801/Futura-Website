import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  "NEXUS", "CYBERDYNE", "ALPHANET", "OMEGA", "SIRIUS", "VORTEX"
];

const Partners: React.FC = () => {
  return (
    <section className="w-full py-20 border-y border-white/5 bg-white/[0.01] backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <p className="text-sm font-light tracking-[0.2em] text-slate-400 mb-12 uppercase">Trusted by Industry Leaders</p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
          {partners.map((partner, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 1 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-display font-bold tracking-tighter text-white"
            >
              {partner}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;