import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AVAILABILITY } from "../lib/site";

const LINKS = [
  ["Work", "/work"],
  ["Services", "/services"],
  ["Studio", "/studio"],
  ["Pricing", "/pricing"],
];

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const on = () => setSolid(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`safe-top fixed inset-x-0 top-0 z-50 border-b transition-colors ${
          solid || open ? "border-line bg-ink md:bg-ink/90 md:backdrop-blur-lg" : "border-transparent"
        }`}
      >
        <div className="wrap flex items-center justify-between pad py-3">
          <Link to="/" className="font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-bone">
            Irie<span className="amber">.</span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {LINKS.map(([label, to]) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `label transition-colors ${isActive ? "label-amber" : "hover:text-bone"}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link to="/contact" className="btn btn-primary hidden !min-h-11 !px-5 !text-[10px] md:inline-flex">
              Start
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="grid h-11 w-11 place-items-center border border-line text-bone md:hidden"
            >
              <span className="font-mono text-base leading-none">{open ? "x" : "="}</span>
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div id="mobile-menu" className="fixed inset-0 z-40 flex flex-col justify-between bg-ink px-5 pb-8 pt-24 md:hidden">
          <nav className="flex flex-col">
            {[...LINKS, ["Contact", "/contact"]].map(([label, to]) => (
              <Link
                key={to}
                to={to}
                className="flex min-h-16 items-center justify-between border-b border-line text-2xl font-extrabold uppercase tracking-tight text-bone"
              >
                {label}
                <span className="font-mono text-sm amber">&rarr;</span>
              </Link>
            ))}
          </nav>
          <div className="safe-bottom">
            <Link to="/contact" className="btn btn-primary w-full">
              Start a project
            </Link>
            <p className="label mt-4">{AVAILABILITY}</p>
          </div>
        </div>
      )}
    </>
  );
}
