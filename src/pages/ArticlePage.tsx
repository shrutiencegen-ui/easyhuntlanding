import {
  motion,
  useScroll,
  useSpring,
} from "framer-motion";

import {
  useParams,
} from "react-router-dom";

import {
  Clock,
  Sparkles,
} from "lucide-react";

import "./ArticlePage.css";

const articles = [
  {
    id: "1",

    title: "Decoding the future of property research",

    category: "Document Intelligence",

    readTime: "5 min read",

    intro:
      "Modern property research is evolving beyond spreadsheets, paperwork, and manual workflows.",

    sections: [
      {
        heading: "Smarter Search Experience",

        text:
          "Property research is changing fast, and the old way of searching through papers, files, and scattered documents is no longer enough. Businesses now need instant access to accurate information, faster workflows, and intelligent organization systems.",
      },

      {
        heading: "Keyword Based Intelligence",

        text:
          "Instead of manually checking every record one by one, intelligent property research helps users identify important details instantly using smart keyword search and automated filtering systems.",
      },

      {
        heading: "Scalable Modern Workflows",

        text:
          "As property data grows, manual methods become slower and more error-prone. Smart systems simplify document review and convert raw records into useful insights for faster business decisions.",
      },
    ],
  },

  {
    id: "2",

    title: "Why manual property search is risky",

    category: "Property Risk Analysis",

    readTime: "4 min read",

    intro:
      "Manual property search creates delays, risks, and costly mistakes in critical workflows.",

    sections: [
      {
        heading: "Missed Records Create Risk",

        text:
          "Property documents are often large, complex, and spread across multiple sources. Missing even one important filing can create legal or financial consequences.",
      },

      {
        heading: "Human Error Slows Everything",

        text:
          "Manual search processes consume time and increase workload. Teams handling large-scale property data often struggle to maintain speed and accuracy simultaneously.",
      },

      {
        heading: "Modern Search Reduces Exposure",

        text:
          "By using intelligent search systems and structured workflows, businesses can improve efficiency, reduce mistakes, and make more confident decisions.",
      },
    ],
  },
];

export default function ArticlePage() {

  const { id } = useParams();

  const article = articles.find((a) => a.id === id);

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <section className="article-page">

      {/* PROGRESS BAR */}

      <motion.div
        className="scroll-progress"
        style={{ scaleX }}
      />

      {/* PREMIUM BACKGROUND */}

      <div className="animated-bg">

        <div className="gradient-sphere sphere-1"></div>

        <div className="gradient-sphere sphere-2"></div>

        <div className="gradient-sphere sphere-3"></div>

        <div className="grid-overlay"></div>

        <div className="noise-overlay"></div>

      </div>

      <div className="article-container">

        {/* HERO */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-section"
        >

          <div className="hero-content">

            <div className="hero-meta">

              <span className="category-pill">
                <Sparkles size={14} />
                {article.category}
              </span>

              <span className="read-time">
                <Clock size={14} />
                {article.readTime}
              </span>

            </div>

            <h1>{article.title}</h1>

            <p>{article.intro}</p>

          </div>

        </motion.div>

        {/* CONTENT */}

        <div className="article-sections">

          {article.sections.map((section, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="premium-block"
            >

              <div className="premium-line"></div>

              <div className="premium-number">
                0{index + 1}
              </div>

              <div className="premium-content">

                <span className="premium-tag">
                  INSIGHT
                </span>

                <h2>{section.heading}</h2>

                <p>{section.text}</p>

              </div>

            </motion.div>
          ))}
        </div>

        {/* QUOTE */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="quote-section"
        >

          <h2>
            “Property research should feel
            instant, intelligent, and scalable.”
          </h2>

        </motion.div>

      </div>
    </section>
  );
}