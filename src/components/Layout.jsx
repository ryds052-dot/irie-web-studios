import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  const { pathname } = useLocation();
  const main = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (main.current) main.current.focus({ preventScroll: true });
  }, [pathname]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999] focus:bg-[#F5B800] focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:text-[#080807]"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" ref={main} tabIndex={-1} key={pathname} className="page-in outline-none">
        {children}
      </main>
      <Footer />
    </>
  );
}
