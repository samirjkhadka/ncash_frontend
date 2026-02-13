import { motion } from "framer-motion";

import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqData = [
  {
    category: "About N-Cash",
    questions: [
      {
        q: "What is N-Cash?",
        a: "N-Cash is a unified digital payment platform designed for Nepal. It brings together payments, fund transfers, financial services, and lifestyle offerings into one seamless app.",
      },
      {
        q: "Who operates N-Cash?",
        a: "N-Cash is operated by Himal Pay Pvt. Ltd., a payment service provider regulated by Nepal Rastra Bank.",
      },
      {
        q: "When will N-Cash be available?",
        a: "N-Cash is currently in development and will be launching soon. Follow our social channels for the latest updates on availability.",
      },
      {
        q: "Which devices will support N-Cash?",
        a: "N-Cash will be available on both Android and iOS devices. A web-based portal for account management is also planned.",
      },
    ],
  },
  {
    category: "Security & Privacy",
    questions: [
      {
        q: "How does N-Cash protect my data?",
        a: "N-Cash uses 256-bit encryption for all data in transit and at rest. We follow industry-standard security protocols and are regulated by Nepal Rastra Bank.",
      },
      {
        q: "What authentication methods are supported?",
        a: "N-Cash supports multi-factor authentication including transaction PIN, biometric login (fingerprint and face recognition), and OTP verification.",
      },
      {
        q: "What happens if I lose my phone?",
        a: "You can immediately lock your N-Cash account by contacting our support team. Your funds remain protected and can be recovered after identity verification.",
      },
      {
        q: "Is my personal information shared with third parties?",
        a: "No. Your personal data is encrypted and stored securely. We never share personal information with third parties without your explicit consent.",
      },
    ],
  },
  {
    category: "Services & Features",
    questions: [
      {
        q: "What services will N-Cash offer?",
        a: "N-Cash will provide bill payments, mobile top-ups, fund transfers, QR payments, financial services access, travel bookings, and lifestyle offerings — all in one platform.",
      },
      {
        q: "Will N-Cash work in rural areas?",
        a: "Yes. N-Cash is designed with offline capabilities and a growing agent network to ensure accessibility across all 77 districts of Nepal, from urban centers to remote communities.",
      },
      {
        q: "Can businesses use N-Cash?",
        a: "Absolutely. N-Cash provides merchant solutions including QR payment acceptance, enterprise financial tools, and payment gateway integration for businesses of all sizes.",
      },
      {
        q: "How do I add funds to my N-Cash wallet?",
        a: "You can load your wallet through Easy Load — via linked bank accounts, partner financial institutions, or through N-Cash agents located across the country.",
      },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function FAQ() {
  return (
    <section id="faq" className="ncash-section relative overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-32 w-80 h-80 rounded-full bg-ncash-bright/10 blur-3xl"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-ncash-deep/15 blur-3xl"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ncash-bright/10 border border-ncash-bright/20 mb-6"
          >
            <HelpCircle className="w-4 h-4 text-ncash-bright" />
            <span className="text-sm font-medium text-ncash-bright">
              Got Questions?
            </span>
          </motion.div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Frequently Asked{" "}
            <span className="ncash-gradient-text">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Learn more about N-Cash and how it's shaping digital finance in
            Nepal
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {faqData.map((category, catIndex) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className="ncash-card p-6"
            >
              <h3 className="font-display text-xl font-semibold mb-4 ncash-gradient-text">
                {category.category}
              </h3>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${catIndex}-${index}`}
                    className="border-border/50"
                  >
                    <AccordionTrigger className="text-left text-sm hover:no-underline hover:text-ncash-bright transition-colors">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
