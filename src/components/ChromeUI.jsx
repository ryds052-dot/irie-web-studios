import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ChromeUI() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    let raf;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? window.scrollY / max : 0);
        setShowTop(window.scrollY > 1200);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);

  return (
    <>
      <a
        href="#main"
        className="fixed left-4 top-4 z-[95] -translate-y-20 bg-gold px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-ink focus:translate-y-0"
      >
        Skip to content
      </a>
      <div
        className="fixed top-0 left-0 z-[85] h-[2px] w-full origin-left bg-gold transition-transform duration-150 ease-out pointer-events-none"
        style={{ transform: `scaleX(${progress})`, opacity: progress > 0.005 ? 1 : 0 }}
      />
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-20 right-4 z-[70] grid h-11 w-11 place-items-center border border-line bg-ink/90 text-bone backdrop-blur transition-all duration-300 md:bottom-8 md:right-8 hover:border-gold ${showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
      >
        ?
      </button>
      <span className="hidden">
        <Link to="/contact">book</Link>
      </span>
    </>
  );
}
