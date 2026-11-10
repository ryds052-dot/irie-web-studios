import { useEffect, useState } from "react";
import HeroVisual from "../components/HeroVisual";
import { Magnetic } from "../components/FxLayer";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/#%&";
const reduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function Scramble({ text, delay = 0 }) {
  const [out, setOut] = useState(text);

  useEffect(() => {
    if (reduced()) { setOut(text); return; }
    let raf = 0;
    let frame = 0;
    const start = performance.now() + delay;
    const run = (now) => {
      if (now < start) { raf = requestAnimationFrame(run); return; }
      frame += 1;
      const revealed = Math.floor(frame / 2.6);
      if (revealed >= text.length) { setOut(text); return; }
      setOut(
        text
          .split("")
          .map((c, i) =>
            c === " " || i < revealed
              ? c
              : CHARS[Math.floor(Math.random() * CHARS.length)]
          )
          .join("")
      );
      raf = requestAnimationFrame(run);
    };
    raf = requestAnimationFrame(run);
    return () => cancelAnimationFrame(raf);
  }, [text, delay]);

  return <span>{out}</span>;
}

const TICKER = [
  "Open for Q1",
  "Two slots",
  "Kingston 06 · UTC-5",
  "Zero templates",
  "Hand-built",
  "WebGL / R3F",
];

export default function Hero() {
  return (
    <section
      id="hero-container"
      className="scanlines relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-[#080807] text-[#F4F3EF]"
    >
      <HeroVisual />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(100deg,rgba(8,8,7,0.94)_8%,rgba(8,8,7,0.62)_48%,rgba(8,8,7,0.2)_85%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-[linear-gradient(to_top,#080807_12%,transparent)]" />

      <div className="relative z-10 w-full border-b border-white/10 px-6 py-3 md:px-12">
        <div className="flex items-center justify-between">
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

      <div className="relative z-10 flex flex-1 flex-col justify-center px-6 py-16 md:px-12 md:py-20">
        <div className="flex items-center gap-3">
          <span className="h-px w-12 bg-[#F5B800]" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#F5B800]">
            Boutique studio / Kingston, JA
          </span>
        </div>

        <h1 className="mt-6 select-none font-black uppercase leading-[0.78] tracking-[-0.045em] text-[clamp(2.9rem,11.4vw,11rem)]">
          <span className="hero-line">
            <span style={{ animationDelay: "90ms" }}>
              <Scramble text="Engineered" />
            </span>
          </span>
          <span className="hero-line">
            <span style={{ animationDelay: "230ms" }}>
              <Scramble text="To" delay={220} />
              <span className="ml-[0.18em] align-middle font-mono text-[0.16em] font-normal uppercase tracking-[0.35em] text-[#8E8C84]">
                / 001
              </span>
            </span>
          </span>
          <span className="hero-line">
            <span
              style={{ animationDelay: "360ms" }}
              className="text-glow bg-gradient-to-b from-[#FFD24A] to-[#F5B800] bg-clip-text text-transparent"
            >
              <Scramble text="Convert." delay={360} />
            </span>
          </span>
        </h1>

        <div className="mt-12 grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <p
            className="hero-fade max-w-md border-l-2 border-[#F5B800] pl-6 font-mono text-[11px] uppercase leading-relaxed tracking-widest text-[#8E8C84]"
            style={{ animationDelay: "520ms" }}
          >
            We build brutalist digital architecture and bespoke web platforms.
            Zero templates. Engineered from the metal up.
          </p>

          <div className="hero-fade flex flex-wrap items-center gap-3" style={{ animationDelay: "620ms" }}>
            <Magnetic>
              <a
                href="#works"
                data-cursor
                className="inline-flex items-center gap-3 border border-[#F5B800] bg-[#F5B800] px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#080807] transition-colors hover:border-white hover:bg-white"
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
            <span className="cue ml-1 hidden h-8 w-px bg-[#F5B800] lg:block" />
          </div>
        </div>
      </div>

      <div className="relative z-10 overflow-hidden border-t border-white/10 bg-[#080807]/70 py-3 backdrop-blur-sm">
        <div className="fx-marquee">
          <div className="fx-marquee-track">
            {[0, 1].map((k) => (
              <div key={k} className="flex shrink-0 items-center">
                {TICKER.map((t) => (
                  <span
                    key={t + k}
                    className="flex items-center gap-6 pr-6 font-mono text-[10px] uppercase tracking-[0.3em] text-[#8E8C84]"
                  >
                    {t}
                    <span className="text-[#F5B800]">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

