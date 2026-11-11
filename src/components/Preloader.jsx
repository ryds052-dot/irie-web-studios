import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* hand-authored letterforms — I · R · I · E on a 400x170 grid */
const LETTERS = [
  "M40 20 L40 140",                                              // I stem
  "M110 20 L110 140",                                            // R stem
  "M110 20 L150 20 A27.5 27.5 0 0 1 150 75 L110 75",             // R bowl
  "M136 75 L166 140",                                            // R leg
  "M215 20 L215 140",                                            // I stem
  "M265 20 L265 140",                                            // E stem
  "M265 20 L330 20",                                             // E top arm
  "M265 80 L318 80",                                             // E mid arm
  "M265 140 L330 140",                                           // E bottom arm
];

const GUIDE_H = [20, 80, 140];
const GUIDE_V = [40, 110, 150, 215, 265, 330];
const CROSS = [[40, 20], [150, 20], [215, 80], [265, 140], [330, 140]];

export default function Preloader({ children }) {
  const [phase, setPhase] = useState("run");
  const [ts] = useState(() =>
    typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches ? 0.6 : 1
  );
  const timers = useRef([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("gone");
      return;
    }
    document.body.style.overflow = "hidden";
    timers.current.push(
      setTimeout(() => setPhase("lift"), 3400 * ts),
      setTimeout(() => setPhase("lift"), 3400 * ts + 900)
    );
    return () => {
      timers.current.forEach(clearTimeout);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (phase === "lift") {
      document.body.style.overflow = "";
      const t = setTimeout(() => setPhase("gone"), 1100);
      return () => clearTimeout(t);
    }
  }, [phase]);

  if (phase === "gone") return <>{children}</>;

  return (
    <>
      <AnimatePresence>
        {phase === "run" && (
          <motion.div
            key="blueprint"
            className="bp-load"
            style={{ "--ts": ts }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bp-stage">
              <svg className="bp-svg" viewBox="0 0 400 170" aria-label="IRIE">
                {/* construction skeleton */}
                <g className="bp-const">
                  {GUIDE_H.map((y, i) => (
                    <line key={"h" + i} x1="14" y1={y} x2="386" y2={y}
                      pathLength="100" style={{ animationDelay: "calc(" + (0.25 + i * 0.12) + "s * var(--ts,1))" }} />
                  ))}
                  {GUIDE_V.map((x, i) => (
                    <line key={"v" + i} x1={x} y1="8" x2={x} y2="152"
                      pathLength="100" style={{ animationDelay: "calc(" + (0.35 + i * 0.07) + "s * var(--ts,1))" }} />
                  ))}
                  {CROSS.map(([x, y], i) => (
                    <circle key={"c" + i} cx={x} cy={y} r="4.5"
                      style={{ animationDelay: "calc(" + (0.55 + i * 0.08) + "s * var(--ts,1))" }} />
                  ))}
                </g>

                {/* the letters — drawn stroke by stroke over the skeleton */}
                <g className="bp-letters">
                  {LETTERS.map((d, i) => (
                    <path key={i} d={d} pathLength="100"
                      style={{ animationDelay: "calc(" + (1.05 + i * 0.13) + "s * var(--ts,1))" }} />
                  ))}
                </g>

                {/* baseline ruler */}
                <g className="bp-ruler">
                  <line x1="40" y1="162" x2="330" y2="162" pathLength="100"
                    style={{ animationDelay: "calc(2.1s * var(--ts,1))" }} />
                  <line x1="40" y1="158" x2="40" y2="166" pathLength="100"
                    style={{ animationDelay: "calc(2.2s * var(--ts,1))" }} />
                  <line x1="330" y1="158" x2="330" y2="166" pathLength="100"
                    style={{ animationDelay: "calc(2.2s * var(--ts,1))" }} />
                </g>
              </svg>

              <p className="bp-cap">every pixel hand-built &mdash; zero templates</p>
            </div>

            <p className="bp-meta">
              <span>fig. 01 &mdash; irie</span>
              <span>kingston &middot; mmxxvi</span>
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
}
