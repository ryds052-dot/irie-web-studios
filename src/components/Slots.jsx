const SLOTS = { total: 4, open: 2, quarter: "Q1 2027" }; // EDIT ME: keep this TRUE. Fake scarcity is detectable and fatal.

export default function Slots() {
  const pct = Math.round(((SLOTS.total - SLOTS.open) / SLOTS.total) * 100);
  return (
    <section className="border-y border-[#c8a96a]/15 bg-[#0d0c0a] px-5 py-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="label">Client roster · {SLOTS.quarter}</p>
          <p className="mt-2 font-display text-xl text-[#f4f3ef]">
            {SLOTS.open} of {SLOTS.total} build slots open
          </p>
          <div className="mx-auto mt-3 h-px w-56 bg-[#c8a96a]/15 md:mx-0">
            <div className="h-px bg-[#c8a96a]" style={{ width: `${pct}%` }} />
          </div>
        </div>
        <a href="tel:+18765206119" className="cta-primary shrink-0">Apply for a slot</a>
      </div>
    </section>
  );
}
