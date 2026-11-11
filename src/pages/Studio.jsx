import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { LOCATION } from "../lib/site";

const FACTS = [
  ["Based", "Kingston 6, Jamaica"],
  ["Team", "Two people"],
  ["Builds", "Hand-coded React"],
  ["Price", "Fixed, in writing"],
];

const SKILLS = [
  "Payment gateways", "POS integration", "WhatsApp automation",
  "Technical SEO + JSON-LD", "Speed and Core Web Vitals", "CRM architecture",
  "React", "Node", "Cloud config review", "Managed hosting", "DNS",
  "Performance budgets", "Security hardening", "MFA rollout", "PCI scope reduction",
  "SPF / DKIM / DMARC", "Malware recovery", "WebGL / Three.js",
  "Wallet security audits", "Smart contract review", "Post-compromise wallet forensics",
];

const PROMISES = [
  "The price is agreed before you pay anything.",
  "Landing pages go live in 7 days.",
  "If the first draft is wrong, round two is free.",
  "Pay 50% to start and 50% at launch. Nothing else.",
  "The code, domain and accounts are yours at launch.",
];

const n2 = (i) => String(i).padStart(2, "0");

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
          <p className="label">The studio</p>
          <h1 className="display mt-4">
            Two people. <span className="gold">No committee.</span>
          </h1>
          <p className="lede mt-6">
            One engineer, one communicator, working out of {LOCATION}. When you message, you reach the person doing the work.
          </p>

          <div className="mt-14">
            <p className="label">Co-founder / Engineering</p>
            <div className="sec mt-2"><h2 className="display h2">Ryder Lee</h2><span className="sec-n">01</span></div>
            <p className="lede mt-4">
              Your site gets built by one person, start to finish. The pages, the server, the database in the middle.
            </p>
            <p className="lede mt-4">
              Before anything ships, it is tested on a real phone on local data, because that is how your customers will meet it.
            </p>
          </div>

          <div className="mt-14">
            <div className="sec"><h2 className="display h2">Disciplines</h2><span className="sec-n">02</span></div>
            <ul className="index">
              {SKILLS.slice(0, 6).map((s, i) => (
                <li key={s}>
                  <div className="index-row">
                    <span className="index-n">{n2(i + 1)}</span>
                    <span className="index-name">{s}</span>
                  </div>
                </li>
              ))}
            </ul>
            <details className="mt-2">
              <summary className="label">All {SKILLS.length} disciplines</summary>
              <ul className="index">
                {SKILLS.slice(6).map((s, i) => (
                  <li key={s}>
                    <div className="index-row">
                      <span className="index-n">{n2(i + 7)}</span>
                      <span className="index-name">{s}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </details>
          </div>

          <div className="mt-14">
            <p className="label">Co-founder / Communications</p>
            <div className="sec mt-2"><h2 className="display h2">Nelson Denny</h2><span className="sec-n">03</span></div>
            <p className="lede mt-4">
              Nelson is who you talk to. First reply, the brief, the schedule.
            </p>
            <p className="lede mt-4">
              One point of contact for the whole project, never juggling your build against someone else's.
            </p>
          </div>

          <div className="mt-14">
            <div className="sec"><h2 className="display h2">The facts</h2><span className="sec-n">04</span></div>
            <div>
              {FACTS.map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-6 border-b border-line py-4">
                  <span className="label">{k}</span>
                  <span className="text-sm text-mute">{v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14">
            <div className="sec"><h2 className="display h2">Our promises</h2><span className="sec-n">05</span></div>
            <div>
              {PROMISES.map((g) => <p key={g} className="promise">{g}</p>)}
            </div>
          </div>

          <div className="mt-20">
            <h2 className="display h2">Two slots left for March.</h2>
            <p className="lede mt-4">Send a message. You get the price in writing the same day.</p>
            <Link to="/contact" className="btn btn-primary btn-block mt-6">Send the brief</Link>
            <Link to="/services" className="link mt-4">See every price →</Link>
          </div>
        </div>
      </div>
    </>
  );
}
