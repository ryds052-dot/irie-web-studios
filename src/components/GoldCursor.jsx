import { useEffect, useRef } from "react";

export default function GoldCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    document.documentElement.classList.add("no-native-cursor");

    const dot = dotRef.current, ring = ringRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    let W = window.innerWidth, H = window.innerHeight;
    const size = () => { W = window.innerWidth; H = window.innerHeight; canvas.width = W * dpr; canvas.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); };
    size();
    window.addEventListener("resize", size);

    let mx = W / 2, my = H / 2, rx = mx, ry = my, down = false;
    const embers = [];
    let raf, lastSpawn = 0;

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      const now = performance.now();
      if (now - lastSpawn > 28) {
        lastSpawn = now;
        embers.push({ x: mx, y: my, vx: (Math.random() - 0.5) * 0.7, vy: -0.5 - Math.random() * 0.9, life: 1, sz: 1 + Math.random() * 1.6 });
        if (embers.length > 60) embers.shift();
      }
      const hot = e.target.closest?.("a, button, input, [role='button']");
      ring.style.width = hot ? "52px" : "34px";
      ring.style.height = hot ? "52px" : "34px";
      ring.style.borderColor = hot ? "rgba(200,169,106,0.9)" : "rgba(200,169,106,0.45)";
    };
    const onDown = () => { down = true; ring.style.transform += " scale(0.8)"; };
    const onUp = () => { down = false; };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });

    const tick = (now) => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      ctx.clearRect(0, 0, W, H);
      for (let i = embers.length - 1; i >= 0; i--) {
        const p = embers[i];
        p.life -= 0.025;
        if (p.life <= 0) { embers.splice(i, 1); continue; }
        p.x += p.vx; p.y += p.vy;
        ctx.fillStyle = `rgba(200,169,106,${p.life * 0.55})`;
        ctx.fillRect(p.x, p.y, p.sz, p.sz);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("resize", size);
      document.documentElement.classList.remove("no-native-cursor");
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="pointer-events-none fixed left-0 top-0 z-[130] hidden h-1.5 w-1.5 rounded-full bg-gold md:block" />
      <div
        ref={ringRef}
        className="pointer-events-none fixed z-[130] hidden rounded-full border transition-[width,height,border-color] duration-200 md:block"
        style={{ borderColor: "rgba(200,169,106,0.45)", transform: "translate(-50%, -50%)" }}
      />
      <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-[129] hidden md:block" />
    </>
  );
}
