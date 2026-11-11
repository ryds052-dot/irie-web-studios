import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Counter({ to, suffix = "", label }) {
  const ref = useRef(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const obj = { v: 0 };
    const anim = gsap.to(obj, {
      v: to,
      duration: 1.6,
      ease: "power2.out",
      scrollTrigger: { trigger: ref.current, start: "top 90%", once: true },
      onUpdate: () => setN(Math.round(obj.v)),
    });
    return () => anim.scrollTrigger?.kill();
  }, [to]);
  return (
    <div ref={ref} className="text-center">
      <div className="display text-gold" style={{ fontSize: "clamp(2rem, 8vw, 4rem)" }}>
        {n}{suffix}
      </div>
      <p className="label mt-2">{label}</p>
    </div>
  );
}
