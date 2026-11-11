import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const d = dot.current, r = ring.current;
    let x = -100, y = -100, rx = -100, ry = -100;
    const move = (e) => { x = e.clientX; y = e.clientY; };
    const loop = () => {
      rx += (x - rx) * 0.14; ry += (y - ry) * 0.14;
      d.style.transform = `translate(${x}px,${y}px)`;
      r.style.transform = `translate(${rx - 20}px,${ry - 20}px)`;
      requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", move);
    requestAnimationFrame(loop);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div ref={dot} className="fixed top-0 left-0 z-[90] w-1.5 h-1.5 rounded-full bg-gold pointer-events-none" />
      <div ref={ring} className="fixed top-0 left-0 z-[90] w-10 h-10 rounded-full border border-gold/40 pointer-events-none" />
    </>
  );
}
