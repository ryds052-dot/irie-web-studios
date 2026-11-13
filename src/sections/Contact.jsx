import { useState } from "react";
import { EMAIL, PHONE, PHONE_DISPLAY, WHATSAPP, WHATSAPP_DISPLAY, LOCATION, AVAILABILITY, RESPONSE_TIME } from "../lib/site";

const ENDPOINT = "https://formspree.io/f/mljbrlzr";
const LIVE = !ENDPOINT.includes("PASTE_ID_HERE");

const BUDGETS = ["Not sure", "Under US$500", "US$500 - 1,500", "US$1,500 - 3,000", "US$3,000+", "Monthly"];

const WA = "https://wa.me/18764354047?text=Hi%20Irie%20Web%20Studios%20-%20here%20is%20the%20scope%3A%20";

const NEXT = [
  ["01", "You send the brief", "Two minutes. Scope, budget, deadline. Enough to judge fit."],
  ["02", "We reply same day", "A real answer with a figure attached, not a discovery-call funnel."],
  ["03", "Scope gets written", "Fixed fee, dated milestones, signed before any money moves."],
];

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [budget, setBudget] = useState("");

  async function submit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (String(data.get("_gotcha") || "").trim() !== "") return;
    setStatus("sending");
    setError("");

    if (!LIVE) {
      const body = encodeURIComponent(
        [...data.entries()].filter(([k]) => !k.startsWith("_")).map(([k, v]) => k + ": " + v).join("\n")
      );
      window.location.href = "mailto:" + EMAIL + "?subject=" + encodeURIComponent("New project enquiry") + "&body=" + body;
      setStatus("success");
      return;
    }
    try {
      const res = await fetch(ENDPOINT, { method: "POST", headers: { Accept: "application/json" }, body: data });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      form.reset();
      setBudget("");
    } catch {
      setStatus("error");
      setError(`Sending failed. WhatsApp us on +1 876 520 6119 and it will be picked up.`);
    }
  }

  return (
    <div className="pad pt-28 md:pt-36">
      <div className="wrap">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-amber" />
          <span className="label label-amber">{AVAILABILITY}</span>
        </div>

        <h1 className="display h1 mt-4">
          Send the <span className="amber">scope.</span>
        </h1>

        <p className="lede mt-5">
          WhatsApp gets the fastest answer. {RESPONSE_TIME}. The more you tell us, the sharper the
          quote.
        </p>

        <div className="mt-6 flex flex-col gap-2.5">
          <a
            href={WA}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn-block"
          >
            Message on WhatsApp
          </a>
          <a href={`https://wa.me/${WHATSAPP}?text=Hi%20Irie%20Web%20Studios%20-%20I%27d%20like%20to%20talk%20through%20a%20build.`} target="_blank" rel="noreferrer" className="btn btn-ghost btn-block">
            Call {PHONE_DISPLAY}
          </a>
        </div>

        <div className="rule mt-10 grid gap-10 pt-9 lg:grid-cols-12">
          <form action="https://formspree.io/f/mljbrlzr" method="POST" onSubmit={submit} className="flex flex-col gap-4 lg:order-2 lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="label">Your name *</span>
                <input name="name" autoComplete="name" autoCapitalize="words" required className="field" />
              </label>
              <label className="flex flex-col gap-2">
                <span className="label">Email *</span>
                <input name="email" autoComplete="email" inputMode="email" autoCapitalize="off" spellCheck="false" type="email" required className="field" />
              </label>
            </div>

            <label className="flex flex-col gap-2">
              <span className="label">What are you building? *</span>
              <textarea
                name="message"
                rows={5}
                required
                minLength={10}
                placeholder="What it is, who it is for, and what a win looks like."
                className="field"
              />
            </label>

            <div>
              <span className="label">Rough budget</span>
              <input type="hidden" name="budget" value={budget} />
              <div className="mt-2 flex flex-wrap gap-1.5">
                {BUDGETS.map((b) => (
                  <button
                    key={b}
                    type="button"
                    aria-pressed={b === budget}
                    onClick={() => setBudget(b === budget ? "" : b)}
                    className={
                      "chip border px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] transition " +
                      (b === budget
                        ? "border-amber bg-amber text-ink"
                        : "border-line text-mute")
                    }
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            <details className="border-t border-line pt-3">
              <summary className="label py-1">Company, site, deadline</summary>
              <div className="mt-3 grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2">
                  <span className="label">Company</span>
                  <input name="company" autoComplete="organization" className="field" />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="label">Current site</span>
                  <input name="site" type="url" autoComplete="url" placeholder="https://" className="field" />
                </label>
                <label className="flex flex-col gap-2 sm:col-span-2">
                  <span className="label">When do you need it launched?</span>
                  <input name="deadline" placeholder="A date, or none yet" className="field" />
                </label>
              </div>
            </details>

            <input type="hidden" name="_subject" value="New project enquiry" /><input type="hidden" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 opacity-0" />

            <button type="submit" disabled={status === "sending"} className="btn btn-primary w-full disabled:opacity-60">
              {status === "sending" ? "Sending..." : "Send the brief"}
            </button>

            <p className="label">A person reads this, not a funnel. Fixed fee back in writing, same day.</p>

            <p aria-live="polite" className="min-h-5 font-mono text-xs">
              {status === "success" && <span className="text-emerald-400">Received. We reply same day.</span>}
              {status === "error" && <span className="amber">{error}</span>}
            </p>
          </form>

          <div className="flex flex-col gap-8 lg:order-1 lg:col-span-5">
            <div>
              <p className="label label-amber">What happens next</p>
              <ol className="mt-4">
                {NEXT.map(([n, h, b]) => (
                  <li key={n} className="flex gap-4 border-b border-line py-4">
                    <span className="font-mono text-[11px] amber">{n}</span>
                    <div>
                      <p className="text-sm font-bold uppercase">{h}</p>
                      <p className="mt-1 text-xs leading-relaxed text-mute">{b}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <p className="label label-amber">Or go direct</p>
              <p className="label mt-4">WhatsApp</p>
              <a href={`https://wa.me/${WHATSAPP}?text=Hi%20Irie%20Web%20Studios%20-%20I%27d%20like%20to%20be%20considered%20for%20a%20build%20slot.`} target="_blank" rel="noreferrer" className="mt-1 block font-mono text-sm hover:text-amber">{WHATSAPP_DISPLAY}</a>
              <p className="label mt-4">Call</p>
              <a href={`https://wa.me/${WHATSAPP}?text=Hi%20Irie%20Web%20Studios%20-%20I%27d%20like%20to%20talk%20through%20a%20build.`} target="_blank" rel="noreferrer" className="mt-1 block font-mono text-sm hover:text-amber">{PHONE_DISPLAY}</a>
              <p className="label mt-4">Email</p>
              <a href={`mailto:${EMAIL}`} className="mt-1 block break-all text-sm hover:text-amber">{EMAIL}</a>
            </div>

            <div>
              <p className="label label-amber">Studio</p>
              <p className="mt-2 font-mono text-[11px] uppercase leading-relaxed tracking-[0.14em] text-bone/70">{LOCATION} / UTC-5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
