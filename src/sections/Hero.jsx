import React from 'react';
import Planet from '../components/Planet';

export default function Hero() {
  return (
    <section 
      id="hero-container" 
      className="relative w-full h-screen bg-[#080807] overflow-hidden"
    >
      {/* 3D Canvas Background Layer */}
      <div className="absolute inset-0 z-0">
        <Planet />
      </div>

      {/* Radial Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,#080807_100%)] opacity-70 pointer-events-none"></div>

      {/* Foreground Typography Layer */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 pointer-events-none">
        
        <div className="flex items-center gap-3 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#F5B800] animate-pulse"></span>
          <span className="font-mono text-xs md:text-sm uppercase tracking-[0.4em] text-[#F5B800]">
            Irie Web Studios // Kingston
          </span>
        </div>

        <h1 className="text-[12vw] sm:text-[8vw] md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-[#F4F3EF] mix-blend-difference mb-8 max-w-5xl">
          We Engineer <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30">
            Platforms
          </span>
        </h1>

        <p className="font-mono text-sm md:text-base text-[#8E8C84] tracking-widest uppercase mb-12 max-w-2xl">
          High-Performance WebGL • Custom Architecture • Zero Templates
        </p>

        {/* Buttons (pointer-events-auto so they are clickable) */}
        <div className="flex flex-col sm:flex-row items-center gap-6 pointer-events-auto">
          <a
            href="#works"
            className="px-10 py-5 bg-[#F5B800] text-[#080807] font-mono text-sm uppercase tracking-widest font-bold hover:bg-white transition-all duration-300 transform hover:-translate-y-1"
          >
            View Architecture
          </a>
          <a
            href="#contact"
            className="px-10 py-5 border border-white/20 text-[#F4F3EF] font-mono text-sm uppercase tracking-widest hover:border-[#F5B800] hover:text-[#F5B800] transition-all duration-300"
          >
            Initiate Project
          </a>
        </div>

      </div>
    </section>
  );
}