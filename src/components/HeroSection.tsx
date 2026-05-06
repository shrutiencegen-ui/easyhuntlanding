import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import DemoModal from "./DemoModal";
import { useState } from "react";

type Props = {
  openDemo: () => void;
};

export default function HeroSection({ openDemo }: Props) {
  const sectionRef = useRef(null);
 
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
const [demoOpen, setDemoOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".hero-subtitle", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.from(".hero-cta", {
        y: 20,
        opacity: 0,
        duration: 1,
        delay: 0.6,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-28"
    >
      {/* 🌌 Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0d1a]">
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* 🌟 Hero Content */}
      <motion.div style={{ y, opacity }} className="relative z-20 text-center px-6">
        
        {/* 🔥 Badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-6 py-3 glass-card mb-10 rounded-full"

        >
          <motion.div
            animate={{
              rotate: 360,
              opacity: [1, 0.4, 1],
              scale: [1, 1.25, 1],
            }}
            transition={{
              rotate: { duration: 6, repeat: Infinity, ease: "linear" },
              opacity: { duration: 1.5, repeat: Infinity },
              scale: { duration: 1.5, repeat: Infinity },
            }}
          >
            <Sparkles className="w-4 h-4 text-primary drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
          </motion.div>

          <span className="text-sm text-primary font-medium">
            Powered by AI
          </span>
        </motion.div>

   <h1 className="hero-title text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]">
  Experience{" "}
  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
    Speed
  </span>
  <br />
  and{" "}
  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
    Confidence
  </span>
  <br />
  with Easy Hunt
</h1>

        {/* 📝 Subtitle */}
        <p className="hero-subtitle text-gray-300 max-w-2xl mx-auto mb-10">
          Powerful keyword-based property document intelligence for faster and
          safer due diligence.
        </p>

        {/* 🚀 CTA Buttons */}
        <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center">
          <Button
  size="lg"
  onClick={openDemo}
  className="flex items-center gap-2 px-10 py-3"
>
            Get Started
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-white/90" />
            </motion.div>
          </Button>

          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
