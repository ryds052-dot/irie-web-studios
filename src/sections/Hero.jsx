import { Link } from "react-router-dom";
import HeroVisual from "../components/HeroVisual";
import { AVAILABILITY, RESPONSE_TIME, LOCATION } from "../lib/site";

export default function Hero() {
  return (
    <section
      id="hero-container"
      className="relative flex min-h-[86svh] w-full flex-col justify-end overflow-hidden bg-ink pad pb-10 pt-24 md:min-h-[100svh] md:pb-16 md:pt-32"
    >
      <HeroVisual />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,#080807_8%,rgba(8,8,7,0.5)_45%,rgba(8,8,7,0.2)_100%)]" />

      <div className="wrap relative z-10">
        <div className="flex items-center gap-2.5">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
          <span className="label label-amber">Boutique studio / {LOCATION}</span>
        </div>

        <h1 className="display mt-5 text-[clamp(2.5rem,13vw,3.6rem)] md:mt-7 md:text-[clamp(4rem,11vw,9rem)]">
          <span className="block">Built</span>
          <span className="block gradient-amber">Fi Win.</span>
        </h1>

        <p className="lede mt-6 max-w-sm md:mt-8">
          Websites that convert. Hand-coded, fixed fee, zero templates. If it does not
          earn its keep, it is not finished.
        </p>

        <div className="mt-7 flex flex-col gap-2.5 sm:flex-row sm:gap-3 md:mt-10">
          <Link to="/work" className="btn btn-primary btn-block">See the work</Link>
          <Link to="/contact" className="btn btn-ghost btn-block">Start a project</Link>
        </div>

        <div className="rule mt-8 flex items-center justify-between pt-4 md:mt-12">
          <p className="label">{AVAILABILITY}</p>
          <p className="label">{RESPONSE_TIME}</p>
        </div>
      </div>
    </section>
  );
}
