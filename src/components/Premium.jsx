import { lazy, useEffect, useRef } from "react";
import Preloader from "./Preloader";
import StickyCTA from "./StickyCTA";

const Backdrop = lazy(() => import("./Backdrop"));

function Spotlight() {
  const ref = useRef(null);
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let x = window.innerWidth / 2, y = window.innerHeight / 3, tx = x, ty = y, raf;
    const move = (e) => { tx = e.clientX; ty = e.clientY; };
    const loop = () => {
      x += (tx - x) * 0.06;
      y += (ty - y) * 0.06;
      ref.current.style.background = `radial-gradient(560px at ${x}px ${y}px, rgba(200,169,106,0.07), transparent 70%)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", move);
    loop();
    return () => { window.removeEventListener("mousemove", move); cancelAnimationFrame(raf); };
  }, []);
  return <div ref={ref} className="pointer-events-none fixed inset-0 z-[5]" />;
}

export default function Premium({ children }) {
  return (
    <Preloader>
      <Spotlight />
      <StickyCTA />
      {children}
    </Preloader>
  );
}
