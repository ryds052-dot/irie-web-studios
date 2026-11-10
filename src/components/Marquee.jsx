const DEFAULT = [
  "Say Hello",
  "Start A Project",
  "Open For Work",
  "Let's Chat",
  "Get In Touch",
];

export default function Marquee({
  items,
  texts,
  words,
  separator = "✦",
  className = "",
}) {
  const list = items || texts || words || DEFAULT;
  const row = [...list, ...list];

  return (
    <div className={`fx-marquee w-full overflow-hidden py-4 ${className}`}>
      <div className="fx-marquee-track">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-6 pr-6 font-mono text-xs uppercase tracking-[0.3em] text-[#F4F3EF]/70"
          >
            {item}
            <span className="text-[#F5B800]">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
