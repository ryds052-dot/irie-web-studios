import { Link } from "react-router-dom";
import HeroVisual from "../components/HeroVisual";
import Reveal from "../components/Reveal";
import Magnetic from "../components/Magnetic";
import { AVAILABILITY, RESPONSE_TIME, LOCATION } from "../lib/site";

export default function Hero() {
  return (
    <section
      id="hero-container"
      className="relative flex min-h-[92svh] w-full flex-col justify-end overflow-hidden bg-ink pad pb-8 pt-24 md:min-h-[100svh] md:pb-12 md:pt-32"
    >
      <HeroVisual />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,#080807_14%,rgba(8,8,7,0.72)_42%,rgba(8,8,7,0.15)_100%)]" />

      <div className="wrap relative z-10">
        <div className="flex items-center gap-2.5">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
          <span className="label label-amber">Boutique studio / {LOCATION}</span>
        </div>

        <Reveal delay={0.2}>
          <h1 className="display mt-5 text-[clamp(2.9rem,15vw,4.2rem)] leading-[0.86] tracking-[-0.03em] md:mt-6 md:text-[clamp(4.5rem,9.5vw,7.5rem)]">
            <span className="block">Built</span>
            <span className="block normal-case gradient-amber">fi win.</span>
          </h1>
        </Reveal>

        <p className="lede mt-5 max-w-[26rem] md:mt-7 md:max-w-[30rem]">
          Websites that convert. Hand-coded, fixed fee, zero templates. If it does not
          earn its keep, it is not finished.
        </p>

        <div className="mt-7 flex flex-col gap-2.5 sm:flex-row sm:items-start sm:gap-4 md:mt-9">
          <Magnetic>
            <Link to="/work" className="btn btn-primary inline-block">See the work</Link>
          </Magnetic>
          <Magnetic>
            <div>
              <Link to="/contact" className="btn btn-ghost inline-block">Book a free call</Link>
              <p className="label mt-2 !text-[9px]">15 min · no prep · no pitch</p>
            </div>
          </Magnetic>
        </div>

        <div className="rule mt-8 flex items-center justify-between gap-4 pt-4 md:mt-11">
          <p className="label">{AVAILABILITY}</p>
          <p className="label text-right">{RESPONSE_TIME}</p>
        </div>
      </div>
    </section>
  );
}
