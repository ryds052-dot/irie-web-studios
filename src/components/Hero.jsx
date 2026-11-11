export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center px-6 pt-24">
      <p className="label">Irie Web Studios — Kingston, JM</p>
      <h1 className="display text-bone mt-4">
        BUILT FI <span className="text-gold">WIN.</span>
      </h1>
      <p className="mt-6 max-w-md text-bone/70 text-base leading-relaxed">
        Hand-coded websites for businesses that outgrow templates. Zero page builders. Fixed fees, written scope.
      </p>
      <a href="#work" className="label mt-10 underline underline-offset-8 decoration-gold/60 hover:decoration-gold transition-colors w-fit">
        See the work ?
      </a>
    </section>
  );
}
