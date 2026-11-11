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
  ["Fixed fee, in writing", "You know the full price before you pay anything. No hourly drift."],
  ["Say no early", "If we are wrong for the job you hear it on the first call, not week three."],
];

const FACTS = [
  ["Based", "Kingston, Jamaica"],
  ["Team", "Two people"],
  ["Builds", "Hand-coded React"],
  ["Price", "Fixed, in writing"],
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
            <p className="lede mt-6 max-w-xl">
              One engineer, one communicator, working out of {LOCATION}. When you
              call, you get the person doing the work · from the first message to
              launch day.
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
                    Your site gets built by one person, start to finish · the pages your
                    customers see, the server behind them, the database in the middle.
                    Nothing gets lost between departments because there are no departments.
                  </p>
                </Reveal>
                <Reveal delay={110}>
                  <p>
                    Your customers are mostly on phones, on island data · so every page
                    is built to open fast on exactly that. And before anything ships, it
                    gets read and tested line by line, because the problems that cost you
                    customers are the ones that only show up after launch.
                  </p>
                </Reveal>
              </div>

              <Reveal delay={160}>
                <div className="mt-8 border-t border-line pt-5">
                  <p className="label label-amber">Hands on</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {["Wallet security audits", "Smart contract review", "Post-compromise wallet forensics", "Security hardening", "Malware recovery", "SPF / DKIM / DMARC", "MFA rollout", "PCI scope reduction", "Payment gateways", "POS integration", "Cloud config review", "Managed hosting", "DNS", "WhatsApp automation", "CRM architecture", "WebGL / Three.js", "React", "Node", "Performance budgets", "Technical SEO · JSON-LD"].map((t) => (
                      <span key={t} className="border border-line px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-mute">{t}</span>
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
                Nelson is who you talk to. First replies, the brief, the schedule, and
                the follow-up you should not have to chase. One point of contact for
                the whole project, never juggling your project against someone else's build.
              </p>
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
            <p className="label label-amber">How we work</p>
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

          <div className="rule mt-14 flex flex-wrap items-center justify-between gap-4 pt-8 pb-4">
            <p className="label">Fixed fee, fixed date, in writing.</p>
            <Link to="/contact" className="btn btn-primary">Book a free call</Link>
            <p className="label w-full !text-[9px]">15 min · no prep · no pitch</p>
          </div>
        </div>
      </div>
    </>
  );
}
