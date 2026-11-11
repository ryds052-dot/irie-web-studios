import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ children }) {
  const [phase, setPhase] = useState("run"); // run -> lift -> gone
  const timers = useRef([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("gone");
      return;
    }
    document.body.style.overflow = "hidden";
    const scale = window.matchMedia("(pointer: coarse)").matches ? 0.62 : 1;
    const S = (ms) => Math.round(ms * scale);

    const t1 = setTimeout(() => setPhase("lift"), S(3400));
    const failsafe = setTimeout(() => setPhase("lift"), S(3400) + 900);
    timers.current.push(t1, failsafe);

    return () => {
      timers.current.forEach(clearTimeout);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (phase === "lift") {
      document.body.style.overflow = "";
      const t = setTimeout(() => setPhase("gone"), 950);
      return () => clearTimeout(t);
    }
  }, [phase]);

  if (phase === "gone") return <>{children}</>;

  return (
    <>
      <AnimatePresence>
        {phase === "run" && (
          <motion.div
            key="plate"
            className="plate"
            style={{ "--ts": window.matchMedia("(pointer: coarse)").matches ? 0.62 : 1 }}
            exit={{ opacity: 0, y: -18, filter: "blur(10px)" }}
            transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="pl-vignette" />
            <div className="pl-grain" />

            {/* the frame — double hairline, like an engraved certificate */}
            <div className="pl-frame">
              <span className="pl-tick tl" /><span className="pl-tick tr" />
              <span className="pl-tick bl" /><span className="pl-tick br" />
            </div>

            <div className="pl-body">
              <header className="pl-top">
                <span className="pl-eyebrow">Irie Web Studios</span>
              </header>

              {/* the seal — engraved before your eyes */}
              <svg className="pl-seal" viewBox="0 0 120 120" aria-hidden="true">
                <circle className="pl-ring" cx="60" cy="60" r="56" />
                <circle className="pl-ring2" cx="60" cy="60" r="49" />
                <text className="pl-mono" x="60" y="72" textAnchor="middle">IW</text>
              </svg>

              <p className="pl-line">Every pixel hand-built. Zero templates.</p>

              <div className="pl-progress">
                <span className="pl-rule" />
                <div className="pl-meta">
                  <span>est. kingston jm &mdash; mmxxvi</span>
                  <span>by appointment only</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
}
