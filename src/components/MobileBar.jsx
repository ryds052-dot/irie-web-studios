import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function MobileBar() {
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const on = () => setShow(window.scrollY > 500);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  if (pathname === "/contact") return null;

  return (
    <div
      className={`safe-bottom fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ink px-4 pt-2.5 transition-transform duration-300 md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <Link to="/contact" className="btn btn-primary w-full">
        Start a project &rarr;
      </Link>
    </div>
  );
}
