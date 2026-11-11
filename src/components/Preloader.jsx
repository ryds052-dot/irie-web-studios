import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LOG = [
  { t: 0,    rest: "irie-os v3.0 -- cold boot" },
  { t: 260,  rest: "grid status ............ DOWN" },
  { t: 460,  rest: "cause .................. unknown" },
  { t: 640,  rest: "restarting node ........ KINGSTON_JM" },
  { t: 860,  rest: "templates found ........ 0" },
  { t: 1040, rest: "capacity ............... 2 SLOTS THIS QUARTER" },
  { t: 1280, rest: "restore target ......... IRIE_WEB_STUDIOS" },
  { t: 1480, rest: "restore ................ OK" },
];

const WORD = "IRIE";

export default function Preloader({ children }) {
  const [phase, setPhase] = useState("run"); // run -> lift -> gone
  const logRef = useRef(null);
  const stageRef = useRef(null);
  const timers = useRef([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("gone");
      return;
    }
    document.body.style.overflow = "hidden";
    const scale = window.matchMedia("(pointer: coarse)").matches ? 0.55 : 1;
    const S = (ms) => Math.round(ms * scale);
    const add = (fn, ms) => timers.current.push(setTimeout(fn, ms));

    LOG.forEach((l) =>
      add(() => {
        const div = document.createElement("div");
        div.className = "boot-line";
        div.textContent = "[" + (l.t / 1000).toFixed(3).padStart(6, "0") + "] " + l.rest;
        logRef.current?.appendChild(div);
      }, S(l.t))
    );

    add(() => {
      const div = document.createElement("div");
      div.className = "boot-line boot-caret";
      const span = document.createElement("span");
      span.className = "boot-block";
      div.appendChild(span);
      logRef.current?.appendChild(div);
    }, S(1650));

    const wordAt = S(1900);
    WORD.split("").forEach((_, i) => {
      add(() => {
        const el = stageRef.current?.querySelector('[data-l="' + i + '"]');
        if (el) el.style.animationName = "tube-on";
      }, wordAt + i * S(170));
    });

    add(() => stageRef.current?.classList.add("powered"), wordAt + S(WORD.length * 170 + 650));
    add(() => setPhase("lift"), S(3150));

    // failsafe: nothing can trap a visitor, ever
    const failsafe = setTimeout(() => setPhase("lift"), S(3600) + 600);

    return () => {
      timers.current.forEach(clearTimeout);
      clearTimeout(failsafe);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (phase === "lift") {
      document.body.style.overflow = "";
      const t = setTimeout(() => setPhase("gone"), 780);
      return () => clearTimeout(t);
    }
  }, [phase]);

  if (phase === "gone") return <>{children}</>;

  return (
    <>
      <AnimatePresence>
        {phase === "run" && (
          <motion.div
            key="blackout"
            ref={stageRef}
            className="fixed inset-0 z-[100] overflow-hidden bg-ink"
            exit={{ y: "-100%" }}
            transition={{ duration: 0.7, ease: [0.83, 0, 0.17, 1] }}
          >
            <div className="absolute inset-0 p-6 font-mono text-[10px] leading-[1.9] text-mute md:p-10 md:text-[12px]">
              <div ref={logRef} />
            </div>
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div
                className="display font-extrabold text-bone"
                style={{ fontSize: "clamp(4rem, 18vw, 13rem)", lineHeight: 1, letterSpacing: "0.06em" }}
              >
                {WORD.split("").map((ch, i) => (
                  <span key={i} data-l={i} className="tube" style={{ opacity: 0 }}>
                    {ch}
                  </span>
                ))}
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-6 md:p-10">
              <span className="label !text-[9px]">est. kingston jm</span>
              <span className="label !text-[9px]">power: restoring</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
}
