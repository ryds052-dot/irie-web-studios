import HeroVisual from "../components/HeroVisual";
import { Magnetic } from "../components/FxLayer";

const STATS = [
  ["60+", "Launches shipped"],
  ["4.9/5", "Client rating"],
  ["2.1s", "Avg. load time"],
  ["14 days", "Avg. build"],
];

export default function Hero() {
  return (
    <section
      id="hero-container"
      className="relative flex min-h-screen w-full flex-col overflow-hidden bg-[#080807] text-[#F4F3EF]"
    >
      <HeroVisual />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(100deg,#080807_18%,rgba(8,8,7,0.82)_46%,rgba(8,8,7,0.25)_78%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-[linear-gradient(to_top,#080807,transparent)]" />

      <div className="relative z-10 w-full border-b border-white/10 px-6 py-3 md:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 animate-pulse bg-[#F5B800]" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#F5B800]">
              System Online // Kingston, JA
            </span>
          </div>
          <span className="hidden font-mono text-[10px] uppercase tracking-widest text-[#8E8C84] sm:block">
            Build 2.4 / WebGL
          </span>
        </div>
      </div>

      <div className="relative z-10 flex flex-1 items-center px-6 py-20 md:px-12">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#F5B800]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#F5B800]">
              Boutique studio / Booking Q1
            </span>
          </div>

          <h1 className="mt-8 font-black uppercase leading-[0.82] tracking-tighter text-[15vw] md:text-[8.6vw]">
            <span className="hero-line">
              <span style={{ animationDelay: "120ms" }}>Engineered</span>
            </span>
            <span className="hero-line">
              <span
                style={{ animationDelay: "260ms" }}
                className="bg-gradient-to-b from-[#F4F3EF] to-[#8E8C84] bg-clip-text text-transparent"
              >
                To Convert.
              </span>
            </span>
          </h1>

          <div className="mt-12 grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <p
              className="hero-fade max-w-md border-l-2 border-[#F5B800] pl-6 font-mono text-xs uppercase leading-relaxed tracking-widest text-[#8E8C84]"
              style={{ animationDelay: "420ms" }}
            >
              We build brutalist digital architecture and bespoke web platforms.
              Zero templates. Engineered from the metal up.
            </p>

            <div className="hero-fade flex flex-wrap gap-3" style={{ animationDelay: "520ms" }}>
              <Magnetic>
                <a
                  href="#works"
                  data-cursor
                  className="inline-flex items-center gap-3 border border-[#F5B800] bg-[#F5B800] px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#080807] transition-colors hover:bg-white hover:border-white"
                >
                  [ View Architecture ]
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="#contact"
                  data-cursor
                  className="inline-flex items-center gap-3 border border-white/20 px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] transition-colors hover:border-[#F5B800] hover:text-[#F5B800]"
                >
                  [ Initialize ]
                </a>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10 px-6 md:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
          {STATS.map(([big, small]) => (
            <div key={small} className="px-4 py-6 first:pl-0 md:px-8">
              <p className="text-2xl font-bold tracking-tight md:text-3xl">{big}</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[#8E8C84]">
                {small}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
