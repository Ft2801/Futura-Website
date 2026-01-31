import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We dive deep into your core objectives, deconstructing complex problems into clear, actionable roadmaps."
  },
  {
    num: "02",
    title: "Design",
    desc: "Visualizing the unseen. We craft high-fidelity prototypes that blend aesthetics with intuitive functionality."
  },
  {
    num: "03",
    title: "Development",
    desc: "Code is our poetry. We build robust, scalable systems using the most advanced stacks available."
  },
  {
    num: "04",
    title: "Evolution",
    desc: "Launch is just the beginning. We use data-driven insights to continuously refine and expand your digital footprint."
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="w-full py-20 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center">
          <span className="text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase mb-4 inline-block">
            Methodology
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-medium text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 opacity-75 tracking-tight leading-normal pb-2">
            From Concept to Reality
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group text-center md:text-left"
            >
              <div className="text-6xl font-display font-bold text-white/5 mb-6 group-hover:text-white/10 transition-colors duration-500 flex justify-center md:justify-start">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                {step.title}
              </h3>
              <p className="text-sm font-light text-slate-400 leading-relaxed md:border-l md:border-white/10 md:pl-4 group-hover:border-cyan-500/50 transition-colors duration-300">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;