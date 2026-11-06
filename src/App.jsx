import { ReactLenis } from 'lenis/react';
import React, { useEffect, useState } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ServiceSummary from "./sections/ServiceSummary";
import Services from "./sections/Services";
import About from "./sections/About";
import Works from "./sections/Works";
import ContactSummary from "./sections/ContactSummary";
import Contact from "./sections/Contact";
import { useProgress } from "@react-three/drei";

const App = () => {
  const { progress } = useProgress();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => setIsReady(true), 200);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  // Fallback timer if progress hangs
  useEffect(() => {
    const fallback = setTimeout(() => setIsReady(true), 2500);
    return () => clearTimeout(fallback);
  }, []);

  return (
    <ReactLenis root className="relative w-screen min-h-screen overflow-x-hidden bg-[#080807] text-[#F4F3EF]">
      {/* Fixed film-grain overlay */}
      <div className="opacity-[0.03] pointer-events-none fixed inset-0 z-50 bg-grain" />

      {/* Studio Preloader */}
      {!isReady && (
        <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#080807] text-[#F4F3EF] transition-opacity duration-700 font-mono">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-ping" />
            <span className="text-xs tracking-[0.3em] uppercase text-[#F5B800] font-bold">IRIE WEB STUDIOS</span>
          </div>
          <p className="mb-4 text-xl tracking-widest text-[#F4F3EF]">
            INITIALIZING CORE {Math.floor(progress)}%
          </p>
          <div className="relative h-1 overflow-hidden rounded-full w-64 bg-white/10">
            <div
              className="absolute top-0 left-0 h-full transition-all duration-300 bg-[#F5B800]"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="mt-6 text-xs text-[#8E8C84] tracking-wider uppercase">Kingston, Jamaica • 18°00'N 76°47'W</p>
        </div>
      )}

      <div
        className={`${
          isReady ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000`}
      >
        <Navbar />
        <Hero />
        <ServiceSummary />
        <Services />
        <About />
        <Works />
        <ContactSummary />
        <Contact />
      </div>
    </ReactLenis>
  );
};

export default App;

