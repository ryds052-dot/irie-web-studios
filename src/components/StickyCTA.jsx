import { SLOTS_LABEL } from "../lib/slots";
import { useEffect, useState } from "react";
import { track } from "@vercel/analytics";

const WA = "https://wa.me/18764354047?text=Hi%20Irie%20Web%20Studios%20-%20I%27d%20like%20to%20book%20a%2015%20min%20call.";

export default function StickyCTA() {
  const [show, setShow] = useState(false);
  const [closed, setClosed] = useState(() => sessionStorage.getItem("irie:cta") === "off");

  useEffect(() => {
    const on = () => setShow(window.scrollY > 620);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  if (closed) return null;

  return (
    <div className={"sticky-cta" + (show ? " in" : "")} aria-hidden={!show}>
      <a
        href={WA}
        target="_blank"
        rel="noreferrer"
        onClick={() => track("cta_sticky_whatsapp")}
        className="sc-main"
      >
        <span className="sc-dot" aria-hidden="true" />
        Book 15 min on WhatsApp
        <span className="sc-sub">{SLOTS_LABEL}</span>
      </a>
      <button type="button" onClick={() => { setClosed(true); sessionStorage.setItem("irie:cta", "off"); track("cta_sticky_dismiss"); }} aria-label="Dismiss" className="sc-x">×</button>
    </div>
  );
}
