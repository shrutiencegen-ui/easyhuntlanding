import { motion } from "framer-motion"
import { Search, FileText, Download, History, ArrowRight } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function FeaturesSection() {
  const navigate = useNavigate()

  const features = [
    {
      id: "keyword-search",
      icon: Search,
      title: "Easy Keyword Search",
      description:
        "Type owner name, survey number, village or remark and instantly search across all documents.",
    },
    {
      id: "full-records",
      icon: FileText,
      title: "See Full Records",
      description:
        "View complete property documents with ownership, dates and land details in one place.",
    },
    {
      id: "export-results",
      icon: Download,
      title: "Export Results",
      description:
        "Download search results as PDF or Excel for reports and client sharing.",
    },
    {
      id: "search-history",
      icon: History,
      title: "Search History",
      description:
        "Access previous searches anytime and continue your work without repeating steps.",
    },
  ]

  return (
    <section className="relative py-28 bg-gradient-to-br from-[#140a2a] via-[#1a0f35] to-[#2a0f4a] overflow-hidden" id="how-it-works">

      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
          How it works
        </h2>
        <p className="text-gray-400 mt-3">
          Smart property intelligence features
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((f, index) => (
          <motion.div
            key={f.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group rounded-3xl bg-white/5 border border-white/10 p-8 backdrop-blur-xl
            hover:bg-white/10 hover:border-purple-500/40
            hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]
            transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center ring-1 ring-purple-500/30">
  <f.icon className="w-5 h-5 text-purple-400 drop-shadow-[0_0_6px_rgba(168,85,247,0.8)]" />
</div>

              <h3 className="text-xl text-white font-semibold">
                {f.title}
              </h3>
            </div>

            <p className="text-gray-300 text-sm mb-6">
              {f.description}
            </p>

            <button
              onClick={() => navigate(`/document/${f.id}`, { state: { scrollTo: "product" } })}
              className="flex items-center gap-2 text-purple-300 hover:text-white transition"
            >
              Learn more
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  )
}