import { Link } from "react-router-dom";
import HeroVisual from "../components/HeroVisual";

export default function Hero() {
  return (
    <section
      id="hero-container"
      className="relative flex min-h-[88svh] w-full flex-col justify-end overflow-hidden bg-[#080807] px-5 pb-10 pt-24 text-[#F4F3EF] md:min-h-[100svh] md:px-12 md:pb-16 md:pt-32"
    >
      <HeroVisual />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,#080807_6%,rgba(8,8,7,0.55)_45%,rgba(8,8,7,0.25)_100%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="flex items-center gap-2.5">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F5B800]" />
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#F5B800] md:text-[11px] md:tracking-[0.3em]">
            Boutique studio / Kingston, JA
          </span>
        </div>

        <h1 className="mt-5 select-none font-black uppercase leading-[0.86] tracking-[-0.04em] text-[clamp(2.15rem,10.6vw,4rem)] md:mt-7 md:leading-[0.8] md:text-[clamp(3rem,8.6vw,8rem)]">
          <span className="block">Engineered</span>
          <span className="block bg-gradient-to-b from-[#FFD24A] to-[#F5B800] bg-clip-text text-transparent">
            To Convert.
          </span>
        </h1>

        <p className="mt-6 max-w-sm font-mono text-[11px] uppercase leading-relaxed tracking-[0.12em] text-[#8E8C84] md:mt-8 md:max-w-md md:text-xs md:tracking-widest">
          Brutalist web architecture and bespoke platforms. Zero templates.
        </p>

        <div className="mt-7 flex flex-col gap-2.5 sm:flex-row sm:gap-3 md:mt-10">
          <Link
            to="/work"
            className="flex min-h-13 items-center justify-center border border-[#F5B800] bg-[#F5B800] px-7 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[#080807] transition-colors active:bg-white sm:min-h-12 md:px-9 md:text-xs"
          >
            See the work
          </Link>
          <Link
            to="/contact"
            className="flex min-h-13 items-center justify-center border border-white/25 px-7 font-mono text-[11px] uppercase tracking-[0.18em] text-[#F4F3EF] transition-colors active:border-[#F5B800] active:text-[#F5B800] sm:min-h-12 md:px-9 md:text-xs"
          >
            Start a project
          </Link>
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4 md:mt-12">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#5c5a55] md:text-[10px]">
            Two slots this quarter
          </p>
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#5c5a55] md:text-[10px]">
            Reply in one day
          </p>
        </div>
      </div>
    </section>
  );
}
