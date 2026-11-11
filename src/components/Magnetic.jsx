import { useRef } from "react";

export default function Magnetic({ children, strength = 0.35, className = "" }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const el = ref.current;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    el.style.transition = "transform 0.1s";
  };
  const onLeave = () => {
    ref.current.style.transform = "translate(0,0)";
    ref.current.style.transition = "transform 0.5s cubic-bezier(0.22,1,0.36,1)";
  };
  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className={`inline-block ${className}`}>
      {children}
    </div>
  );
}
