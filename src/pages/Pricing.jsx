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
        description="Every price, published, in USD. Web builds, brand, SEO, security, automation and compliance. Fixed fees with a written scope before you pay."
      />

      <div className="px-6 pt-28 md:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#F5B800]">Rate card</p>

          <h1 className="mt-6 text-[12vw] font-black uppercase leading-[0.82] tracking-tighter md:text-[7.4vw]">
            Every price.<br /><span className="text-[#F5B800]">In the open.</span>
          </h1>

          <div className="mt-10 grid gap-8 border-b border-white/10 pb-10 md:grid-cols-[1.2fr_1fr] md:items-end">
            <p className="max-w-xl border-l-2 border-[#F5B800] pl-6 font-mono text-xs uppercase leading-relaxed tracking-widest text-[#8E8C84]">
              Most agencies hide the numbers until you are emotionally invested.
              Here they are, in USD, before you speak to anyone.
            </p>
            <p className="font-mono text-[10px] uppercase leading-loose tracking-[0.2em] text-[#5c5a55] md:text-right">
              Two build slots a quarter. <br />Fixed fee, written scope.
            </p>
          </div>

          <div className="grid gap-px border-b border-white/10 bg-white/10 py-px md:grid-cols-3">
            {[
              ["No hourly billing", "A number on a page beats an invoice you cannot predict."],
              ["No scope creep", "Anything outside the brief is a change order, priced up front."],
              ["No hostage clause", "Code, files and accounts are yours at launch."],
            ].map(([h, b]) => (
              <div key={h} className="bg-[#080807] p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#F5B800]">{h}</p>
                <p className="mt-2 text-sm leading-relaxed text-[#8E8C84]">{b}</p>
              </div>
            ))}
          </div>

          <div className="sticky top-14 z-40 -mx-6 mt-10 border-y border-white/10 bg-[#080807]/95 px-6 py-3 backdrop-blur-md md:-mx-12 md:px-12">
            <div className="flex items-center gap-3">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Filter services"
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

          <section className="border-b border-white/10 py-14">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#F5B800]">Retainers, monthly</h2>
            <p className="mt-3 max-w-lg text-sm text-[#8E8C84]">
              For the ones who would rather never think about it again. Cancel with 30 days notice.
            </p>
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
            <p className="mt-3 max-w-lg text-sm text-[#8E8C84]">
              Bundled because the parts are cheaper together. Pick the one that matches where you actually are.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {PACKAGES.map(([name, price, who, feats, hot]) => (
                <div key={name} className={`flex flex-col border p-6 ${hot ? "border-[#F5B800] bg-[#0c0c0b]" : "border-white/10"}`}>
                  <div className="flex items-baseline justify-between">
                    <p className="text-lg font-bold uppercase">{name}</p>
                    {hot && <span className="bg-[#F5B800] px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-widest text-[#080807]">Most taken</span>}
                  </div>
                  <p className="mt-1 font-mono text-[10px] uppercase leading-relaxed tracking-[0.15em] text-[#5c5a55]">{who}</p>
                  <p className="mt-4 text-3xl font-black">{price}</p>
                  <ul className="mt-5 space-y-2 border-t border-white/10 pt-4 text-sm text-[#F4F3EF]/75">
                    {feats.map((f) => <li key={f} className="flex gap-2"><span className="text-[#F5B800]">+</span>{f}</li>)}
                  </ul>
                  <Link to="/contact" className={`mt-6 inline-flex justify-center border px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors ${hot ? "border-[#F5B800] bg-[#F5B800] text-[#080807] hover:bg-white" : "border-white/20 hover:border-[#F5B800] hover:text-[#F5B800]"}`}>
                    Start here
                  </Link>
                </div>
              ))}
            </div>
          </section>

          <section className="border-t border-white/10 py-14">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#F5B800]">Terms</h2>
            <p className="mt-3 max-w-lg text-sm text-[#8E8C84]">
              Short, and the same for everyone. Read them before you commit.
            </p>
            <ol className="mt-6 space-y-3">
              {TERMS.map((t, i) => (
                <li key={t} className="flex gap-4 border-b border-white/[0.07] pb-3 text-sm text-[#F4F3EF]/75">
                  <span className="font-mono text-xs text-[#F5B800]">{String(i + 1).padStart(2, "0")}</span>
                  {t}
                </li>
              ))}
            </ol>
          </section>

          <div className="border-t border-white/10 py-24 text-center">
            <h2 className="mx-auto max-w-2xl text-4xl font-black uppercase leading-[0.9] tracking-tighter sm:text-6xl">
              You have seen the<br /><span className="text-[#F5B800]">numbers. Now talk.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-md font-mono text-xs uppercase leading-relaxed tracking-widest text-[#8E8C84]">
              Tell us the scope and we will tell you the exact figure, in writing,
              inside one business day.
            </p>
            <Link to="/contact" className="mt-10 inline-block border border-[#F5B800] bg-[#F5B800] px-10 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#080807] transition-colors hover:border-white hover:bg-white">
              Get a written quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
