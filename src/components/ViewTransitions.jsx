import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { flushSync } from "react-dom";

export default function ViewTransitions() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (!document.startViewTransition) return;
    const onClick = (e) => {
      const a = e.target.closest("a");
      if (!a || a.target === "_blank") return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === location.pathname) return;
      e.preventDefault();
      document.startViewTransition(() => {
        flushSync(() => navigate(url.pathname));
      });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [navigate, location.pathname]);
  return null;
}
