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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[9500] border-b transition-colors duration-500 ${
        solid ? "border-white/10 bg-[#080807]/90 backdrop-blur-xl" : "border-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4 md:px-12">
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

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden border border-[#F5B800] bg-[#F5B800] px-5 py-2.5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#080807] transition-colors hover:border-white hover:bg-white md:inline-block"
          >
            Start
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center border border-white/20 md:hidden"
          >
            <span className="font-mono text-xs">{open ? "×" : "≡"}</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#080807] px-6 py-6 md:hidden">
          {[...LINKS, ["Contact", "/contact"]].map(([label, to]) => (
            <Link
              key={to}
              to={to}
              className="block border-b border-white/5 py-4 text-2xl font-bold uppercase"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
