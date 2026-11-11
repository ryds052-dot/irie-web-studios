import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Preloader from "./components/Preloader";
import Cursor from "./components/Cursor";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ReactLenis } from "lenis/react";
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
    <div className="grid min-h-[70vh] place-items-center font-mono text-[10px] uppercase tracking-[0.3em] text-[#5c5a55]">
      Loading
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ReactLenis root options={{ lerp: 0.12, duration: 1.1, smoothWheel: true, smoothTouch: false }}>
        <FxLayer />
        <ViewTransition />
        <Layout>
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
        </Layout>
      </ReactLenis>
    </BrowserRouter>
  );
}




