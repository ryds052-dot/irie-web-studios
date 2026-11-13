const p = (v) => `$${v.toLocaleString("en-US")}`;

export const GROUPS = [
  { id: "web", label: "Web and build", items: [
    ["Landing page", `${p(100)} deposit / ${p(250)}`, "Single page, art-directed, launched in 10 days."],
    ["Brochure site, 5-8 pages", `${p(480)}-${p(800)}`],
    ["Ecommerce build", `${p(950)}-${p(1275)}`],
    ["Booking / reservation site", `${p(480)}-${p(800)}`],
    ["Rebuild / migration", p(540)],
    ["Web app / client portal", `from ${p(1275)}`],
    ["Extra page beyond scope", p(95)],
    ["Extra revision round", p(45)],
    ["Mobile responsive retrofit", p(255)],
  ]},
  { id: "brand", label: "Brand and design", items: [
    ["Logo + identity", `${p(180)}-${p(670)}`],
    ["Brand guidelines", `${p(270)}-${p(535)}`],
    ["Social template pack, 10 pieces", `${p(115)}-${p(250)}`],
    ["Product photography, per item", `${p(6)}-${p(18)}`],
    ["Photography, half day", `${p(135)}-${p(355)}`],
    ["Print collateral, per piece", `${p(50)}-${p(160)}`],
    ["Signage / vehicle wrap design", `${p(160)}-${p(400)}`],
  ]},
  { id: "content", label: "Content and SEO", items: [
    ["Copywriting, per page", `${p(38)}-${p(115)}`],
    ["Blog article, 800 words", `${p(38)}-${p(90)}`],
    ["Content plan, 3 months", `${p(135)}-${p(310)}`],
    ["Technical SEO audit", `${p(160)}-${p(400)}`],
    ["Local SEO, monthly", `${p(180)}-${p(535)}`],
    ["On-page optimisation, per page", `${p(25)}-${p(70)}`],
    ["Backlink outreach campaign", `${p(180)}-${p(445)}`],
    ["Keyword research report", `${p(90)}-${p(205)}`],
  ]},
  { id: "google", label: "Google Business Profile and reviews", items: [
    ["Google Business Profile setup", `${p(115)}-${p(270)}`, "Claim, verify, categories, photos, hours."],
    ["Google Business Profile management, monthly", `${p(115)}-${p(270)}`],
    ["Review management, monthly", `${p(90)}-${p(225)}`, "Request flows and reply handling."],
    ["Local citation cleanup", `${p(115)}-${p(310)}`],
  ]},
  { id: "social", label: "Social media and ads", items: [
    ["Social management, monthly", `${p(160)}-${p(445)}`],
    ["Paid ads management, monthly", `12-15% of spend, minimum ${p(225)}`],
    ["Ad creative pack, 5 pieces", `${p(90)}-${p(205)}`],
    ["Campaign setup", `${p(135)}-${p(310)}`],
    ["Influencer brief + outreach", `${p(115)}-${p(270)}`],
  ]},
  { id: "hosting", label: "Hosting and infrastructure, monthly", items: [
    ["Hosting only", p(25), "Deploy, SSL, CDN and DNS. Nothing managed."],
    ["Managed hosting", `${p(45)}-${p(95)}`],
    ["Emergency callout, one-off", p(75)],
    ["Domain + DNS management", `${p(10)}-${p(22)}`],
    ["Business email setup", `${p(65)}-${p(135)}`],
    ["Backup + monitoring", `${p(38)}-${p(90)}`],
    ["Uptime + integrity monitoring", `${p(115)}-${p(310)}`],
    ["SSL + certificates", "included"],
  ]},
  { id: "automation", label: "Automation and systems", items: [
    ["CRM setup", `${p(270)}-${p(890)}`],
    ["Booking / WhatsApp automation", p(285)],
    ["Payment gateway integration", `${p(160)}-${p(400)}`],
    ["Inventory / POS integration", `from ${p(445)}`],
    ["Analytics + conversion tracking", `${p(190)}-${p(380)}`],
    ["Automation workflows, per flow", `${p(50)}-${p(135)}`],
  ]},
  { id: "security", label: "Security", items: [
    ["Security posture audit", `${p(205)}-${p(535)}`],
    ["Website hardening", p(415)],
    ["Malware removal + recovery", `${p(180)}-${p(670)}`],
    ["Email security SPF/DKIM/DMARC", `${p(115)}-${p(225)}`],
    ["MFA rollout", `${p(90)}-${p(270)}`],
    ["Cloud config review, M365 / Google", `${p(180)}-${p(400)}`],
    ["Network / WiFi review", `${p(135)}-${p(310)}`],
    ["Patch management, monthly", `${p(65)}-${p(180)}`],
    ["DMARC reporting, monthly", `${p(38)}-${p(90)}`],
    ["Phishing simulation, monthly", `${p(65)}-${p(160)}`],
    ["Awareness training, per session", `${p(135)}-${p(310)}`],
    ["Incident response retainer, monthly", `${p(115)}-${p(270)}`],
    ["Emergency response", `${p(355)}-${p(1115)}`],
    ["Post-incident review", `${p(180)}-${p(400)}`],
  ]},
  { id: "compliance", label: "Compliance", items: [
    ["Data Protection Act registration support", `${p(180)}-${p(400)}`],
    ["Privacy notice + consent flows", `${p(115)}-${p(270)}`],
    ["Data mapping exercise", `${p(355)}-${p(800)}`],
    ["Policy pack, 5 policies", `${p(270)}-${p(625)}`],
    ["PCI scope reduction", `${p(160)}-${p(355)}`],
  ]},
  { id: "training", label: "Training and documentation", items: [
    ["Staff CMS training, 2 sessions", `${p(135)}-${p(270)}`],
    ["Written SOP / handbook", `${p(180)}-${p(445)}`],
    ["Recorded walkthrough library", `${p(115)}-${p(270)}`],
  ]},
  { id: "crypto", label: "Crypto and web3", items: [
    ["Wallet security audit", p(320)],
    ["Seed / backup setup session", p(190)],
    ["Token / NFT site build", p(1340)],
    ["Smart contract review, basic", `${p(270)}-${p(890)}`],
    ["Post-compromise wallet forensics, monthly", p(285)],
  ]},
];

export const RETAINERS = [
  ["Care Basic", p(50), "Updates, backups, uptime, 1hr edits."],
  ["Care Standard", p(130), "Adds security, 3hr edits, monthly report."],
  ["Care Priority", p(240), "Adds same-day response, 8hr edits, quarterly strategy."],
  ["Security Baseline", p(240), "Patching, backups, monitoring, DMARC, quarterly phishing test."],
];

export const PACKAGES = [
  ["Launch", p(285), "For one offer and a hard deadline.", ["Landing page", "Business email setup", "Analytics", "1 month Care Basic"], false],
  ["Presence", p(985), "For a business that needs to look established.", ["Brochure site", "Google Business Profile", "3 months local SEO"], true],
  ["Store", p(2165), "For selling product without a marketplace cut.", ["Ecommerce build", "Payments", "Staff training", "3 months Care Standard"], false],
];

export const TERMS = [
  "50% deposit, non-refundable on start. Balance on launch.",
  `Three revision rounds included, then ${p(45)} each.`,
  "Code, domain and every account are handed to you at launch. Hosting is billed monthly and moves to your own account on request.",
  "Work is per written scope. Anything outside it is a change order at hourly rate.",
  "Rush under 7 days: +30%.",
  "Work pauses at 14 days overdue.",
  "Retainers billed monthly in advance. A 12-month term takes 10% off.",
  "Retainer cancellation: 30 days written notice.",
];

