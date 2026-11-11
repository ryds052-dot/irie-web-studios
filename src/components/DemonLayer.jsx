import { useEffect, useRef } from "react";

export function GrainOverlay() {
  return <div className="grain" aria-hidden="true" />;
}

export function ScrollSkew({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let last = window.scrollY, v = 0, target = 0, raf;
    const onScroll = () => {
      target = Math.max(-6, Math.min(6, (window.scrollY - last) * 0.35));
      last = window.scrollY;
    };
    const loop = () => {
      v += (target - v) * 0.1;
      target *= 0.9;
      if (ref.current) ref.current.style.transform = `skewY(${v * 0.35}deg)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    loop();
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);

  return <div ref={ref} style={{ willChange: "transform" }}>{children}</div>;
}
