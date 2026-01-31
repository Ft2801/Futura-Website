import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: "Neon City Infrastructure",
    category: "Smart City AI",
    year: "2024"
  },
  {
    title: "Quantum Financial Core",
    category: "Fintech Security",
    year: "2023"
  },
  {
    title: "Aether Health Platform",
    category: "Web Application",
    year: "2024"
  }
];

const Projects: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-display font-medium text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 opacity-75 mb-6 tracking-tight leading-normal pb-2">
            Selected Works
          </h2>
          <div className="h-1 w-24 bg-white/20 rounded-full mx-auto mb-6" />
          <p className="text-slate-400 font-light max-w-md mx-auto text-sm leading-relaxed">
            We build digital products that define the future. Here is a selection of our most recent deployed systems.
          </p>
        </motion.div>

        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <Link key={index} to="/work">
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex items-center justify-between p-8 md:p-12 border-b border-white/10 hover:border-white/40 transition-colors duration-500 cursor-pointer bg-gradient-to-r from-transparent to-transparent hover:from-white/[0.03] hover:to-transparent"
                >
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-12">
                    <span className="text-xs font-mono text-cyan-400/70">0{index + 1}</span>
                    <h3 className="text-2xl md:text-4xl font-display font-medium text-white group-hover:text-cyan-200 transition-colors">
                    {project.title}
                    </h3>
                </div>
                
                <div className="flex items-center gap-8 md:gap-16">
                    <div className="hidden md:block text-right">
                    <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Category</p>
                    <p className="text-sm text-slate-300 font-light">{project.category}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <ArrowUpRight size={18} />
                    </div>
                </div>
                </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;