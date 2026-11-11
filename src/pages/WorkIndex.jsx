import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { PROJECTS } from "../data/projects";

export default function WorkIndex() {
  return (
    <>
      <Seo
        title="Selected Work - Irie Web Studios"
        description="Three builds with the brief, the approach and the result. Booking funnels, ordering engines and WebGL systems from Kingston, Jamaica."
        path="/work"
      />
      <div className="pad pt-28 md:pt-36">
        <div className="wrap">
          <p className="label label-amber">Selected work</p>
          <h1 className="display h1 mt-4">
            The receipts.
          </h1>
          <p className="lede mt-5">
            No stock photography, no invented metrics. Each one has the brief, the approach and what changed.
          </p>

          <div className="rule mt-10">
            {PROJECTS.map((p) => (
              <Link key={p.slug} to={`/work/${p.slug}`} className="group block border-b border-line py-8 md:py-10">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[11px] amber">{p.index}</span>
                  <span className="label">{p.status}</span>
                </div>
                <h2 className="display h3 mt-3 font-extrabold uppercase transition-colors group-hover:text-amber">
                  {p.title}
                </h2>
                <p className="mt-2 max-w-lg text-base text-bone/80">{p.outcome}</p>
                <p className="mt-3 max-w-xl text-sm text-mute">{p.brief}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="border border-line px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-mute">{s}</span>
                  ))}
                </div>
                <span className="mt-4 inline-block label group-hover:text-amber">Read the case study &rarr;</span>
                <span className="mt-2 block label text-dim">{p.href.replace("https://", "").replace(/\/$/, "")}</span>
              </Link>
            ))}
          </div>

          <div className="py-16 text-center">
            <Link to="/contact" className="btn btn-primary">Start a project</Link>
          </div>
        </div>
      </div>
    </>
  );
}

