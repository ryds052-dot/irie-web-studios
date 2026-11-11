import { Suspense, lazy } from "react";
import Preloader from "./Preloader";
import Cursor from "./Cursor";

const Backdrop = lazy(() => import("./Backdrop"));

export default function Premium({ children }) {
  return (
    <Preloader>
      <Cursor />
      <Suspense fallback={null}><Backdrop /></Suspense>
      {children}
    </Preloader>
  );
}
