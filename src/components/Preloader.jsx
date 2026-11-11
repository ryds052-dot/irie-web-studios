import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ children }) {
  const [n, setN] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const i = setInterval(() => {
      setN((v) => {
        if (v >= 100) { clearInterval(i); return 100; }
        return v + Math.ceil(Math.random() * 7);
      });
    }, 40);
    return () => clearInterval(i);
  }, []);

  useEffect(() => { if (n >= 100) setTimeout(() => setDone(true), 350); }, [n]);

  return (
    <>
      <AnimatePresence>
        {!done && (
          <motion.div
            className="fixed inset-0 z-[100] bg-ink flex items-end justify-between p-6"
            exit={{ y: "-100%" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          >
            <span className="label text-bone">IRIE WEB STUDIOS</span>
            <span className="display text-gold" style={{ fontSize: "clamp(3rem,10vw,7rem)" }}>
              {Math.min(n, 100)}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
}
