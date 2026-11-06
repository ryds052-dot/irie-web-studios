import React from "react";

const projects = [
  {
    num: "01",
    client: "Earth Family Farms",
    title: "Eco-Agro Agroforestry & Ecotourism Platform",
    tagline: "Direct-to-consumer booking funnel, high-performance static rendering, and brand immersion for a 100-acre estate.",
    stack: ["Next.js", "Tailwind CSS", "Vercel Edge", "SEO Architecture"],
    status: "PRODUCTION LIVE",
    link: "https://earthfamilyfarms.vercel.app", // update if needed
  },
  {
    num: "02",
    client: "Trini-Yaad",
    title: "Culinary Brand Infrastructure & Digital Menu Engine",
    tagline: "High-conversion localized ordering funnel engineered for sub-second mobile loads and zero-friction customer UX.",
    stack: ["React", "Tailwind CSS", "Edge CDN", "Interactive UI"],
    status: "SYSTEM ACTIVE",
    link: "#",
  },
  {
    num: "03",
    client: "Irie Web Studios Core",
    title: "Parametric WebGL & Tropical Brutalist Design System",
    tagline: "Internal agency architecture featuring custom Three.js transmission shaders, GSAP scroll mechanics, and buttery Lenis physics.",
    stack: ["Three.js", "R3F", "GSAP", "Lenis", "Tailwind CSS"],
    status: "CURRENT BUILD",
    link: "#",
  },
];

export default function Works() {
  return (
    <section id="works" className="relative w-full py-28 md:py-36 bg-[#080807] text-[#F4F3EF] px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#F5B800]"></span>
              <span className="font-mono text-[#F5B800] text-xs uppercase tracking-[0.25em] font-semibold">
                Deployment Index
              </span>
            </div>
            <h2 className="font-extrabold text-4xl sm:text-6xl tracking-tight uppercase">
              Selected Works //
            </h2>
          </div>
          <p className="text-[#8E8C84] text-sm md:text-base max-w-md font-light leading-relaxed">
            Zero templates. Zero bloated frameworks. Web architectures deployed with relentless focus on speed, immersion, and conversion.
          </p>
        </div>

        {/* Project Matrix */}
        <div className="flex flex-col divide-y divide-white/10 border-y border-white/10">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="group py-12 md:py-16 transition-colors duration-500 hover:bg-white/[0.015] flex flex-col lg:flex-row lg:items-center justify-between gap-8 px-4 md:px-8"
            >
              {/* Left Column: Number & Client */}
              <div className="flex items-start gap-8 lg:w-1/3">
                <span className="font-mono text-sm md:text-base text-[#F5B800] tracking-widest pt-1">
                  {proj.num}
                </span>
                <div>
                  <span className="inline-block text-xs font-mono tracking-widest text-[#10B981] mb-2 uppercase">
                    [{proj.status}]
                  </span>
                  <h3 className="font-bold text-2xl md:text-4xl tracking-tight text-[#F4F3EF] group-hover:text-[#F5B800] transition-colors duration-300">
                    {proj.client}
                  </h3>
                </div>
              </div>

              {/* Middle Column: Overview */}
              <div className="lg:w-5/12">
                <h4 className="font-semibold text-lg md:text-xl text-[#F4F3EF] mb-2">
                  {proj.title}
                </h4>
                <p className="text-[#8E8C84] text-sm leading-relaxed mb-6 font-light">
                  {proj.tagline}
                </p>
                <div className="flex flex-wrap gap-2">
                  {proj.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/[0.04] border border-white/10 text-xs font-mono text-[#F4F3EF]/70 uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Interactive Trigger */}
              <div className="lg:w-2/12 flex lg:justify-end">
                <a
                  href={proj.link}
                  target={proj.link.startsWith("http") ? "_blank" : "_self"}
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 border border-white/15 text-xs font-mono tracking-widest uppercase hover:bg-[#F5B800] hover:text-[#080807] hover:border-[#F5B800] transition-all duration-300"
                >
                  Inspect
                  <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}