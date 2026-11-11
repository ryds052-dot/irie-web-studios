import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { GROUPS, RETAINERS, PACKAGES, TERMS } from "../data/rates";

const NEVER = [
  "A template with your logo dropped in.",
  "An offshore handoff after the pitch call.",
  "An account manager relaying messages.",
  "A retainer you cannot leave.",
];

const ALWAYS = [
  "A fixed fee agreed before you pay.",
  "One written scope, no creeping extras.",
  "Direct access to the two people building it.",
  "Code, accounts and files handed over at launch.",
];

export default function Services() {
  return (
    <>
      <Seo
        title="Services and Rates - Irie Web Studios"
        description="Brand identity, web design, development, WebGL motion, SEO and CRO. Every price published in USD, fixed fee with a written scope."
        path="/services"
      />
      <div className="pad pt-28 md:pt-36">
        <div className="wrap">
          <p className="label label-amber">Services</p>
          <h1 className="display h1 mt-4">
            What we do, and <span className="amber">what it costs.</span>
          </h1>

          <div className="rule mt-8 grid gap-6 pb-8 md:grid-cols-[1.3fr_1fr] md:items-end">
            <p className="lede">
              Most studios sell hours and hide the numbers until you are invested. We sell the reason a stranger picks you over the cheaper option, and we publish what it costs.
            </p>
            <p className="label md:text-right">Fixed fee. Written scope. No hourly drift.</p>
          </div>
          <div className="rule mt-12 grid gap-10 py-12 md:grid-cols-2">
            <div>
              <h2 className="label label-amber">What none of this is</h2>
              <ul className="mt-4">
                {NEVER.map((x) => (
                  <li key={x} className="flex gap-3 border-b border-line py-3 text-sm text-mute">
                    <span className="font-mono amber">x</span>{x}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="label label-amber">What it always is</h2>
              <ul className="mt-4">
                {ALWAYS.map((x) => (
                  <li key={x} className="flex gap-3 border-b border-line py-3 text-sm text-bone/80">
                    <span className="font-mono amber">+</span>{x}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="label label-amber">Packages</h2>
            <p className="lede mt-2">Bundled because the parts are cheaper together. Pick the one that matches where you are.</p>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {PACKAGES.map(([name, price, who, feats, hot]) => (
                <div key={name} className={`card flex flex-col ${hot ? "!border-amber" : ""}`}>
                  <div className="flex items-baseline justify-between">
                    <p className="font-bold uppercase">{name}</p>
                    {hot && <span className="label label-amber">Most taken</span>}
                  </div>
                  <p className="mt-1 text-xs text-dim">{who}</p>
                  <p className="mt-3 font-display text-3xl font-extrabold">{price}</p>
                  <ul className="mt-4 space-y-1.5 border-t border-line pt-4 text-sm text-bone/75">
                    {feats.map((f) => <li key={f} className="flex gap-2"><span className="amber">+</span>{f}</li>)}
                  </ul>
                  <Link to="/contact" className={`btn mt-5 w-full ${hot ? "btn-primary" : "btn-ghost"}`}>Start here</Link>
                </div>
              ))}
            </div>
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
            <p className="lede mt-2">For the ones who would rather never think about it again. Cancel with 30 days notice.</p>
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
            <p className="lede mx-auto mt-4">Tell us the scope and we will give you the exact figure in writing, inside one business day.</p>
            <Link to="/contact" className="btn btn-primary mt-8">Get a written quote</Link>
          </div>
        </div>
      </div>
    </>
  );
}



