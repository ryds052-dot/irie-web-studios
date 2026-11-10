import { Link } from "react-router-dom";
import Seo from "../components/Seo";

const SERVICES = [
  ["01", "Brand identity", "People decide in fifty milliseconds. Make the verdict good.", "Being the cheaper option on the list.", "$180", "Logo alone $180 to $670. Full identity adds the guidelines your team will use."],
  ["02", "Web design", "Design that keeps arguing for you when you are not in the room.", "Traffic that bounces before it reads.", "$250", "Landing page from $250. Full site $480 to $800."],
  ["03", "Development", "Speed is a sales feature. Slow sites leak money quietly.", "A four-second load that costs a third of your buyers.", "$480", "Hand-coded. No builder bloat, no plugin tax, no upgrade breakage."],
  ["04", "Motion and 3D", "Attention is rented by the second. Buy more of it.", "A page that looks like every other page in your category.", "$90", "Ad creative $90 to $205. WebGL quoted on scope."],
  ["05", "SEO and content", "Get found by people already reaching for a card.", "Paying for every single click you get.", "$160", "Audit $160 to $400. Local SEO $180 to $535 monthly."],
  ["06", "CRO and analytics", "We do not guess. We test, then fuel what wins.", "Redesigning on vibes and hoping.", "$190", "Tracking $190 to $380. Retained testing from $240 monthly."],
];

export default function Services() {
  return (
    <>
      <Seo
        title="Services - Irie Web Studios"
        description="Brand identity, web design, Next.js development, WebGL motion, SEO and conversion optimisation. Fixed fees with a written scope."
        path="/services"
      />
      <div className="pad pt-28 md:pt-36">
        <div className="wrap">
          <p className="label label-amber">Capabilities</p>
          <h1 className="display h1 mt-4">
            Six ways we <span className="amber">make you money.</span>
          </h1>

          <div className="rule mt-8 grid gap-6 pb-8 md:grid-cols-[1.3fr_1fr] md:items-end">
            <p className="lede">
              Most studios sell hours. We sell the reason a stranger picks you over the cheaper option, then we make it measurable.
            </p>
            <p className="label md:text-right">Fixed fee. Written scope. No hourly drift.</p>
          </div>

          <div className="grid gap-px bg-line md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map(([n, title, hook, fixes, from, note]) => (
              <div key={n} className="flex flex-col bg-ink p-6">
                <div className="flex items-start justify-between">
                  <p className="font-mono text-[11px] amber">{n}</p>
                  <p className="label !text-[9px]">from {from}</p>
                </div>
                <h2 className="mt-6 font-bold uppercase tracking-tight">{title}</h2>
                <p className="mt-3 text-base leading-snug">{hook}</p>
                <p className="mt-3 text-xs leading-relaxed text-mute">Fixes: {fixes}</p>
                <p className="mt-auto pt-5 text-xs leading-relaxed text-dim">{note}</p>
              </div>
            ))}
          </div>

          <div className="rule mt-16 grid gap-10 py-12 md:grid-cols-2">
            <div>
              <h2 className="label label-amber">What none of this is</h2>
              <ul className="mt-4">
                {["A template with your logo dropped in.", "An offshore handoff after the pitch call.", "An account manager relaying messages.", "A retainer you cannot leave."].map((x) => (
                  <li key={x} className="flex gap-3 border-b border-line py-3 text-sm text-mute">
                    <span className="font-mono amber">x</span>{x}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="label label-amber">What it always is</h2>
              <ul className="mt-4">
                {["A fixed fee agreed before you pay.", "One written scope, no creeping extras.", "Direct access to the two people building it.", "Code, accounts and files handed over at launch."].map((x) => (
                  <li key={x} className="flex gap-3 border-b border-line py-3 text-sm text-bone/80">
                    <span className="font-mono amber">+</span>{x}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="py-20 text-center">
            <h2 className="display h2 mx-auto max-w-2xl">Not sure which one you need?</h2>
            <p className="lede mx-auto mt-4">That is what the twenty-minute call is for. We will tell you what to skip as readily as what to buy.</p>
            <div className="mt-8 flex flex-col justify-center gap-2.5 sm:flex-row sm:gap-3">
              <Link to="/contact" className="btn btn-primary btn-block">Book the call</Link>
              <Link to="/pricing" className="btn btn-ghost btn-block">See every price</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
