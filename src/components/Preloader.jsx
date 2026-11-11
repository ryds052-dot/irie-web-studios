import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GOLD = "200,169,106";

export default function Preloader({ children }) {
  const [phase, setPhase] = useState("run"); // run -> flash -> gone
  const canvasRef = useRef(null);
  const numRef = useRef(null);

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

    // sample the word IRIE into pixel targets
    const off = document.createElement("canvas");
    off.width = W; off.height = H;
    const octx = off.getContext("2d");
    const fs = Math.min(W * 0.26, H * 0.4, 240);
    octx.fillStyle = "#fff";
    octx.font = `900 ${fs}px Syne, sans-serif`;
    octx.textAlign = "center";
    octx.textBaseline = "middle";
    octx.fillText("IRIE", W / 2, H / 2);
    const img = octx.getImageData(0, 0, W, H).data;
    const step = W < 700 ? 5 : 4;
    const targets = [];
    for (let y = 0; y < H; y += step) {
      for (let x = 0; x < W; x += step) {
        if (img[(y * W + x) * 4 + 3] > 128) targets.push([x, y]);
      }
    }
    // cap particle count for phones
    const CAP = W < 700 ? 1400 : 2400;
    while (targets.length > CAP) targets.splice(Math.floor(Math.random() * targets.length), 1);

    const cx = W / 2, cy = H / 2;
    const parts = targets.map(([tx, ty]) => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: 0, vy: 0,
      tx, ty,
      tw: Math.random() * Math.PI * 2,
      sz: 1 + Math.random() * 1.6,
      hot: Math.random() < 0.06, // 6% burn white-hot
    }));

    let v = 0, raf, last = performance.now(), lastStep = -1, mode = "gather", burstT = 0, glitchT = 0;

    const tick = (now) => {
      const dt = Math.min(64, now - last);
      last = now;
      if (!document.hidden) {
        const f = dt / 16.7;
        ctx.clearRect(0, 0, W, H);
        ctx.globalCompositeOperation = "lighter";

        if (mode === "gather") {
          if (!document.hidden) v += Math.max(0.02, (100 - v) * 0.0028) * f;
          const p = v / 100;
          // periodic glitch kick
          glitchT -= dt;
          if (glitchT <= 0) glitchT = 1600 + Math.random() * 1800;
          const glitch = glitchT < 130;

          for (const pt of parts) {
            const dx = pt.tx - pt.x, dy = pt.ty - pt.y;
            const force = (0.012 + p * 0.16) * f;
            // vortex swirl: perpendicular force, decays as order rises
            const d = Math.sqrt(dx * dx + dy * dy) + 0.001;
            const sw = ((1 - p) * 0.9 + 0.08) * (dy / d) * 1.6;
            const swx = -(dy / d) * sw, swy = (dx / d) * sw;
            pt.vx += dx * force + swx * f + (glitch ? (Math.random() - 0.5) * 14 : 0);
            pt.vy += dy * force + swy * f + (glitch ? (Math.random() - 0.5) * 14 : 0);
            pt.vx *= 0.86; pt.vy *= 0.86;
            pt.x += pt.vx * f; pt.y += pt.vy * f;
          }

          const n = Math.floor(v);
          if (n !== lastStep && numRef.current) {
            lastStep = n;
            numRef.current.textContent = String(n).padStart(3, "0");
          }

          if (v >= 100) {
            mode = "burst";
            burstT = now;
            if (numRef.current) numRef.current.textContent = "100";
            for (const pt of parts) {
              const dx = pt.x - cx, dy = pt.y - cy;
              const d = Math.sqrt(dx * dx + dy * dy) + 0.001;
              const power = 4 + Math.random() * 11;
              pt.vx = (dx / d) * power; pt.vy = (dy / d) * power;
            }
          }
        } else {
          // burst: expand and dissolve
          const t = (now - burstT) / 700;
          ctx.globalAlpha = Math.max(0, 1 - t);
          for (const pt of parts) {
            pt.vx *= 0.98; pt.vy *= 0.98;
            pt.x += pt.vx * f; pt.y += pt.vy * f;
          }
          if (t > 1) {
            setPhase("flash");
            return;
          }
        }

        // draw
        for (const pt of parts) {
          pt.tw += 0.08 * f;
          const a = mode === "burst" ? ctx.globalAlpha : 0.55 + Math.sin(pt.tw) * 0.35;
          ctx.fillStyle = pt.hot ? `rgba(255,250,240,${a})` : `rgba(${GOLD},${a})`;
          ctx.fillRect(pt.x, pt.y, pt.sz, pt.sz);
        }
        ctx.globalAlpha = 1;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const toFlash = mode === "burst" ? null : null;
    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (phase === "flash") {
      document.body.style.overflow = "";
      const t = setTimeout(() => setPhase("gone"), 420);
      return () => clearTimeout(t);
    }
  }, [phase]);

  if (phase === "gone") return <>{children}</>;

  return (
    <>
      <AnimatePresence>
        {phase === "run" && (
          <div key="stage" className="fixed inset-0 z-[100] bg-ink">
            <canvas ref={canvasRef} className="absolute inset-0" />
            <div className="absolute inset-x-0 top-0 flex items-center justify-between p-6 md:p-10">
              <span className="label">Est. Kingston JM</span>
              <span className="label">{new Date().getFullYear()}</span>
            </div>
            <span
              ref={numRef}
              className="display absolute bottom-6 right-6 font-extrabold text-gold md:bottom-10 md:right-10"
              style={{ fontSize: "clamp(3rem, 9vw, 6rem)", lineHeight: 0.85, fontVariantNumeric: "tabular-nums", letterSpacing: "-0.03em" }}
            >
              000
            </span>
            <p className="label absolute bottom-8 left-6 whitespace-nowrap !text-[9px] md:left-10">
              Two slots this quarter
            </p>
          </div>
        )}
        {phase === "flash" && (
          <motion.div
            key="flash"
            className="fixed inset-0 z-[101] bg-gold"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.42, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>
      {children}
    </>
  );
}
