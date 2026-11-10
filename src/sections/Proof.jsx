import { useState } from "react";
import { Reveal } from "../components/FxLayer";

const QUOTES = [
  ["They rebuilt our booking flow in three weeks and enquiries doubled. First studio that treated our numbers like their own.", "Maya Reid", "Founder, Saltwater Supply"],
  ["The art direction alone changed how people talk about us. Enquiries went from a trickle to a waitlist.", "Devon Cole", "Owner, Half Moon Kitchen"],
  ["Fast, sharp, zero hand-holding needed. Our engineering team actually liked the handoff.", "Priya Nair", "VP Growth, Kite and Co."],
];

export function Testimonials() {
  return (
    <section className="w-full border-t border-white/10 px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal><h2 className="text-4xl font-extrabold uppercase tracking-tight sm:text-6xl">Word of mouth</h2></Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {QUOTES.map(([q, name, role], i) => (
            <Reveal key={name} delay={i * 90}>
              <figure className="flex h-full flex-col justify-between border border-white/10 p-8">
                <blockquote className="text-xl leading-snug md:text-2xl">{q}</blockquote>
                <figcaption className="mt-8 border-t border-white/10 pt-4 font-mono text-[11px] uppercase tracking-widest text-[#8E8C84]">{name} - {role}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  ["01", "Discover", "A 60-minute call, then a written brief. Goals, audience, constraints, competitors. No guessing."],
  ["02", "Design", "Two art-directed directions, then we refine one until it is undeniable."],
  ["03", "Build", "Hand-coded, responsive, fast. You get a staging link you can watch grow."],
  ["04", "Launch and grow", "We ship, measure, and optimise. Then we keep going."],
];

export function Process() {
  return (
    <section id="process" className="w-full border-t border-white/10 px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-8 md:flex-row md:items-end">
          <h2 className="text-4xl font-extrabold uppercase tracking-tight sm:text-6xl">How it runs</h2>
          <p className="max-w-xs text-sm text-[#8E8C84]">Tight, transparent, no agency theatre.</p>
        </div>
        {STEPS.map(([n, title, body], i) => (
          <Reveal key={n} delay={i * 70}>
            <div className="grid gap-4 border-b border-white/10 py-8 md:grid-cols-[80px_1fr_1.2fr] md:items-baseline">
              <p className="font-mono text-xs tracking-widest text-[#F5B800]">{n}</p>
              <h3 className="text-2xl font-bold uppercase md:text-4xl">{title}</h3>
              <p className="text-sm leading-relaxed text-[#8E8C84]">{body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const TIERS = [
  ["Sprint", "$6,500", "fixed", "One landing page, art-directed and live in 10 days.", ["1-page site", "Copy polish", "Mobile and speed pass", "2 revisions"], false],
  ["Studio", "$18,000", "fixed", "Full brand and multi-page site. Our flagship engagement.", ["Brand identity system", "Up to 8 pages", "Custom motion", "CMS and SEO setup", "30 days post-launch support"], true],
  ["Partner", "$6,000", "/month", "Ongoing design, dev and optimisation on retainer.", ["Priority queue", "Monthly CRO tests", "New pages and campaigns", "Direct Slack line"], false],
];

export function Pricing() {
  return (
    <section id="pricing" className="w-full border-t border-white/10 px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-8 md:flex-row md:items-end">
          <h2 className="text-4xl font-extrabold uppercase tracking-tight sm:text-6xl">Pricing</h2>
          <p className="max-w-xs text-sm text-[#8E8C84]">Flat fees. Scope agreed up front. No hourly surprises.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TIERS.map(([name, price, unit, body, feats, hot], i) => (
            <Reveal key={name} delay={i * 80}>
              <div className={`flex h-full flex-col border p-8 ${hot ? "border-[#F5B800] bg-[#0d0d0c]" : "border-white/10"}`}>
                <div className="flex items-center justify-between">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#8E8C84]">{name}</p>
                  {hot && <span className="bg-[#F5B800] px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-widest text-[#080807]">Popular</span>}
                </div>
                <p className="mt-6 text-4xl font-extrabold">{price}<span className="ml-1 font-mono text-xs uppercase tracking-widest text-[#8E8C84]">{unit}</span></p>
                <p className="mt-3 text-sm text-[#8E8C84]">{body}</p>
                <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-6 text-sm">
                  {feats.map((f) => <li key={f} className="flex gap-2.5 text-[#F4F3EF]/80"><span className="text-[#F5B800]">+</span>{f}</li>)}
                </ul>
                <a href="#contact" className={`mt-8 inline-flex justify-center border px-6 py-4 font-mono text-xs uppercase tracking-[0.2em] transition-colors ${hot ? "border-[#F5B800] bg-[#F5B800] text-[#080807] hover:bg-white" : "border-white/20 hover:border-[#F5B800] hover:text-[#F5B800]"}`}>Start</a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  ["How long does a project take?", "A sprint is 10 days. A full build runs 4-6 weeks depending on scope. You get exact dates in writing before you pay anything."],
  ["Do you work with small budgets?", "Yes. The Sprint tier exists for exactly that. If your budget is under $5k we will still point you somewhere useful."],
  ["Who actually does the work?", "A two-person core team plus vetted specialists for motion and 3D. No account managers, no handoffs to juniors."],
  ["What do you need from me?", "A call, your goals, and quick feedback rounds. We handle strategy, copy structure and everything technical."],
  ["Do I own the site?", "Completely. Code, files and accounts are transferred to you at launch."],
];

export function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="w-full border-t border-white/10 px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1fr_1.4fr]">
        <h2 className="text-4xl font-extrabold uppercase tracking-tight sm:text-6xl">Questions</h2>
        <div>
          {FAQS.map(([q, a], i) => (
            <div key={q} className="border-b border-white/10">
              <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i} className="flex w-full items-center justify-between gap-6 py-6 text-left">
                <span className="md:text-lg">{q}</span>
                <span className={`font-mono text-[#F5B800] transition-transform duration-300 ${open === i ? "rotate-45" : ""}`}>+</span>
              </button>
              <div className={`grid transition-all duration-500 ${open === i ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <p className="overflow-hidden text-sm leading-relaxed text-[#8E8C84]">{a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
