import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Search, FileText, Download, History, CheckCircle2 } from "lucide-react";

const contentData = {
  "keyword-search": {
    title: "Easy Keyword Search",
    icon: <Search className="w-8 h-8 text-purple-400" />,
    gradient: "from-purple-600/20 to-blue-600/20",
    sections: [
      {
        title: "Intelligent Property Search",
        text: "Easy Hunt simplifies complex property verification by transforming manual searching into an intelligent, keyword-based experience. Search instantly using owner names, survey numbers, or village names.",
      },
      {
        title: "Why It Matters",
        text: "Traditional verification is slow and error-prone. We deliver a modern experience with faster access to records, improved accuracy, and smarter property intelligence for decision-making.",
      },
      {
        title: "Key Benefits",
        text: "Enjoy instant multi-document scanning, accurate matching, and a reduced manual workload. Designed for legal teams and banks to complete due diligence with significantly less effort.",
      }
    ],
  },
  "full-records": {
    title: "See Full Records",
    icon: <FileText className="w-8 h-8 text-blue-400" />,
    gradient: "from-blue-600/20 to-cyan-600/20",
    sections: [
      {
        title: "Complete Visibility",
        text: "Access complete property records instantly. View owner details, survey data, land information, and remarks in one unified interface instead of partial search snippets.",
      },
      {
        title: "Contextual Accuracy",
        text: "Every result is connected to the full document, reducing errors caused by incomplete data and helping professionals perform more reliable due diligence with total confidence.",
      },
    ],
  },
  "export-results": {
    title: "Export Results",
    icon: <Download className="w-8 h-8 text-green-400" />,
    gradient: "from-green-600/20 to-emerald-600/20",
    sections: [
      {
        title: "Professional Reporting",
        text: "Turn search data into clean, shareable reports in seconds. Export results as PDF or Excel files for documentation, client reporting, and internal reviews.",
      },
      {
        title: "Standardized Documentation",
        text: "Eliminate manual data entry. Generate presentation-ready reports instantly to improve collaboration and maintain high-quality documentation for legal and banking workflows.",
      },
    ],
  },
  "search-history": {
    title: "Search History",
    icon: <History className="w-8 h-8 text-orange-400" />,
    gradient: "from-orange-600/20 to-red-600/20",
    sections: [
      {
        title: "Revisit & Continue",
        text: "Easy Hunt automatically saves past searches, making it easy to return to previous property records and verification workflows without repeating the process from scratch.",
      },
      {
        title: "Increased Productivity",
        text: "Maintain continuity across ongoing tasks. Securely organize your search history to track activity, reduce repetitive effort, and speed up high-volume due diligence operations.",
      },
    ],
  },
};

export default function Document() {
const { id } =
  useParams<{ id: string }>();

const navigate =
  useNavigate();

const data =
  id
    ? contentData[
        id as keyof typeof contentData
      ]
    : null;

  if (!data) return <div className="text-white p-10 text-center font-mono">Data Not Found</div>;

  return (
    <div className="min-h-screen bg-[#0b0616] text-white selection:bg-purple-500/30">
      
      {/* HEADER / HERO SECTION (No Images) */}
      <div className={`relative h-[50vh] flex items-center justify-center bg-gradient-to-br ${data.gradient} border-b border-white/5`}>
        
        {/* Animated Background Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -top-20 -left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px]"
          />
          <motion.div 
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"
          />
        </div>

        <button
          onClick={() => navigate(-1)}
          className="absolute top-8 left-8 flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>

        <div className="text-center z-10 px-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="mb-6 inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
          >
            {data.icon}
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight"
          >
            {data.title}
          </motion.h1>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="space-y-20">
          {data.sections.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="flex items-start gap-6">
                <div className="mt-1">
                  <CheckCircle2 className="w-6 h-6 text-purple-500/50 group-hover:text-purple-400 transition-colors" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 tracking-wide">
                    {s.title}
                  </h2>
                  <p className="text-lg text-gray-400 leading-relaxed font-light">
                    {s.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM CTA / TRUST LINE */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 p-8 rounded-3xl bg-white/5 border border-white/10 text-center backdrop-blur-sm"
        >
          <p className="text-purple-300 font-medium mb-2">Built for Accuracy</p>
          <p className="text-gray-500 text-sm">
            Trusted by legal teams, banks, and verification agencies worldwide.
          </p>
        </motion.div>
      </div>
    </div>
  );
}