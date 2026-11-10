import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { GROUPS, RETAINERS, PACKAGES, TERMS } from "../data/rates";

export default function Pricing() {
  const [q, setQ] = useState("");

  const groups = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return GROUPS;
    return GROUPS.map((g) => ({ ...g, items: g.items.filter((i) => i[0].toLowerCase().includes(t)) })).filter((g) => g.items.length);
  }, [q]);

  return (
    <>
      <Seo
        title="Rate Card - Irie Web Studios"
        description="Every price, published, in USD. Web builds, brand, SEO, security, automation and compliance. Fixed fees with a written scope."
        path="/pricing"
      />
      <div className="pad pt-28 md:pt-36">
        <div className="wrap max-w-5xl">
          <p className="label label-amber">Rate card</p>
          <h1 className="display h1 mt-4">
            Every price. <span className="amber">In the open.</span>
          </h1>

          <div className="rule mt-8 grid gap-6 pb-8 md:grid-cols-[1.3fr_1fr] md:items-end">
            <p className="lede">
              Most agencies hide the numbers until you are invested. Here they are, in USD, before you speak to anyone.
            </p>
            <p className="label md:text-right">Two build slots a quarter. Fixed fee, written scope.</p>
          </div>

          <div className="grid gap-px bg-line md:grid-cols-3">
            {[["No hourly billing", "A number on a page beats an invoice you cannot predict."], ["No scope creep", "Anything outside the brief is a change order, priced up front."], ["No hostage clause", "Code, files and accounts are yours at launch."]].map(([h, b]) => (
              <div key={h} className="bg-ink p-5">
                <p className="label label-amber">{h}</p>
                <p className="mt-2 text-sm leading-relaxed text-mute">{b}</p>
              </div>
            ))}
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

          <div className="rule mt-14 pt-8">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
              <h2 className="label label-amber">Full rate card</h2>
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Filter services"
                className="field sm:max-w-xs"
              />
            </div>

            {groups.map((g) => (
              <section key={g.id} id={g.id} className="mt-8 border-b border-line pb-6">
                <h3 className="label label-amber">{g.label}</h3>
                <div className="mt-4">
                  {g.items.map(([name, price, note]) => (
                    <div key={name} className="grid gap-1 border-b border-line py-3 last:border-0 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6">
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

            {groups.length === 0 && <p className="label py-12">Nothing matches "{q}".</p>}
          </div>

          <div className="rule mt-12 pt-8">
            <h2 className="label label-amber">Retainers, monthly</h2>
            <p className="lede mt-2">For the ones who would rather never think about it again. Cancel with 30 days notice.</p>
            <div className="mt-5 grid gap-px bg-line md:grid-cols-2">
              {RETAINERS.map(([name, price, note]) => (
                <div key={name} className="bg-ink p-5">
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="font-bold uppercase text-sm">{name}</p>
                    <p className="font-mono text-[11px] amber">{price}/mo</p>
                  </div>
                  <p className="mt-1.5 text-xs text-mute">{note}</p>
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

          <div className="py-20 text-center">
            <h2 className="display h2 mx-auto max-w-2xl">You have seen the numbers. <span className="amber">Now talk.</span></h2>
            <p className="lede mx-auto mt-4">Tell us the scope and we will give you the exact figure in writing, inside one business day.</p>
            <Link to="/contact" className="btn btn-primary mt-8">Get a written quote</Link>
          </div>
        </div>
      </div>
    </>
  );
}
