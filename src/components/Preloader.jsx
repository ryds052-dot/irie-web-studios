import { useEffect } from "react";

export default function Preloader({ children }) {
  useEffect(() => {
    const boot = document.getElementById("boot");

    const restoreOverflow = () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };

    // already seen this session, or motion is unwelcome: no transition, remove now
    const skip =
      sessionStorage.getItem("irie:loaded") === "1" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!boot) {
      restoreOverflow();
      return;
    }

    if (skip) {
      boot.remove();
      restoreOverflow();
      return;
    }

    let removeTimer;
    const holdTimer = setTimeout(() => {
      boot.classList.add("out");
      removeTimer = setTimeout(() => {
        boot.remove();
        restoreOverflow();
        sessionStorage.setItem("irie:loaded", "1");
      }, 450);
    }, 1300);

    return () => {
      clearTimeout(holdTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return <>{children}</>;
}
