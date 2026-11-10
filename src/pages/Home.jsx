import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Hero from "../sections/Hero";
import { PROJECTS } from "../data/projects";
import { Reveal } from "../components/FxLayer";

const PILLARS = [
  ["01", "Make them choose you", "Brand and design that gives a stranger a reason to stop.", "/services"],
  ["02", "Make it fast and unbreakable", "Hand-coded builds. Sub-second loads. No plugin tax.", "/services"],
  ["03", "Make the numbers move", "SEO, tracking and testing until the funnel actually converts.", "/services"],
];

const LEAKS = [
  ["53%", "of mobile visitors abandon a page that takes over three seconds."],
  ["75%", "judge credibility on design alone, before reading anything."],
  ["68%", "will not return after one bad experience with a site."],
];

const COMPARE = [
  ["Template shop", "Cheap, looks like everyone else, you fight the builder forever."],
  ["Marketplace freelancer", "Cheapest bid, no process, disappears after handover."],
  ["Big agency", "Six people on the call, none of them touching the work, five-figure retainer."],
];

export default function Home() {
  return (
    <>
      <Seo
        title="Irie Web Studios - Web Engineering and 3D Experiences, Kingston JA"
        description="A Kingston studio building brutalist web architecture that converts. Zero templates. Next.js, WebGL and conversion funnels engineered from the metal up."
      />

      <Hero />

      <section className="px-5 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-[#F5B800] md:text-[10px]">Deployment index</p>
              <h2 className="mt-2 text-3xl font-extrabold uppercase tracking-tight md:text-5xl">Recent builds</h2>
            </div>
            <Link to="/work" className="whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.2em] text-[#8E8C84] hover:text-[#F5B800] md:text-[10px]">All work</Link>
          </div>

          {PROJECTS.map((p) => (
            <Link key={p.slug} to={`/work/${p.slug}`} className="group flex items-center justify-between gap-4 border-b border-white/10 py-5 md:py-7">
              <div className="flex items-baseline gap-4 md:gap-6">
                <span className="font-mono text-[11px] text-[#F5B800]">{p.index}</span>
                <div>
                  <p className="text-lg font-bold uppercase tracking-tight transition-colors group-hover:text-[#F5B800] md:text-2xl">{p.title}</p>
                  <p className="mt-0.5 text-[13px] text-[#8E8C84] md:mt-1 md:text-sm">{p.outcome}</p>
                </div>
              </div>
              <span className="shrink-0 font-mono text-[#8E8C84] transition-transform group-hover:translate-x-1 group-hover:text-[#F5B800]">→</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 px-5 py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-[#F5B800] md:text-[10px]">The leak</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-black uppercase leading-[0.92] tracking-tighter md:text-6xl">
            A bad site does not<br /><span className="text-[#F5B800]">lose you traffic.</span> It loses you money.
          </h2>
          <div className="mt-10 grid gap-6 md:mt-12 md:grid-cols-3 md:gap-8">
            {LEAKS.map(([big, small], i) => (
              <Reveal key={big} delay={i * 80}>
                <div className="border-t border-white/10 pt-5">
                  <p className="text-4xl font-black text-[#F5B800] md:text-6xl">{big}</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#8E8C84] md:text-sm">{small}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between gap-4 border-b border-white/10 pb-5">
            <h2 className="text-3xl font-extrabold uppercase tracking-tight md:text-6xl">Three jobs</h2>
            <Link to="/services" className="whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.2em] text-[#F5B800] hover:underline md:text-[10px]">All services</Link>
          </div>
          {PILLARS.map(([n, t, d, to]) => (
            <Link key={n} to={to} className="group grid gap-1.5 border-b border-white/10 py-6 md:grid-cols-[80px_1fr_1.2fr] md:items-baseline md:gap-4 md:py-8">
              <p className="font-mono text-[11px] tracking-widest text-[#F5B800]">{n}</p>
              <h3 className="text-xl font-bold uppercase transition-colors group-hover:text-[#F5B800] md:text-3xl">{t}</h3>
              <p className="text-[13px] text-[#8E8C84] md:text-sm">{d}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0b0b0a] px-5 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-[#F5B800] md:text-[10px]">The choice</p>
          <h2 className="mt-3 text-3xl font-black uppercase leading-[0.92] tracking-tighter md:text-5xl">Three ways to buy a website.</h2>
          <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
            {COMPARE.map(([who, what]) => (
              <div key={who} className="grid gap-1 py-4 md:grid-cols-[240px_1fr] md:items-baseline md:gap-2 md:py-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#5c5a55]">{who}</p>
                <p className="text-[13px] text-[#8E8C84] md:text-sm">{what}</p>
              </div>
            ))}
            <div className="grid gap-1 py-5 md:grid-cols-[240px_1fr] md:items-baseline md:gap-2 md:py-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#F5B800]">Irie Web Studios</p>
              <p className="text-[15px] font-medium leading-relaxed text-[#F4F3EF] md:text-base">
                Fixed fee. Written scope. Hand-coded. You own everything at launch. Two people accountable by name.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 text-center md:px-12 md:py-28">
        <h2 className="mx-auto max-w-3xl text-4xl font-black uppercase leading-[0.92] tracking-tighter md:text-7xl">
          Two slots left<br /><span className="text-[#F5B800]">this quarter.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-md font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-[#8E8C84] md:text-xs md:tracking-widest">
          Tell us the scope. We will tell you the exact figure in writing within one business day.
        </p>
        <div className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:justify-center sm:gap-3">
          <Link to="/contact" className="border border-[#F5B800] bg-[#F5B800] px-8 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[#080807] transition-colors hover:border-white hover:bg-white md:text-xs">
            Start a project
          </Link>
          <Link to="/pricing" className="border border-white/20 px-8 py-4 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors hover:border-[#F5B800] hover:text-[#F5B800] md:text-xs">
            See every price
          </Link>
        </div>
      </section>
    </>
  );
}
