import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Search,
  FileText,
  Download,
  History,
  CheckCircle2,
} from "lucide-react";

const contentData = {
  "keyword-search": {
    title: "Easy Keyword Search",
    icon: <Search className="w-8 h-8 text-purple-400" />,
    gradient: "from-purple-600/20 to-blue-600/20",
    trust: "Accurate search intelligence built for faster due diligence.",
    cta: "Transform manual property verification into a faster, smarter, and more reliable experience.",
    sections: [
      {
        title: "Intelligent Property Document Search Made Simple",
        text: "Easy Hunt simplifies complex property verification by transforming manual document searching into an intelligent keyword-based experience. Instead of checking multiple records one by one, users can instantly search across property-related documents using simple keywords like owner names, survey numbers, village names, remarks, or land references.",
      },
      {
        title: "Built For Faster Property Intelligence",
        text: "The platform intelligently scans multiple property records and document databases simultaneously to identify exact and related matches in real time. Instead of manually reviewing scattered files and records, Easy Hunt organizes relevant results into a clear and searchable interface.",
      },
      {
        title: "Why This Feature Matters",
        text: "Traditional property verification processes are slow, repetitive, and heavily dependent on manual document handling. Searching across multiple records consumes valuable time and increases the risk of missing critical information. Easy Hunt replaces outdated workflows with faster access to relevant records, improved search accuracy, reduced manual effort, and smarter property intelligence for confident decision-making.",
      },
      {
        title: "Key Benefits",
        points: [
          "Instant multi-document search across multiple property records",
          "Accurate keyword matching for faster verification",
          "Reduced manual searching and repetitive effort",
          "Faster due diligence and land verification workflows",
          "User-friendly interface for technical and non-technical teams",
          "Reliable property intelligence for smarter decisions",
        ],
      },
      {
        title: "Example Use Cases",
        points: [
          "Legal due diligence and ownership verification",
          "Bank & NBFC mortgage verification workflows",
          "Survey number and village record validation",
          "High-volume property checks for verification agencies",
        ],
      },
    ],
  },

  "full-records": {
    title: "See Full Records",
    icon: <FileText className="w-8 h-8 text-blue-400" />,
    gradient: "from-blue-600/20 to-cyan-600/20",
    trust:
      "Built for professionals who need accurate property verification with complete record visibility.",
    cta: "Access complete property context instantly without switching between multiple files.",
    sections: [
      {
        title: "Access Complete Property Records",
        text: "Easy Hunt gives you full visibility into property documents instantly. Instead of showing a single matching line, the platform lets users view complete records with ownership details, survey information, land data, important remarks, and supporting context — all in one place.",
      },
      {
        title: "Smarter Verification With Full Context",
        text: "Property verification requires more than partial information. Easy Hunt helps legal teams, banks, real estate professionals, and due diligence experts review complete property records without manually searching through scattered documents.",
      },
      {
        title: "Improved Accuracy & Decision-Making",
        text: "Every result is connected to the complete document, helping professionals understand the full context behind a property entry. This reduces verification errors, improves confidence, and supports smarter due diligence decisions.",
      },
      {
        title: "Key Benefits",
        points: [
          "View complete property documents instantly after search",
          "Access ownership details, survey data, and remarks in one view",
          "Reduce mistakes caused by incomplete search snippets",
          "Improve due diligence accuracy with full document visibility",
          "Save time by avoiding repetitive document reviews",
        ],
      },
    ],
  },

  "export-results": {
    title: "Export Results",
    icon: <Download className="w-8 h-8 text-green-400" />,
    gradient: "from-green-600/20 to-emerald-600/20",
    trust:
      "Designed for professional reporting workflows where accuracy and clarity matter.",
    cta: "Generate professional property verification reports instantly.",
    sections: [
      {
        title: "Export Search Results Into Professional Reports",
        text: "Easy Hunt allows users to export property search results into clean, structured, and shareable PDF or Excel reports for legal documentation, internal reviews, and client reporting.",
      },
      {
        title: "Simplified Reporting Workflows",
        text: "Instead of manually compiling screenshots or copying information across files, professionals can instantly generate presentation-ready reports with complete search details and accurate record visibility.",
      },
      {
        title: "Built For Faster Collaboration",
        text: "Designed for legal teams, banks, property consultants, and verification agencies, Easy Hunt helps standardize documentation while improving operational efficiency and collaboration across teams.",
      },
      {
        title: "Key Benefits",
        points: [
          "Export property results instantly as PDF or Excel",
          "Create clean reports for clients and internal teams",
          "Reduce repetitive manual reporting effort",
          "Improve collaboration with shareable property records",
          "Maintain organized due diligence documentation",
        ],
      },
    ],
  },

  "search-history": {
    title: "Search History",
    icon: <History className="w-8 h-8 text-orange-400" />,
    gradient: "from-orange-600/20 to-red-600/20",
    trust:
      "Designed to support faster, more organized, and reliable verification workflows.",
    cta: "Continue verification tasks instantly without restarting searches.",
    sections: [
      {
        title: "Revisit Previous Property Searches Instantly",
        text: "Easy Hunt automatically saves past searches, helping users quickly reopen previous property records, verification checks, and due diligence workflows without repeating the process from scratch.",
      },
      {
        title: "Maintain Workflow Continuity",
        text: "Property verification often involves multiple reviews, follow-ups, and repeated reference checks. Search History securely organizes previous searches in one accessible workspace for faster continuity.",
      },
      {
        title: "Reduce Repetitive Manual Effort",
        text: "Instead of manually re-entering keywords or repeating searches, professionals can instantly continue workflows, track verification activity, and improve productivity across high-volume operations.",
      },
      {
        title: "Key Benefits",
        points: [
          "Access previously searched property records instantly",
          "Continue due diligence workflows faster",
          "Reduce duplicate searches and repetitive effort",
          "Improve productivity across ongoing verification tasks",
          "Maintain organized and secure search history",
        ],
      },
    ],
  },
};

