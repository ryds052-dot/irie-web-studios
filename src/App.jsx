import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import FxLayer from "./components/FxLayer";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import WorkIndex from "./pages/WorkIndex";
import CaseStudy from "./pages/CaseStudy";
import Services from "./pages/Services";
import Studio from "./pages/Studio";
import PricingPage from "./pages/Pricing";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <ReactLenis root options={{ lerp: 0.06, duration: 1.2, smoothWheel: true }}>
        <FxLayer />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<WorkIndex />} />
            <Route path="/work/:slug" element={<CaseStudy />} />
            <Route path="/services" element={<Services />} />
            <Route path="/studio" element={<Studio />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </ReactLenis>
    </BrowserRouter>
  );
}
