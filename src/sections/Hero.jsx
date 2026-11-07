import React from 'react';
import Planet from '../components/Planet';

export default function Hero() {
  return (
    <section 
      id="hero-container" 
      className="relative w-full min-h-screen bg-[#080807] text-[#F4F3EF] pt-20 flex flex-col"
    >
      {/* Top Ticker / Status Bar */}
      <div className="w-full border-b border-white/10 px-6 py-3 flex justify-between items-center bg-[#080807] z-10">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 bg-[#F5B800] animate-pulse"></span>
          <span className="font-mono text-[10px] tracking-widest text-[#F5B800] uppercase">
            System Online // Kingston, JA
          </span>
        </div>
        <span className="font-mono text-[10px] tracking-widest text-[#8E8C84] uppercase hidden sm:block">
          Irie Web Studios — v2.0
        </span>
      </div>

      {/* Main Split Grid */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
        
        {/* Left: Heavy Editorial Typography */}
        <div className="lg:col-span-7 flex flex-col justify-between p-6 lg:p-16 relative">
          
          <div className="max-w-2xl mt-10 lg:mt-20">
            <h1 className="text-6xl sm:text-7xl lg:text-[6.5rem] font-black uppercase tracking-tighter leading-[0.85] mb-8">
              Engineered <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#F4F3EF] to-[#8E8C84]">
                To Convert.
              </span>
            </h1>
            
            <p className="font-mono text-sm leading-relaxed text-[#8E8C84] max-w-md uppercase tracking-widest border-l border-[#F5B800] pl-4">
              We build brutalist digital architecture, high-performance WebGL systems, and bespoke platforms.
            </p>
          </div>

          <div className="mt-20 flex flex-wrap gap-4">
            <a href="#works" className="px-8 py-4 bg-[#F5B800] text-[#080807] font-mono text-xs uppercase tracking-[0.2em] font-bold hover:bg-white transition-colors">
              [ View Architecture ]
            </a>
            <a href="#contact" className="px-8 py-4 border border-white/20 text-[#F4F3EF] font-mono text-xs uppercase tracking-[0.2em] hover:border-[#F5B800] hover:text-[#F5B800] transition-colors">
              [ Initialize ]
            </a>
          </div>
        </div>

        {/* Right: Contained 3D Viewport */}
        <div className="lg:col-span-5 relative min-h-[500px] lg:min-h-full bg-[#0a0a09]">
          {/* Viewport Crosshairs */}
          <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/30 z-10"></div>
          <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/30 z-10"></div>
          <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-white/30 z-10"></div>
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/30 z-10"></div>
          
          <Planet />
        </div>

      </div>
    </section>
  );
}