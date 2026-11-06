import { ReactLenis } from 'lenis/react';
import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Works from "./sections/Works";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <ReactLenis root options={{ lerp: 0.06, duration: 1.2, smoothWheel: true }}>
      <main className="relative z-0 bg-[#080807] overflow-x-hidden selection:bg-[#F5B800] selection:text-[#080807]">
        <Navbar />
        <Hero />
        <About />
        <Works />
        <Contact />
      </main>
    </ReactLenis>
  );
}s