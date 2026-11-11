import { Component, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

const WorkIndex = lazy(() => import("./pages/WorkIndex"));
const CaseStudy = lazy(() => import("./pages/CaseStudy"));
const Services = lazy(() => import("./pages/Services"));
const Studio = lazy(() => import("./pages/Studio"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error: error };
  }
  componentDidCatch(error, info) {
    console.error("APP CRASH:", error, info);
  }
  render() {
    if (this.state.error) {
      return (
        <div style={{ background: "#080807", color: "#f4f3ef", minHeight: "100vh", padding: "40px", fontFamily: "monospace" }}>
          <h1 style={{ color: "#c8a96a", fontSize: "20px" }}>App crashed</h1>
          <p style={{ marginTop: "12px" }}>{String(this.state.error.message)}</p>
          <pre style={{ whiteSpace: "pre-wrap", fontSize: "11px", marginTop: "16px", opacity: 0.7 }}>{String(this.state.error.stack)}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

function Fallback() {
  return (
    <div className="pad pt-32">
      <div className="wrap">
        <div className="skeleton h-3 w-24" />
        <div className="skeleton mt-5 h-16 w-3/4 md:h-24" />
        <div className="skeleton mt-4 h-4 w-full max-w-md" />
        <div className="skeleton mt-2 h-4 w-2/3 max-w-sm" />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
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
