import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Layout, Shield, Code, Database, Globe, Smartphone, Cloud } from 'lucide-react';

const detailedServices = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description: "Deployment of Large Language Models (LLMs), Computer Vision, and Predictive Analytics.",
    features: ["Custom Neural Networks", "NLP Integration", "Automated Decision Systems", "Generative AI Art"]
  },
  {
    icon: Layout,
    title: "Immersive Web",
    description: "Award-winning frontend development using WebGL, Three.js, and React.",
    features: ["3D Product Configurator", "Micro-interactions", "Accessible UI/UX", "PWA Development"]
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Zero-trust architecture implementation and penetration testing.",
    features: ["End-to-End Encryption", "Vulnerability Assessment", "Blockchain Identity", "Real-time Monitoring"]
  },
  {
    icon: Code,
    title: "System Architecture",
    description: "Building the backbone of enterprise software with scalability in mind.",
    features: ["Microservices", "API Design", "Cloud Native (AWS/GCP)", "Legacy Migration"]
  }
];

const ServicesPage: React.FC = () => {
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
            What We Do
          </span>
          {/* Added leading-normal and pb-2 to prevent text clipping */}
          <h1 className="text-5xl md:text-7xl font-display font-medium text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 opacity-75 mb-6 tracking-tight leading-normal pb-2">
            Engineering the <br /> Impossible.
          </h1>
        </motion.div>

        {/* Detailed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {detailedServices.map((service, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="p-10 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors group"
                >
                    <service.icon className="w-12 h-12 text-cyan-400 mb-8" />
                    <h3 className="text-3xl font-display font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-slate-400 text-lg mb-8 leading-relaxed">{service.description}</p>
                    
                    <ul className="space-y-3">
                        {service.features.map((feature, k) => (
                            <li key={k} className="flex items-center text-slate-300 font-light">
                                <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-3" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            ))}
        </div>

        {/* Tech Stack Marquee (Static Representation for now) */}
        <div className="border-t border-white/10 pt-20">
            <h4 className="text-center text-xl text-white mb-12">Our Technology Stack</h4>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50">
                <Database size={32} />
                <Globe size={32} />
                <Smartphone size={32} />
                <Cloud size={32} />
                <Code size={32} />
                <Layout size={32} />
            </div>
        </div>
       </div>
    </div>
  );
};

export default ServicesPage;