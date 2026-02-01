import React from 'react';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 md:px-12 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          {/* Added leading-normal and pb-2 to prevent text clipping */}
          <h1 className="text-5xl md:text-7xl font-display font-medium text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 opacity-75 mb-6 tracking-tight leading-normal pb-2">
            Our DNA
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 font-light max-w-3xl mx-auto leading-relaxed">
            We are a collective of digital artisans, forging the path between human intuition and machine intelligence.
          </p>
        </motion.div>

        {/* Content Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-3xl font-display font-bold text-white mb-6">The Origin</h3>
            <p className="text-slate-400 leading-loose text-lg">
              Founded in 2024, Futura began with a singular premise: the internet is no longer a document viewer, but a spatial environment. We rejected the grid, the template, and the static page. Instead, we embraced fluidity, physics, and immersion.
            </p>
          </motion.div>
          <div className="relative h-64 w-full bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden">
             <div className="absolute w-32 h-32 bg-cyan-400/20 blur-[50px] animate-pulse" />
             <div className="text-6xl font-display font-bold text-white/5">2024</div>
          </div>
        </div>

        {/* Philosophy Grid */}
        <div className="mb-32">
          <h3 className="text-3xl font-display font-bold text-center text-white mb-16">Core Philosophy</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Radical Simplicity", desc: "Complexity is easy. Simplicity is the ultimate sophistication." },
              { title: "Fluid Motion", desc: "Static is dead. Every interaction should respond with organic physics." },
              { title: "Future Proof", desc: "We don't build for today. We build for the hardware of tomorrow." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 border border-white/10 bg-white/[0.02] rounded-2xl"
              >
                <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
                <p className="text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
             <h3 className="text-3xl font-display font-bold text-white mb-12">The Architects</h3>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {['Alex Vance', 'Sarah Li', 'Jonas Kahn', 'Elena Roy'].map((name, i) => (
                    <div key={i} className="group">
                        <div className="w-full aspect-square bg-white/5 rounded-2xl mb-4 border border-white/5 overflow-hidden relative">
                             {/* Placeholder for team image */}
                             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                             <div className="absolute bottom-4 left-4 text-left opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                                <p className="text-xs text-cyan-300 uppercase tracking-wider">Founder</p>
                             </div>
                        </div>
                        <h5 className="text-lg font-medium text-white">{name}</h5>
                    </div>
                ))}
             </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;