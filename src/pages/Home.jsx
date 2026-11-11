import { useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Hero from "../sections/Hero";
import Testimonials from "../sections/Testimonials";
import GlitchMarquee from "../components/GlitchMarquee";
import { PROJECTS } from "../data/projects";
import { PACKAGES } from "../data/rates";

const FAQS = [
  ["How long is a build?", "A landing page is 7 days, fixed date in writing before you pay a dollar. Bigger builds get quoted to the day."],
  ["Small budget?", "The US$285 landing page is the floor. Under that we will point you somewhere useful."],
  ["Who does the work?", "Two people, both named, both on WhatsApp. One builds, one runs the brief."],
  ["Do I own it?", "Completely. Code, domain, files and accounts are yours at launch."],
  ["Changes later?", "Three rounds included. After that US$45 a round, or a care plan."],
];

export default function Home() {
  const [open, setOpen] = useState(0);
  return (
    <>
      <Seo
        title="Web Design Kingston Jamaica | Irie Web Studios"
        description="Hand-coded websites for Jamaican businesses. Fixed fees, written scope, no templates."
        path="/"
      />
      <Hero />

      <section className="rule pad py-8">
        <div className="wrap grid grid-cols-3 gap-4">
          {[["2", "Live builds"], ["10 days", "Fastest"], ["0", "Templates"]].map(([v, l]) => (
            <div key={l}>
              <p className="font-display text-xl font-extrabold md:text-2xl">{v}</p>
              <p className="label mt-1 !text-[9px]">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section pad">
        <div className="wrap">
          <div className="rule flex items-end justify-between gap-4 pb-5">
            <div>
              <p className="label label-amber">Proof</p>
              <h2 className="display h2 mt-2">Work that pays for itself.</h2>
            </div>
            <Link to="/work" className="label whitespace-nowrap hover:text-amber">All work</Link>
          </div>
          {PROJECTS.map((p) => (
            <Link key={p.slug} to={`/work/${p.slug}`} className="group flex items-center justify-between gap-4 border-b border-line py-5">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-[11px] amber">{p.index}</span>
                <div>
                  <p className="h3 font-bold uppercase group-hover:text-amber">{p.title}</p>
                  <p className="mt-1 text-sm text-mute">{p.outcome}</p>
                </div>
              </div>
              <span className="font-mono text-mute">&rarr;</span>
            </Link>
          ))}
        </div>
      </section>

      <GlitchMarquee />
          <Testimonials />

      <section className="rule bg-ink-2 pad py-16">
        <div className="wrap">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <h2 className="display h2">Three ways in. Pick today.</h2>
            <Link to="/services" className="label whitespace-nowrap hover:text-amber">Every price</Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {PACKAGES.map(([name, price, who, , hot]) => (
              <div key={name} className={`card ${hot ? "!border-amber" : ""}`}>
                <p className="font-bold uppercase">{name}</p>
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
          <h2 className="display h2">Ask the awkward ones</h2>
          <div>
            {FAQS.map(([q, a], i) => (
              <div key={q} className="border-b border-line">
                <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i} className="flex w-full items-center justify-between gap-6 py-5 text-left">
                  <span>{q}</span>
                  <span className={`font-mono amber ${open === i ? "rotate-45" : ""}`}>+</span>
                </button>
                <div className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <p className="overflow-hidden text-sm leading-relaxed text-mute">{a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rule pad py-20 text-center">
        <div className="wrap">
          <h2 className="display h2 mx-auto max-w-3xl">Two slots left <span className="amber">this quarter.</span></h2>
          <p className="lede mx-auto mt-5">Tell us the scope on WhatsApp. The figure comes back in writing the same day. No likkle site either, a proper one. If the first draft misses the brief, round two is free.</p>
          <div className="mt-8 flex flex-col justify-center gap-2.5 sm:flex-row">
            <Link to="/contact" className="btn btn-primary btn-block">Book a free call</Link>
            <Link to="/services" className="btn btn-ghost btn-block">See every price</Link>
          </div>
        </div>
      </section>
    </>
  );
}

