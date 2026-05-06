import { useEffect } from "react";

import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import ProductVisualizationSection from "../components/ProductVisualizationSection";
import TransactionSection from "../components/TransactionSection";
import ShowcaseSection from "../components/ShowcaseSection";
import ArticlesSection from "../components/ArticlesSection";
import FAQSection from "../components/FAQSection";
import CTASection from "../components/CTASection";
import ContactSection from "../components/ContactSection";
import { useLocation } from "react-router-dom";

type Props = {
  openDemo: () => void;
};

export default function HomePage({ openDemo }: Props) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
const location = useLocation()

useEffect(() => {
  if (location.state?.scrollTo) {
    const el = document.getElementById(location.state.scrollTo)
    el?.scrollIntoView({ behavior: "smooth" })
  }
}, [location]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection openDemo={openDemo} />
      <FeaturesSection />
      <ProductVisualizationSection />
      <TransactionSection openDemo={openDemo} />
      <ShowcaseSection />
      <ArticlesSection />
      <FAQSection />
      <CTASection />
      <ContactSection />
    </main>
  );
}
