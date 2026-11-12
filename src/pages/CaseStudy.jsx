import { Link, useParams } from "react-router-dom";
import Seo from "../components/Seo";
import { PROJECTS, getProject } from "../data/projects";
import { SLOTS_LABEL } from "../lib/slots";
import NotFound from "./NotFound";

const BOOK = "https://wa.me/18764354047?text=Hi%20Irie%20Web%20Studios%20-%20I%27d%20like%20to%20book%20a%2015%20min%20call.";

export default function CaseStudy() {
  const { slug } = useParams();
  const p = getProject(slug);
  if (!p) return <NotFound />;

  const i = PROJECTS.findIndex((x) => x.slug === slug);
  const next = PROJECTS[(i + 1) % PROJECTS.length];

  return (
    <>
      <Seo title={`${p.title} - Irie Web Studios`} description={p.brief} path={`/work/${slug}`} />

      <article className="pad pt-24 md:pt-32">
        <div className="wrap">
          <Link to="/work" className="back-link">&larr; All work</Link>

          <div className="case-meta mt-7">
            <span className="case-status">{p.status}</span>
            <span className="case-sep" aria-hidden="true">/</span>
            <span className="label">{p.sector}</span>
            <span className="label case-year">{p.year}</span>
          </div>

          <h1 className="display mt-5">{p.title}</h1>
          <p className="case-outcome mt-5">{p.outcome}</p>

          <div className="mt-7">
            <a href={p.href} target="_blank" rel="noreferrer" className="btn btn-primary">
              Visit live site &rarr;
            </a>
          </div>

          <dl className="case-figures">
            {p.results.map(([v, l]) => (
              <div key={l}>
                <dt className="case-fig-v">{v}</dt>
                <dd className="case-fig-l">{l}</dd>
              </div>
            ))}
          </dl>



          <div className="rule mt-12 grid gap-12 pt-10 md:grid-cols-[1fr_1.5fr]">
            <div>
              <p className="label">Stack</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span key={s} className="case-tag">{s}</span>
                ))}
              </div>

            </div>

            <div>
              <h2 className="label">The brief</h2>
              <p className="case-body mt-3">{p.brief}</p>

              <h2 className="label mt-10">Approach</h2>
              <ol className="case-steps mt-3">
                {p.approach.map((a, idx) => (
                  <li key={a}>
                    <span className="case-step-n">{String(idx + 1).padStart(2, "0")}</span>
                    <span className="case-step-t">{a}</span>
                  </li>
                ))}
              </ol>

              <figure className="case-quote mt-12">
                <blockquote>{p.quote[0]}</blockquote>
                <figcaption>{p.quote[1]} — {p.quote[2]}</figcaption>
              </figure>
            </div>
          </div>

          <div className="case-closer">
            <p className="label">{SLOTS_LABEL}</p>
            <h2 className="display h2 mt-3">Want one of these?</h2>
            <p className="lede mt-3">Send the shape of the job. You get a fixed price in writing, same day.</p>
            <a href={BOOK} target="_blank" rel="noreferrer" className="btn btn-primary mt-6">
              Book a free 15 min call
            </a>
          </div>

          <Link to={`/work/${next.slug}`} className="case-next">
            <p className="label">Next project</p>
            <p className="case-next-t">{next.title} <span aria-hidden="true">&rarr;</span></p>
          </Link>
        </div>
      </article>
    </>
  );
}
