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
      "A 100-acre highland estate in Ocho Rios selling parcels before anything is built. No public checkout, no marketplace listing. Viewings are arranged privately, so the site has to make the land legible before anyone drives up the hill.",
    approach: [
      "Phasing plan and parcel map shown without putting prices on the open web.",
      "Lot detail sits behind a short enquiry form, so viewings arrive qualified.",
      "Pages built to load on one bar of signal up in the hills.",
    ],
    stack: ["Next.js", "Tailwind CSS", "Vercel Edge", "SEO"],
    results: [["100+", "Acres"], ["300+", "Fruit trees"], ["2", "Rivers"]],
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
      "A Trinidadian street food vendor at 82 Lady Musgrave Road needed ordering that survives a Friday queue without asking anyone to download anything.",
    approach: [
      "Menu with pepper levels and sauce builds, handled entirely in the browser.",
      "Basket hands off to WhatsApp, where the kitchen already looks.",
      "Built to open fast on a 3G phone, because that is the real connection.",
    ],
    stack: ["React", "Tailwind CSS", "Edge CDN", "Interactive UI"],
    results: [["4.4", "Rated, Kingston"], ["WA", "Order channel"], ["0", "App installs"]],
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
      "The shop window. A live testbed for the 3D, motion and type systems that get reused on client work.",
    approach: [
      "A moving shader on desktop, a single still frame on mobile to save battery.",
      "Smooth scrolling that follows your thumb instead of fighting it.",
      "Hard grid, small mono labels, one accent colour.",
    ],
    stack: ["Three.js", "R3F", "GSAP", "Lenis", "Tailwind CSS"],
    results: [["0", "Templates"], ["1", "Frame on mobile"], ["60", "FPS target"]],
    quote: ["If we would not ship it for ourselves, we will not ship it for you.", "Ryder Lee", "Co-founder"],
    href: "https://iriewebstudios.com/work/irie-core",
  },
];

export const getProject = (slug) => PROJECTS.find((p) => p.slug === slug);

