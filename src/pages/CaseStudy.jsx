import { Link, useParams } from "react-router-dom";
import Seo from "../components/Seo";
import { PROJECTS, getProject } from "../data/projects";
import NotFound from "./NotFound";

export default function CaseStudy() {
  const { slug } = useParams();
  const p = getProject(slug);
  if (!p) return <NotFound />;

  const i = PROJECTS.findIndex((x) => x.slug === slug);
  const next = PROJECTS[(i + 1) % PROJECTS.length];

  return (
    <>
      <Seo title={`${p.title} - Irie Web Studios`} description={p.brief} />
      <article className="px-6 pt-28 md:px-12">
        <div className="mx-auto max-w-7xl">
          <Link to="/work" className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#8E8C84] hover:text-[#F5B800]">
            ← All work
          </Link>

          <div className="mt-10 flex flex-wrap items-center gap-4 font-mono text-[10px] uppercase tracking-[0.25em] text-[#8E8C84]">
            <span className="text-emerald-400">[{p.status}]</span>
            <span>{p.sector}</span>
            <span>{p.year}</span>
          </div>

          <h1 className="mt-6 text-[13vw] font-black uppercase leading-[0.82] tracking-tighter md:text-[8vw]">{p.title}</h1>
          <p className="mt-6 max-w-2xl text-xl font-medium leading-snug text-[#F5B800] md:text-3xl">{p.outcome}</p>

          <div className="mt-16 grid gap-14 border-t border-white/10 pt-14 md:grid-cols-[1fr_1.3fr]">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#8E8C84]">Stack</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-[#F4F3EF]/70">{s}</span>
                ))}
              </div>
              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                {p.results.map(([v, l]) => (
                  <div key={l}>
                    <p className="text-2xl font-bold text-[#F5B800]">{v}</p>
                    <p className="mt-1 font-mono text-[9px] uppercase tracking-widest text-[#8E8C84]">{l}</p>
                  </div>
                ))}
              </div>
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="mt-10 inline-flex border border-white/20 px-6 py-3 font-mono text-[10px] uppercase tracking-[0.2em] hover:border-[#F5B800] hover:text-[#F5B800]"
              >
                Visit live site ↗
              </a>
            </div>

            <div>
              <h2 className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#8E8C84]">The brief</h2>
              <p className="mt-4 text-lg leading-relaxed text-[#F4F3EF]/85">{p.brief}</p>

              <h2 className="mt-12 font-mono text-[10px] uppercase tracking-[0.25em] text-[#8E8C84]">Approach</h2>
              <ol className="mt-4 space-y-5">
                {p.approach.map((a, idx) => (
                  <li key={a} className="flex gap-4 border-b border-white/10 pb-5">
                    <span className="font-mono text-xs text-[#F5B800]">{String(idx + 1).padStart(2, "0")}</span>
                    <span className="text-base leading-relaxed text-[#F4F3EF]/80">{a}</span>
                  </li>
                ))}
              </ol>

              <blockquote className="mt-12 border-l-2 border-[#F5B800] pl-6">
                <p className="text-xl leading-snug">“{p.quote[0]}”</p>
                <footer className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#8E8C84]">{p.quote[1]} — {p.quote[2]}</footer>
              </blockquote>
            </div>
          </div>

          <Link to={`/work/${next.slug}`} className="group mt-24 block border-t border-white/10 py-12">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#8E8C84]">Next project</p>
            <p className="mt-3 text-4xl font-black uppercase tracking-tighter transition-colors group-hover:text-[#F5B800] md:text-6xl">
              {next.title} <span className="inline-block transition-transform group-hover:translate-x-2">→</span>
            </p>
          </Link>
        </div>
      </article>
    </>
  );
}
