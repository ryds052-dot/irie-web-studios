import { Link } from "react-router-dom";
import Seo from "../components/Seo";

export default function NotFound() {
  return (
    <>
      <Seo title="404 - Irie Web Studios" description="That route does not exist." />
      <div className="flex min-h-[80vh] flex-col justify-center px-6 md:px-12">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#F5B800]">Error 404</p>
        <h1 className="mt-6 text-[18vw] font-black uppercase leading-[0.8] tracking-tighter">Lost.</h1>
        <p className="mt-6 max-w-md font-mono text-xs uppercase leading-relaxed tracking-widest text-[#8E8C84]">
          No route at this address. The architecture is intact — you are just standing in the wrong corridor.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/" className="border border-[#F5B800] bg-[#F5B800] px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#080807] hover:border-white hover:bg-white">
            Back to base
          </Link>
          <Link to="/work" className="border border-white/20 px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] hover:border-[#F5B800] hover:text-[#F5B800]">
            See the work
          </Link>
        </div>
      </div>
    </>
  );
}
