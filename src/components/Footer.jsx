import { Link } from "react-router-dom";
import { EMAIL, PHONE, PHONE_DISPLAY, PHONE_ALT, PHONE_ALT_DISPLAY, PHONE_ALT_LABEL, LOCATION, AVAILABILITY } from "../lib/site";

export default function Footer() {
  return (
    <footer className="safe-bottom rule pad pt-16 md:pt-20">
      <div className="wrap">
        <div className="grid gap-10 pb-14 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="display h3 max-w-sm">
              If your site is not winning, <span className="amber">it is costing.</span>
            </p>
            <a href={`mailto:${EMAIL}`} className="mt-5 inline-block font-mono text-[11px] uppercase tracking-[0.18em] amber">
              {EMAIL}
            </a>
            <p className="label mt-5">{AVAILABILITY}</p>
          </div>
          <div>
            <p className="label mb-3">Navigate</p>
            <ul className="space-y-1">
              {[["Work", "/work"], ["Services", "/services"], ["Studio", "/studio"], ["Contact", "/contact"]].map(([l, to]) => (
                <li key={to}>
                  <Link to={to} className="flex min-h-10 items-center text-sm text-bone/70 hover:text-amber">{l}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label mb-3">Studio</p>
            <p className="font-mono text-[11px] uppercase leading-relaxed tracking-[0.14em] text-bone/70">
              {LOCATION}<br />UTC-5<br />Remote worldwide
            </p>
            <a href={`tel:${PHONE}`} className="mt-3 block font-mono text-[11px] tracking-[0.14em] text-mute hover:text-amber">
              {PHONE_DISPLAY}
            </a>
            <a href={`tel:${PHONE_ALT}`} className="mt-1 block font-mono text-[11px] tracking-[0.14em] text-mute hover:text-amber">
              {PHONE_ALT_DISPLAY}
            </a>
          </div>
        </div>

        <div className="overflow-hidden rule py-6">
          <p className="select-none font-black uppercase leading-[0.78] tracking-tighter text-transparent text-[19vw] [-webkit-text-stroke:1px_rgba(244,243,239,0.22)]">
            IRIE
          </p>
        </div>

        <div className="rule flex flex-col gap-1 py-6 font-mono text-[10px] uppercase tracking-[0.18em] text-dim md:flex-row md:justify-between">
          <p>&copy; {new Date().getFullYear()} Irie Web Studios</p>
          <p>Built irie.</p>
        </div>
      </div>
    </footer>
  );
}








