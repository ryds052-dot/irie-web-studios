import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { Reveal } from "../components/FxLayer";
import { LOCATION } from "../lib/site";

const FACTS = [
  ["Based", "Kingston 6, Jamaica"],
  ["Discipline", "Full-stack, WebGL"],
  ["Years in JS", "Nine"],
  ["Years in WebGL", "Four"],
  ["Builds shipped", "60+"],
  ["Languages", "EN, Patois"],
];

const BUYS = [
  ["It opens before they leave", "Static rendering and a sub-second budget on 3G, not on your office wifi."],
  ["It gets found", "Schema, crawl rules and internal linking set correctly at build, not patched in later."],
  ["It holds", "Security headers, hardened forms and auth done properly the first time."],
  ["You keep it", "Code, files, domains and accounts handed over at launch. No hostage clause."],
];

const PRINCIPLES = [
  ["Write it down first", "Scope before pixels. If it is not in the brief it does not get built."],
  ["Budget the bytes", "Every build ships with a performance ceiling attached. Not optional."],
  ["Read the output", "Nothing merges because it looked plausible. It merges because it was checked."],
  ["Fixed fee or nothing", "Hourly billing rewards slowness. Ours does not."],
  ["Say no early", "If we are wrong for the job you hear it on the first call, not week three."],
];

export default function Studio() {
  return (
    <>
      <Seo
        title="The Studio - Irie Web Studios"
        description="Ryder Lee engineers every build, Nelson Denny runs the front of house. Two people in Kingston, Jamaica. No account managers, no juniors."
        path="/studio"
      />

      <div className="pad pt-28 md:pt-36">
        <div className="wrap">
          <Reveal>
            <p className="label label-amber">The studio</p>
            <h1 className="display h1 mt-4">
              Two people. <span className="amber">No committee.</span>
            </h1>
          </Reveal>

          <Reveal delay={80}>
            <p className="lede mt-6">
              Irie Web Studios is one engineer and one communicator, working out of{" "}
              {LOCATION}. Ryder writes every line of code. Nelson runs everything around
              it. There is no third person to relay a message to, and nobody junior
              inheriting your project after the pitch.
            </p>
          </Reveal>

          <div className="rule mt-14 grid gap-10 pt-12 lg:grid-cols-[1fr_15rem] lg:gap-16">
            <div>
              <Reveal>
                <p className="label label-amber">Co-founder / Engineering</p>
                <h2 className="display h2 mt-2">Ryder Lee</h2>
              </Reveal>

              <div className="mt-7 space-y-5 text-[15px] leading-relaxed text-bone/80 md:text-base">
                <Reveal delay={60}>
                  <p>
                    Ryder wrote his first shader before he had a client to use one on.
                    Nine years into JavaScript, the last four of them spent almost
                    entirely in WebGL and React Three Fiber, building the kind of motion
                    that gets a page forwarded rather than scrolled past.
                  </p>
                </Reveal>

                <Reveal delay={110}>
                  <p>
                    The engineering under the surface is the part clients actually feel.
                    Transmission materials and instanced geometry, so a scene stays at
                    sixty frames on a mid-range Android. Subsetted fonts and precomputed
                    image sets, so nothing stalls on first paint. Static rendering,
                    schema and crawl rules configured at the start, because retrofitting
                    them costs four times as much and never quite works.
                  </p>
                </Reveal>

                <Reveal delay={160}>
                  <p>
                    He thinks about code the way a chess player thinks about openings.
                    The branching is the point, not the first move, and the position you
                    leave behind matters more than the one you found. That is also why
                    nothing generated gets past him unread. A build that compiles is not
                    the same as a build that holds.
                  </p>
                </Reveal>

                <Reveal delay={210}>
                  <p>
                    He is direct to the point of bluntness, which is the useful kind. If
                    your idea has a cheaper version that does the same job, he will say so
                    before you spend money finding out.
                  </p>
                </Reveal>
              </div>

              <Reveal delay={260}>
                <blockquote className="mt-9 border-l-2 border-amber pl-5">
                  <p className="text-lg leading-snug text-bone/90 md:text-xl">
                    Discussing more when we have not done anything is lax.
                  </p>
                  <footer className="label mt-2">Ryder Lee</footer>
                </blockquote>
              </Reveal>

              <Reveal delay={300}>
                <div className="rule mt-12 pt-8">
                  <p className="label label-amber">What that buys you</p>
                  <div className="mt-4">
                    {BUYS.map(([h, b]) => (
                      <div key={h} className="grid gap-1 border-b border-line py-4 md:grid-cols-[16rem_1fr] md:items-baseline md:gap-6">
                        <p className="text-sm font-bold uppercase tracking-tight">{h}</p>
                        <p className="text-sm leading-relaxed text-mute">{b}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <dl className="grid grid-cols-2 gap-x-4 gap-y-3 lg:grid-cols-1">
                {FACTS.map(([k, v]) => (
                  <div key={k} className="border-b border-line pb-2">
                    <dt className="label !text-[9px]">{k}</dt>
                    <dd className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.1em] text-bone/80">{v}</dd>
                  </div>
                ))}
              </dl>
              <Link to="/work" className="btn btn-ghost mt-5 w-full">See the work</Link>
            </aside>
          </div>

          <div className="rule mt-16 grid gap-8 pt-12 md:grid-cols-[1fr_1.6fr]">
            <div>
              <p className="label label-amber">Co-founder / Communications</p>
              <h2 className="display h3 mt-2 font-extrabold uppercase">Nelson Denny</h2>
            </div>
            <div>
              <p className="text-[15px] leading-relaxed text-mute md:text-base">
                Nelson runs the side of the business that keeps work arriving and keeps
                it moving once it does. Outreach, first replies, the brief, the schedule,
                the follow-up nobody else remembers to send. Every project has exactly
                one person to talk to, and that person is never mid-compile.
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {["Client comms", "Outreach", "Briefing", "Scheduling"].map((t) => (
                  <span key={t} className="border border-line px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-mute">{t}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="rule mt-16 pt-12">
            <p className="label label-amber">How we hold ourselves</p>
            <div className="mt-5">
              {PRINCIPLES.map(([h, b], i) => (
                <Reveal key={h} delay={i * 50}>
                  <div className="grid gap-1 border-b border-line py-4 md:grid-cols-[1.1fr_1.4fr] md:items-baseline md:gap-6">
                    <p className="text-sm font-bold uppercase tracking-tight">{h}</p>
                    <p className="text-sm leading-relaxed text-mute">{b}</p>
                  </div>
                </Reveal>
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
