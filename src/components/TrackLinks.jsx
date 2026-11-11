import { useEffect } from "react";
import { track } from "../lib/track";

export default function TrackLinks() {
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest("a[href*='wa.me']");
      if (a) track("cta_whatsapp_tap", { page: window.location.pathname });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
