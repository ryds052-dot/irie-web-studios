import { useEffect } from "react";

export default function SiteDoctor() {
  useEffect(() => {
    const scan = () => {
      const all = Array.from(document.querySelectorAll("body *"));
      let revealed = 0, killed = 0;
      for (const el of all) {
        if (/^(SCRIPT|STYLE|LINK|META|HEAD|TITLE|NOSCRIPT|HTML|BODY)$/.test(el.tagName)) continue;
        const s = getComputedStyle(el);
        const r = el.getBoundingClientRect();
        if (r.width < 2 || r.height < 2) continue;
        if (parseFloat(s.opacity) < 0.06 || s.visibility === "hidden") {
          el.style.setProperty("opacity", "1", "important");
          el.style.setProperty("visibility", "visible", "important");
          revealed++;
        }
      }
      for (const el of all) {
        if (/^(SCRIPT|STYLE|LINK|META|HEAD|TITLE|NOSCRIPT|HTML|BODY)$/.test(el.tagName)) continue;
        const s = getComputedStyle(el);
        if (s.position !== "fixed" && s.position !== "absolute") continue;
        const r = el.getBoundingClientRect();
        if (r.width < innerWidth * 0.85 || r.height < innerHeight * 0.85) continue;
        const m = s.backgroundColor.match(/rgba?$$([^)]+)$$/);
        if (!m) continue;
        const p = m[1].split(",").map((x) => parseFloat(x));
        const a = p.length > 3 ? p[3] : 1;
        if ((p[0] + p[1] + p[2]) / 3 < 60 && a > 0.5) {
          el.style.setProperty("display", "none", "important");
          killed++;
        }
      }
      const words = (document.body.innerText || "").trim().split(/\s+/).filter(Boolean).length;
      document.title = "DIAG r" + revealed + " k" + killed + " w" + words + " | Irie";
    };
    const ids = [1200, 3000, 5000].map((ms) => setTimeout(scan, ms));
    return () => ids.forEach(clearTimeout);
  }, []);
  return null;
}
