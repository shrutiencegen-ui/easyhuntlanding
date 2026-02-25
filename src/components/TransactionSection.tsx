import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Globe2, Zap, Shield } from "lucide-react"

export default function TransactionSection() {
  return (
    <section id="platform" className="relative py-28 overflow-hidden bg-gradient-to-br from-[#060714] via-[#0b0e2a] to-[#120c2f]">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.12) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* ================= LEFT SIDE — TECH VISUAL ================= */}
        <div className="relative h-[520px] flex items-center justify-center">
          <div className="relative w-[420px] h-[420px] flex items-center justify-center">

            {/* Background Glow */}
            <div className="absolute w-[420px] h-[420px] rounded-full bg-blue-600/10 blur-[120px]" />
            <div className="absolute w-[320px] h-[320px] rounded-full bg-indigo-500/10 blur-[100px]" />

            {/* 🔄 Rotating Outer Ring */}
            <motion.div
              className="absolute w-[260px] h-[260px] rounded-full border border-blue-500/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />

            {/* 🧊 Static Core */}
            <div className="relative w-[240px] h-[240px] rounded-full bg-[#0b1020] flex items-center justify-center shadow-[0_0_80px_rgba(59,130,246,0.35)]">

              <div className="w-32 h-32 rounded-full border border-blue-400/40 flex items-center justify-center relative">

                {/* ✨ BLINKING LOGO (NO ROTATION) */}
                <motion.img
                  src="/easyhunt-logo.png"
                  alt="Easy Hunt"
                  className="w-24 h-24 object-contain drop-shadow-[0_0_60px_rgba(59,130,246,1)]"
                  animate={{
                    opacity: [0.6, 1, 0.6],
                    scale: [0.95, 1.12, 0.95],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Orbit Dots */}
                <div className="absolute w-3 h-3 bg-blue-400 rounded-full top-0 left-1/2 -translate-x-1/2" />
                <div className="absolute w-3 h-3 bg-blue-400 rounded-full bottom-0 left-1/2 -translate-x-1/2" />
                <div className="absolute w-3 h-3 bg-blue-400 rounded-full left-0 top-1/2 -translate-y-1/2" />
                <div className="absolute w-3 h-3 bg-blue-400 rounded-full right-0 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            {/* Radial Connection Lines */}
            {[0, 60, 120, 180, 240, 300].map((deg, i) => (
              <motion.div
                key={i}
                className="absolute w-[2px] h-32 bg-blue-500/40 origin-bottom"
                style={{ transform: `rotate(${deg}deg) translateY(-120px)` }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
              />
            ))}

            {/* End Nodes */}
            {[0, 60, 120, 180, 240, 300].map((deg, i) => (
              <div
                key={i}
                className="absolute w-4 h-4 bg-blue-400 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)]"
                style={{ transform: `rotate(${deg}deg) translateY(-155px)` }}
              />
            ))}

            {/* Floating Message Cards */}
            <FloatingCard top="8%" left="-8%" delay={0} />
            <FloatingCard top="58%" left="-12%" delay={1} />
            <FloatingCard top="18%" right="-10%" delay={2} />
            <FloatingCard top="70%" right="-8%" delay={3} />

          </div>
        </div>

        {/* ================= RIGHT SIDE — CONTENT ================= */}
        <div>
          <span className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm rounded-full border border-blue-500/30 text-blue-400">
            ⚡ Platform
          </span>

          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
            Search and verify effortlessly
          </h2>

          <p className="text-gray-300 mb-10 max-w-xl">
            Conduct fast keyword-based research, track search history, and export
            structured records for title search reports and legal documentation.
          </p>

          <div className="space-y-6 mb-10">
            <Feature icon={Zap} text="Deep keyword search capability" color="from-yellow-400 to-orange-500" />
            <Feature icon={Shield} text="Secure data processing" color="from-green-400 to-emerald-500" />
            <Feature icon={Globe2} text="Export to PDF or Excel" color="from-blue-400 to-cyan-500" />
          </div>

          <Button size="lg" className="bg-gradient-to-r from-indigo-500 to-purple-600">
            Request Demo →
          </Button>
        </div>
      </div>
    </section>
  )
}

function FloatingCard({ top, left, right, delay }: any) {
  return (
    <motion.div
      className="absolute w-40 h-16 rounded-xl border border-blue-400/30 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md shadow-[0_0_25px_rgba(59,130,246,0.25)]"
      style={{ top, left, right }}
      initial={{ scale: 0.4, opacity: 0 }}
      animate={{
        scale: [0.4, 1, 1],
        opacity: [0, 1, 0.85, 1],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatDelay: 2,
        delay,
        ease: "easeOut",
      }}
    >
      <div className="absolute top-2 left-3 w-2.5 h-2.5 bg-green-400 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.9)]" />
      <div className="absolute top-3 left-8 right-4 h-2 bg-blue-300/30 rounded-full" />
      <div className="absolute top-8 left-6 right-6 h-2 bg-blue-300/20 rounded-full" />
      <div className="absolute top-12 left-10 right-10 h-2 bg-blue-300/10 rounded-full" />

      <motion.div
        className="absolute inset-0 rounded-xl border border-blue-400/20"
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity, delay }}
      />
    </motion.div>
  )
}

function Feature({ icon: Icon, text, color }: { icon: any; text: string; color: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <span className="text-gray-200">{text}</span>
    </div>
  )
}
