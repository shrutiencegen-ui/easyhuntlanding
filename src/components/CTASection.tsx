import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-gradient-to-b from-[#5b2be0] via-[#4a3be0] to-[#2f80ed] text-white">

      {/* Soft background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-purple-500/30 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/30 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Join Easy Hunt today
          </h2>

          <p className="text-white/90 text-lg mb-10 max-w-xl">
            Search property documents smarter, faster, and with confidence.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-10 py-6 text-lg rounded-xl shadow-[0_0_30px_rgba(99,102,241,0.45)] border-0"
            >
              Book a Free Demo
              <motion.span
                className="ml-2"
                animate={{ rotate: [0, 180, 360] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                ✨
              </motion.span>
            </Button>
          </motion.div>
        </motion.div>

        {/* RIGHT VISUAL WITH LOGO */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center"
        >
          <div className="relative w-[420px] h-[420px] flex items-center justify-center">

            {/* Outer rotating ring */}
            <motion.div
              className="absolute inset-0 rounded-full border border-cyan-400/40"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            {/* Inner rotating ring */}
            <motion.div
              className="absolute inset-10 rounded-full border border-purple-400/40"
              animate={{ rotate: -360 }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            />

            {/* Center glow */}
            <div className="absolute inset-20 rounded-full bg-purple-700/40 blur-2xl" />

            {/* 🌟 EASY HUNT LOGO */}
            <motion.img
              src="/easy.png"
              alt="Easy Hunt"
             className="relative z-10 w-56 h-56 object-contain drop-shadow-[0_0_90px_rgba(168,85,247,1)]"

              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.9, 1, 0.9],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Glow overlay */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 via-cyan-400/10 to-transparent blur-2xl" />

            {/* Floating spark particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full opacity-70"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                }}
              />
            ))}

          </div>
        </motion.div>
      </div>
    </section>
  )
}
