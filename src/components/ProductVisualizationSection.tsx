import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import OrbitAnimation from "./OrbitAnimation";
import { ArrowRight } from "lucide-react";
import {
  Search,
  ShieldCheck,
  FileSpreadsheet,
} from "lucide-react";

export default function ProductVisualizationSection() {
  return (
    <section
      id="product"
      className="py-24 md:py-32 bg-gradient-to-b from-background relative overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0d1a]" />

      <div className="max-w-7xl mx-auto px-8 md:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* pill */}
             <span className="inline-flex px-4 py-2 mb-4 text-sm rounded-full border border-blue-500/30 text-blue-400">
            ⚡ Features
          </span>

            <h2 className="text-h2 md:text-5xl font-medium mb-6 text-foreground">
              Stay on top of your <br /> property research
            </h2>

            <p className="text-body text-gray-300 mb-10 max-w-xl">
  EasyHunt makes searching Maharashtra property records fast and easy. No more wasting hours on slow portals or messy Excel files. Just type a keyword and get full results in seconds.

            </p>



<div className="space-y-6 mb-12">

  {/* Feature 1 */}
  <div className="flex items-center gap-4 group">
    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-[0_0_25px_rgba(251,191,36,0.35)] transition-all duration-300 group-hover:scale-105">
      <Search className="w-6 h-6 text-white" strokeWidth={2.2} />
    </div>

    <p className="text-gray-200 text-lg">
      Deep keyword search capability
    </p>
  </div>

  {/* Feature 2 */}
  <div className="flex items-center gap-4 group">
    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-[0_0_25px_rgba(34,197,94,0.35)] transition-all duration-300 group-hover:scale-105">
      <ShieldCheck className="w-6 h-6 text-white" strokeWidth={2.2} />
    </div>

    <p className="text-gray-200 text-lg">
      Secure data processing
    </p>
  </div>

  {/* Feature 3 */}
  <div className="flex items-center gap-4 group">
    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center shadow-[0_0_25px_rgba(59,130,246,0.35)] transition-all duration-300 group-hover:scale-105">
      <FileSpreadsheet className="w-6 h-6 text-white" strokeWidth={2.2} />
    </div>

    <p className="text-gray-200 text-lg">
      Export to PDF or Excel
    </p>
  </div>

</div>
           <Button
  size="lg"
  variant="default"
  className="px-10 group"
  onClick={() => {
    window.location.href = "/features";
  }}
>
  Learn More

  <ArrowRight className="w-5 h-5 text-purple-400 group-hover:text-white transition-all duration-300 group-hover:translate-x-1" />
</Button>
          </motion.div>

          {/* RIGHT 3D PLANET ANIMATION */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.19 }}
          >
            <OrbitAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
