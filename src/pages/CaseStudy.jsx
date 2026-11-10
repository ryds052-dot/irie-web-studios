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
      <Seo title={`${p.title} - Irie Web Studios`} description={p.brief} path={`/work/${slug}`} />

      <article className="pad pt-28 md:pt-36">
        <div className="wrap">
          <Link to="/work" className="label hover:text-amber">&larr; All work</Link>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="label label-amber">{p.status}</span>
            <span className="label">{p.sector}</span>
            <span className="label">{p.year}</span>
          </div>

          <h1 className="display h1 mt-5">{p.title}</h1>
          <p className="mt-5 max-w-2xl text-lg font-medium leading-snug amber md:text-2xl">{p.outcome}</p>

          <div className="rule mt-12 grid gap-12 pt-10 md:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="label">Stack</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span key={s} className="border border-line px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-mute">{s}</span>
                ))}
              </div>

              <div className="rule mt-8 grid grid-cols-3 gap-3 pt-5">
                {p.results.map(([v, l]) => (
                  <div key={l}>
                    <p className="font-display text-xl font-extrabold amber md:text-2xl">{v}</p>
                    <p className="label mt-1 !text-[9px]">{l}</p>
                  </div>
                ))}
              </div>

              <a href={p.href} target="_blank" rel="noreferrer" className="btn btn-ghost mt-8">
                Visit live site &nearr;
              </a>
            </div>

            <div>
              <h2 className="label">The brief</h2>
              <p className="mt-3 text-base leading-relaxed text-bone/85">{p.brief}</p>

              <h2 className="label mt-10">Approach</h2>
              <ol className="mt-3">
                {p.approach.map((a, idx) => (
                  <li key={a} className="flex gap-4 border-b border-line py-4">
                    <span className="font-mono text-[11px] amber">{String(idx + 1).padStart(2, "0")}</span>
                    <span className="text-sm leading-relaxed text-bone/80">{a}</span>
                  </li>
                ))}
              </ol>

              <blockquote className="mt-10 border-l-2 border-amber pl-5">
                <p className="text-lg leading-snug">{p.quote[0]}</p>
                <footer className="label mt-3">{p.quote[1]} - {p.quote[2]}</footer>
              </blockquote>
            </div>
          </div>

          <Link to={`/work/${next.slug}`} className="group rule mt-20 block py-10">
            <p className="label">Next project</p>
            <p className="display h3 mt-2 font-extrabold uppercase transition-colors group-hover:text-amber">
              {next.title} <span className="inline-block transition-transform group-hover:translate-x-1.5">&rarr;</span>
            </p>
          </Link>
        </div>
      </article>
    </>
  );
}
