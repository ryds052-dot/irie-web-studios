import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const anim = gsap.fromTo(
      el,
      { yPercent: 110, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 1,
        delay,
        ease: "power4.out",
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
      }
    );
    return () => anim.scrollTrigger?.kill();
  }, [delay]);
  return (
    <div className="overflow-hidden">
      <div ref={ref} className={className}>{children}</div>
    </div>
  );
}
