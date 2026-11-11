import { useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { Reveal } from "../components/FxLayer";

const WA = "https://wa.me/18765206119?text=Hi%20Irie%20Web%20Studios%20-%20I%27d%20like%20to%20book%20a%2015%20min%20call.";

const WORK = [
  ["Earth Family Farms", "Land enquiries booked straight off the page.", "earth-family-farms"],
  ["Trini-Yaad", "Friday-night orders, no app install.", "trini-yaad"],
  ["Irie Web Studios", "The studio own site. Nothing off the shelf.", "irie-core"],
];

const PACKAGES = [
  ["Launch", "US$285", "One offer, one page, live this month.", "Start with Launch", false],
  ["Signature", "US$985", "So you look like the biggest name in the room.", "Start with Signature", true],
  ["Commerce", "US$2,165", "Sell direct and keep the cut marketplaces take.", "Start with Commerce", false],
];

const PROMISES = [
  "Fixed fee in writing before you pay a dollar.",
  "Landing pages live in 7 days.",
  "First draft misses, round two is free.",
  "50% to start, 50% on launch. Nothing else.",
  "Code, domain and accounts are yours at launch.",
];

const FAQS = [
  ["How long?", "A landing page is 7 days, dated in writing before you pay. Bigger builds get quoted to the day."],
  ["Who does the work?", "Two people, both named, both reachable. No juniors, no account managers."],
  ["Do I own it?", "Completely. Repository, domain and accounts transfer at handover."],
  ["Changes later?", "Three rounds included. After that US$45 a round, or a care plan."],
];

export default function Home() {
  const [open, setOpen] = useState(-1);

  return (
    <>
      <Seo
        title="Kingston Web Design for Businesses That Need Bookings | Irie Web Studios"
        description="Fixed-fee websites, hand-coded in Kingston. Live in 7 days from US$285. Written scope, full ownership at launch."
        path="/"
      />

      <section className="pad pb-12 pt-24 md:pb-20 md:pt-32">
        <div className="wrap">
          <p className="label">Kingston, Jamaica</p>

          <h1 className="display mt-5 leading-[0.92] tracking-[-0.035em]">
            <span className="block">Bookings</span>
            <span className="block gradient-amber">while you sleep.</span>
          </h1>

          <p className="lede mt-5 max-w-[21rem]">
            Hand-coded in Kingston. Fixed fee, written scope, live in 7 days. It takes
            bookings from tourists and diaspora while you sleep.
          </p>

          <div className="mt-7 flex flex-col gap-2.5">
            <a href={WA} target="_blank" rel="noreferrer" className="btn btn-primary btn-block">
              Book 15 min on WhatsApp
            </a>
            <Link to="/work" className="btn btn-ghost btn-block">See the work</Link>
          </div>

          <p className="label mt-6">From US$285, fixed. Two slots this quarter.</p>
        </div>
      </section>

      <section className="pad">
        <div className="wrap">
          <div className="grid grid-cols-3 gap-4">
            <div><p className="metric">7 days</p><p className="label mt-1">Brief to live</p></div>
            <div><p className="metric">2</p><p className="label mt-1">Slots left</p></div>
            <div><p className="metric">100%</p><p className="label mt-1">Yours at launch</p></div>
          </div>
          <Reveal>
            <figure className="mt-12">
              <blockquote className="quote">“Bookings come in before anybody has to call. The site does the talking.”</blockquote>
              <figcaption className="label mt-3">Michael Lee, Earth Family Farms</figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="pad">
        <div className="wrap">
          <h2 className="display h2">Work that pays for itself.</h2>
          <div className="mt-6">
            {WORK.map(([name, blurb, slug]) => (
              <Link key={slug} to={`/work/${slug}`} className="row group">
                <div>
                  <p className="h3 font-bold group-hover:text-amber">{name}</p>
                  <p className="mt-1 text-sm text-mute">{blurb}</p>
                </div>
                <span className="text-mute">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="pad">
        <div className="wrap">
          <h2 className="display h2">Three ways in.</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {PACKAGES.map(([name, price, who, cta, hot]) => (
              <div key={name} className={`card flex flex-col ${hot ? "hot" : ""}`}>
                <p className="font-bold">{name}</p>
                <p className="mt-1 text-sm text-dim">{who}</p>
                <p className="mt-4 text-2xl font-bold">{price}</p>
                <Link to="/contact" className={`btn mt-5 w-full ${hot ? "btn-primary" : "btn-ghost"}`}>{cta}</Link>
              </div>
            ))}
          </div>
          <p className="label mt-4">Nothing gets added once you choose.</p>
        </div>
      </section>

      <section className="pad">
        <div className="wrap">
          <h2 className="display h2">Written down, not implied.</h2>
          <div className="mt-5">
            {PROMISES.map((g) => (
              <p key={g} className="promise">{g}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="pad">
        <div className="wrap">
          <h2 className="display h2">Questions</h2>
          <div className="mt-5">
            {FAQS.map(([q, a], i) => (
              <div key={q} className="border-b border-line">
                <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i} className="flex w-full items-center justify-between gap-6 py-4 text-left">
                  <span className="text-sm">{q}</span>
                  <span className={`amber ${open === i ? "rotate-45" : ""}`}>+</span>
                </button>
                <div className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr] pb-4 opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <p className="overflow-hidden text-sm leading-relaxed text-mute">{a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pad py-16 text-center">
        <div className="wrap">
          <h2 className="display h2 mx-auto max-w-2xl">Two slots left. <span className="amber">One call closes it.</span></h2>
          <p className="lede mx-auto mt-4">Send the scope. The figure comes back in writing the same day.</p>
          <div className="mt-7 flex flex-col gap-2.5">
            <a href={WA} target="_blank" rel="noreferrer" className="btn btn-primary btn-block">Book 15 min on WhatsApp</a>
            <Link to="/services" className="btn btn-ghost btn-block">See every price</Link>
          </div>
        </div>
      </section>
    </>
  );
}