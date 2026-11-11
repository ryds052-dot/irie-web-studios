const PROOF = [
  // EDIT ME: swap in your real numbers. Specifics convert, adjectives decorate.
  { stat: "15", unit: "min intro call", who: "no prep, no pitch" },
  { stat: "3",  unit: "fixed prices",   who: "from US$285, scope in writing" },
  { stat: "100%", unit: "hand-coded",   who: "no templates, no page builders" },
];

export default function ProofBar() {
  return (
    <div className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-px border border-[#c8a96a]/20 bg-[#c8a96a]/10">
      {PROOF.map((p) => (
        <div key={p.unit} className="bg-[#080807] px-3 py-4 text-center">
          <div className="font-display text-2xl text-[#c8a96a]">{p.stat}</div>
          <div className="label !text-[9px] mt-1">{p.unit}</div>
          <div className="mt-1 text-[10px] text-[#8a8880]">{p.who}</div>
        </div>
      ))}
    </div>
  );
}
