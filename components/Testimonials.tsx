import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-display font-medium text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 opacity-75 tracking-tight leading-normal pb-2">
            What they say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              text: "Futura Innovations transformed our entire digital infrastructure. The AI integration alone increased our efficiency by 300%.",
              author: "Sarah Jenkins",
              role: "CTO, TechFlow"
            },
            {
              text: "The level of detail in their web design is unmatched. They don't just build websites; they create immersive digital worlds.",
              author: "Marcus Chen",
              role: "Director, ArtStream"
            },
            {
              text: "Cybersecurity was our biggest concern. Their team implemented protocols that are literally years ahead of the industry standard.",
              author: "Elena Rodriguez",
              role: "CEO, SecureNet"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors"
            >
              <p className="text-lg font-light text-slate-200 leading-relaxed mb-8">"{item.text}"</p>
              <div>
                <p className="text-white font-medium">{item.author}</p>
                <p className="text-sm text-cyan-400/60">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;