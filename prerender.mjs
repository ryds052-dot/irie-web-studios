import fs from "node:fs";
import path from "node:path";

const SITE = "https://iriewebstudios.com";
const base = fs.readFileSync("dist/index.html", "utf8");

const slugs = [...fs.readFileSync("src/data/projects.js", "utf8").matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);

const FAQ = [
  ["How long is a build?", "A landing page is 7 days, fixed date in writing before you pay a dollar. Bigger builds get quoted to the day."],
  ["Small budget?", "The US$285 landing page is the floor. Under that we will point you somewhere useful."],
  ["Who does the work?", "Two people, both named, both on WhatsApp. One builds, one runs the brief."],
  ["Do I own it?", "Completely. Code, domain, files and accounts are yours at launch."],
  ["Changes later?", "Three rounds included. After that US$45 a round, or a care plan."],
];

const offers = [
  ["Launch", "285", "One offer, one page, live this month."],
  ["Signature", "985", "So you look like the biggest name in the room."],
  ["Commerce", "2165", "Sell direct and keep the cut marketplaces take."],
];

const pages = [
  { p: "/", t: "Kingston Web Design for Businesses That Need Bookings | Irie Web Studios", d: "Fixed-fee websites for Jamaican businesses. Live in 7 days, from US$285. Book a 15-minute call." },
  { p: "/work", t: "Work - Websites Built in Kingston | Irie Web Studios", d: "Land enquiries booked off the page, Friday-night orders without an app install. See what launched." },
  { p: "/services", t: "Every Price, In The Open - Web Design Kingston | Irie Web Studios", d: "Fixed fee in USD, written scope, no haggling. Brand, web, WebGL, SEO and CRO from Kingston." },
  { p: "/studio", t: "The Studio - Two People, No Committee | Irie Web Studios", d: "Ryder Lee engineers every build, Nelson Denny runs the front of house. Kingston, Jamaica." },
  { p: "/contact", t: "Book 15 Minutes - Irie Web Studios", d: "Send the scope on WhatsApp. The figure comes back in writing the same day." },
  ...slugs.map((s) => ({
    p: `/work/${s}`,
    t: `${s.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())} - Case Study | Irie Web Studios`,
    d: "How it was built, what changed after launch, and what it cost.",
  })),
];

const head = (o) => {
  const ld = [];
  if (o.p === "/") {
    ld.push({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) });
  }
  if (o.p === "/services") {
    ld.push({ "@context": "https://schema.org", "@type": "OfferCatalog", name: "Web design packages", itemListElement: offers.map(([n, price, desc]) => ({ "@type": "Offer", name: n, description: desc, price, priceCurrency: "USD", url: SITE + "/contact" })) });
  }
  if (o.p.startsWith("/work/")) {
    ld.push({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Work", item: SITE + "/work" },
      { "@type": "ListItem", position: 2, name: o.t.split(" - ")[0], item: SITE + o.p },
    ]});
  }
  return ld.map((x) => `<script type="application/ld+json">${JSON.stringify(x)}</script>`).join("");
};

let count = 0;
for (const o of pages) {
  const url = SITE + o.p;
  let html = base
    .replace(/<title>[^<]*<\/title>/, `<title>${o.t}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${o.d}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${o.t}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${o.d}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
    .replace("</head>", `${head(o)}</head>`);
  const out = o.p === "/" ? "dist/index.html" : path.join("dist", o.p, "index.html");
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
  count++;
}
console.log("prerendered", count, "routes");
