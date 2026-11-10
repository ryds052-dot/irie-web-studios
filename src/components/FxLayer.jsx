import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";

const DESTINATIONS = [
  ["home", "/"],
  ["pricing", "/pricing"],
  ["contact", "/contact"],
];

const fine = () =>
  typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches;

export function Cursor() {
  const ref = useRef(null);
  useEffect(() => {
    if (!fine()) return;
    const el = ref.current;
    if (!el) return;
    let x = 0, y = 0, cx = 0, cy = 0, raf = 0;
    const move = (e) => { x = e.clientX; y = e.clientY; };
    const over = (e) => {
      const t = e.target;
      el.classList.toggle("is-grow", Boolean(t.closest && t.closest("a, button, [data-cursor]")));
    };
    const loop = () => {
      cx += (x - cx) * 0.22;
      cy += (y - cy) * 0.22;
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerover", over);
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
    };
  }, []);
  return <div ref={ref} className="fx-cursor" aria-hidden="true" />;
}

export function Grain() {
  return <div className="grain fixed inset-0 z-[9998] pointer-events-none" aria-hidden="true" />;
}

export function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const on = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <div className="fixed inset-x-0 top-0 z-[9997] h-[2px]" aria-hidden="true">
      <div className="h-full bg-[#F5B800]" style={{ width: `${p}%` }} />
    </div>
  );
}

export function Magnetic({ children, strength = 0.28, className = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!fine()) return;
    const el = ref.current;
    if (!el) return;
    const move = (e) => {
      const r = el.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) * strength;
      const dy = (e.clientY - (r.top + r.height / 2)) * strength;
      el.style.transform = `translate(${dx}px, ${dy}px)`;
    };
    const out = () => { el.style.transform = "translate(0,0)"; };
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", out);
    return () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", out);
    };
  }, [strength]);
  return (
    <span ref={ref} className={`inline-block transition-transform duration-300 ease-out will-change-transform ${className}`}>
      {children}
    </span>
  );
}

export function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) { el.classList.add("is-in"); io.disconnect(); }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ "--d": `${delay}ms` }}>
      {children}
    </div>
  );
}

export function Preloader() {
  const [n, setN] = useState(0);
  const [gone, setGone] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem("irie:loaded") || window.innerWidth < 768) { sessionStorage.setItem("irie:loaded", "1"); setGone(true); return; }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      sessionStorage.setItem("irie:loaded", "1");
      setGone(true);
      return;
    }
    let v = 0;
    const t = setInterval(() => {
      v += Math.random() * 9 + 3;
      if (v >= 100) {
        v = 100;
        clearInterval(t);
        setTimeout(() => { sessionStorage.setItem("irie:loaded", "1"); setGone(true); }, 320);
      }
      setN(Math.floor(v));
    }, 70);
    return () => clearInterval(t);
  }, []);
  if (gone) return null;
  return (
    <div className="fixed inset-0 z-[10000] flex flex-col justify-between bg-[#080807] p-8 text-[#F4F3EF]">
      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#F5B800]">Irie Web Studios</span>
      <span className="font-mono text-[18vw] leading-none tracking-tighter tabular-nums md:text-[10vw]">{n}</span>
      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#8E8C84]">Initializing architecture</span>
    </div>
  );
}

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [i, setI] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const hits = DESTINATIONS.filter((d) => d[0].includes(q.trim().toLowerCase()));

  useEffect(() => {
    const on = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", on);
    return () => window.removeEventListener("keydown", on);
  }, []);

  useEffect(() => {
    if (open) {
      setQ("");
      setI(0);
      setTimeout(() => inputRef.current && inputRef.current.focus(), 20);
    }
  }, [open]);

  if (!open) return null;

  const go = (path) => {
    setOpen(false);
    navigate(path);
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[9996] flex items-start justify-center bg-black/70 px-4 pt-[18vh] backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div className="w-full max-w-sm border border-white/15 bg-[#0a0a09]" onClick={(e) => e.stopPropagation()}>
        <input
          ref={inputRef}
          value={q}
          onChange={(e) => { setQ(e.target.value); setI(0); }}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") { e.preventDefault(); setI((v) => (v + 1) % Math.max(hits.length, 1)); }
            if (e.key === "ArrowUp") { e.preventDefault(); setI((v) => (v - 1 + hits.length) % Math.max(hits.length, 1)); }
            if (e.key === "Enter" && hits[i]) go(hits[i][1]);
          }}
          placeholder="Jump to"
          className="w-full border-b border-white/10 bg-transparent px-5 py-4 font-mono text-sm text-[#F4F3EF] outline-none placeholder:text-[#5c5a55]"
        />
        <ul className="p-2">
          {hits.map((d, idx) => (
            <li key={d[1]}>
              <button
                onMouseEnter={() => setI(idx)}
                onClick={() => go(d[1])}
                className={`flex w-full items-center justify-between px-4 py-3 text-left font-mono text-xs uppercase tracking-[0.2em] ${
                  idx === i ? "bg-[#F5B800] text-[#080807]" : "text-[#8E8C84]"
                }`}
              >
                {d[0]}
                <span aria-hidden="true">↵</span>
              </button>
            </li>
          ))}
          {hits.length === 0 && (
            <li className="px-4 py-3 font-mono text-xs text-[#5c5a55]">No match</li>
          )}
        </ul>
      </div>
    </div>,
    document.body
  );
}

export default function FxLayer() {
  return (
    <>
      <Preloader />
      <Grain />
      <Cursor />
      <ScrollProgress />
      <CommandPalette />
    </>
  );
}




