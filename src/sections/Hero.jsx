import React from 'react';
import { motion } from 'framer-motion'; // Ensure you run: npm install framer-motion

export default function Hero() {
  return (
    <section 
      id="hero-container" 
      className="relative w-full min-h-screen bg-[#080807] text-[#F4F3EF] pt-16 sm:pt-20 flex flex-col overflow-hidden selection:bg-[#F5B800] selection:text-[#080807]"
    >
      {/* Top Status Bar - Refined to look like a System Terminal */}
      <div className="w-full border-b border-white/5 px-4 sm:px-6 py-3 flex justify-between items-center bg-[#080807]/80 backdrop-blur-md z-20">
        <div className="flex items-center gap-3">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F5B800] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F5B800]"></span>
          </div>
          <span className="font-mono text-[9px] sm:text-[11px] tracking-[0.2em] text-[#F5B800] uppercase font-medium">
            System State: Optimal // Location: Kingston, JA
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-6">
            <span className="font-mono text-[9px] tracking-widest text-white/30 uppercase">
              Est. 2024
            </span>
            <span className="font-mono text-[9px] tracking-widest text-[#8E8C84] uppercase">
              Digital Architecture Division
            </span>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 relative z-10">
        
        {/* Left: Heavy Editorial Typography */}
        <div className="lg:col-span-7 flex flex-col justify-center p-6 py-12 lg:p-20 relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <h1 className="text-[11vw] sm:text-7xl lg:text-[8.5rem] font-black uppercase tracking-tighter leading-[0.8] mb-8">
              <span className="block">Engineered</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F4F3EF] via-[#8E8C84] to-[#444]">
                To Convert.
              </span>
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                <p className="font-mono text-xs sm:text-sm leading-relaxed text-[#8E8C84] max-w-xs uppercase tracking-widest border-l-2 border-[#F5B800] pl-4">
                  Specializing in brutalist digital architecture and high-conversion platforms. We build systems, not just websites.
                </p>
                <div className="flex flex-col gap-2">
                    <span className="font-mono text-[10px] text-white/20 uppercase tracking-tighter">Technical Specs</span>
                    <span className="font-mono text-[10px] text-[#F5B800] uppercase">v2.0.1 // Stable</span>
                </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-16 flex flex-wrap gap-4"
          >
            <a href="#works" className="group relative px-8 py-4 bg-[#F5B800] text-[#080807] font-mono text-xs uppercase tracking-[0.2em] font-bold transition-all hover:scale-105 active:scale-95">
              [ View Architecture ]
            </a>
            <a href="#contact" className="px-8 py-4 border border-white/10 text-[#F4F3EF] font-mono text-xs uppercase tracking-[0.2em] transition-all hover:bg-white hover:text-[#080807] hover:border-white">
              [ Initialize ]
            </a>
          </motion.div>
        </div>

        {/* Right: The "Kinetic Fragment" (The Agency Flex) */}
        <div className="lg:col-span-5 relative h-[400px] lg:h-auto bg-[#0a0a09] flex items-center justify-center overflow-hidden border-l border-white/5">
          
          {/* Deep ambient gold glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(245,184,0,0.15)_0%,transparent_70%)]"></div>

          {/* Abstract Brutalist Sculpture (CSS Based) */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
            {/* Layered Angular Slabs instead of circles */}
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-full h-full border border-white/10 rotate-45"
            />
            <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute w-3/4 h-3/4 border border-white/20 rotate-12"
            />
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute w-1/2 h-1/2 border-2 border-[#F5B800] rotate-[-45deg] shadow-[0_0_30px_rgba(245,184,0,0.3)]"
            />
            
            {/* The Core Monolith */}
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 90, 180, 270, 360] 
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute w-12 h-12 bg-[#F5B800] rotate-45 shadow-[0_0_50px_rgba(245,184,0,0.6)] z-10"
            ></motion.div>
          </div>

          {/* Tech Data Overlay (Right Edge) */}
          <div className="absolute right-6 bottom-10 font-mono text-[9px] text-white/20 uppercase text-right leading-loose pointer-events-none">
            <div>Coord: 17.9714° N, 76.7936° W</div>
            <div>System: R3F_FALLBACK</div>
            <div>Engine: Kinetic_v2</div>
          </div>

          {/* The "Engineering" Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
        </div>

      </div>
    </section>
  );
}
