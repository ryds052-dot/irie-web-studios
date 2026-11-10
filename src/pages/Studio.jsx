import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { LOCATION } from "../lib/site";

const PEOPLE = [
  ["Ryder Lee", "Co-founder / Engineering", "Full-stack and WebGL. Writes the shaders, ships the builds, refuses to let a performance budget slide.", ["Next.js", "Three.js", "Edge", "Performance"]],
  ["Nelson Denny", "Co-founder / Direction", "Brand, art direction and conversion. Decides what a page has to say, then argues for cutting half of it.", ["Identity", "Art direction", "Copy", "CRO"]],
];

const PRINCIPLES = [
  ["Fixed fee or nothing", "Hourly billing rewards slowness. Ours does not."],
  ["Brief before pixels", "Scope gets written down and approved before work starts."],
  ["Fast is a feature", "Every build ships with a performance budget attached."],
  ["No account managers", "You talk to the people doing the work. Always."],
  ["You own it at launch", "Code, files, domains, accounts. No hostage clauses."],
  ["Say no early", "If we are wrong for the job you hear it on the first call, not week three."],
];

export default function Studio() {
  return (
    <>
      <Seo
        title="The Studio - Irie Web Studios"
        description="Two founders in Kingston, Jamaica. Ryder Lee and Nelson Denny build web architecture, WebGL and conversion funnels without agency theatre."
        path="/studio"
      />
      <div className="pad pt-28 md:pt-36">
        <div className="wrap">
          <p className="label label-amber">The studio</p>
          <h1 className="display h1 mt-4">
            Two people. <span className="amber">One standard.</span>
          </h1>

          <div className="rule mt-8 grid gap-6 pb-10 md:grid-cols-[1.3fr_1fr] md:items-end">
            <p className="lede">
              Irie Web Studios is Ryder Lee and Nelson Denny, working out of {LOCATION}. One builds the architecture, one decides what it has to say. There is no third person to relay a message to, and nobody junior inheriting your project after the pitch.
            </p>
            <p className="label md:text-right">{LOCATION} / UTC-5<br />Remote worldwide</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {PEOPLE.map(([name, role, body, tags]) => (
              <div key={name} className="card">
                <p className="label label-amber">{role}</p>
                <h2 className="display h3 mt-3 font-extrabold uppercase">{name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-mute">{body}</p>
                <div className="rule mt-5 flex flex-wrap gap-1.5 pt-4">
                  {tags.map((t) => (
                    <span key={t} className="border border-line px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-mute">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="rule mt-16 pt-10">
            <p className="label label-amber">How we hold ourselves</p>
            <div className="mt-6 grid gap-px bg-line md:grid-cols-2 lg:grid-cols-3">
              {PRINCIPLES.map(([h, b]) => (
                <div key={h} className="bg-ink p-6">
                  <h3 className="font-bold uppercase leading-snug">{h}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mute">{b}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rule mt-16 grid gap-6 py-14 md:grid-cols-2 md:items-center">
            <h2 className="display h2">
              Read the work, <span className="amber">then judge us.</span>
            </h2>
            <div className="flex flex-col gap-2.5 sm:flex-row md:justify-end">
              <Link to="/work" className="btn btn-primary btn-block">See the work</Link>
              <Link to="/contact" className="btn btn-ghost btn-block">Start a project</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
