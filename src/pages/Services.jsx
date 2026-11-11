import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { GROUPS, RETAINERS, TERMS } from "../data/rates";

const PACKAGES = [
  ["Launch", "US$285", "You have a business and it needs to exist online, properly, this month.", [
    "One-page or landing page, hand-coded",
    "Fast on Jamaican mobile data",
    "Google Business + basic SEO wired in",
    "1 revision round, 2-week build",
  ], false],
  ["Signature", "US$985", "Your site should be selling while you sleep, not just sitting there.", [
    "Up to 8 pages + custom case studies",
    "Full brand refresh included",
    "Copywriting for every page",
    "Booking or quote form that converts",
    "3 revision rounds, 4-week build",
  ], true],
  ["Commerce", "US$2,165", "You are taking payments directly and need the whole machine to work.", [
    "Full storefront, up to 50 products",
    "Payment processing + delivery logic",
    "Admin panel you can run yourself",
    "Analytics + conversion tracking",
    "Unlimited revisions in build window",
  ], false],
];

const INCLUDED = [
  "A fixed fee agreed before you pay anything.",
  "One written scope. The price we quote is the price you pay.",
  "Direct access to the two people building your site.",
  "Code, accounts and files handed over at launch. All yours.",
];

const NOT_THIS = [
  "A template with your logo pasted in.",
  "A quote that grows after you have committed.",
  "Waiting on a go-between to reach the person doing the work.",
  "A monthly plan you cannot leave.",
];

export default function Services() {
  return (
    <>
      <Seo
        title="Web Design Kingston Jamaica - Services and Rates | Irie Web Studios"
        description="Every price published in USD. Fixed fee, written scope, hand-coded in Kingston. Brand, web, WebGL, SEO and CRO."
        path="/services"
      />
      <div className="pad pt-28 md:pt-36">
        <div className="wrap">
          <p className="label label-amber">Services</p>
          <h1 className="display h1 mt-4">
            Every price, <span className="amber">in the open.</span>
          </h1>

          <div className="rule mt-8 grid gap-6 pb-8 md:grid-cols-[1.3fr_1fr] md:items-end">
            <p className="lede">
              Every figure in USD, on the page. No call to find out, no haggling, no moving the number after you commit.
            </p>
            <p className="label md:text-right">Fixed fee. Written scope. No hourly drift.</p>
          </div>

          <div className="rule mt-12 grid gap-10 py-12 md:grid-cols-2">
            <div>
              <h2 className="label label-amber">Every build includes</h2>
              <ul className="mt-4">
                {INCLUDED.map((x) => (
                  <li key={x} className="flex gap-3 border-b border-line py-3 text-sm text-bone/80">
                    <span className="font-mono amber">+</span>{x}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="label label-amber">None of this is</h2>
              <ul className="mt-4">
                {NOT_THIS.map((x) => (
                  <li key={x} className="flex gap-3 border-b border-line py-3 text-sm text-mute">
                    <span className="font-mono text-dim">x</span>{x}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="label label-amber">Packages</h2>
            <p className="lede mt-2">Pick by where you are today. Nothing gets added once you choose.</p>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {PACKAGES.map(([name, price, who, feats, hot]) => (
                <div key={name} className={`card flex flex-col ${hot ? "!border-amber" : ""}`}>
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="font-bold uppercase">{name}</p>
                    {hot && <span className="label label-amber">Most taken</span>}
                  </div>
                  <p className="mt-1 text-xs text-dim">{who}</p>
                  <p className="mt-3 font-display text-3xl font-extrabold">{price}</p>
                  <ul className="mt-4 space-y-1.5 border-t border-line pt-4 text-sm text-bone/75">
                    {feats.map((f) => <li key={f} className="flex gap-2"><span className="amber">+</span>{f}</li>)}
                  </ul>
                  <Link to="/contact" className={`btn mt-5 w-full ${hot ? "btn-primary" : "btn-ghost"}`}>Book 15 min on WhatsApp</Link>
                </div>
              ))}
            </div>
            <p className="label mt-4 !text-[9px]">Not sure which fits? A 15-minute call settles it, no prep needed.</p>
          </div>

          <div id="rates" className="rule mt-12 pt-8">
            <h2 className="label label-amber">Full rate card</h2>
            <p className="lede mt-2">Every figure, in USD. Grouped by discipline.</p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {GROUPS.map((g) => (
                <section key={g.id} id={g.id} className="border border-line p-5">
                  <h3 className="label label-amber">{g.label}</h3>
                  <div className="mt-3">
                    {g.items.map(([name, price, note]) => (
                      <div key={name} className="grid gap-1 border-b border-line py-2.5 last:border-0 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-4">
                        <div>
                          <p className="text-sm text-bone/90">{name}</p>
                          {note && <p className="label mt-1 !text-[9px]">{note}</p>}
                        </div>
                        <p className="font-mono text-[11px] uppercase tracking-wider amber sm:text-right">{price}</p>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>

          <div className="rule mt-12 pt-8">
            <h2 className="label label-amber">Retainers, monthly</h2>
            <p className="lede mt-2">For the ones who would rather never think about it again. Cancel with 30 days notice, no lock-in.</p>
            <div className="mt-5">
              {RETAINERS.map(([name, price, note]) => (
                <div key={name} className="grid gap-1 border-b border-line py-4 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6">
                  <div>
                    <p className="font-bold uppercase text-sm">{name}</p>
                    <p className="mt-1 text-xs text-mute">{note}</p>
                  </div>
                  <p className="font-mono text-[11px] amber sm:text-right">{price}/mo</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rule mt-12 pt-8">
            <h2 className="label label-amber">Terms</h2>
            <p className="lede mt-2">Short, and the same for everyone. Read them before you commit.</p>
            <ol className="mt-4">
              {TERMS.map((t, i) => (
                <li key={t} className="flex gap-3 border-b border-line py-3 text-sm text-bone/75">
                  <span className="font-mono text-[11px] amber">{String(i + 1).padStart(2, "0")}</span>{t}
                </li>
              ))}
            </ol>
          </div>

          <div className="py-16 text-center">
            <h2 className="display h2 mx-auto max-w-2xl">You have seen the numbers. <span className="amber">Now talk.</span></h2>
            <p className="lede mx-auto mt-4">Send the scope on WhatsApp and the exact figure comes back in writing the same day. If the first draft misses the brief, round two is free.</p>
            <Link to="/contact" className="btn btn-primary mt-8">Get a written quote</Link>
            
          </div>
        </div>
      </div>
    </>
  );
}
