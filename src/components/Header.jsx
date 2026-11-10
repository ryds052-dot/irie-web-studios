import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

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
    const on = () => setSolid(window.scrollY > 30);
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
        className={`safe-top fixed inset-x-0 top-0 z-[9500] border-b transition-colors duration-500 ${
          solid || open ? "border-white/10 bg-[#080807] md:bg-[#080807]/95 md:backdrop-blur-xl" : "border-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-5 pb-3 md:px-12">
          <Link to="/" className="font-mono text-xs font-bold uppercase tracking-[0.3em]">
            Irie<span className="text-[#F5B800]">.</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {LINKS.map(([label, to]) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `font-mono text-[10px] uppercase tracking-[0.25em] transition-colors ${
                    isActive ? "text-[#F5B800]" : "text-[#8E8C84] hover:text-[#F4F3EF]"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden min-h-11 items-center border border-[#F5B800] bg-[#F5B800] px-5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#080807] transition-colors hover:border-white hover:bg-white md:inline-flex"
            >
              Start
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="grid h-12 w-12 place-items-center border border-white/20 md:hidden"
            >
              <span className="font-mono text-base leading-none">{open ? "×" : "≡"}</span>
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-[9499] flex flex-col justify-between bg-[#080807] px-5 pb-8 pt-24 md:hidden"
        >
          <nav className="flex flex-col">
            {[...LINKS, ["Contact", "/contact"]].map(([label, to]) => (
              <Link
                key={to}
                to={to}
                className="flex min-h-16 items-center justify-between border-b border-white/10 text-3xl font-black uppercase tracking-tight"
              >
                {label}
                <span className="font-mono text-sm text-[#F5B800]">→</span>
              </Link>
            ))}
          </nav>
          <div className="safe-bottom">
            <Link
              to="/contact"
              className="flex min-h-14 w-full items-center justify-center border border-[#F5B800] bg-[#F5B800] font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#080807]"
            >
              Start a project
            </Link>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[#5c5a55]">
              Kingston 6, Jamaica · Two slots this quarter
            </p>
          </div>
        </div>
      )}
    </>
  );
}

