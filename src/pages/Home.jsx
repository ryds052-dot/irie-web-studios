import { useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { Reveal } from "../components/FxLayer";

const WA = "https://wa.me/18765206119?text=Hi%20Irie%20Web%20Studios%20-%20I%27d%20like%20to%20book%20a%2015%20min%20call.";

const WORK = [
  ["01", "Earth Family Farms", "Land enquiries booked straight off the page.", "earth-family-farms"],
  ["02", "Trini-Yaad", "Friday-night orders, no app install.", "trini-yaad"],
  ["03", "Irie Web Studios Core", "The studio own site. Nothing off the shelf.", "irie-core"],
];

const PACKAGES = [
  ["Launch", "US$285", "One offer, one page, live this month.", "Start with Launch", false],
  ["Signature", "US$985", "So you look like the biggest name in the room.", "Start with Signature", true],
  ["Commerce", "US$2,165", "Sell direct and keep the cut marketplaces take.", "Start with Commerce", false],
];

const QUOTES = [
  ["Bookings come in before anybody has to call. The site does the talking.", "Michael Lee", "Earth Family Farms"],
  ["Ordering that works in a Friday queue, no app install. Live in a week.", "Misir Ramberran", "Trini-Yaad"],
];

const STEPS = [
  ["01", "Brief", "Scope, budget, deadline. Two minutes on WhatsApp."],
  ["02", "Scope", "Fixed fee, dated milestones, signed before money moves."],
  ["03", "Build", "Hand-coded. Staging link from day one, reviewed daily."],
  ["04", "Launch", "Domain, code and accounts handed over. Yours."],
];

const PROMISES = [
  "Fixed fee in writing before you pay a dollar.",
  "Landing pages live in 7 days.",
  "First draft misses, round two is free.",
  "50% to start, 50% on launch. Nothing else.",
  "WCAG 2.2 AA, nightly off-site backups, HSTS enforced.",
  "Code, domain and accounts are yours at launch.",
];

const FAQS = [
  ["How long?", "A landing page is 7 days, dated in writing before you pay. Bigger builds get quoted to the day."],
  ["Who does the work?", "Two people, both named, both reachable. No juniors, no account managers."],
  ["Do I own it?", "Completely. Repository, domain and accounts transfer in the handover step."],
  ["NDA or contract?", "Both, on request, before the brief."],
  ["Changes later?", "Three rounds included. After that US$45 a round, or a care plan."],
];

export default function Home() {
  const [open, setOpen] = useState(-1);

  return (
    <>
      <Seo
        title="Kingston Web Design for Businesses That Need Bookings | Irie Web Studios"
        description="Fixed-fee websites, hand-coded in Kingston. Live in 7 days from US$285. Written scope, WCAG AA, full ownership at launch."
        path="/"
      />

      <section className="relative overflow-hidden pad pb-10 pt-24 md:pb-16 md:pt-32">
        <div className="aurora-grid" aria-hidden="true" />
        <div className="wrap relative z-10">
          <p className="label label-amber">Kingston 6, Jamaica</p>

          <h1 className="display mt-6 leading-[0.88] tracking-[-0.04em]">
            <span className="block">Bookings</span>
            <span className="block gradient-amber">while you sleep.</span>
          </h1>

          <p className="lede mt-6 max-w-[21rem]">
            Hand-coded in Kingston. Fixed fee, written scope, live in 7 days. It takes
            bookings from tourists and diaspora while you sleep.
          </p>

          <div className="mt-8 flex flex-col gap-2.5">
            <a href={WA} target="_blank" rel="noreferrer" className="btn btn-primary btn-block">
              Book 15 min on WhatsApp
            </a>
            <Link to="/work" className="btn btn-ghost btn-block">See what it did for them</Link>
          </div>

          <div className="mt-8 flex items-center justify-between gap-4">
            <p className="label">From US$285, fixed</p>
            <p className="label">Two slots this quarter</p>
          </div>
        </div>
      </section>

      <section className="pad">
        <div className="wrap">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="metric">7</p>
              <p className="label mt-1">Days to live</p>
            </div>
            <div>
              <p className="metric">2</p>
              <p className="label mt-1">Slots left</p>
            </div>
            <div>
              <p className="metric">100%</p>
              <p className="label mt-1">Yours at launch</p>
            </div>
          </div>

          <div className="mt-10 grid gap-7 md:grid-cols-2">
            {QUOTES.map(([q, name, org]) => (
              <figure key={name}>
                <blockquote className="quote">“{q}”</blockquote>
                <figcaption className="label mt-3">{name} / {org}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="pad">
        <div className="wrap">
          <h2 className="display h2">Work that pays for itself.</h2>
          <div className="mt-7">
            {WORK.map(([n, name, blurb, slug]) => (
              <Link key={slug} to={`/work/${slug}`} className="row group">
                <span className="font-mono text-[11px] amber">{n}</span>
                <div>
                  <p className="h3 font-bold group-hover:text-amber">{name}</p>
                  <p className="mt-1 text-sm text-mute">{blurb}</p>
                </div>
                <span className="font-mono text-mute">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="pad">
        <div className="wrap">
          <h2 className="display h2">Three ways in. Pick today.</h2>
          <div className="mt-7 grid gap-3 md:grid-cols-3">
            {PACKAGES.map(([name, price, who, cta, hot]) => (
              <div key={name} className={`card flex flex-col ${hot ? "hot" : ""}`}>
                <p className="font-bold">{name}</p>
                <p className="mt-1 text-xs text-dim">{who}</p>
                <p className="mt-4 font-display text-2xl font-extrabold">{price}</p>
                <Link to="/contact" className={`btn mt-5 w-full ${hot ? "btn-primary" : "btn-ghost"}`}>{cta}</Link>
              </div>
            ))}
          </div>
          <p className="label mt-4">Nothing gets added once you choose.</p>
        </div>
      </section>

      <section className="pad">
        <div className="wrap">
          <h2 className="display h2">Four steps, no surprises.</h2>
          <div className="mt-7">
            {STEPS.map(([n, h, b], i) => (
              <Reveal key={n} delay={i * 50}>
                <div className="step">
                  <span className="font-mono text-[11px] amber">{n}</span>
                  <div>
                    <p className="text-sm font-bold">{h}</p>
                    <p className="mt-1 text-sm text-mute">{b}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pad">
        <div className="wrap">
          <h2 className="display h2">Written down, not implied.</h2>
          <div className="mt-7">
            {PROMISES.map((g) => (
              <p key={g} className="promise"><span className="amber">+</span>{g}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="pad">
        <div className="wrap">
          <h2 className="display h2">Ask the awkward ones</h2>
          <div className="mt-6">
            {FAQS.map(([q, a], i) => (
              <div key={q} className="border-b border-line">
                <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i} className="flex w-full items-center justify-between gap-6 py-5 text-left">
                  <span className="text-sm">{q}</span>
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

      <section className="pad py-16 text-center">
        <div className="wrap">
          <h2 className="display h2 mx-auto max-w-3xl">Two slots left. <span className="amber">One call closes it.</span></h2>
          <p className="lede mx-auto mt-5">Send the scope. The figure comes back in writing the same day.</p>
          <div className="mt-8 flex flex-col gap-2.5">
            <a href={WA} target="_blank" rel="noreferrer" className="btn btn-primary btn-block">Book 15 min on WhatsApp</a>
            <Link to="/services" className="btn btn-ghost btn-block">See every price</Link>
          </div>
        </div>
      </section>
    </>
  );
}