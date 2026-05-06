import { motion } from "framer-motion"
import { Search, FileText, Download, History, ArrowRight } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: Search,
      title: "Easy Keyword Search",
      description:
        "Type any word like owner name (Patil), survey number, village name, or remark. It checks all documents at once and shows exact matches.",
    },
    {
      icon: FileText,
      title: "See Full Records",
      description:
        "Get the whole document—not just one line. See owner details, dates, land info, and more to avoid mistakes.",
    },
    {
      icon: Download,
      title: "Export Results",
      description:
        "Save searches as PDF or Excel files. Share with clients or use in reports (available in Professional plan and above).",
    },
    {
      icon: History,
      title: "Search History",
      description:
        "Keep track of past searches. Find old results quickly without starting over.",
    },
  ]

  return (
    <section
      id="how-it-works"
      className="relative py-28 bg-gradient-to-br from-[#140a2a] via-[#1a0f35] to-[#2a0f4a] overflow-hidden"
    >
      <div className="text-center mb-16">
       <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white">
              <span className="text-gradient-1">How it works</span>
            </h2>
        <p className="text-gray-400 mt-3 text-sm md:text-base">
          Powerful features to simplify your document search
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} index={index} />
        ))}
      </div>
    </section>
  )
}

function FeatureCard({ feature, index }: any) {
  const Icon = feature.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative"
    >
      <div className="relative rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 p-10 h-full transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(139,92,246,0.35)] flex flex-col">

        {/* ✅ ICON + TITLE */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20">
            <Icon className="w-5 h-5 text-purple-400" />
          </div>

          <h3 className="text-xl font-semibold text-white">
            {feature.title}
          </h3>
        </div>

        {/* DESCRIPTION */}
        <p className="text-gray-300 text-sm leading-relaxed mb-6">
          {feature.description}
        </p>

        {/* ✅ LEARN MORE WITH ARROW */}
       <div className="mt-auto flex justify-end">
  <span className="text-sm text-purple-300 group-hover:text-white transition-all duration-300 flex items-center gap-2 cursor-pointer">
    Learn more
    <ArrowRight className="w-5 h-5 text-purple-400 group-hover:text-white transition-all duration-300 group-hover:translate-x-1" />
  </span>
</div>

      </div>
    </motion.div>
  )
}