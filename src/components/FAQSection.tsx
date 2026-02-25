import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "What is EasyHunt?",
      answer:
        "EasyHunt is a keyword search platform for Maharashtra land records from government Excel datasets like Bhulekh and Mahabhumi. Type any term—owner name, survey number, village—and get full matching records in seconds. It's for quick discovery, not official verification."
,
    },
    {
      question: "How does EasyHunt differ from government portals like IGR, Bhulekh, or Mahabhumi?",
      answer:
        "Government sites show one record at a time with no keyword search; they're slow and best for final checks. EasyHunt scans bulk files instantly across keywords, showing complete entries—saving 70-80% time for title searches (TSR) and due diligence.",
    },
    {
      question: "What data does EasyHunt cover?",
      answer:
        "Maharashtra property records including owner names, survey numbers, CTS details, villages, dates, remarks, and historical docs. Sourced from public Excel files; covers key areas like Pune, Mumbai, Nagpur. Not all districts—expanding soon.",
    },
    {
      question: "Is EasyHunt data official or legally valid?",
      answer:
        "No, it's research data from government sources for fast discovery. Always verify matches on official portals (IGR eSearch, Mahabhumi) for legal use. Reduces risk by spotting what to check.",
    },
    {
      question: "Who should use EasyHunt?",
      answer: "No, it's research data from government sources for fast discovery. Always verify matches on official portals (IGR eSearch, Mahabhumi) for legal use. Reduces risk by spotting what to check.",
    },
    {
      question: "How accurate are the search results?",
      answer:
        "Very high—exact keyword matches show full records without snippets. No AI guesswork; depends on uploaded datasets. Users report near-zero misses vs. manual Excel scans.",
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-h2 md:text-5xl font-medium mb-4 text-gradient-1">
            Frequently asked questions
          </h2>
          <p className="text-body text-gray-300">
            EasyHunt simplifies property document searches in Maharashtra. Here are answers to common questions from lawyers, brokers, and users.

          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={`item-${index}`}
                value={`item-${index}`}
                className="text-left text-body text-gray-300"
              >
                <AccordionTrigger className="text-left text-body text-gray-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-body text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
