import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AVAILABILITY } from "../lib/site";

export default function StickyCTA() {
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== "/") { setShow(false); return; }
    const onScroll = () => {
      const booking = document.getElementById("contact-cta");
      const nearBooking = booking && booking.getBoundingClientRect().top < window.innerHeight;
      setShow(window.scrollY > 700 && !nearBooking);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-[70] border-t border-line bg-ink/95 backdrop-blur transition-transform duration-300 md:hidden ${show ? "translate-y-0" : "translate-y-full"}`}
    >
      <div className="flex items-center justify-between gap-4 px-5 py-3">
        <div>
          <p className="label !text-[9px]">{AVAILABILITY}</p>
          <p className="font-mono text-[11px] text-bone mt-0.5">Free 15-min call · no prep</p>
        </div>
        <Link to="/contact" className="btn btn-primary !px-5 !py-2.5 whitespace-nowrap">Book it</Link>
      </div>
    </div>
  );
}
