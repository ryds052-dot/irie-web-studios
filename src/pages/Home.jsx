import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Hero from "../sections/Hero";
import Works from "../sections/Works";
import { Testimonials } from "../sections/Proof";

const SERVICES = [
  ["01", "Brand identity", "Naming, logo systems, type, colour, voice."],
  ["02", "Web design", "Art-directed, conversion-first layouts."],
  ["03", "Development", "Hand-built Next.js, Shopify and Webflow."],
  ["04", "Motion & 3D", "Scroll choreography and WebGL that earns its bytes."],
];

export default function Home() {
  return (
    <>
      <Seo
        title="Irie Web Studios - Web Engineering and 3D Experiences, Kingston JA"
        description="A Kingston studio building brutalist web architecture that converts. Zero templates. Next.js, WebGL and conversion funnels engineered from the metal up."
      />
      <Hero />
      <Works />
      <section className="border-t border-white/10 px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-8 md:flex-row md:items-end">
            <h2 className="text-4xl font-extrabold uppercase tracking-tight sm:text-6xl">What we do</h2>
            <Link to="/services" className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#F5B800] hover:underline">
              All services
            </Link>
          </div>
          {SERVICES.map(([n, t, d]) => (
            <div key={n} className="grid gap-4 border-b border-white/10 py-7 md:grid-cols-[80px_1fr_1.2fr] md:items-baseline">
              <p className="font-mono text-xs tracking-widest text-[#F5B800]">{n}</p>
              <h3 className="text-2xl font-bold uppercase md:text-3xl">{t}</h3>
              <p className="text-sm text-[#8E8C84]">{d}</p>
            </div>
          ))}
        </div>
      </section>
      <Testimonials />
      <section className="border-t border-white/10 px-6 py-28 text-center md:px-12">
        <h2 className="mx-auto max-w-3xl text-5xl font-black uppercase leading-[0.9] tracking-tighter sm:text-7xl">
          Ready to be<br /><span className="text-[#F5B800]">the next one?</span>
        </h2>
        <Link
          to="/contact"
          className="mt-10 inline-block border border-[#F5B800] bg-[#F5B800] px-10 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#080807] transition-colors hover:border-white hover:bg-white"
        >
          Start a project
        </Link>
      </section>
    </>
  );
}
