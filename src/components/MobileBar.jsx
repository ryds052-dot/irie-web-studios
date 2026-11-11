import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function MobileBar() {
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const on = () => {
      const foot = document.querySelector("footer");
      const far = foot ? foot.getBoundingClientRect().top > window.innerHeight : true;
      setShow(window.scrollY > 500 && far);
    };
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
        Book a free call &rarr;
      </Link>
    </div>
  );
}


