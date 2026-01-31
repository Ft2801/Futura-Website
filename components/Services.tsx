import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Brain, Layout, Shield, Code, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    description: 'Advanced machine learning models and neural networks driving the next generation of automation.',
    icon: Brain,
  },
  {
    id: 'web',
    title: 'Web Design',
    description: 'Immersive, responsive, and aesthetic digital experiences crafted with pixel-perfect precision.',
    icon: Layout,
  },
  {
    id: 'cyber',
    title: 'Cybersecurity',
    description: 'Fortified digital infrastructures protecting your most valuable assets against modern threats.',
    icon: Shield,
  },
  {
    id: 'dev',
    title: 'Software Development',
    description: 'Scalable, robust, and high-performance software architectures tailored for enterprise needs.',
    icon: Code,
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      delay: i * 0.1,
    }
  })
};

const SpotlightCard: React.FC<{ service: ServiceItem; index: number }> = ({ service, index }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || !spotlightRef.current) return;
    
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Direct DOM manipulation avoids React Re-renders -> 60FPS Performance
    spotlightRef.current.style.opacity = '1';
    spotlightRef.current.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(255,255,255,0.1), transparent 40%)`;
  };

  const handleMouseLeave = () => {
    if (!spotlightRef.current) return;
    spotlightRef.current.style.opacity = '0';
  };

  return (
    <Link to="/services" className="block h-full">
        <motion.div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        custom={index}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={cardVariants}
        className="group relative h-full p-8 rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden transition-colors duration-300 will-change-transform hover:bg-white/[0.04]"
        >
        {/* Optimized Spotlight Effect Layer */}
        <div
            ref={spotlightRef}
            className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
            style={{ willChange: 'opacity, background' }}
        />

        <div className="relative z-10 flex flex-col h-full justify-between pointer-events-none">
            <div>
            <div className="mb-8 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10 text-white shadow-lg transition-transform duration-500 group-hover:scale-105 group-hover:bg-white/10">
                <service.icon size={26} strokeWidth={1.5} className="text-white/80 group-hover:text-white transition-colors" />
            </div>
            
            <h3 className="text-2xl font-display font-bold text-white mb-4 tracking-tight">
                {service.title}
            </h3>
            
            <p className="text-slate-400 text-sm leading-relaxed font-normal">
                {service.description}
            </p>
            </div>

            <div className="mt-10 flex items-center justify-between border-t border-white/5 pt-6 group-hover:border-white/20 transition-colors duration-500">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest group-hover:text-white transition-colors duration-300">Details</span>
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5 text-slate-400 group-hover:bg-white group-hover:text-black transition-all duration-300">
                <ArrowUpRight size={14} />
            </div>
            </div>
        </div>
        </motion.div>
    </Link>
  );
};

const Services: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen py-20 px-6 md:px-12 flex flex-col justify-center z-20">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-display font-medium text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 opacity-75 mb-6 tracking-tight leading-normal pb-2">
            Our Expertise
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <SpotlightCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;