export const PROJECTS = [
  {
    slug: "earth-family-farms",
    index: "01",
    status: "PRODUCTION LIVE",
    title: "Earth Family Farms",
    sector: "Eco-agro / Ecotourism",
    year: "2026",
    outcome: "Cut out the OTA. Direct bookings only.",
    brief:
      "A 100-acre estate in Ocho Rios was selling cabins and tours through marketplaces that took a cut and kept the customer. They wanted the funnel back.",
    approach: [
      "Static-rendered pages so every listing opens in under a second on rural connections.",
      "Booking flow reduced to three decisions: experience, date, party size.",
      "Brand pulled from the land - timber, river stone, highland green - not stock eco cliches.",
    ],
    stack: ["Next.js", "Tailwind CSS", "Vercel Edge", "SEO"],
    results: [["100%", "Bookings direct"], ["0", "Commission"], ["0.9s", "Mobile LCP"]],
    quote: ["They rebuilt our booking flow in three weeks and enquiries doubled.", "Maya Reid", "Founder"],
    href: "https://earth-family-farms.vercel.app/",
  },
  {
    slug: "trini-yaad",
    index: "02",
    status: "SYSTEM ACTIVE",
    title: "Trini-Yaad",
    sector: "Street food / Hospitality",
    year: "2026",
    outcome: "Order in two taps. No app install.",
    brief:
      "A Trinidadian street food vendor in Kingston needed ordering that survives a Friday queue without asking anyone to download anything.",
    approach: [
      "Menu engine with pepper levels, sauce builds and a live basket, all client-side.",
      "WhatsApp handoff so the order lands where the kitchen already looks.",
      "Sub-second payload budget on a 3G throttle, because that is the real connection.",
    ],
    stack: ["React", "Tailwind CSS", "Edge CDN", "Interactive UI"],
    results: [["2 taps", "To cart"], ["0.8s", "Mobile load"], ["0", "App installs"]],
    quote: ["Enquiries went from a trickle to a waitlist.", "Devon Cole", "Owner"],
    href: "https://trini-yaad.vercel.app/",
  },
  {
    slug: "irie-core",
    index: "03",
    status: "CURRENT BUILD",
    title: "Irie Web Studios Core",
    sector: "Internal / Design system",
    year: "2026",
    outcome: "Every pixel hand-built. Zero templates.",
    brief:
      "The shop window. A live testbed for the shaders, motion and type systems deployed on client work.",
    approach: [
      "Custom fragment shader with a single static frame on mobile to protect battery.",
      "Scroll choreography on Lenis physics rather than native scroll.",
      "Brutalist grid, mono microtype, hard amber-on-black palette.",
    ],
    stack: ["Three.js", "R3F", "GSAP", "Lenis", "Tailwind CSS"],
    results: [["60fps", "Desktop shader"], ["0", "Templates"], ["1", "DPR on mobile"]],
    quote: ["If we would not ship it for ourselves, we will not ship it for you.", "Ryder Lee", "Co-founder"],
    href: "https://irie-webstudio.com/work/irie-core",
  },
];

export const getProject = (slug) => PROJECTS.find((p) => p.slug === slug);
