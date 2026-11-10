export const PROJECTS = [
  {
    slug: "earth-family-farms",
    index: "01",
    status: "PRODUCTION LIVE",
    title: "Earth Family Farms",
    sector: "Private estate / Pre-development land",
    year: "2026",
    outcome: "Pre-development land. Private viewings only.",
    brief:
      "A 100-acre highland estate in Ocho Rios selling parcels before anything is built. No public checkout and no marketplace listing - viewings are arranged privately, so the site has to make the land legible before anyone drives up the hill.",
    approach: [
      "Phasing plan and parcel map presented without putting prices on the open web.",
      "Enquiry-gated lot detail, so every viewing arrives qualified rather than curious.",
      "Static rendering so the map and terrain hold up on a phone with one bar of signal.",
    ],
    stack: ["Next.js", "Tailwind CSS", "Vercel Edge", "SEO"],
    results: [["100", "Acres"], ["Pre-dev", "Phase"], ["Enquiry", "Only"]],
    quote: ["The site does the walking for us. People arrive already serious.", "Michael Lee", "Owner"],
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
    quote: ["The queue does not wait for a slow page.", "Misir Ramberran", "Founder"],
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
    href: "https://iriewebstudio.com/work/irie-core",
  },
];

export const getProject = (slug) => PROJECTS.find((p) => p.slug === slug);
