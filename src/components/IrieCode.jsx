import { useEffect } from "react";

export default function IrieCode() {
  useEffect(() => {
    let buf = "";
    const onKey = (e) => {
      buf = (buf + e.key).slice(-4).toLowerCase();
      if (buf !== "irie") return;
      buf = "";
      const style = document.createElement("style");
      style.textContent = `@keyframes ember { to { transform: translateY(110vh) rotate(540deg); opacity: 0; } }`;
      document.head.appendChild(style);
      for (let i = 0; i < 28; i++) {
        const s = document.createElement("span");
        s.textContent = "\u2726";
        s.style.cssText = `position:fixed;top:-4vh;left:${Math.random() * 100}vw;z-index:99;pointer-events:none;color:#c8a96a;font-size:${10 + Math.random() * 16}px;animation:ember ${1.6 + Math.random() * 1.6}s linear forwards;`;
        document.body.appendChild(s);
        setTimeout(() => s.remove(), 3400);
      }
      setTimeout(() => style.remove(), 4000);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return null;
}
