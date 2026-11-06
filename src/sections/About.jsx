import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const capabilities = [
    {
      num: "01",
      title: "FULL-STACK ARCHITECTURE",
      desc: "Next.js, React, Node.js, and edge-deployed web systems built from scratch with zero template bloat, optimized for high throughput and speed."
    },
    {
      num: "02",
      title: "3D WEB & INTERACTIVE UI",
      desc: "Three.js, React Three Fiber, WebGL, and GSAP motion choreography that commands immediate visual authority and immersion."
    },
    {
      num: "03",
      title: "HIGH-PERFORMANCE SYSTEMS",
      desc: "Rigorous performance audits, sub-second mobile load times, and clean, modular codebases designed to scale seamlessly."
    }
  ];

  return (
    <section id="about" className="relative w-full py-24 md:py-32 bg-obsidian text-alabaster px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-amberGold"></span>
              <span className="font-mono text-amberGold text-xs uppercase tracking-widest">The Architect</span>
            </div>
            <h2 className="font-bold text-3xl md:text-5xl lg:text-6xl tracking-tight max-w-2xl">
              ENGINEERED FOR PRECISION. BUILT FOR IMPACT.
            </h2>
          </div>
          <p className="text-gray-400 text-sm md:text-base max-w-md mt-6 md:mt-0 leading-relaxed">
            Operating out of Kingston, Jamaica, I bridge the gap between heavy technical engineering and high-end digital design—delivering web architectures that perform as brilliantly as they look.
          </p>
        </div>

        {/* 3 Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {capabilities.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-charcoal p-8 md:p-10 border border-white/5 hover:border-amberGold/30 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-amberGold text-sm tracking-widest block mb-6 group-hover:translate-x-1 transition-transform">
                  {item.num} //
                </span>
                <h3 className="font-bold text-xl md:text-2xl mb-4 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-500">
                <span>SYSTEM STATUS</span>
                <span className="text-emerald-400">[ONLINE]</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bio Spotlight Footer */}
        <div className="bg-gradient-to-r from-charcoal to-[#161613] p-8 md:p-12 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h4 className="font-bold text-xl md:text-2xl mb-3 text-alabaster">
              Ryder Lee — Full-Stack Engineer & Digital Architect
            </h4>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Focused on modern web applications, interactive 3D WebGL experiences, and high-performance client ecosystems. Every line of code is written with intent, zero bloat, and uncompromising quality.
            </p>
          </div>
          <div className="flex flex-col gap-3 w-full md:w-auto">
            <div className="bg-obsidian px-6 py-4 border border-white/10 text-center font-mono text-xs text-amberGold tracking-wider">
              LOC: KINGSTON 6, JA (UTC-5)
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}