import { Component, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SiteDoctor from "./components/SiteDoctor";
import Layout from "./components/Layout";
import Home from "./pages/Home";

const WorkIndex = lazy(() => import("./pages/WorkIndex"));
const CaseStudy = lazy(() => import("./pages/CaseStudy"));
const Services = lazy(() => import("./pages/Services"));
const Studio = lazy(() => import("./pages/Studio"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

class ErrorBoundary extends Component {
  constructor(p) { super(p); this.state = { e: null }; }
  static getDerivedStateFromError(e) { return { e }; }
  componentDidCatch(e, i) { console.error("APP CRASH", e, i); }
  render() {
    if (this.state.e) {
      return (
        <div style={{ background: "#080807", color: "#f4f3ef", minHeight: "100vh", padding: "40px", fontFamily: "monospace" }}>
          <h1 style={{ color: "#c8a96a" }}>App crashed</h1>
          <p style={{ marginTop: 12 }}>{String(this.state.e.message)}</p>
          <pre style={{ whiteSpace: "pre-wrap", fontSize: 11, marginTop: 16, opacity: 0.7 }}>{String(this.state.e.stack)}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

function Fallback() {
  return (
    <div style={{ padding: 40, color: "#f4f3ef", fontFamily: "monospace" }}>loading...</div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <SiteDoctor />
      <BrowserRouter>
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
      </BrowserRouter>
    </ErrorBoundary>
  );
}
