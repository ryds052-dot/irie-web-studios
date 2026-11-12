import { SLOTS_LABEL } from "../lib/slots";
import { useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { Reveal } from "../components/FxLayer";
import WorkTile from "../components/WorkTile";

const WA = "https://wa.me/18764354047?text=Hi%20Irie%20Web%20Studios%20-%20I%27d%20like%20to%20book%20a%2015%20min%20call.";

const WORK = [
  ["Earth Family Farms", "Land enquiries booked straight off the page.", "earth-family-farms"],
  ["Trini-Yaad", "Friday-night orders, no app install.", "trini-yaad"],
];

const PACKAGES = [
  ["Launch", "US$285", "One page. One offer. Art-directed, hand-coded, live in seven days.", "Choose Launch", false],
  ["Site", "US$985", "Every section the story needs, sequenced so it gets read to the end.", "Choose Site", false],
  ["Store", "US$2,165", "Your own shop — catalogue, checkout, orders. No marketplace skimming.", "Choose Store", true],
];

const PROMISES = [
  "The number is agreed in writing before you pay a cent.",
  "Landing pages ship in seven days. The date is in the contract, not the pitch.",
  "If the first draft misses, round two costs nothing.",
  "Half to start, half at launch. No retainers, no surprise line items.",
  "The code, the domain and every account are handed to you at launch. You are never renting your own site.",
];

const FAQS = [
  ["How fast is it live?", "Seven days from the day content lands. The date goes in writing before you pay. Bigger builds get a date the same way."],
  ["Who actually builds it?", "Two people, both named, both on WhatsApp. One writes the brief, one builds. No account layer."],
  ["Do I own the site?", "Yes. Code, domain, analytics, accounts. All of it, at launch, in your name."],
  ["What if I need changes later?", "Three rounds are included. After that it is US$45 a round, or a care plan."],
];

export default function Home() {
  const [open, setOpen] = useState(-1);

  return (
    <>
      <Seo
        title="Kingston Web Design for Businesses That Need Bookings | Irie Web Studios"
        description="Fixed-price websites, hand-coded in Kingston. Live in 7 days from US$285. Written scope, full ownership at launch."
        path="/"
      />

      <section className="pad hero pt-24 md:pt-32">
        <div className="wrap hero-split">
          <div>
            <div className="hero-top">
              <span className="label">Kingston, Jamaica</span>
              <span className="label">{SLOTS_LABEL}</span>
            </div>

            <h1 className="display mt-6">
              <span className="block">Looks expensive.</span>
              <span className="block gold">Costs US$285.</span>
            </h1>

            <p className="lede mt-6 max-w-[19rem]">
              One page, hand-coded in Kingston. Live in seven days, quoted in writing before you pay a dollar.
            </p>
            <p className="terms mt-3">Hosting, domain and emergency callouts start at US$40/mo. Scoped to what you actually need — never padded.</p>

            <a href={WA} target="_blank" rel="noreferrer" className="btn btn-primary btn-block mt-7">
              Book a free 15 min call
            </a>
            <p className="micro">15 min · no pitch · no prep</p>
            <Link to="/work" className="link mt-4">See the work →</Link>
          </div>

          <aside className="hero-panel">
            <p className="panel-k">Scope</p>
            <p className="panel-v">Written</p>
            <p className="panel-k mt-6">Live in</p>
            <p className="panel-v">7 days</p>
            <p className="panel-k mt-6">You own</p>
            <p className="panel-v">Everything</p>
            <p className="panel-note">Number first. Work after.</p>
          </aside>
        </div>
      </section>

      <section className="pad">
        <div className="wrap rise">
          <div className="sec"><h2 className="display h2">Two builds. Both live.</h2><span className="sec-n">01</span></div>
          <ul className="index">
            {WORK.map(([name, blurb, slug], i) => (
              <li key={slug}>
                <Link to={`/work/${slug}`} className="index-row">
                  <span className="index-n">{String(i + 1).padStart(2, "0")}</span>
                  <span className="index-name">{name}</span>
                  <span className="index-meta">{blurb}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pad statement-wrap">
        <div className="wrap">
          <p className="statement">Most sites lose the customer in the first four seconds. The next tap is a competitor.</p>
        </div>
      </section>

      <section className="pad">
        <div className="wrap rise">
          <p className="label">Pricing</p>
          <div className="sec"><h2 className="display h2">Three ways in</h2><span className="sec-n">02</span></div>
          <p className="lede">Pick the one that fits. The price you see is the price you pay.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {PACKAGES.map(([name, price, who, cta, hot]) => (
              <div key={name} className={`card flex flex-col ${hot ? "hot" : ""}`}>
                <p className="font-semibold">{name}</p>
                <p className="price mt-3">{price}</p>
                <p className="mt-3 text-sm text-dim">{who}</p>
                <Link to="/contact" className={`btn mt-6 w-full ${hot ? "btn-primary" : "btn-ghost"}`}>{cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pad">
        <div className="wrap rise">
          <div className="sec"><h2 className="display h2">Our promises</h2><span className="sec-n">03</span></div>
          <div>
            {PROMISES.map((g) => <p key={g} className="promise">{g}</p>)}
          </div>
        </div>
      </section>

      <section className="pad">
        <div className="wrap rise">
          <div className="sec"><h2 className="display h2">Questions</h2><span className="sec-n">04</span></div>
          <div>
            {FAQS.map(([q, a], i) => (
              <div key={q} className="border-b border-line">
                <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i} className="flex w-full items-center justify-between gap-6 py-4 text-left">
                  <span className="text-sm">{q}</span>
                  <span className={`amber ${open === i ? "rotate-45" : ""}`}>+</span>
                </button>
                <div className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr] pb-4 opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <p className="prose-cap overflow-hidden text-sm leading-relaxed text-mute">{a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pad py-16">
        <div className="wrap rise">
          <p className="label">Availability</p>
          <h2 className="display h2 closer-h">{SLOTS_LABEL}</h2>
          <p className="lede mt-4">Send one message. You get a price in writing the same day.</p>
          <a href={WA} target="_blank" rel="noreferrer" className="btn btn-primary btn-block mt-6">Book a free 15 min call</a>
          <Link to="/services" className="link mt-4">See all prices →</Link>
        </div>
      </section>
    </>
  );
}