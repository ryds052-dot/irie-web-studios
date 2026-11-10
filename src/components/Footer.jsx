import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 pt-20 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 pb-16 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="max-w-sm text-3xl font-black uppercase leading-[1.02] tracking-tight">
              If your site is not<br />winning, <span className="text-[#F5B800]">it is costing.</span>
            </p>
            <a href="mailto:hello@iriewebstudios.com" className="mt-6 inline-block font-mono text-xs uppercase tracking-[0.2em] text-[#F5B800] hover:underline">
              hello@iriewebstudios.com
            </a>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-[#5c5a55]">
              Two slots this quarter
            </p>
          </div>
          <div>
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-[#8E8C84]">Navigate</p>
            <ul className="space-y-3 text-sm">
              {[["Work", "/work"], ["Services", "/services"], ["Studio", "/studio"], ["Pricing", "/pricing"], ["Contact", "/contact"]].map(([l, to]) => (
                <li key={to}><Link to={to} className="text-[#F4F3EF]/75 hover:text-[#F5B800]">{l}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-[#8E8C84]">Studio</p>
            <p className="font-mono text-xs uppercase leading-relaxed tracking-widest text-[#F4F3EF]/75">
              Kingston 6, Jamaica<br />UTC-5<br />Remote worldwide
            </p>
            <a href="tel:+18765550142" className="mt-4 inline-block font-mono text-xs tracking-widest text-[#8E8C84] hover:text-[#F5B800]">
              +1 876 555 0142
            </a>
          </div>
        </div>
        <div className="overflow-hidden border-t border-white/10 py-8">
          <p className="select-none text-[19vw] font-black uppercase leading-[0.78] text-transparent [-webkit-text-stroke:1px_rgba(244,243,239,0.25)]">IRIE</p>
        </div>
        <div className="flex flex-col gap-2 border-t border-white/10 py-8 font-mono text-[10px] uppercase tracking-[0.2em] text-[#8E8C84] md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} Irie Web Studios</p>
          <p>Built irie.</p>
        </div>
      </div>
    </footer>
  );
}
