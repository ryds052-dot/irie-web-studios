export default function Marquee({ items }) {
  const row = items.join("  ///  ") + "  ///  ";
  return (
    <div className="overflow-hidden border-y gold-line border-solid py-4 select-none">
      <div className="flex whitespace-nowrap animate-[marquee_22s_linear_infinite]" style={{ width: "max-content" }}>
        {[0, 1].map((k) => (
          <span key={k} className="label text-bone text-sm pr-8">{row}</span>
        ))}
      </div>
      <style>{`@keyframes marquee { to { transform: translateX(-50%); } }`}</style>
    </div>
  );
}
