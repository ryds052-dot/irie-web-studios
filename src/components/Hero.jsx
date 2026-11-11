import { motion } from "framer-motion";

const WA = "https://wa.me/18765206119?text=" +
  encodeURIComponent("Hi Irie Web Studios · I need a website for my business. Which of the 2 slots is still open?");

export default function Hero() {
  return (
    <section className="hero-mono">
      <div className="hero-frame">
        <span className="hero-chip">? 1 of 2 slots left · Q4 2026</span>
      </div>

      <div className="hero-center">
        <motion.h1
          className="hero-head"
          initial={{ opacity: 0, y: 26, letterSpacing: "0.14em" }}
          animate={{ opacity: 1, y: 0, letterSpacing: "0em" }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          BUILT <em>fi win.</em>
        </motion.h1>

        <motion.span
          className="hero-rule"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
        />

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
        >
          Hand-built websites for Jamaican businesses · live in days,
          found on Google, priced in plain numbers. Zero templates.
        </motion.p>

        <motion.div
          className="hero-ctas"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <a className="hero-cta-primary" href={WA} target="_blank" rel="noreferrer">
            WhatsApp us · replies in hours
          </a>
          <a className="hero-cta-ghost" href="#/work">See the work ?</a>
        </motion.div>

        <motion.p
          className="hero-anchor"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          Launch $285 · Momentum $985 · Flagship $2,165 · fixed fee, written scope
        </motion.p>
      </div>

      <p className="hero-foot">15 min · no prep · no pitch · Trusted by Earth Family Farms · Trini-Yaad</p>
    </section>
  );
}
