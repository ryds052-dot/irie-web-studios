import { useEffect, useState } from "react";

export default function Rails() {
  const [pct, setPct] = useState(0);
  const [time, setTime] = useState("");

  useEffect(() => {
    let raf;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setPct(max > 0 ? Math.round((window.scrollY / max) * 100) : 0);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    const tick = () => setTime(
      new Intl.DateTimeFormat("en-GB", { timeZone: "America/Jamaica", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }).format(new Date())
    );
    tick();
    const i = setInterval(tick, 1000);
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); clearInterval(i); };
  }, []);

  return (
    <>
      <div className="pointer-events-none fixed left-4 top-1/2 z-[60] hidden -translate-y-1/2 md:block">
        <span className="label" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
          Irie Web Studios — Kingston JM
        </span>
      </div>
      <div className="pointer-events-none fixed right-4 top-1/2 z-[60] hidden -translate-y-1/2 md:block">
        <span className="label font-mono" style={{ writingMode: "vertical-rl" }}>
          {String(pct).padStart(3, "0")}%
        </span>
      </div>
      <div className="pointer-events-none fixed bottom-5 left-5 z-[60] hidden md:block">
        <span className="font-mono text-[10px] tracking-[0.2em] text-mute">KGN {time}</span>
      </div>
    </>
  );
}
