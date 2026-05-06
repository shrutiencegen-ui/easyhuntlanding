import { Link } from "react-router-dom"
import { Card } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useLayoutEffect } from "react";


export default function ArticlesPage() {  
  useLayoutEffect(() => {
  window.scrollTo(0, 0);
}, []);

  const articles = [
    {
      id: 1,
      image: "https://c.animaapp.com/mklht1bdgr8XLI/img/ai_5.png",
      title: "Decoding the future of property research",
      excerpt: "Understanding keyword-based document intelligence and how it transforms property due diligence.",
    },
    {
      id: 2,
      image: "https://c.animaapp.com/mklht1bdgr8XLI/img/ai_6.png",
      title: "Why manual property search is risky",
      excerpt: "How missed records lead to legal exposure and why automated search is critical.",
    },
  ]
    

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="pt-24 md:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
          


          {/* 🎯 Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex flex-col items-center text-center mb-20 px-4"
          >
            {/* Background Glow */}
            <div className="absolute -top-24 w-72 h-72 bg-purple-600/20 rounded-full blur-[120px] -z-10" />

            {/* Glassmorphism Badge */}
            <motion.span 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm font-medium text-purple-300 mb-6 backdrop-blur-xl"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              🚀 Insights & Updates
            </motion.span>

            {/* FIXED HEADING - Removed text-h2 typo */}
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
              Latest <span className="text-gradient-1">Insights</span>
            </h2>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="max-w-2xl text-gray-400 text-base md:text-lg leading-relaxed"
            >
              Deep dive into the world of property research, document intelligence, 
              and the future of legal data.
            </motion.p>

            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "100px", opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mt-8"
            />
          </motion.div>

          {/* 📦 ARTICLES GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden glass-card transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(124,58,237,0.2)] group">
                  <div className="overflow-hidden relative h-56 sm:h-64">
                    <motion.img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>

                  <div className="p-6 md:p-8">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base mb-6 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <Button className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all">
                      Read More
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}