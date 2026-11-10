const WORKS = [
  {
    n: "01",
    status: "PRODUCTION LIVE",
    title: "Earth Family Farms",
    outcome: "Cut out the OTA. Direct bookings only.",
    sub: "Eco-Agro Agroforestry & Ecotourism Platform",
    body: "A 100-acre estate selling cabins, tours and highland lots without paying commission to a marketplace.",
    tags: ["Next.js", "Tailwind CSS", "Vercel Edge", "SEO Architecture"],
    href: "https://earth-family-farms.vercel.app/",
  },
  {
    n: "02",
    status: "SYSTEM ACTIVE",
    title: "Trini-Yaad",
    outcome: "Order in two taps. No app install.",
    sub: "Culinary Brand Infrastructure & Digital Menu Engine",
    body: "Pepper levels, sauce builds, live basket, straight into WhatsApp. Sub-second on a 3G phone.",
    tags: ["React", "Tailwind CSS", "Edge CDN", "Interactive UI"],
    href: "https://trini-yaad.vercel.app/",
  },
  {
    n: "03",
    status: "CURRENT BUILD",
    title: "Irie Web Studios Core",
    outcome: "Every pixel hand-built. Zero templates.",
    sub: "Parametric WebGL & Tropical Brutalist Design System",
    body: "Custom Three.js transmission shaders, GSAP scroll mechanics, Lenis physics. This is the shop window.",
    tags: ["Three.js", "R3F", "GSAP", "Lenis", "Tailwind CSS"],
    href: "#hero-container",
  },
];

export default function Works() {
  return (
    <section
      id="works"
      className="relative w-full border-t border-white/10 bg-[#080807] px-6 py-28 text-[#F4F3EF] md:px-12 md:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#F5B800]" />
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#F5B800]">
                Deployment Index
              </span>
            </div>
            <h2 className="text-4xl font-extrabold uppercase tracking-tight sm:text-6xl">
              Selected Works //
            </h2>
          </div>
          <p className="max-w-md text-sm font-light leading-relaxed text-[#8E8C84] md:text-base">
            Three builds. Three outcomes. Tap through and judge the
            architecture yourself.
          </p>
        </div>

        <div className="flex flex-col divide-y divide-white/10 border-y border-white/10">
          {WORKS.map((w) => (
            <a
              key={w.n}
              href={w.href}
              target={w.href.startsWith("#") ? "_self" : "_blank"}
              rel="noreferrer"
              className="group flex flex-col justify-between gap-8 px-4 py-12 transition-colors duration-500 hover:bg-white/[0.025] md:px-8 md:py-14 lg:flex-row lg:items-center"
            >
              <div className="flex items-start gap-8 lg:w-1/2">
                <span className="pt-1 font-mono text-sm tracking-widest text-[#F5B800] md:text-base">
                  {w.n}
                </span>
                <div>
                  <span className="mb-3 inline-block font-mono text-[10px] uppercase tracking-widest text-emerald-400">
                    [{w.status}]
                  </span>
                  <h3 className="text-2xl font-bold tracking-tight transition-colors duration-300 group-hover:text-[#F5B800] md:text-4xl">
                    {w.title}
                  </h3>
                  <p className="mt-3 max-w-md text-lg font-medium leading-snug text-[#F4F3EF]/90 md:text-2xl">
                    {w.outcome}
                  </p>
                </div>
              </div>

              <div className="pl-[3.25rem] lg:w-5/12 lg:pl-0">
                <h4 className="mb-2 font-mono text-[11px] uppercase tracking-widest text-[#8E8C84]">
                  {w.sub}
                </h4>
                <p className="mb-6 text-sm font-light leading-relaxed text-[#8E8C84]">
                  {w.body}
                </p>
                <div className="flex flex-wrap gap-2">
                  {w.tags.map((t) => (
                    <span
                      key={t}
                      className="border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-xs uppercase tracking-wider text-[#F4F3EF]/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex pl-[3.25rem] lg:w-2/12 lg:justify-end lg:pl-0">
                <span className="inline-flex items-center gap-3 border border-white/15 px-6 py-3 font-mono text-xs uppercase tracking-widest transition-all duration-300 group-hover:border-[#F5B800] group-hover:bg-[#F5B800] group-hover:text-[#080807]">
                  Inspect
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  >
                    ↗
                  </span>
                </span>
              </div>
            </a>
          ))}
        </div>

        <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.2em] text-[#5c5a55]">
          Full case studies with metrics available on request.
        </p>
      </div>
    </section>
  );
}
