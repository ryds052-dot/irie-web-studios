import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { PROJECTS } from "../data/projects";

export default function WorkIndex() {
  return (
    <>
      <Seo
        title="Web Design Portfolio Jamaica - Selected Work | Irie Web Studios"
        description="Two builds with the brief, the approach and the result. Private land viewings and WhatsApp ordering from Kingston, Jamaica."
        path="/work"
      />

      <div className="pad pt-28 md:pt-36">
        <div className="wrap">
          <p className="label">Selected work</p>
          <h1 className="display mt-4">
            Built in Kingston, <span className="gold">live in the wild.</span>
          </h1>
          <p className="lede mt-6">
            Two builds, both still live. Each case study has the brief, the approach and what changed.
          </p>

          <div className="mt-14">
            <div className="sec"><h2 className="display h2">Websites we built</h2><span className="sec-n">01</span></div>
            <ul className="index">
              {PROJECTS.map((p, i) => (
                <li key={p.slug}>
                  <Link to={`/work/${p.slug}`} className="index-row">
                    <span className="index-n">{String(i + 1).padStart(2, "0")}</span>
                    <span className="index-name">{p.title}</span>
                    <span className="index-meta">{p.outcome}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-20">
            <p className="lede mt-4">Send a message. You get the price in writing the same day.</p>
            <Link to="/contact" className="btn btn-primary btn-block mt-6">Send the brief</Link>
            <Link to="/services" className="link mt-4">See every price →</Link>
          </div>
        </div>
      </div>
    </>
  );
}
