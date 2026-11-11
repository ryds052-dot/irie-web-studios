import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const ease = [0.83, 0, 0.17, 1];

export default function RouteWipe() {
  const location = useLocation();
  const [wipeKey, setWipeKey] = useState(0);
  const [wiping, setWiping] = useState(false);

  useEffect(() => {
    setWiping(true);
    setWipeKey((k) => k + 1);
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {wiping && (
        <motion.div
          key={wipeKey}
          className="pointer-events-none fixed inset-0 z-[110] bg-gold"
          initial={{ x: "-100%", skewX: -12 }}
          animate={{ x: ["-115%", "0%", "115%"], skewX: [-12, -12, 12] }}
          transition={{ duration: 0.65, times: [0, 0.45, 1], ease }}
          onAnimationComplete={() => setWiping(false)}
        />
      )}
    </AnimatePresence>
  );
}
