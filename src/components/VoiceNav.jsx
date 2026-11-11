import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const ROUTES = { work: "/work", services: "/services", studio: "/studio", contact: "/contact", home: "/", pricing: "/services" };

export default function VoiceNav() {
  const [on, setOn] = useState(false);
  const [heard, setHeard] = useState("");
  const recRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!on) return;
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) { setOn(false); return; }
    const rec = new SR();
    recRef.current = rec;
    rec.continuous = true;
    rec.interimResults = false;
    rec.onresult = (e) => {
      const said = e.results[e.results.length - 1][0].transcript.toLowerCase().trim();
      setHeard(said);
      for (const k of Object.keys(ROUTES)) {
        if (said.includes(k)) { navigate(ROUTES[k]); break; }
      }
    };
    rec.onerror = () => setOn(false);
    rec.start();
    return () => rec.stop();
  }, [on, navigate]);

  if (!("SpeechRecognition" in window || "webkitSpeechRecognition" in window)) return null;

  return (
    <div className="fixed bottom-5 right-5 z-[90] flex flex-col items-end gap-2">
      {on && heard && (
        <span className="border border-gold/40 bg-ink/90 px-2 py-1 font-mono text-[9px] uppercase tracking-widest text-gold backdrop-blur">
          heard: {heard.slice(-40)}
        </span>
      )}
      <button
        onClick={() => setOn((v) => !v)}
        className={"flex items-center gap-2 border px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em] backdrop-blur transition-colors " + (on ? "border-gold text-gold" : "border-line text-mute hover:border-gold/60 hover:text-gold")}
        aria-label="Toggle voice navigation"
      >
        {on ? "? listening" : "? voice"}
      </button>
    </div>
  );
}
