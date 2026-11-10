import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ViewTransition() {
  const navigate = useNavigate();

  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest && e.target.closest("a");
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href || !href.startsWith("/")) return;
      if (a.target === "_blank" || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      if (!document.startViewTransition) return;
      e.preventDefault();
      document.startViewTransition(() => navigate(href));
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [navigate]);

  return null;
}
