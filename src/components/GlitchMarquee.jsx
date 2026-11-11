export default function GlitchMarquee({ items = ["BUILT IN KINGSTON", "FIXED FEE", "NO TEMPLATES", "NO COMMITTEE", "LIVE IN THE WILD", "PRESS ~ FOR TERMINAL"] }) {
  const row = items.join("  \u2726  ") + "  \u2726  ";
  return (
    <div className="marquee border-y border-line py-4 select-none" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((n) => (
          <span
            key={n}
            className="glitch display whitespace-pre pr-8 text-[clamp(2rem,6vw,4.5rem)] font-extrabold uppercase tracking-tight text-bone/90"
            data-text={row}
          >
            {row}
          </span>
        ))}
      </div>
    </div>
  );
}
