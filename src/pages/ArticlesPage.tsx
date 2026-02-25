import { useEffect } from "react"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Card } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function ArticlesPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const articles = [
    {
      id: 1,
      image: "https://c.animaapp.com/mklht1bdgr8XLI/img/ai_5.png",
      title: "Decoding the future of property research",
      excerpt:
        "Understanding keyword-based document intelligence and how it transforms property due diligence.",
    },
    {
      id: 2,
      image: "https://c.animaapp.com/mklht1bdgr8XLI/img/ai_6.png",
      title: "Why manual property search is risky",
      excerpt:
        "How missed records lead to legal exposure and why automated search is critical.",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <Link to="/">
            <motion.div whileHover={{ x: -5 }} whileTap={{ scale: 0.95 }}>
              <Button variant="glass" className="mb-8 group">
                <motion.div
                  animate={{ x: [0, -5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                </motion.div>
                Back to Home
              </Button>
            </motion.div>
          </Link>

          <h1 className="text-h1 font-medium mb-4 text-foreground">
            Latest insights
          </h1>
          <p className="text-body text-gray-300 mb-16 max-w-2xl">
            Stay informed with the latest insights, trends, and best practices
            in property research and document intelligence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article) => (
              <Card
                key={article.id}
                className="overflow-hidden glass-card glass-card-hover preserve-3d"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <div className="p-8">
                  <h2 className="text-h3 font-medium mb-4 text-foreground">
                    {article.title}
                  </h2>
                  <p className="text-body text-gray-300 mb-6">
                    {article.excerpt}
                  </p>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="relative group">
                      <span className="relative z-10">Read More</span>
                    </Button>
                  </motion.div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
