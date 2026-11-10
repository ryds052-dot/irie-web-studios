import { useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Hero from "../sections/Hero";
import Testimonials from "../sections/Testimonials";
import Testimonials from "../sections/Testimonials";
import { Reveal } from "../components/FxLayer";
import { PROJECTS } from "../data/projects";
import { PACKAGES } from "../data/rates";

const LEAKS = [
  ["53%", "of mobile visitors abandon a page that takes over three seconds. Google."],
  ["75%", "judge credibility on design alone, before reading a word. Stanford."],
  ["68%", "never come back after one bad experience with a site. Industry survey."],
];

const PILLARS = [
  ["01", "Make them choose you", "Brand and design that gives a stranger a reason to stop and read."],
  ["02", "Make it fast and unbreakable", "Hand-coded builds. Sub-second loads. No plugin tax, no builder."],
  ["03", "Make the numbers move", "Tracking, testing and SEO until the funnel actually converts."],
];

const STEPS = [
  ["01", "Brief", "One call, then a written scope with a fixed figure. You approve before anything starts."],
  ["02", "Design", "Two art-directed directions, refined until one is undeniable."],
  ["03", "Build", "Hand-coded and staged. You watch it come together on a live link."],
  ["04", "Launch and grow", "We ship, measure and optimise. Code and accounts are yours."],
];

const COMPARE = [
  ["Template shop", "Cheap, looks like everyone else, you fight the builder forever."],
  ["Marketplace freelancer", "Cheapest bid, no process, disappears after handover."],
  ["Big agency", "Six people on the call, none of them touching the work, five-figure retainer."],
];

const FAQS = [
  ["How long does a build take?", "A landing page is a fixed fee and a fixed date, agreed in writing before you pay. A full site gets scoped the same way."],
  ["What if I have a small budget?", "There is a $285 landing page package. If you are under that, we will still point you somewhere useful."],
  ["Who actually does the work?", "Two people. Ryder builds, Nelson directs. No account managers, no juniors inheriting your project."],
  ["Do I own everything?", "Completely. Code, files, domains and accounts transfer to you at launch."],
  ["What if I need changes later?", "Three revision rounds are included. After that it is $45 a round, or a monthly care plan."],
];

export default function Home() {
  const [open, setOpen] = useState(0);

  return (
    <>
      <Seo
        title="Irie Web Studios - Web Design and Development, Kingston Jamaica"
        description="A Kingston studio building websites that convert. Fixed fees, written scope, hand-coded Next.js and WebGL. Zero templates."
        path="/"
      />

      <Hero />

      <section className="rule pad py-8">
        <div className="wrap grid grid-cols-3 gap-4">
          {[["2", "Live builds"], ["10 days", "Fastest build"], ["0", "Templates"]].map(([v, l]) => (
            <div key={l}>
              <p className="font-display text-xl font-extrabold md:text-2xl">{v}</p>
              <p className="label mt-1 !text-[9px] md:!text-[10px]">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section pad">
        <div className="wrap">
          <div className="rule flex items-end justify-between gap-4 pb-5">
            <div>
              <p className="label label-amber">Selected work</p>
              <h2 className="display h2 mt-2">Recent builds</h2>
            </div>
            <Link to="/work" className="label whitespace-nowrap hover:text-amber">All work</Link>
          </div>
          {PROJECTS.map((p) => (
            <Link key={p.slug} to={`/work/${p.slug}`} className="group flex items-center justify-between gap-4 border-b border-line py-5 md:py-7">
              <div className="flex items-baseline gap-4 md:gap-6">
                <span className="font-mono text-[11px] amber">{p.index}</span>
                <div>
                  <p className="h3 font-bold uppercase tracking-tight transition-colors group-hover:text-amber">{p.title}</p>
                  <p className="mt-1 text-sm text-mute">{p.outcome}</p>
                </div>
              </div>
              <span className="shrink-0 font-mono text-mute transition-transform group-hover:translate-x-1 group-hover:text-amber">&rarr;</span>
            </Link>
          ))}
        </div>
      </section>

      <Testimonials />

      <Testimonials />

      <section className="rule pad py-16 md:py-24">
        <div className="wrap">
          <p className="label label-amber">The leak</p>
          <h2 className="display h2 mt-3 max-w-3xl">
            A bad site does not lose you traffic. <span className="amber">It loses you money.</span>
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-8">
            {LEAKS.map(([v, l], i) => (
              <Reveal key={v} delay={i * 70}>
                <div className="rule pt-5">
                  <p className="font-display text-4xl font-extrabold amber md:text-5xl">{v}</p>
                  <p className="mt-2 text-sm leading-relaxed text-mute">{l}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section pad">
        <div className="wrap">
          <div className="rule flex items-end justify-between gap-4 pb-5">
            <h2 className="display h2">Three jobs</h2>
            <Link to="/services" className="label whitespace-nowrap hover:text-amber">All services</Link>
          </div>
          {PILLARS.map(([n, t, d]) => (
            <div key={n} className="grid gap-1.5 border-b border-line py-6 md:grid-cols-[70px_1fr_1fr] md:items-baseline md:gap-4">
              <p className="font-mono text-[11px] amber">{n}</p>
              <h3 className="h3 font-bold uppercase">{t}</h3>
              <p className="text-sm text-mute">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rule bg-ink-2 pad py-16 md:py-24">
        <div className="wrap">
          <p className="label label-amber">How it runs</p>
          <h2 className="display h2 mt-3">Four steps. No theatre.</h2>
          <div className="mt-10">
            {STEPS.map(([n, t, d], i) => (
              <Reveal key={n} delay={i * 60}>
                <div className="grid gap-2 border-b border-line py-5 md:grid-cols-[70px_1fr_1.3fr] md:items-baseline md:gap-4">
                  <p className="font-mono text-[11px] amber">{n}</p>
                  <h3 className="font-bold uppercase">{t}</h3>
                  <p className="text-sm text-mute">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section pad">
        <div className="wrap max-w-4xl">
          <p className="label label-amber">The choice</p>
          <h2 className="display h2 mt-3">Three ways to buy a website.</h2>
          <div className="mt-8 divide-y divide-line border-y border-line">
            {COMPARE.map(([who, what]) => (
              <div key={who} className="grid gap-1 py-4 md:grid-cols-[200px_1fr] md:items-baseline">
                <p className="label">{who}</p>
                <p className="text-sm text-mute">{what}</p>
              </div>
            ))}
            <div className="grid gap-1 py-5 md:grid-cols-[200px_1fr] md:items-baseline">
              <p className="label label-amber">Irie Web Studios</p>
              <p className="text-base font-medium leading-relaxed">
                Fixed fee. Written scope. Hand-coded. You own everything at launch. Two people accountable by name.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="rule bg-ink-2 pad py-16 md:py-24">
        <div className="wrap">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <p className="label label-amber">Packages</p>
              <h2 className="display h2 mt-3">Start somewhere concrete.</h2>
            </div>
            <Link to="/pricing" className="label whitespace-nowrap hover:text-amber">Every price</Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {PACKAGES.map(([name, price, who, , hot]) => (
              <div key={name} className={`card ${hot ? "!border-amber" : ""}`}>
                <div className="flex items-baseline justify-between">
                  <p className="font-bold uppercase">{name}</p>
                  {hot && <span className="label label-amber">Most taken</span>}
                </div>
                <p className="mt-1 text-xs text-dim">{who}</p>
                <p className="mt-3 font-display text-3xl font-extrabold">{price}</p>
                <Link to="/contact" className="btn btn-ghost mt-5 w-full">Start</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section pad">
        <div className="wrap grid gap-8 md:grid-cols-[1fr_1.4fr]">
          <h2 className="display h2">Questions</h2>
          <div>
            {FAQS.map(([q, a], i) => (
              <div key={q} className="border-b border-line">
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  aria-expanded={open === i}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span className="text-base">{q}</span>
                  <span className={`font-mono amber transition-transform ${open === i ? "rotate-45" : ""}`}>+</span>
                </button>
                <div className={`grid transition-all duration-400 ${open === i ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <p className="overflow-hidden text-sm leading-relaxed text-mute">{a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rule pad py-20 text-center md:py-28">
        <div className="wrap">
          <h2 className="display h2 mx-auto max-w-3xl">
            Two slots left <span className="amber">this quarter.</span>
          </h2>
          <p className="lede mx-auto mt-5">
            Tell us the scope. We will tell you the exact figure in writing within one business day.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-2.5 sm:flex-row sm:gap-3">
            <Link to="/contact" className="btn btn-primary btn-block">Start a project</Link>
            <Link to="/pricing" className="btn btn-ghost btn-block">See every price</Link>
          </div>
        </div>
      </section>
    </>
  );
}



