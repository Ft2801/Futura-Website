import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const Background: React.FC = () => {
  // Generate random particles
  const particles = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1, // 1px to 4px
      // Duration reduced to make them move 50% faster (approx 7s to 14s range instead of 10s-20s)
      duration: Math.random() * 7 + 7, 
      delay: Math.random() * 5,
      opacity: Math.random() * 0.3 + 0.1, // 0.1 to 0.4
    }));
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.5, delay: 0.5, ease: "easeInOut" }}
    >
      {/* Main Background Base */}
      <div className="absolute inset-0 bg-[#030014]" />
      
      {/* Soft Gradient Blobs (Background Lighting) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] animate-blob mix-blend-screen opacity-30">
        <div className="w-full h-full bg-[radial-gradient(circle,rgba(147,51,234,0.4)_0%,transparent_70%)]" />
      </div>
      
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] animate-blob animation-delay-2000 mix-blend-screen opacity-30">
        <div className="w-full h-full bg-[radial-gradient(circle,rgba(37,99,235,0.4)_0%,transparent_70%)]" />
      </div>
      
      <div className="absolute top-[20%] left-[30%] w-[40vw] h-[40vw] animate-blob-slow mix-blend-screen opacity-20">
        <div className="w-full h-full bg-[radial-gradient(circle,rgba(8,145,178,0.3)_0%,transparent_70%)]" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-white animate-float"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              boxShadow: `0 0 ${p.size * 2}px rgba(255, 255, 255, 0.5)`
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Background;