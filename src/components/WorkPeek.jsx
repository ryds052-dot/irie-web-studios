import { useEffect, useRef } from "react";

export default function WorkPeek() {
  const card = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let x = 0, y = 0, tx = 0, ty = 0, raf;
    const move = (e) => { tx = e.clientX; ty = e.clientY; };
    const over = (e) => {
      const a = e.target.closest?.('a[href^="/work/"]');
      if (!a) return;
      const t = a.querySelector(".h3, h3")?.textContent || a.textContent.trim().slice(0, 40);
      card.current.querySelector(".wp-title").textContent = t;
      card.current.style.opacity = "1";
    };
    const out = (e) => {
      if (e.target.closest?.('a[href^="/work/"]')) card.current.style.opacity = "0";
    };
    const loop = () => {
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      card.current.style.transform = `translate(${x + 28}px, ${y - 44}px) rotate(${(tx - x) * 0.03}deg)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mouseout", out);
    loop();
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mouseout", out);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={card}
      className="pointer-events-none fixed top-0 left-0 z-[75] border border-gold/50 bg-ink px-4 py-3 opacity-0 transition-opacity duration-200 hidden md:block"
      style={{ willChange: "transform" }}
    >
      <p className="wp-title font-mono text-[11px] uppercase tracking-[0.2em] text-bone">·</p>
      <p className="label mt-1 !text-[9px] text-gold">View case &rarr;</p>
    </div>
  );
}
