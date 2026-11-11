import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { Reveal } from "../components/FxLayer";
import { LOCATION } from "../lib/site";

const FIT = [
  ["You have a real business and a site that undersells it.", "You want the cheapest quote on the internet."],
  ["You want one person accountable, not a committee.", "You want to art-direct by group chat."],
  ["You can decide inside one meeting.", "You need it live in five days."],
];

const PRINCIPLES = [
  ["Write it down first", "Scope before pixels. If it is not in the brief it does not get built."],
  ["Budget the bytes", "Every build ships with a speed target attached. Not optional."],
  ["Read the output", "Nothing merges because it looked fine. It merges because it was checked."],
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
              One engineer, one communicator, working out of {LOCATION}. Ryder writes
              every line. Nelson runs everything around it. No third person relaying
              messages, and nobody junior taking over your project once the pitch is done.
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
                    Ryder builds the whole thing. The 3D on the front, the server
                    settings behind it, the database in the middle. Most studios split
                    that across three people and lose a week to handoffs. Here it is one
                    person who already knows the whole shape.
                  </p>
                </Reveal>

                <Reveal delay={110}>
                  <p>
                    He cares about speed the way most designers care about looks. Your
                    customers are on a cheap phone with two bars, not a laptop on fibre,
                    so every page is built to open anyway. Images sized right, fonts cut
                    down, nothing running that does not need to.
                  </p>
                </Reveal>

                <Reveal delay={160}>
                  <p>
                    He also reads every line. Tools help, but a build that compiles is
                    not the same as a build that holds, and the difference only shows up
                    on your site at the worst moment. Nothing ships here unchecked.
                  </p>
                </Reveal>

                <Reveal delay={210}>
                  <p>
                    Blunt, in the useful way. If your idea has a cheaper version that
                    does the same job, you hear it before you spend money finding out.
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

              <Reveal delay={260}>
                <div className="mt-8 border-t border-line pt-5">
                  <p className="label label-amber">Hands on</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {["React", "Vite", "Tailwind", "WebGL", "Three.js", "Node", "Hand-coded builds", "Performance budgets", "Accessibility", "Technical SEO", "JSON-LD", "Analytics", "CRO testing", "CRM setup", "WhatsApp automation", "Payment gateways", "POS integration", "Managed hosting", "DNS", "Backups", "SPF / DKIM / DMARC", "MFA rollout", "Hardening", "Malware recovery", "Cloud config review", "PCI scope", "Consent flows", "Wallet security", "Smart contract review"].map((t) => (
                      <span key={t} className="border border-line px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-mute">{t}</span>
                    ))}
                  </div>
                </div>
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
                Nelson runs the side that keeps work arriving and keeps it moving once it
                does. Outreach, first replies, the brief, the schedule, the follow-up
                nobody else remembers. Every project has one person to talk to, and that
                person is never mid-build.
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {["Client comms", "Outreach", "Briefing", "Scheduling"].map((t) => (
                  <span key={t} className="border border-line px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-mute">{t}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="rule mt-16 pt-12">
            <p className="label label-amber">Who this is for</p>
            <div className="mt-5 grid gap-px bg-line md:grid-cols-2">
              <div className="bg-ink md:pr-8">
                <p className="label mb-2">Good fit</p>
                {FIT.map(([yes]) => (
                  <p key={yes} className="flex gap-2.5 border-b border-line py-3 text-sm leading-relaxed text-bone/80">
                    <span className="amber">+</span>{yes}
                  </p>
                ))}
              </div>
              <div className="bg-ink md:pl-8">
                <p className="label mb-2">Not a fit</p>
                {FIT.map(([, no]) => (
                  <p key={no} className="flex gap-2.5 border-b border-line py-3 text-sm leading-relaxed text-mute">
                    <span className="text-dim">x</span>{no}
                  </p>
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
              <Link to="/contact" className="btn btn-ghost btn-block">Book a free call</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}






