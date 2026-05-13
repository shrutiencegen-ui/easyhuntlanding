import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  ShieldCheck,
  FileSpreadsheet,
  ArrowRight,
} from "lucide-react";
import "./FeaturesPage.css";

export default function FeaturesPage() {
  return (
    <section className="features-page">
      {/* Decorative Background Elements */}
      <div className="bg-blur-glow t-left"></div>
      <div className="bg-blur-glow b-right"></div>

      <div className="features-container">
        {/* SECTION HEADER */}
        <header className="features-header">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-badge"
          >
            Unmatched Performance
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="features-title"
          >
            Powerful EasyHunt <br /> <span>Features</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="features-subtitle"
          >
            Experience the next generation of property research with tools designed for speed, 
            security, and absolute precision.
          </motion.p>
        </header>

        {/* FEATURES INTERACTIVE GRID */}
        <div className="features-stack">
          
          {/* FEATURE 1 - KEYWORD SEARCH */}
          <motion.div 
            className="feature-row left-align"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "circOut" }}
          >
            <div className="feature-visual">
              <div className="icon-box gold-theme">
                <Search size={38} strokeWidth={1.5} />
                <div className="glow-effect"></div>
              </div>
            </div>
            <div className="feature-info">
              <h2>Deep keyword search <br/> capability</h2>
              <p>
                EasyHunt lets users search property records with far greater speed and precision 
                than traditional portals. Enter relevant keywords like village name, owner name, 
                survey number, or taluka and get targeted results in seconds.
              </p>
          
            </div>
          </motion.div>

          {/* FEATURE 2 - SECURE DATA */}
          <motion.div 
            className="feature-row right-align"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "circOut" }}
          >
            <div className="feature-visual">
              <div className="icon-box green-theme">
                <ShieldCheck size={38} strokeWidth={1.5} />
                <div className="glow-effect"></div>
              </div>
            </div>
            <div className="feature-info">
              <h2>Secure data <br/> processing</h2>
              <p>
                Property research involves sensitive information, so security matters at every stage. 
                EasyHunt securely handles user searches, filtering, and records using advanced 
                encryption to build absolute trust.
              </p>
            
            </div>
          </motion.div>

          {/* FEATURE 3 - EXPORT OPTIONS */}
          <motion.div 
            className="feature-row left-align"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "circOut" }}
          >
            <div className="feature-visual">
              <div className="icon-box blue-theme">
                <FileSpreadsheet size={38} strokeWidth={1.5} />
                <div className="glow-effect"></div>
              </div>
            </div>
            <div className="feature-info">
              <h2>Export to PDF <br/> or Excel</h2>
              <p>
                Users can instantly export property results into professional PDF or Excel formats 
                for documentation, deep analysis, or offline sharing. Perfectly structured data, 
                ready for your next meeting.
              </p>
              
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}