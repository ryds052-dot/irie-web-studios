import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ children }) {
  const [phase, setPhase] = useState("run");
  const timers = useRef([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("gone");
      return;
    }
    document.body.style.overflow = "hidden";
    const scale = window.matchMedia("(pointer: coarse)").matches ? 0.6 : 1;
    const S = (ms) => Math.round(ms * scale);

    timers.current.push(
      setTimeout(() => setPhase("lift"), S(3800)),
      setTimeout(() => setPhase("lift"), S(3800) + 900)
    );

    return () => {
      timers.current.forEach(clearTimeout);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (phase === "lift") {
      document.body.style.overflow = "";
      const t = setTimeout(() => setPhase("gone"), 1200);
      return () => clearTimeout(t);
    }
  }, [phase]);

  if (phase === "gone") return <>{children}</>;

  return (
    <>
      <AnimatePresence>
        {phase === "run" && (
          <motion.div
            key="monolith"
            className="mono-load"
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="ml-center">
              <h1 className="ml-word">IRIE</h1>
              <span className="ml-rule" />
            </div>
            <p className="ml-caption">
              <span>Kingston</span>
              <span className="ml-dot" />
              <span>MMXXVI</span>
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
}
