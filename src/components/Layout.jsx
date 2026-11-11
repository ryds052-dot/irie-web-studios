import { WHATSAPP, WHATSAPP_DISPLAY, PHONE, PHONE_DISPLAY } from "../lib/site";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/studio", label: "Studio" },
  { to: "/contact", label: "Contact" },
];

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  // close the menu on any route change
  useEffect(() => { setOpen(false); }, [loc.pathname]);

  // lock scroll while the menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Escape closes
  useEffect(() => {
    const k = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, []);

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-[300] focus:bg-[#c8a96a] focus:text-[#080807] focus:p-2">Skip to content</a>

      {/* header */}
      <header className="fixed top-0 left-0 right-0 z-[150] border-b border-[#c8a96a]/10 bg-[#080807]/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <Link to="/" className="font-display text-lg tracking-tight text-[#f4f3ef]">
            IRIE<span className="text-[#c8a96a]">.</span>
          </Link>

          {/* desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {NAV.slice(1).map((n) => (
              <NavLink key={n.to} to={n.to}
                className={({ isActive }) => "label !text-[11px] " + (isActive ? "!text-[#c8a96a]" : "")}>
                {n.label}
              </NavLink>
            ))}
            <Link to="/contact" className="cta-primary !py-3 !px-5 !text-[10px]">Book 15 min</Link>
          </nav>

          {/* mobile menu button */}
          <button onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Menu"
            className="flex h-11 min-w-[44px] items-center justify-end font-mono text-[11px] tracking-[0.25em] text-[#c8a96a] md:hidden">
            {open ? "CLOSE" : "MENU"}
          </button>
        </div>
      </header>

      {/* fullscreen mobile menu */}
      {open && (
        <div className="mnav md:hidden" role="dialog" aria-label="Site menu">
          <nav className="flex flex-col">
            {NAV.map((n, i) => (
              <NavLink key={n.to} to={n.to}
                style={{ animationDelay: `${0.06 * i}s` }}
                className={({ isActive }) => "mnav-link" + (isActive ? " active" : "")}>
                <span className="idx">0{i + 1}</span>{n.label}
              </NavLink>
            ))}
          </nav>
          <div className="mnav-foot">
            <a className="mnav-cta" href="tel:+18765206119">+1 876 520 6119</a>
            <a className="mnav-cta" href="mailto:iriewebstudios@iriewebstudios.com">iriewebstudios@iriewebstudios.com</a>
            <div className="mnav-social">
              <a href="https://www.instagram.com/iriewebstudios/" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://github.com/ryds052-dot" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      )}

      <main id="main" className="pt-16">{children}</main>

      {/* footer */}
      <footer className="foot">
        <div className="wrap">
          <p className="foot-k">Got a site that undersells you?</p>
          <a href="tel:+18765206119" className="foot-big">+1 876 520 6119</a>
          <a href="mailto:iriewebstudios@iriewebstudios.com" className="foot-mail">iriewebstudios@iriewebstudios.com</a>
        <a href={WHATSAPP} target="_blank" rel="noreferrer" className="foot-tel">{WHATSAPP_DISPLAY}</a>
        <a href={`tel:${PHONE}`} className="foot-tel">{PHONE_DISPLAY}</a>
          <div className="foot-base">
            <span>IRIE. Kingston 6, Jamaica</span>
            <span>&copy; {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>

      {/* mobile bottom tab bar */}
      <nav className="mbar md:hidden" aria-label="Quick navigation">
  {NAV.filter(n => ["/", "/work", "/services"].includes(n.to)).map((n) => (
    <NavLink key={n.to} to={n.to} className={({ isActive }) => (isActive ? "active" : "")}>{n.label}</NavLink>
  ))}
  <a href="https://wa.me/18765206119?text=Hi%20Irie%20Web%20Studios%20-%20I%27d%20like%20to%20book%20a%2015%20min%20call." target="_blank" rel="noreferrer" className="mbar-book">Book</a>
</nav>
    </>
  );
}
