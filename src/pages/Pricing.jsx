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
        description="Transparent USD rates for web builds, brand, SEO, security, automation and compliance. Flat fees, written scope, no hourly surprises."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "OfferCatalog",
            name: "Irie Web Studios rate card",
            itemListElement: GROUPS.map((g) => ({ "@type": "OfferCatalog", name: g.label })),
          }),
        }}
      />

      <div className="px-6 pt-28 md:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#F5B800]">Rate card</p>
          <h1 className="mt-6 text-[13vw] font-black uppercase leading-[0.82] tracking-tighter md:text-[7.5vw]">
            Prices.<br /><span className="text-[#F5B800]">No theatre.</span>
          </h1>
          <p className="mt-8 max-w-xl border-l-2 border-[#F5B800] pl-6 font-mono text-xs uppercase leading-relaxed tracking-widest text-[#8E8C84]">
            Every figure is USD and published. Flat fees, scope agreed in writing before you pay. Third-party costs — stock, plugins, ad spend — are billed at cost.
          </p>

          <div className="sticky top-14 z-40 -mx-6 mt-12 border-y border-white/10 bg-[#080807]/95 px-6 py-3 backdrop-blur-md md:-mx-12 md:px-12">
            <div className="flex items-center gap-3">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Filter services…"
                className="w-full max-w-xs border border-white/15 bg-transparent px-4 py-2.5 font-mono text-xs uppercase tracking-widest outline-none placeholder:text-[#5c5a55] focus:border-[#F5B800]"
              />
              <span className="hidden font-mono text-[10px] uppercase tracking-widest text-[#5c5a55] sm:block">
                {groups.reduce((n, g) => n + g.items.length, 0)} items
              </span>
            </div>
          </div>

          {groups.map((g) => (
            <section key={g.id} id={g.id} className="scroll-mt-32 border-b border-white/10 py-10">
              <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#F5B800]">{g.label}</h2>
              <div className="mt-6">
                {g.items.map(([name, price, note]) => (
                  <div key={name} className="grid gap-1 border-b border-white/[0.07] py-4 last:border-0 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-8">
                    <div>
                      <p className="text-base text-[#F4F3EF]/90">{name}</p>
                      {note && <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-[#5c5a55]">{note}</p>}
                    </div>
                    <p className="font-mono text-xs uppercase tracking-widest text-[#F5B800] sm:text-right">{price}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {groups.length === 0 && (
            <p className="py-16 font-mono text-xs uppercase tracking-widest text-[#8E8C84]">Nothing matches “{q}”.</p>
          )}

          <section className="border-b border-white/10 py-14">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#F5B800]">Retainers, monthly</h2>
            <div className="mt-6 grid gap-px bg-white/10 md:grid-cols-2">
              {RETAINERS.map(([name, price, note]) => (
                <div key={name} className="bg-[#080807] p-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="text-base font-bold uppercase">{name}</p>
                    <p className="font-mono text-xs text-[#F5B800]">{price}/mo</p>
                  </div>
                  <p className="mt-2 text-sm text-[#8E8C84]">{note}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="py-14">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#F5B800]">Packages</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {PACKAGES.map(([name, price, feats, hot]) => (
                <div key={name} className={`border p-6 ${hot ? "border-[#F5B800]" : "border-white/10"}`}>
                  <div className="flex items-baseline justify-between">
                    <p className="text-lg font-bold uppercase">{name}</p>
                    {hot && <span className="bg-[#F5B800] px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-widest text-[#080807]">Popular</span>}
                  </div>
                  <p className="mt-2 text-3xl font-black">{price}</p>
                  <ul className="mt-5 space-y-2 border-t border-white/10 pt-4 text-sm text-[#F4F3EF]/75">
                    {feats.map((f) => <li key={f} className="flex gap-2"><span className="text-[#F5B800]">+</span>{f}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="border-t border-white/10 py-14">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#F5B800]">Terms</h2>
            <ol className="mt-6 space-y-3">
              {TERMS.map((t, i) => (
                <li key={t} className="flex gap-4 border-b border-white/[0.07] pb-3 text-sm text-[#F4F3EF]/75">
                  <span className="font-mono text-xs text-[#F5B800]">{String(i + 1).padStart(2, "0")}</span>
                  {t}
                </li>
              ))}
            </ol>
          </section>

          <div className="border-t border-white/10 py-20 text-center">
            <h2 className="mx-auto max-w-2xl text-4xl font-black uppercase leading-[0.9] tracking-tighter sm:text-6xl">
              Pick a lane.<br /><span className="text-[#F5B800]">We&apos;ll quote it.</span>
            </h2>
            <Link to="/contact" className="mt-10 inline-block border border-[#F5B800] bg-[#F5B800] px-10 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#080807] transition-colors hover:border-white hover:bg-white">
              Start a project
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
