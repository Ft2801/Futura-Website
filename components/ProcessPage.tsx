import React from 'react';
import { motion } from 'framer-motion';

const ProcessPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 md:px-12 min-h-screen">
      <div className="max-w-5xl mx-auto">
         {/* Header */}
         <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          {/* Added leading-normal and pb-2 to prevent text clipping */}
          <h1 className="text-5xl md:text-7xl font-display font-medium text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 opacity-75 mb-6 tracking-tight leading-normal pb-2">
            Chaos to Order.
          </h1>
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 space-y-24">
            {[
                {
                    step: "01",
                    title: "Immersion & Discovery",
                    desc: "We don't just take a brief. We embed ourselves in your reality. We analyze competitors, user psychology, and market voids to define a winning strategy.",
                    detail: "Deliverables: Strategy Doc, User Personas, Technical Scope"
                },
                {
                    step: "02",
                    title: "Architecture & Design",
                    desc: "Structure before surface. We map out the user journey (UX) before applying the visual layer (UI). We prototype high-fidelity interactions to validate concepts early.",
                    detail: "Deliverables: Wireframes, Figma Prototypes, Design System"
                },
                {
                    step: "03",
                    title: "Development & Engineering",
                    desc: "The heavy lifting. Our engineers build clean, modular code. We use CI/CD pipelines to ensure rapid iteration and zero-downtime deployments.",
                    detail: "Deliverables: Production Code, API Documentation, Admin CMS"
                },
                {
                    step: "04",
                    title: "Launch & Scale",
                    desc: "We monitor performance metrics in real-time. Post-launch, we iterate based on user data to maximize conversion and engagement.",
                    detail: "Deliverables: Analytics Dashboard, Growth Strategy"
                }
            ].map((item, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="pl-12 md:pl-16 relative"
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="absolute -left-[5px] md:-left-[5px] top-2 w-2.5 h-2.5 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                    <span className="text-cyan-500 font-mono text-sm mb-2 block">{item.step}</span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">{item.title}</h2>
                    <p className="text-slate-400 text-lg leading-relaxed mb-4 max-w-2xl">{item.desc}</p>
                    <p className="text-sm text-slate-500 font-mono border-t border-white/5 pt-4 inline-block">{item.detail}</p>
                </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessPage;