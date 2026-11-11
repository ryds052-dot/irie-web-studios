import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ease = [0.76, 0, 0.24, 1];
const R = 118;
const C = 2 * Math.PI * R;
const TICKS = 60;
const GOLD = "#c8a96a";
const INK = "#080807";
const BONE = "#f4f3ef";
const STATUS = [
  [0, "waking the studio"],
  [18, "loading type systems"],
  [40, "etching the dial"],
  [62, "calibrating gold"],
  [84, "opening the doors"],
];

export default function Preloader({ children }) {
  const [phase, setPhase] = useState("run"); // run -> flood -> lift
  const [mounted, setMounted] = useState(true);

  const numRef = useRef(null);
  const arcRef = useRef(null);
  const dialRef = useRef(null);
  const veilRef = useRef(null);
  const floodRef = useRef(null);
  const statusRef = useRef(null);
  const ticksRef = useRef([]);
  const rafRef = useRef(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setMounted(false);
      return;
    }
    document.body.style.overflow = "hidden";

    // hard guard: a dead rAF must never trap the visitor
    const guard = setTimeout(() => {
      setMounted(false);
      document.body.style.overflow = "";
    }, 5200);

    let v = 0;
    let frame = 0;
    let lastStatus = -1;

    const step = () => {
      v += (100 - v) * 0.045 + 0.32; // decelerating, but never stalls
      if (v > 100) v = 100;
      frame++;

      const n = numRef.current;
      if (n) {
        n.textContent = String(Math.floor(v)).padStart(3, "0");
        // failing-neon flicker: 1 frame in 6, coin-flipped
        if (frame % 6 === 0 && Math.random() < 0.55) {
          n.style.opacity = "0.62";
          n.style.textShadow = `${(Math.random() * 7 - 3.5).toFixed(1)}px 0 ${GOLD}`;
        } else {
          n.style.opacity = "1";
          n.style.textShadow = "none";
        }
      }

      if (arcRef.current) arcRef.current.style.strokeDashoffset = String(C - (v / 100) * C);
      if (dialRef.current) dialRef.current.style.transform = `rotate(${v * 3.6}deg)`;
      if (veilRef.current) veilRef.current.style.opacity = String((v / 100) * 0.16);

      // ticks etch outward from zero; no React involved
      const lit = Math.floor((v / 100) * TICKS);
      for (let i = 0; i < TICKS; i++) {
        const el = ticksRef.current[i];
        if (!el) continue;
        const on = i < lit;
        el.style.background = on ? GOLD : "rgba(244,243,239,0.13)";
        el.style.height = on ? "11px" : "6px";
      }

      const idx = STATUS.reduce((acc, [t], i) => (v >= t ? i : acc), 0);
      if (idx !== lastStatus) {
        lastStatus = idx;
        if (statusRef.current) statusRef.current.textContent = STATUS[idx][1];
      }

      if (v < 100) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        rafRef.current = window.setTimeout(() => setPhase("flood"), 240);
      }
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(rafRef.current);
      clearTimeout(rafRef.current);
      clearTimeout(guard);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (phase === "flood") {
      const disc = floodRef.current;
      if (disc) {
        disc.style.transition = "transform 520ms cubic-bezier(0.7,0,0.3,1)";
        disc.style.transform = "scale(30)";
      }
      const t = setTimeout(() => setPhase("lift"), 500);
      return () => clearTimeout(t);
    }
    if (phase === "lift") {
      const t = setTimeout(() => {
        setMounted(false);
        document.body.style.overflow = "";
      }, 1000);
      return () => clearTimeout(t);
    }
  }, [phase]);

  const chrome = phase === "run" ? 1 : 0;

  return (
    <>
      <AnimatePresence>
        {mounted && (
          <>
            <motion.div
              className="fixed inset-0 z-[9999]"
              style={{ background: GOLD }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.9, ease, delay: 0.14 }}
            />
            <motion.div
              className="fixed inset-0 z-[10000] overflow-hidden"
              style={{ background: INK }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.9, ease }}
            >
              <div
                ref={veilRef}
                className="pointer-events-none absolute inset-0"
                style={{ background: GOLD, opacity: 0 }}
              />

              <div className="absolute inset-0 grid place-items-center">
                <div
                  ref={floodRef}
                  className="h-10 w-10 rounded-full"
                  style={{ background: GOLD, transform: "scale(0)", willChange: "transform" }}
                />
              </div>

              <div
                className="absolute inset-0 flex flex-col justify-between p-6 md:p-10"
                style={{ opacity: chrome, transition: "opacity 220ms linear" }}
              >
                <div className="flex items-center justify-between">
                  <span className="label" style={{ color: BONE }}>Est. Kingston JM</span>
                  <span className="label" style={{ color: BONE }}>{new Date().getFullYear()}</span>
                </div>

                <div className="flex flex-col items-center gap-6">
                  <div className="relative h-[280px] w-[280px]">
                    <div
                      ref={dialRef}
                      className="absolute inset-0"
                      style={{ willChange: "transform" }}
                    >
                      {Array.from({ length: TICKS }).map((_, i) => (
                        <span
                          key={i}
                          ref={(el) => (ticksRef.current[i] = el)}
                          className="absolute left-1/2 top-1/2 w-px"
                          style={{
                            height: 6,
                            background: "rgba(244,243,239,0.13)",
                            transform: `translate(-50%, -50%) rotate(${i * 6}deg) translateY(-138px)`,
                            transition: "height 120ms linear, background 120ms linear",
                          }}
                        />
                      ))}
                    </div>

                    <svg viewBox="0 0 280 280" className="absolute inset-0 -rotate-90">
                      <circle cx="140" cy="140" r={R} fill="none" stroke="rgba(244,243,239,0.07)" strokeWidth="1" />
                      <circle
                        ref={arcRef}
                        cx="140"
                        cy="140"
                        r={R}
                        fill="none"
                        stroke={GOLD}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeDasharray={C}
                        strokeDashoffset={C}
                      />
                    </svg>

                    <span
                      ref={numRef}
                      className="absolute inset-0 grid place-items-center font-mono"
                      style={{
                        color: GOLD,
                        fontSize: "clamp(3rem, 9vw, 4.6rem)",
                        fontVariantNumeric: "tabular-nums",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      000
                    </span>
                  </div>

                  <p
                    ref={statusRef}
                    role="status"
                    className="font-mono text-[11px] uppercase tracking-[0.25em]"
                    style={{ color: "#8e8c84" }}
                  >
                    waking the studio
                  </p>
                </div>

                <div className="flex items-end justify-between">
                  <span className="label" style={{ color: BONE }}>Two slots this quarter</span>
                  <span className="label" style={{ color: BONE, fontSize: 9 }}>System online</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      {children}
    </>
  );
}
