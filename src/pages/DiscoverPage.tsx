import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, Search } from "lucide-react";
import { Link } from "react-router-dom";

import "./DiscoverPage.css";

export default function DiscoverPage() {

  return (
    <section className="discover-page">

      {/* GLOWS */}

      <div className="discover-glow glow-one"></div>
      <div className="discover-glow glow-two"></div>

      <div className="discover-container">

        {/* TOP */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="discover-hero"
        >

          <span className="discover-badge">
            <Sparkles size={15} />
            AI Powered Intelligence
          </span>

          <h1>
            Smarter Property
            <br />
            Due Diligence
         
          </h1>

          <p>
            Discover how Easy Hunt simplifies property due diligence
            with AI-powered document intelligence. Get faster insights,
            improve accuracy, and make more confident decisions with
            a smarter way to review property documents.
          </p>

        </motion.div>

        {/* FEATURE BLOCKS */}

        <div className="discover-grid">

          {/* CARD 1 */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="discover-card"
          >

            <div className="discover-icon blue">
              <Search size={30} />
            </div>

            <h2>Faster Insights</h2>

            <p>
              Learn how Easy Hunt uses AI to speed up property due
              diligence and help businesses access important records
              faster than traditional workflows.
            </p>

          </motion.div>

          {/* CARD 2 */}

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="discover-card large-card"
          >

            <div className="discover-icon purple">
              <Sparkles size={34} />
            </div>

            <h2>
              Intelligent AI
              <br />
              Document Analysis
            </h2>

            <p>
              Explore how Easy Hunt brings speed, accuracy,
              and confidence to property document analysis
              with intelligent AI support and smarter search systems.
            </p>

          </motion.div>

          {/* CARD 3 */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="discover-card"
          >

            <div className="discover-icon pink">
              <ShieldCheck size={30} />
            </div>

            <h2>Reliable Decisions</h2>

            <p>
              See how Easy Hunt makes property due diligence easier,
              faster, and more reliable with structured workflows
              and intelligent property research systems.
            </p>

          </motion.div>

        </div>

        {/* QUOTE */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="discover-quote"
        >

          <h2>
            “AI-powered property intelligence
            built for speed, confidence,
            and accuracy.”
          </h2>

        </motion.div>

        {/* BACK BUTTON */}

        <div className="discover-bottom">

         

        </div>

      </div>
    </section>
  );
}