import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { GROUPS, RETAINERS, TERMS } from "../data/rates";

const us = (v) => v.replace(/\$/g, "US$");

const PACKAGES = [
  ["Launch", "US$285", "Get your business online fast with a clean, high-impact, professional site.", false],
  ["Presence", "US$985", "A fuller website that showcases your business, services, and brand authority.", true],
  ["Store", "US$2,165", "Sell your products online with your own automated, frictionless store.", false],
];

const n2 = (i) => String(i).padStart(2, "0");

export default function Services() {
  return (
    <>
      <Seo
        title="Web Design Kingston Jamaica - Services and Rates | Irie Web Studios"
        description="Websites US$285, live in 7 days. Every rate is printed on this page in US$: web, brand, SEO, security and more. Quoted in writing before you pay."
        path="/services"
      />

      <div className="pad pt-28 md:pt-36">
        <div className="wrap">
          <p className="label">Services</p>
          <h1 className="display mt-4">
            Every price, <span className="gold">in the open.</span>
          </h1>
          <p className="lede mt-6">
            Websites from US$285, live in 7 days. Every figure we charge is on this page — no 'contact us for pricing'.
          </p>

          <div className="mt-14">
            <div className="sec"><h2 className="display h2">Three ways in</h2><span className="sec-n">01</span></div>
            <ul className="index">
              {PACKAGES.map(([name, price, who, hot], i) => (
                <li key={name}>
                  <Link to="/contact" className="index-row">
                    <span className="index-n">{n2(i + 1)}</span>
                    <span className="index-name">{name} — {price}</span>
                    <span className="index-meta">
                      {who}
                      {hot && <span className="index-hot">Most taken</span>}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-mute">Nothing gets added once you choose.</p>
          </div>

          <p className="mt-10 max-w-[46ch] text-sm leading-relaxed text-mute">
            Every price here is fixed. Only domain management starts at a figure, because it depends on what you actually need.
          </p>

          {GROUPS.map((g, gi) => (
            <div key={g.id} className="mt-14">
              <div className="sec"><h2 className="display h2">{g.label}</h2><span className="sec-n">{n2(gi + 2)}</span></div>
              <ul className="index">
                {g.items.map(([name, price, note], i) => (
                  <li key={name}>
                    <div className="index-row">
                      <span className="index-n">{n2(i + 1)}</span>
                      <span className="index-name">{name}</span>
                      <span className="index-meta">{us(price)}{note ? `. ${note}` : ""}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="mt-14">
            <div className="sec"><h2 className="display h2">Monthly care</h2><span className="sec-n">{n2(GROUPS.length + 2)}</span></div>
            <ul className="index">
              {RETAINERS.map(([name, price, note], i) => (
                <li key={name}>
                  <div className="index-row">
                    <span className="index-n">{n2(i + 1)}</span>
                    <span className="index-name">{name}</span>
                    <span className="index-meta">{us(price)} a month. {note}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-14">
            <div className="sec"><h2 className="display h2">Terms</h2><span className="sec-n">{n2(GROUPS.length + 3)}</span></div>
            <ul className="index">
              {TERMS.map((t, i) => (
                <li key={t}>
                  <div className="index-row">
                    <span className="index-n">{n2(i + 1)}</span>
                    <span className="index-meta">{us(t)}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-20">
            <h2 className="display h2">Send the scope.</h2>
            <p className="lede mt-4">Send a message. You get the price in writing the same day.</p>
            <Link to="/contact" className="btn btn-primary btn-block mt-6">Book a free 15 min call</Link>
            <Link to="/work" className="link mt-4">See the work →</Link>
          </div>
        </div>
      </div>
    </>
  );
}
