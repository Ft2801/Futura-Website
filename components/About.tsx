import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="w-full py-20 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Text Content - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          {/* Added pb-2 and changed leading-tight to leading-normal to prevent descenders (g, y, j) from being cut off by bg-clip-text */}
          <h2 className="text-4xl md:text-6xl font-display font-medium text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 opacity-75 mb-8 leading-normal pb-2">
            Architects of the <br />
            Digital Ether.
          </h2>
          <p className="text-slate-400 font-light text-lg leading-relaxed mb-6 mx-auto max-w-2xl">
            We are not just a creative agency; we are a collective of visionaries, engineers, and artists. 
            We believe that the boundary between the physical and digital worlds is dissolving, and we exist 
            to shape what comes next.
          </p>
          <p className="text-slate-400 font-light text-lg leading-relaxed mx-auto max-w-2xl">
            From hyper-scale AI infrastructures to emotionally resonant brand experiences, our work 
            defines the cutting edge of possibility.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;