export default function Document() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const data =
    id && contentData[id as keyof typeof contentData]
      ? contentData[id as keyof typeof contentData]
      : null;

  if (!data)
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0b0616] text-white font-mono">
        Data Not Found
      </div>
    );

  return (
    <div className="min-h-screen bg-[#0b0616] text-white overflow-hidden selection:bg-purple-500/30">
      
      {/* HERO SECTION */}
      <div
        className={`relative min-h-[55vh] flex items-center justify-center bg-gradient-to-br ${data.gradient} border-b border-white/5`}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
            className="absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-purple-500/10 rounded-full blur-[120px]"
          />

          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
            }}
            className="absolute -bottom-32 -right-32 w-[32rem] h-[32rem] bg-blue-500/10 rounded-full blur-[120px]"
          />
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-8 left-8 flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-all bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-full border border-white/10 backdrop-blur-md"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl">
         

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight leading-tight"
          >
            {data.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
          >
            {data.cta}
          </motion.p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-24">

        {/* INTRO CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 p-8 md:p-12 rounded-[32px] bg-white/[0.03] border border-white/10 backdrop-blur-xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
              {data.icon}
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-purple-300">
                Easy Hunt Feature
              </p>
              <h2 className="text-3xl font-bold text-white mt-1">
                Smart Property Intelligence
              </h2>
            </div>
          </div>

          <p className="text-gray-400 text-lg leading-relaxed">
            Easy Hunt is designed to modernize property verification workflows
            with intelligent search automation, accurate document visibility,
            faster due diligence operations, and professional reporting tools —
            helping legal teams, banks, real estate professionals, and
            verification agencies work with greater speed and confidence.
          </p>
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="space-y-10">
          {data.sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 md:p-10 hover:bg-white/[0.05] transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10 flex items-start gap-5">
                <div className="mt-1 shrink-0">
                  <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20">
                    <CheckCircle2 className="w-5 h-5 text-purple-400" />
                  </div>
                </div>

                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold mb-5 text-white leading-snug">
                    {section.title}
                  </h2>

                  {section.text && (
                    <p className="text-gray-400 text-lg leading-relaxed">
                      {section.text}
                    </p>
                  )}

                  {section.points && (
                    <div className="grid md:grid-cols-2 gap-4 mt-8">
                      {section.points.map((point, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/5"
                        >
                          <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 shrink-0" />

                          <p className="text-gray-300 text-sm leading-relaxed">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* TRUST SECTION */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-28"
        >
          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-10 md:p-14 text-center backdrop-blur-xl">
            
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/[0.04] to-blue-500/[0.04]" />

            <div className="relative z-10">
              <p className="text-purple-300 uppercase tracking-[0.25em] text-sm mb-5">
                Trusted Workflow Experience
              </p>

              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                Built For Modern Property Verification
              </h3>

              <p className="max-w-3xl mx-auto text-lg text-gray-400 leading-relaxed">
                {data.trust}
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                {[
                  "Legal Teams",
                  "Banks & NBFCs",
                  "Property Consultants",
                  "Verification Agencies",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="px-5 py-3 rounded-full bg-white/[0.04] border border-white/10 text-sm text-gray-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}