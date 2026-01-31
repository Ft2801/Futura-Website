import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, ChevronDown } from 'lucide-react';

const Contact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const options = [
    "Artificial Intelligence",
    "Web Experience",
    "Cybersecurity",
    "System Architecture",
    "Other"
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <section id="contact" className="w-full py-20 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        
        {/* Header - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase mb-4 inline-block">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-medium text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 opacity-75 mb-6 tracking-tight leading-normal pb-2">
            Start the Conversation
          </h2>
          
          <div className="flex justify-center gap-12 text-sm text-slate-400 font-light">
             <div className="flex items-center gap-3">
                <Mail size={16} className="text-cyan-400" />
                <span>hello@futura.dev</span>
             </div>
             <div className="flex items-center gap-3">
                <MapPin size={16} className="text-cyan-400" />
                <span>San Francisco, CA</span>
             </div>
          </div>
        </motion.div>

        {/* Minimalist Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="group relative">
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-transparent focus:outline-none focus:border-cyan-400 transition-colors peer font-light" 
                  placeholder="Name" 
                  id="name"
                />
                <label 
                  htmlFor="name" 
                  className="absolute left-0 top-4 text-slate-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-cyan-400 peer-focus:text-xs peer-valid:-top-6 peer-valid:text-xs pointer-events-none"
                >
                  Name
                </label>
              </div>
              <div className="group relative">
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-transparent focus:outline-none focus:border-cyan-400 transition-colors peer font-light" 
                  placeholder="Email" 
                  id="email"
                />
                <label 
                  htmlFor="email" 
                  className="absolute left-0 top-4 text-slate-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-cyan-400 peer-focus:text-xs peer-valid:-top-6 peer-valid:text-xs pointer-events-none"
                >
                  Email Address
                </label>
              </div>
            </div>
            
            {/* Custom Glassmorphism Dropdown */}
            <div className="group relative z-20" ref={dropdownRef}>
                <div 
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white cursor-pointer flex justify-between items-center"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className={selectedInterest ? "text-white" : "text-slate-500"}>
                        {selectedInterest || "Select an interest..."}
                    </span>
                    <ChevronDown size={16} className={`text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </div>
                
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 w-full mt-2 bg-[#030014]/90 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl z-50"
                        >
                            {options.map((option) => (
                                <div 
                                    key={option}
                                    className="px-6 py-3 text-slate-300 hover:bg-white/10 hover:text-white cursor-pointer transition-colors text-sm font-light"
                                    onClick={() => {
                                        setSelectedInterest(option);
                                        setIsOpen(false);
                                    }}
                                >
                                    {option}
                                </div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="group relative">
              <textarea 
                rows={1} 
                className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-transparent focus:outline-none focus:border-cyan-400 transition-colors peer resize-none font-light" 
                placeholder="Message" 
                id="message"
                onInput={(e) => {
                   e.currentTarget.style.height = 'auto';
                   e.currentTarget.style.height = e.currentTarget.scrollHeight + 'px';
                }}
              ></textarea>
              <label 
                htmlFor="message" 
                className="absolute left-0 top-4 text-slate-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-cyan-400 peer-focus:text-xs peer-valid:-top-6 peer-valid:text-xs pointer-events-none"
              >
                Project Details
              </label>
            </div>

            <div className="text-center pt-8">
                <button className="relative inline-flex items-center justify-center px-12 py-4 overflow-hidden font-medium text-white transition-all duration-300 ease-out border border-white/20 rounded-full hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] bg-transparent">
                    <span className="relative">Send Inquiry</span>
                </button>
            </div>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;