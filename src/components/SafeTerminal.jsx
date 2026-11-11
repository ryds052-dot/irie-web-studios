import { Component, lazy, Suspense } from "react";

class Shield extends Component {
  constructor(p) { super(p); this.state = { e: null }; }
  static getDerivedStateFromError(e) { return { e }; }
  componentDidCatch(e) { console.error("Terminal contained:", e); }
  render() { return this.state.e ? null : this.props.children; }
}

const Terminal = lazy(() => import("./Terminal"));

export default function SafeTerminal() {
  return (
    <Shield>
      <Suspense fallback={null}>
        <Terminal />
      </Suspense>
    </Shield>
  );
}
