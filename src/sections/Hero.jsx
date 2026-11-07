import React from 'react';

export default function Hero() {
  return (
    <section 
      id="hero-container" 
      className="relative w-full min-h-screen bg-[#080807] text-[#F4F3EF] pt-20 flex flex-col overflow-hidden"
    >
      {/* Top Status Bar */}
      <div className="w-full border-b border-white/10 px-6 py-3 flex justify-between items-center bg-[#080807] z-10">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 bg-[#F5B800] animate-pulse"></span>
          <span className="font-mono text-[10px] tracking-widest text-[#F5B800] uppercase">
            System Online // Kingston, JA
          </span>
        </div>
        <span className="font-mono text-[10px] tracking-widest text-[#8E8C84] uppercase hidden sm:block">
          Irie Web Studios — 2D Fallback Mode
        </span>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/10 relative z-10">
        
        {/* Left: Heavy Editorial Typography */}
        <div className="lg:col-span-7 flex flex-col justify-center p-6 lg:p-16 relative">
          <div className="max-w-2xl">
            <h1 className="text-6xl sm:text-7xl lg:text-[7rem] font-black uppercase tracking-tighter leading-[0.85] mb-8">
              Engineered <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#F4F3EF] to-[#8E8C84]">
                To Convert.
              </span>
            </h1>
            
            <p className="font-mono text-sm leading-relaxed text-[#8E8C84] max-w-md uppercase tracking-widest border-l-2 border-[#F5B800] pl-6">
              We build brutalist digital architecture and bespoke web platforms. Zero templates. Engineered from the metal up.
            </p>
          </div>

          <div className="mt-16 flex flex-wrap gap-4">
            <a href="#works" className="px-8 py-4 bg-[#F5B800] text-[#080807] font-mono text-xs uppercase tracking-[0.2em] font-bold hover:bg-white transition-colors">
              [ View Architecture ]
            </a>
            <a href="#contact" className="px-8 py-4 border border-white/20 text-[#F4F3EF] font-mono text-xs uppercase tracking-[0.2em] hover:border-[#F5B800] hover:text-[#F5B800] transition-colors">
              [ Initialize ]
            </a>
          </div>
        </div>

        {/* Right: Pure CSS Kinetic Engine (No WebGL) */}
        <div className="lg:col-span-5 relative min-h-[500px] lg:min-h-full bg-[#0a0a09] flex items-center justify-center overflow-hidden">
          
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,184,0,0.08)_0%,transparent_60%)]"></div>

          {/* CSS Rotating Wireframe Core */}
          <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] flex items-center justify-center">
            {/* Outer Track */}
            <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_12s_linear_infinite]">
              <div className="absolute top-0 left-1/2 w-2 h-2 bg-[#F5B800] -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_10px_#F5B800]"></div>
            </div>
            
            {/* Middle Dashed Track */}
            <div className="absolute inset-8 border border-dashed border-[#F5B800]/40 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
            
            {/* Inner Solid Ring */}
            <div className="absolute inset-16 border-2 border-[#F5B800] rounded-full opacity-80 shadow-[0_0_30px_rgba(245,184,0,0.2)] animate-[pulse_3s_ease-in-out_infinite]"></div>
            
            {/* Center Core */}
            <div className="absolute w-12 h-12 bg-[#F5B800] rounded-sm rotate-45 shadow-[0_0_40px_rgba(245,184,0,0.6)] animate-[spin_8s_linear_infinite]"></div>
          </div>

          {/* Technical Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
        </div>

      </div>
    </section>
  );
}