import { Link } from "react-router-dom";
import Seo from "../components/Seo";

const GROUPS = [
  ["01", "Brand identity", ["Naming & positioning", "Logo systems", "Type & colour", "Voice & tone", "Brand guidelines"]],
  ["02", "Web design", ["Art direction", "Conversion-first layouts", "Design systems", "Copy structure", "Prototypes"]],
  ["03", "Development", ["Next.js & React", "Shopify & Webflow", "Edge deployment", "CMS integration", "Accessibility"]],
  ["04", "Motion & 3D", ["WebGL & shaders", "Scroll choreography", "Micro-interaction", "Product renders", "Video"]],
  ["05", "SEO & content", ["Technical SEO", "Schema", "Editorial strategy", "Performance budgets"]],
  ["06", "CRO & analytics", ["Heatmaps", "A/B testing", "Funnel work", "Dashboards"]],
];

export default function Services() {
  return (
    <>
      <Seo
        title="Services - Irie Web Studios"
        description="Brand identity, web design, Next.js development, WebGL motion, SEO and conversion optimisation. Flat fees, scope agreed up front."
      />
      <div className="px-6 pt-28 md:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#F5B800]">Capabilities</p>
          <h1 className="mt-6 text-[13vw] font-black uppercase leading-[0.82] tracking-tighter md:text-[8vw]">
            Everything<br /><span className="text-[#F5B800]">you need.</span>
          </h1>
          <p className="mt-8 max-w-xl border-l-2 border-[#F5B800] pl-6 font-mono text-xs uppercase leading-relaxed tracking-widest text-[#8E8C84]">
            Six disciplines, one team. Nothing outsourced to someone who has not read the brief.
          </p>

          <div className="mt-16 grid gap-px border-t border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {GROUPS.map(([n, title, items]) => (
              <div key={n} className="bg-[#080807] p-8">
                <p className="font-mono text-[10px] tracking-[0.25em] text-[#F5B800]">{n}</p>
                <h2 className="mt-8 text-2xl font-bold uppercase">{title}</h2>
                <ul className="mt-4 space-y-2 text-sm text-[#8E8C84]">
                  {items.map((x) => <li key={x} className="border-b border-white/5 pb-2">{x}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-20 border-t border-white/10 py-16 text-center">
            <Link to="/contact" className="inline-block border border-[#F5B800] bg-[#F5B800] px-10 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#080807] hover:border-white hover:bg-white">
              Start a project
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
