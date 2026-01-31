import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "Neon City Infrastructure",
    client: "Metropolis Gov",
    category: "Smart City AI",
    year: "2024",
    desc: "An AI-driven traffic management system reducing congestion by 40%."
  },
  {
    title: "Quantum Financial Core",
    client: "Nebula Bank",
    category: "Fintech Security",
    year: "2023",
    desc: "Next-gen banking interface secured by quantum-resistant encryption."
  },
  {
    title: "Aether Health Platform",
    client: "MedTech Inc",
    category: "Web Application",
    year: "2024",
    desc: "Telemedicine platform connecting patients with specialists via WebRTC."
  },
   {
    title: "Vortex Gaming Hub",
    client: "StreamLine",
    category: "Web Experience",
    year: "2023",
    desc: "High-performance community platform for e-sports professionals."
  }
];

const WorkPage: React.FC = () => {
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
          <span className="text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase mb-4 inline-block">
            Case Studies
          </span>
          {/* Added leading-normal and pb-2 to prevent text clipping */}
          <h1 className="text-5xl md:text-7xl font-display font-medium text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 opacity-75 mb-6 tracking-tight leading-normal pb-2">
            Digital Landmarks.
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
             {projects.map((project, i) => (
                 <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    // Changed transition-all to transition-colors to prevent layout jumps
                    className="group relative block w-full bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden hover:bg-white/[0.05] transition-colors duration-500"
                 >
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {/* Image Placeholder area */}
                        <div className="h-64 md:h-auto bg-gradient-to-br from-slate-900 to-black relative overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(6,182,212,0.2),transparent)]" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-white/10 font-display font-bold text-6xl tracking-tighter group-hover:scale-110 transition-transform duration-700">
                                    {project.title.split(' ')[0]}
                                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 md:p-12 flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-xs font-mono text-cyan-400">{project.category}</span>
                                    <span className="text-xs font-mono text-slate-500">{project.year}</span>
                                </div>
                                <h2 className="text-3xl font-display font-bold text-white mb-4">{project.title}</h2>
                                <p className="text-slate-400 font-light leading-relaxed mb-8">
                                    {project.desc}
                                </p>
                            </div>
                            
                            {/* Replaced gap transition with transform translate for smoother animation (no jumps) */}
                            <div className="flex items-center gap-2 text-white font-medium">
                                View Case Study 
                                <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                            </div>
                        </div>
                    </div>
                 </motion.div>
             ))}
        </div>
      </div>
    </div>
  );
};

export default WorkPage;