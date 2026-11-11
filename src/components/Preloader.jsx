import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GOLD = "200,169,106";

export default function Preloader({ children }) {
  const [phase, setPhase] = useState("run"); // run -> supernova -> flood -> gone
  const canvasRef = useRef(null);
  const numRef = useRef(null);
  const ghostRef = useRef(null);
  const stageRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("gone");
      return;
    }
    document.body.style.overflow = "hidden";
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const W = window.innerWidth, H = window.innerHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = W + "px";
    canvas.style.height = H + "px";
    ctx.scale(dpr, dpr);

    // sample IRIE letter-by-letter for the assembly wave
    const off = document.createElement("canvas");
    off.width = W; off.height = H;
    const octx = off.getContext("2d");
    const fs = Math.min(W * 0.30, H * 0.42, 300);
    const word = "IRIE";
    octx.font = `900 ${fs}px Syne, sans-serif`;
    octx.textAlign = "center";
    octx.textBaseline = "middle";
    const letterW = octx.measureText("I").width;
    const gap = fs * 0.04;
    const totalW = word.length * letterW + (word.length - 1) * gap;
    const startX = W / 2 - totalW / 2;
    const targets = [];
    for (let li = 0; li < word.length; li++) {
      octx.clearRect(0, 0, W, H);
      octx.fillStyle = "#fff";
      octx.fillText(word[li], startX + letterW / 2 + li * (letterW + gap), H / 2);
      const img = octx.getImageData(0, 0, W, H).data;
      const step = W < 700 ? 4 : 3;
      for (let y = 0; y < H; y += step)
        for (let x = 0; x < W; x += step)
          if (img[(y * W + x) * 4 + 3] > 128) targets.push([x, y, li / (word.length - 1)]);
    }
    const CAP = W < 700 ? 2000 : 3400;
    while (targets.length > CAP) targets.splice(Math.floor(Math.random() * targets.length), 1);

    const cx = W / 2, cy = H / 2;
    const parts = targets.map(([tx, ty, ord]) => {
      const r = Math.random();
      const tier = r < 0.55 ? 0 : r < 0.88 ? 1 : 2;
      const ang = Math.random() * Math.PI * 2;
      const rad = Math.max(W, H) * (0.6 + Math.random() * 0.35);
      return {
        x: cx + Math.cos(ang) * rad,
        y: cy + Math.sin(ang) * rad,
        vx: 0, vy: 0,
        tx, ty, ord,
        tier,
        sz: [1.1, 2.0, 3.2][tier],
        alpha: [0.55, 0.8, 1][tier],
        tw: Math.random() * Math.PI * 2,
        col: [`rgba(236,214,168,`, `rgba(${GOLD},`, `rgba(186,141,58,`][tier],
        hot: Math.random() < 0.04,
        ignite: 0,
      };
    });

    const mouse = { x: -9999, y: -9999 };
    const onMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    window.addEventListener("pointermove", onMove, { passive: true });

    let v = 0, raf, last = performance.now(), lastStep = -1, mode = "gather";
    let novaT = 0, nova = 0, shake = 0;
    const waves = [];

    const emitWave = (strength) => {
      waves.push({ r: 0, a: strength });
      shake = Math.min(1, shake + strength * 0.9);
    };

    // failsafe: nothing can trap a visitor past 14s
    const failsafe = setTimeout(() => { v = Math.max(v, 99.9); }, 14000);

    let nextMilestone = 25;

    const tick = (now) => {
      try {
        const dt = Math.min(64, now - last);
        last = now;
        if (!document.hidden) {
          const f = dt / 16.7;
          ctx.clearRect(0, 0, W, H);
          ctx.globalCompositeOperation = "lighter";

          if (mode === "gather") {
            v += Math.max(0.02, (100 - v) * 0.0028) * f;
            const p = v / 100;
            const lock = p > 0.82;

            const step = Math.floor(v);
            if (step !== lastStep) {
              lastStep = step;
              const txt = String(step).padStart(3, "0");
              if (numRef.current) numRef.current.textContent = txt;
              if (ghostRef.current) ghostRef.current.textContent = txt;
              if (step >= nextMilestone && nextMilestone < 100) {
                nextMilestone += 25;
                emitWave(0.55);
              }
            }

            for (let w = waves.length - 1; w >= 0; w--) {
              const wv = waves[w];
              wv.r += 14 * f;
              wv.a *= 0.955;
              if (wv.a < 0.02) { waves.splice(w, 1); continue; }
              ctx.beginPath();
              ctx.arc(cx, cy, wv.r, 0, Math.PI * 2);
              ctx.strokeStyle = `rgba(${GOLD},${wv.a * 0.5})`;
              ctx.lineWidth = 1.5;
              ctx.stroke();
            }

            for (const pt of parts) {
              const gate = pt.ord * 0.7;
              const active = Math.min(1, Math.max(0, (p - gate) / 0.18));
              const dx = pt.tx - pt.x, dy = pt.ty - pt.y;
              const d = Math.sqrt(dx * dx + dy * dy) + 0.001;
              const force = 0.012 * active * (lock ? 0.5 : 1) * (0.6 + p * 0.9) * f;
              const sw = lock ? 0.04 : (1 - p) * 1.4 * active;
              pt.vx += dx * force + (-(dy / d) * sw) * f;
              pt.vy += dy * force + ((dx / d) * sw) * f;
              const mx = pt.x - mouse.x, my = pt.y - mouse.y;
              const md = Math.sqrt(mx * mx + my * my);
              if (md < 90 && md > 0.01) {
                const rep = ((90 - md) / 90) * 2.4 * f;
                pt.vx += (mx / md) * rep; pt.vy += (my / md) * rep;
              }
              pt.vx *= 0.87; pt.vy *= 0.87;
              pt.x += pt.vx * f; pt.y += pt.vy * f;
            }

            if (v >= 100) {
              mode = "supernova";
              novaT = now;
              emitWave(1.4);
              for (const pt of parts) {
                const ang = Math.atan2(pt.y - cy, pt.x - cx);
                const power = 7 + Math.random() * 14;
                pt.vx = Math.cos(ang) * power;
                pt.vy = Math.sin(ang) * power;
              }
            }
          } else {
            nova = (now - novaT) / 1100;
            if (nova > 0.25 && !waves.length) emitWave(0.9);
            for (let w = waves.length - 1; w >= 0; w--) {
              const wv = waves[w];
              wv.r += 22 * f;
              wv.a *= 0.96;
              if (wv.a < 0.02) { waves.splice(w, 1); continue; }
              ctx.beginPath();
              ctx.arc(cx, cy, wv.r, 0, Math.PI * 2);
              ctx.strokeStyle = `rgba(255,240,214,${wv.a * 0.65})`;
              ctx.lineWidth = 2.5;
              ctx.stroke();
            }
            for (const pt of parts) {
              pt.ignite = Math.min(1, pt.ignite + 0.08 * f);
              pt.vx *= 0.975; pt.vy *= 0.975;
              pt.x += pt.vx * f; pt.y += pt.vy * f;
            }
            if (nova > 1) { setPhase("flood"); return; }
          }

          const fade = mode === "supernova" ? Math.max(0, 1 - nova * 1.05) : 1;
          for (const pt of parts) {
            pt.tw += 0.07 * f;
            const twinkle = 0.55 + Math.sin(pt.tw) * 0.35;
            const a = pt.alpha * twinkle * fade;
            const grow = mode === "supernova" ? 1 + pt.ignite * 2.5 : 1;
            const whiteout = mode === "supernova" ? Math.min(1, pt.ignite) : 0;
            ctx.fillStyle = whiteout
              ? `rgba(255,244,222,${a})`
              : (pt.hot ? `rgba(255,250,240,` : pt.col) + a + `)`;
            ctx.fillRect(pt.x, pt.y, pt.sz * grow, pt.sz * grow);
          }
          ctx.globalAlpha = 1;

          shake *= 0.9;
          if (stageRef.current) {
            const s = shake * 5;
            stageRef.current.style.transform = s > 0.05
              ? `translate(${(Math.random() - 0.5) * s}px, ${(Math.random() - 0.5) * s}px)`
              : "none";
          }
        }
      } catch (err) {
        // any unexpected error: abandon the sim and reveal the site
        setPhase("flood");
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      clearTimeout(failsafe);
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.body.style.overflow = "";
      if (stageRef.current) stageRef.current.style.transform = "none";
    };
  }, []);

  useEffect(() => {
    if (phase === "flood") {
      document.body.style.overflow = "";
      const t = setTimeout(() => setPhase("gone"), 620);
      return () => clearTimeout(t);
    }
  }, [phase]);

  if (phase === "gone") return <>{children}</>;

  return (
    <>
      <AnimatePresence>
        {(phase === "run" || phase === "supernova") && (
          <div ref={stageRef} key="stage" className="fixed inset-0 z-[100] bg-ink">
            <canvas ref={canvasRef} className="absolute inset-0" />
            <span
              ref={ghostRef}
              className="display pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-extrabold text-bone opacity-[0.05]"
              style={{ fontSize: "clamp(14rem, 44vw, 34rem)", lineHeight: 1, fontVariantNumeric: "tabular-nums", letterSpacing: "-0.05em" }}
            >
              000
            </span>
            <motion.div
              className="pointer-events-none absolute inset-0"
              style={{ background: "radial-gradient(circle at 50% 50%, rgba(200,169,106,0.16), transparent 60%)" }}
              animate={{ opacity: phase === "supernova" ? [1, 2.2] : 1, scale: phase === "supernova" ? [1, 1.35] : 1 }}
              transition={{ duration: 1 }}
            />
            <div className="pointer-events-none absolute inset-6 md:inset-10">
              {["top-0 left-0 border-t border-l", "top-0 right-0 border-t border-r", "bottom-0 left-0 border-b border-l", "bottom-0 right-0 border-b border-r"].map((pos) => (
                <span key={pos} className={`absolute h-5 w-5 border-gold/50 ${pos}`} />
              ))}
            </div>
            <div className="absolute inset-x-0 top-0 flex items-center justify-between p-7 md:p-10">
              <span className="label">Est. Kingston JM</span>
              <span className="label">{new Date().getFullYear()}</span>
            </div>
            <span
              ref={numRef}
              className="font-mono absolute bottom-7 right-7 text-gold"
              style={{ fontSize: "clamp(1.4rem, 3.4vw, 2.2rem)", fontVariantNumeric: "tabular-nums", letterSpacing: "0.08em" }}
            >
              000
            </span>
            <p className="label absolute bottom-8 left-7 whitespace-nowrap !text-[9px] md:left-10">
              Two slots this quarter
            </p>
          </div>
        )}
        {phase === "flood" && (
          <motion.div
            key="flood"
            className="fixed inset-0 z-[101] flex items-center justify-center bg-gold"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: "easeInOut" }}
          >
            <motion.span
              className="display font-extrabold text-ink"
              style={{ fontSize: "clamp(2rem, 7vw, 5rem)", letterSpacing: "0.05em" }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
            >
              IRIE WEB STUDIOS
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
}
