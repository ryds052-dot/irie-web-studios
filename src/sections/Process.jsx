const STEPS = [
  ["01", "The brief", "One call. You talk, we write it down. You leave with a fixed price and a fixed date in writing — before you pay anything."],
  ["02", "The build", "Hand-coded React, no templates. You see a live preview link from day one, not a big reveal at the end."],
  ["03", "The handover", "Code, files, domain, accounts — all yours at launch. Three revision rounds included, then a care plan if you want one."],
];

export default function Process() {
  return (
    <section className="section pad">
      <div className="wrap">
        <p className="label label-amber">How it works</p>
        <h2 className="display h2 mt-2">No mystery. Three steps.</h2>
        <div className="mt-8">
          {STEPS.map(([n, t, d]) => (
            <div key={n} className="rule border-b border-line py-6">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-[11px] amber">{n}</span>
                <h3 className="h3 font-bold uppercase">{t}</h3>
              </div>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-mute">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
