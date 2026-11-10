import { useState } from "react";
import Marquee from "../components/Marquee";

const ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
const EMAIL = "hello@iriewebstudios.com";
const PHONE = "+18765550142";
const BOOKING = "https://cal.com/iriewebstudios/intro";
const SOCIALS = [
  { label: "{ Instagram }", href: "https://instagram.com/" },
  { label: "{ Twitter }", href: "https://twitter.com/" },
  { label: "{ LinkedIn }", href: "https://linkedin.com/" },
  { label: "{ GitHub }", href: "https://github.com/" },
];

const BUDGETS = [
  "Under $5,000",
  "$5,000 - $15,000",
  "$15,000 - $30,000",
  "$30,000+",
  "Monthly retainer",
  "Not sure yet",
];

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (String(data.get("_gotcha") || "").trim() !== "") return;

    setStatus("sending");
    setError("");

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error("bad response");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError("Transmission failed. Email us directly and we will pick it up.");
    }
  }

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden border-t border-white/10 bg-[#080807] px-6 pt-24 text-[#F4F3EF] md:px-12 md:pt-32"
    >
      <div className="pointer-events-none absolute -top-40 left-1/3 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(245,184,0,0.12),transparent_68%)] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#F5B800]" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#F5B800]">
            You Dream It. We Build It.
          </span>
        </div>

        <h2 className="mt-6 font-extrabold uppercase leading-[0.82] tracking-tighter text-[15vw] md:text-[9vw]">
          Contact<span className="text-[#F5B800]">.</span>
        </h2>

        <p className="mt-8 max-w-xl border-l-2 border-[#F5B800] pl-6 font-mono text-xs uppercase leading-relaxed tracking-widest text-[#8E8C84]">
          Got a question, an idea, or a project? Tell us what you are building.
          Replies within one business day.
        </p>

        <div className="mt-16 grid gap-14 border-t border-white/10 pt-14 lg:grid-cols-12 lg:gap-20">
          <div className="flex flex-col gap-10 lg:col-span-5">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#8E8C84]">
                Direct line
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="mt-3 block break-all text-xl tracking-tight text-[#F4F3EF] transition-colors hover:text-[#F5B800] md:text-2xl"
              >
                {EMAIL}
              </a>
              <a
                href={`tel:${PHONE}`}
                className="mt-1 block font-mono text-sm tracking-widest text-[#8E8C84] transition-colors hover:text-[#F5B800]"
              >
                {PHONE}
              </a>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#8E8C84]">
                Prefer to talk?
              </p>
              <a
                href={BOOKING}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-3 border border-white/20 px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] transition-colors hover:border-[#F5B800] hover:bg-[#F5B800] hover:text-[#080807]"
              >
                Book a 20-min intro <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#8E8C84]">
                Studio
              </p>
              <p className="mt-3 font-mono text-xs uppercase tracking-widest text-[#F4F3EF]/80">
                Kingston 6, Jamaica · UTC-5
                <br />
                Remote worldwide
              </p>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#8E8C84]">
                Elsewhere
              </p>
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-xs uppercase tracking-widest text-[#8E8C84] transition-colors hover:text-[#F5B800]"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" required autoComplete="name" />
                <Field label="Email" name="email" type="email" required autoComplete="email" />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Company / brand" name="company" autoComplete="organization" />
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="budget"
                    className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#8E8C84]"
                  >
                    Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    defaultValue=""
                    className="w-full appearance-none border border-white/15 bg-[#0a0a09] px-4 py-3.5 font-mono text-sm text-[#F4F3EF] outline-none transition-colors focus:border-[#F5B800]"
                  >
                    <option value="" disabled>Select a range</option>
                    {BUDGETS.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#8E8C84]"
                >
                  The brief
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  minLength={12}
                  placeholder="What are you building, who is it for, and when do you need it live?"
                  className="w-full resize-none border border-white/15 bg-transparent px-4 py-3.5 font-mono text-sm leading-relaxed text-[#F4F3EF] outline-none transition-colors placeholder:text-[#5c5a55] focus:border-[#F5B800]"
                />
              </div>

              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute -left-[9999px] h-0 w-0 opacity-0"
              />

              <div className="flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8E8C84]">
                  No decks, no funnels. We reply personally.
                </p>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group inline-flex items-center justify-center gap-3 border border-[#F5B800] bg-[#F5B800] px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#080807] transition-colors hover:border-white hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "sending" ? "Transmitting..." : "Send the brief"}
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                </button>
              </div>

              <p aria-live="polite" className="min-h-5 font-mono text-xs">
                {status === "success" && (
                  <span className="text-emerald-400">
                    Received. Check your inbox - we will come back within one business day.
                  </span>
                )}
                {status === "error" && <span className="text-[#F5B800]">{error}</span>}
              </p>
            </form>
          </div>
        </div>
      </div>

      <div className="relative mt-20 w-full overflow-hidden border-t border-white/10">
        <Marquee />
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required = false, autoComplete }) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#8E8C84]"
      >
        {label}
        {required && <span className="text-[#F5B800]"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full border border-white/15 bg-transparent px-4 py-3.5 font-mono text-sm text-[#F4F3EF] outline-none transition-colors focus:border-[#F5B800]"
      />
    </div>
  );
}
