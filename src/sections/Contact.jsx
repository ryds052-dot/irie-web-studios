import { useState } from "react";
import { EMAIL, PHONE, PHONE_DISPLAY, PHONE_ALT, PHONE_ALT_DISPLAY, PHONE_ALT_LABEL, LOCATION, AVAILABILITY, RESPONSE_TIME } from "../lib/site";

const ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

const BUDGETS = ["Under $500", "$500 - $1,500", "$1,500 - $3,000", "$3,000+", "Monthly retainer", "Not sure yet"];
const TIMELINES = ["This month", "Next 1-2 months", "This quarter", "No fixed date"];

const NEXT = [
  ["01", "You send the brief", "Two minutes. Scope, budget, deadline. Enough to judge fit."],
  ["02", "We reply in one day", "A real answer with a figure attached, not a discovery-call funnel."],
  ["03", "Scope gets written", "Fixed fee, dated milestones, signed before any money moves."],
];

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function submit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (String(data.get("_gotcha") || "").trim() !== "") return;

    setStatus("sending");
    setError("");

    try {
      const res = await fetch(ENDPOINT, { method: "POST", headers: { Accept: "application/json" }, body: data });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError(`Sending failed. Email ${EMAIL} directly and we will pick it up.`);
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
          Tell us the <span className="amber">scope.</span>
        </h1>

        <p className="lede mt-5">
          The more specific you are, the more specific our answer. {RESPONSE_TIME}.
        </p>

        <div className="rule mt-12 grid gap-12 pt-10 lg:grid-cols-12">
          <div className="flex flex-col gap-9 lg:col-span-5">
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
              <a href={`mailto:${EMAIL}`} className="mt-3 block break-all text-base hover:text-amber">{EMAIL}</a>
              <a href={`tel:${PHONE}`} className="mt-1 block font-mono text-[11px] tracking-[0.14em] text-mute hover:text-amber">{PHONE_DISPLAY}</a>
              <a href={`tel:${PHONE_ALT}`} className="mt-1 block font-mono text-[11px] tracking-[0.14em] text-mute hover:text-amber">{PHONE_ALT_DISPLAY}</a>
            </div>

            <div>
              <p className="label label-amber">Studio</p>
              <p className="mt-2 font-mono text-[11px] uppercase leading-relaxed tracking-[0.14em] text-bone/70">{LOCATION} / UTC-5<br />Remote worldwide</p>
            </div>
          </div>

          <form onSubmit={submit} className="flex flex-col gap-4 lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="label">Name *</span>
                <input name="name" required autoComplete="name" className="field" />
              </label>
              <label className="flex flex-col gap-2">
                <span className="label">Email *</span>
                <input name="email" type="email" required autoComplete="email" className="field" />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="label">Company</span>
                <input name="company" autoComplete="organization" className="field" />
              </label>
              <label className="flex flex-col gap-2">
                <span className="label">Budget</span>
                <select name="budget" defaultValue="" className="field">
                  <option value="" disabled>Select</option>
                  {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
                </select>
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="label">Timeline</span>
                <select name="timeline" defaultValue="" className="field">
                  <option value="" disabled>Select</option>
                  {TIMELINES.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </label>
              <label className="flex flex-col gap-2">
                <span className="label">Current site</span>
                <input name="site" type="url" autoComplete="url" placeholder="https://" className="field" />
              </label>
            </div>

            <label className="flex flex-col gap-2">
              <span className="label">What are you building? *</span>
              <textarea name="message" rows={6} required minLength={20} placeholder="What it is, who it is for, and what a win looks like." className="field" />
            </label>

            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 opacity-0" />

            <div className="rule flex flex-col gap-3 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="label">A person reads this, not a funnel.</p>
              <button type="submit" disabled={status === "sending"} className="btn btn-primary w-full disabled:opacity-60 sm:w-auto">
                {status === "sending" ? "Sending..." : "Send the brief"}
              </button>
            </div>

            <p aria-live="polite" className="min-h-5 font-mono text-xs">
              {status === "success" && <span className="text-emerald-400">Received. Check your inbox, we reply within one business day.</span>}
              {status === "error" && <span className="amber">{error}</span>}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}


