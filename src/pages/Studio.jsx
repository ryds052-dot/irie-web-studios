import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { Reveal } from "../components/FxLayer";

const PEOPLE = [
  {
    name: "Ryder Lee",
    role: "Co-founder / Engineering",
    body: "Full-stack and WebGL. Writes the shaders, ships the builds, and refuses to leave a performance budget unmet.",
    tags: ["Next.js", "Three.js", "Edge infrastructure", "Performance"],
  },
  {
    name: "Nelson Denny",
    role: "Co-founder / Direction",
    body: "Brand, art direction and conversion. Decides what a page has to say, then argues for cutting half of it.",
    tags: ["Identity", "Art direction", "Copy", "CRO"],
  },
];

const PRINCIPLES = [
  ["Fixed fee or nothing", "Hourly billing rewards slowness. Ours does not."],
  ["The brief comes before the pixels", "We write the scope down and you approve it before work starts."],
  ["Fast is a feature", "Every build ships with a performance budget attached."],
  ["No account managers", "You talk to the people doing the work. Always."],
  ["You own it at launch", "Code, files, domains, accounts. No hostage clauses."],
  ["Say no early", "If we are wrong for the job, you hear it on the first call, not week three."],
];

export default function Studio() {
  return (
    <>
      <Seo
        title="The Studio - Irie Web Studios"
        description="Two founders in Kingston, Jamaica. Ryder Lee and Nelson Denny build web architecture, WebGL and conversion funnels without agency theatre."
      />

      <div className="px-6 pt-28 md:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#F5B800]">The studio</p>

          <h1 className="mt-6 text-[12vw] font-black uppercase leading-[0.82] tracking-tighter md:text-[7.4vw]">
            Two people.<br /><span className="text-[#F5B800]">One standard.</span>
          </h1>

          <div className="mt-10 grid gap-10 border-b border-white/10 pb-12 md:grid-cols-[1.3fr_1fr] md:items-end">
            <p className="max-w-xl border-l-2 border-[#F5B800] pl-6 text-base leading-relaxed text-[#F4F3EF]/80">
              Irie Web Studios is Ryder Lee and Nelson Denny, working out of Kingston 6.
              One builds the architecture, one decides what it has to say. There is no
              third person to relay a message to, and nobody junior inheriting your project
              after the pitch.
            </p>
            <p className="font-mono text-[10px] uppercase leading-loose tracking-[0.2em] text-[#5c5a55] md:text-right">
              Kingston 6, Jamaica · UTC-5<br />Remote worldwide
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {PEOPLE.map((p, i) => (
              <Reveal key={p.name} delay={i * 90}>
                <div className="h-full border border-white/10 p-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#F5B800]">{p.role}</p>
                  <h2 className="mt-4 text-3xl font-black uppercase tracking-tight">{p.name}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-[#8E8C84]">{p.body}</p>
                  <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-5">
                    {p.tags.map((t) => (
                      <span key={t} className="border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-[#F4F3EF]/60">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-20 border-t border-white/10 pt-12">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#F5B800]">How we hold ourselves</p>
            <div className="mt-8 grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-3">
              {PRINCIPLES.map(([h, b]) => (
                <div key={h} className="bg-[#080807] p-7">
                  <h3 className="text-lg font-bold uppercase leading-snug">{h}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#8E8C84]">{b}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 grid gap-10 border-t border-white/10 py-16 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-4xl font-black uppercase leading-[0.9] tracking-tighter sm:text-5xl">
                Read the work,<br /><span className="text-[#F5B800]">then judge us.</span>
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-[#8E8C84]">
                Three builds with the brief, the approach and the result written out.
                No stock photography, no inflated metrics.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link to="/work" className="border border-[#F5B800] bg-[#F5B800] px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#080807] transition-colors hover:border-white hover:bg-white">
                See the work
              </Link>
              <Link to="/contact" className="border border-white/20 px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] transition-colors hover:border-[#F5B800] hover:text-[#F5B800]">
                Start a project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
