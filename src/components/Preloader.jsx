import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WORD = "IRIE WEB STUDIOS";
const ease = [0.76, 0, 0.24, 1];

export default function Preloader({ children }) {
  const [n, setN] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(100);
      setDone(true);
      return;
    }
    document.body.style.overflow = "hidden";
    let v = 0;
    const i = setInterval(() => {
      v += Math.max(0.6, (100 - v) * 0.07) + Math.random() * 1.1;
      if (v >= 100) { v = 100; clearInterval(i); }
      setN(Math.floor(v));
    }, 42);
    return () => { clearInterval(i); document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    if (n >= 100) {
      const t = setTimeout(() => { setDone(true); document.body.style.overflow = ""; }, 550);
      return () => clearTimeout(t);
    }
  }, [n]);

  return (
    <>
      <AnimatePresence>
        {!done && (
          <>
            <motion.div
              className="fixed inset-0 z-[98] bg-gold"
              exit={{ y: "-100%" }}
              transition={{ duration: 0.9, ease, delay: 0.14 }}
            />
            <motion.div
              className="fixed inset-0 z-[100] flex flex-col justify-between bg-ink p-6 md:p-10"
              exit={{ y: "-100%" }}
              transition={{ duration: 0.9, ease }}
            >
              <div className="flex items-center justify-between">
                <span className="label">Est. Kingston JM</span>
                <span className="label">{new Date().getFullYear()}</span>
              </div>

              <div className="flex flex-col items-center gap-6">
                <div className="flex flex-wrap justify-center overflow-hidden">
                  {WORD.split("").map((ch, i) => (
                    <motion.span
                      key={i}
                      className="display text-bone"
                      style={{ fontSize: "clamp(1.5rem, 4.6vw, 3.4rem)", whiteSpace: "pre", letterSpacing: "0.02em" }}
                      initial={{ y: "115%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.75, ease, delay: 0.12 + i * 0.038 }}
                    >
                      {ch}
                  </motion.span>
                  ))}
                </div>
                <motion.div
                  className="h-px bg-gold origin-left"
                  style={{ width: "min(60vw, 420px)" }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: n / 100 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>

              <div className="flex items-end justify-between">
                <span className="label">Two slots this quarter</span>
                <span
                  className="font-mono text-gold"
                  style={{ fontSize: "clamp(2.6rem, 8vw, 5.5rem)", lineHeight: 0.9, fontVariantNumeric: "tabular-nums" }}
                >
                  {String(n).padStart(3, "0")}
                </span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      {children}
    </>
  );
}
