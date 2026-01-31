import React from 'react';

const Stats: React.FC = () => {
  return (
    <section className="w-full py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { value: "120+", label: "Clients Worldwide" },
            { value: "45", label: "Design Awards" },
            { value: "99%", label: "System Uptime" },
            { value: "24/7", label: "AI Support" }
          ].map((stat, i) => (
            <div key={i} className="text-center md:text-left">
              <h4 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">{stat.value}</h4>
              <p className="text-sm font-light text-slate-400 tracking-wider uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;