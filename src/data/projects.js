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
    stack: ["React", "Tailwind CSS", "Vercel Edge", "SEO"],
    results: [["100+", "Acres"], ["300+", "Fruit trees"], ["2", "Rivers"]],
    quote: ["The site does the walking for us. People arrive already serious.", "Michael Lee", "Owner"],
    href: "https://earth-family-farms.vercel.app/",
  },
  {
    slug: "trini-yaad",
    index: "02",
    status: "PRODUCTION LIVE",
    title: "Trini-Yaad",
    sector: "Street food / Takeaway",
    year: "2026",
    outcome: "Order in two taps. No app install.",
    brief:
      "Friday night at 82 Lady Musgrave Road. A Trinidadian street food vendor with a queue down the pavement and one hard constraint: nobody is installing an app to order doubles. The site had to take the order in the time it takes to read a menu board, then hand it somewhere the kitchen already looks.",
    approach: [
      "Pepper levels and sauce builds resolve in the browser, so there is no loading state between taps.",
      "The basket hands straight to WhatsApp, where the kitchen already lives. Nothing new to learn on a Friday.",
      "Sized and built for a 3G phone, because that is the connection a queue actually has.",
    ],
    stack: ["React", "Tailwind CSS", "Edge CDN", "WhatsApp handoff"],
    results: [["2", "Taps to order"], ["1", "Order channel"], ["0", "App installs"]],
    quote: ["The queue does not wait for a slow page.", "Misir Ramberran", "Founder"],
    href: "https://trini-yaad.varcel.app/",
  },
];

export const getProject = (slug) => PROJECTS.find((p) => p.slug === slug);


