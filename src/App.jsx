import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import Premium from "./components/Premium";
import StickyCTA from "./components/StickyCTA";
import ChromeUI from "./components/ChromeUI";
import ScrollManager from "./components/ScrollManager";
import WorkPeek from "./components/WorkPeek";
import Rails from "./components/Rails";
import IrieCode from "./components/IrieCode";
import FxLayer from "./components/FxLayer";
import ViewTransition from "./components/ViewTransition";
import Layout from "./components/Layout";
import Home from "./pages/Home";

const WorkIndex = lazy(() => import("./pages/WorkIndex"));
const CaseStudy = lazy(() => import("./pages/CaseStudy"));
const Services = lazy(() => import("./pages/Services"));
const Studio = lazy(() => import("./pages/Studio"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

function Fallback() {
  return (
    <div className="pad pt-32">
      <div className="wrap">
        <div className="skeleton h-3 w-24" />
        <div className="skeleton mt-5 h-16 w-3/4 md:h-24" />
        <div className="skeleton mt-4 h-4 w-full max-w-md" />
        <div className="skeleton mt-2 h-4 w-2/3 max-w-sm" />
        <div className="mt-10 space-y-4">
          {[0, 1, 2].map((i) => (<div key={i} className="skeleton h-14 w-full" />))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ReactLenis root options={{ lerp: 0.12, duration: 1.1, smoothWheel: true, smoothTouch: false }}>
        <Premium>
          <ScrollManager />
          <ChromeUI />
          <WorkPeek />
          <Rails />
          <IrieCode />
          <FxLayer />
          <ViewTransition />
          <Layout>
            <main id="main">
              <Suspense fallback={<Fallback />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/work" element={<WorkIndex />} />
                  <Route path="/work/:slug" element={<CaseStudy />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/studio" element={<Studio />} />
                  <Route path="/pricing" element={<Navigate to="/services" replace />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>
          </Layout>
          <StickyCTA />
        </Premium>
      </ReactLenis>
    </BrowserRouter>
  );
}
