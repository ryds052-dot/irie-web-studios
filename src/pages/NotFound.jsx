import { Link } from "react-router-dom";
import Seo from "../components/Seo";

export default function NotFound() {
  return (
    <>
      <Seo title="404 - Irie Web Studios" description="That page does not exist." path="/404" />
      <div className="pad flex min-h-[75svh] flex-col justify-center">
        <div className="wrap">
          <p className="label label-amber">Error 404</p>
          <h1 className="display h1 mt-4">Lost.</h1>
          <p className="lede mt-4">No route at this address. The architecture is intact, you are just in the wrong corridor.</p>
          <div className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:gap-3">
            <Link to="/" className="btn btn-primary btn-block">Back to base</Link>
            <Link to="/work" className="btn btn-ghost btn-block">See the work</Link>
          </div>
        </div>
      </div>
    </>
  );
}
