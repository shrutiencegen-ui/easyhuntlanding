import { motion, useInView } from "framer-motion"
import { Card } from "@/components/ui/card"
import { useRef } from "react"
import { Brain, BarChart3, Globe, Zap, Shield, Network } from "lucide-react"

export default function ShowcaseSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const showcaseItems = [
    { icon: Brain, title: "Intelligent Search", description: "Deep keyword search across large Excel and PDF datasets.", gradient: "from-pink-500 to-purple-600" },
    { icon: BarChart3, title: "Structured Results", description: "Clean, readable, and complete property records.", gradient: "from-cyan-500 to-blue-600" },
    { icon: Globe, title: "Export & Documentation", description: "Download results in PDF or Excel formats instantly and securely.", gradient: "from-fuchsia-500 to-purple-600" },
    { icon: Zap, title: "Faster Turnaround", description: "Complete due diligence in seconds instead of hours.", gradient: "from-emerald-400 to-green-600" },
    { icon: Shield, title: "Secure Processing", description: "Government-sourced data handled with enterprise security.", gradient: "from-orange-400 to-amber-600" },
    { icon: Network, title: "Complete Coverage", description: "Search across multiple property document types.", gradient: "from-blue-400 to-indigo-600" },
  ]

  return (
    <section ref={sectionRef} className="relative py-32 bg-gradient-to-b from-[#070a18] to-[#0b0f25] overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-sm tracking-widest text-indigo-400 mb-4">Platform Features</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">
            Everything you need in one platform
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Complete property document intelligence for faster and safer due diligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {showcaseItems.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group relative rounded-3xl bg-white/[0.04] backdrop-blur-xl border border-white/10 overflow-hidden p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_80px_rgba(124,58,237,0.35)]">

                  {/* ✨ TOP GLOW BAR */}
                  <div className="relative h-24 mb-8 rounded-2xl overflow-hidden flex items-center">

                    {/* Deep Base */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-20`} />

                    {/* Ambient Bloom */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/5 blur-2xl opacity-40" />

                    {/* Moving Color Flow */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${item.gradient}`}
                      initial={{ backgroundPosition: "0% 50%" }}
                      whileHover={{ backgroundPosition: "100% 50%" }}
                      transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                      style={{ backgroundSize: "200% 200%", opacity: 0.3 }}
                    />

                    {/* Soft Floating Glow Orbs */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-8 h-8 rounded-full bg-white/20 blur-2xl"
                        animate={{ y: [0, -20, 0], opacity: [0.2, 0.6, 0.2] }}
                        transition={{ duration: 6 + i, repeat: Infinity, delay: i }}
                        style={{ top: `${30 + i * 18}%`, left: `${55 + i * 10}%` }}
                      />
                    ))}

                    {/* Light Sweep */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 2, ease: "linear" }}
                    />

                    {/* Floating Icon */}
                    <motion.div
                      initial={{ x: 0 }}
                      whileHover={{ x: 140 }}
                      transition={{ type: "spring", stiffness: 120, damping: 12 }}
                      className={`relative z-20 ml-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.35)] border border-white/10 backdrop-blur-md`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {item.description}
                  </p>

                  {/* Inner Soft Edge Glow */}
                  <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-b from-white/5 via-transparent to-transparent opacity-40" />
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
