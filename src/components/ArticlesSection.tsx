import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ArticlesSection() {
  const articles = [
    {
      id: 1,
      image: 'https://c.animaapp.com/mklht1bdgr8XLI/img/ai_5.png',
      title: 'Decoding the future of property research',
      excerpt: 'Understanding keyword-based document intelligence.',
    },
    {
      id: 2,
      image: 'https://c.animaapp.com/mklht1bdgr8XLI/img/ai_6.png',
      title: 'Why manual property search is risky',
      excerpt: 'How missed records lead to legal exposure.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-2">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-h2 md:text-5xl font-medium mb-4 text-foreground">
            Latest insights
          </h2>
          <p className="text-body text-gray-300 max-w-2xl mx-auto">
            Understanding property research and document intelligence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden glass-card glass-card-hover h-full preserve-3d">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <div className="p-8">
                  <h3 className="text-h3 font-medium mb-4 text-foreground">
                    {article.title}
                  </h3>
                  <p className="text-body text-gray-300 mb-6">
                    {article.excerpt}
                  </p>
                  <motion.div whileHover={{ x: 5 }}>
                    <Button variant="ghost" size="sm" className="gap-2">
                      Read More <ArrowRight className="w-4 h-4" />
                    </Button>
                  </motion.div>
                </div>
              </Card>
            </motion.article>
          ))}
        </div>

        <div className="text-center">
          <Link to="https://encegen-portfolio.vercel.app">
            <Button size="lg" variant="outline">
              View All Articles <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}