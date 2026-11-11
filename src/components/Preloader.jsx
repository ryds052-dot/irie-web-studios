import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WORD = "IRIE WEB STUDIOS";

export default function Preloader({ children }) {
  const [n, setN] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    let v = 0;
    const i = setInterval(() => {
      v += Math.max(0.6, (100 - v) * 0.075) + Math.random() * 1.2;
      if (v >= 100) { v = 100; clearInterval(i); }
      setN(Math.floor(v));
    }, 45);
    return () => { clearInterval(i); document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    if (n >= 100) {
      const t = setTimeout(() => { setDone(true); document.body.style.overflow = ""; }, 500);
      return () => clearTimeout(t);
    }
  }, [n]);

  const ease = [0.76, 0, 0.24, 1];

  return (
    <>
      <AnimatePresence>
        {!done && (
          <>
            <motion.div
              className="fixed inset-0 z-[98] bg-gold"
              exit={{ y: "-100%" }}
              transition={{ duration: 0.9, ease, delay: 0.12 }}
            />
            <motion.div
              className="fixed inset-0 z-[100] bg-ink flex flex-col justify-between p-6 md:p-10"
              exit={{ y: "-100%" }}
              transition={{ duration: 0.9, ease }}
            >
              <div className="flex items-center justify-between">
                <span className="label">Est. Kingston JM</span>
                <span className="label">{new Date().getFullYear()}</span>
              </div>

              <div className="flex flex-wrap justify-center overflow-hidden">
                {WORD.split("").map((ch, i) => (
                  <motion.span
                    key={i}
                    className="display text-bone"
                    style={{ fontSize: "clamp(1.4rem, 4.5vw, 3.2rem)", whiteSpace: "pre" }}
                    initial={{ y: "110%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, ease, delay: 0.15 + i * 0.035 }}
                  >
                    {ch}
                  </motion.span>
                ))}
              </div>

              <div className="flex items-end justify-between">
                <span className="label">Loading the good stuff</span>
                <span
                  className="display text-gold"
                  style={{ fontSize: "clamp(3rem, 9vw, 6.5rem)", lineHeight: 0.9 }}
                >
                  {n}
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
