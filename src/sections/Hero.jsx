import React from "react";
import Planet from "../components/Planet";

export default function Hero() {
  return (
    <section className="relative w-full h-[100dvh] mx-auto overflow-hidden bg-[#080807] flex flex-col justify-between selection:bg-[#F5B800] selection:text-[#080807]">
      
      {/* 1. ARCHITECTURAL WATERMARK (Tropical Brutalist) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <h1 className="font-black text-[16vw] md:text-[14vw] leading-[0.85] text-white/[0.03] tracking-tighter uppercase text-center flex flex-col select-none">
          <span>IRIE WEB</span>
          <span>STUDIOS</span>
        </h1>
      </div>

      {/* 2. THE OBSIDIAN & GOLD GYRO-MONOLITH */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-auto mt-16 md:mt-0">
        <div className="w-full h-[65vh] md:h-[90vh]">
          <Planet />
        </div>
      </div>

      {/* 3. CINEMATIC SHADOW VIGNETTE (Ensures flawless text legibility) */}
      <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-[#080807] via-[#080807]/80 to-transparent z-15 pointer-events-none"></div>

      {/* 4. EXECUTIVE FOREGROUND UI */}
      <div className="relative z-20 w-full max-w-[90rem] h-full mx-auto px-6 py-8 md:px-12 flex flex-col justify-between pointer-events-none">
        
        {/* Top Navigation & Status Pill */}
        <div className="flex justify-between items-start w-full mt-4 md:mt-8">
          <div className="inline-flex items-center gap-3 px-4 py-2.5 bg-white/[0.02] border border-white/10 backdrop-blur-xl pointer-events-auto">
            <div className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981]"></span>
            </div>
            <span className="font-mono text-xs md:text-sm tracking-[0.2em] text-[#F5B800] uppercase font-bold">
              Kingston, JA // Engine Online
            </span>
          </div>
        </div>

        {/* Bottom Value Proposition & High-Converting Actions */}
        <div className="w-full max-w-4xl pb-6 md:pb-12 pointer-events-auto">
          <h2 className="font-extrabold text-4xl sm:text-5xl md:text-7xl lg:text-[5rem] text-[#F4F3EF] leading-[1.05] mb-6 tracking-[-0.03em] uppercase">
            We Engineer Platforms That Make Brands <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5B800] to-[#cc9900]">Untouchable.</span>
          </h2>
          <p className="text-[#8E8C84] text-base md:text-xl max-w-2xl mb-10 leading-relaxed font-light tracking-wide">
            Irie Web Studios pairs hardcore full-stack engineering and cinematic 3D motion with direct-booking marketing funnels—built to turn attention into revenue.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center px-10 py-5 bg-[#F5B800] text-[#080807] font-bold text-sm uppercase tracking-widest overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
              <span className="relative flex items-center gap-3">
                Start Your Build
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>
            
            <a
              href="#works"
              className="group inline-flex items-center justify-center px-10 py-5 bg-transparent border border-white/20 text-[#F4F3EF] font-bold text-sm uppercase tracking-widest backdrop-blur-md transition-all hover:bg-white/5 hover:border-white/40"
            >
              View Deployments
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}