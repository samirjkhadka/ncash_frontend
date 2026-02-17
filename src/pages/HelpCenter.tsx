import { motion } from "framer-motion";
import { PageLayout } from "../components/PageLayout";
import { Search, MessageCircle, Phone, Mail } from "lucide-react";
import { Input } from "../components/ui/input";


const helpCategories = [
  {
    icon: "💳",
    title: "Getting Started",
    topics: ["Creating an account", "KYC verification", "Adding money", "First transaction"],
  },
  {
    icon: "💸",
    title: "Payments & Transfers",
    topics: ["Send money", "Request money", "Bank transfers", "QR payments"],
  },
  {
    icon: "📱",
    title: "Mobile Services",
    topics: ["Mobile top-up", "Data packs", "Recharge history", "Auto-recharge"],
  },
  {
    icon: "🏠",
    title: "Bill Payments",
    topics: ["Electricity bills", "Water bills", "Internet bills", "TV subscriptions"],
  },
  {
    icon: "🔒",
    title: "Security",
    topics: ["PIN reset", "Account lock", "Report fraud", "Privacy settings"],
  },
  {
    icon: "🎁",
    title: "Rewards & Offers",
    topics: ["Cashback", "Referral bonus", "Promotions", "Loyalty points"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function HelpCenter() {
  return (
    <PageLayout
      title="Help Center"
      subtitle="Find answers to your questions"
    >
      <div className="max-w-4xl mx-auto">
        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative mb-12"
        >
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Search for help topics..."
            className="pl-12 py-6 text-lg bg-muted/50 border-border"
          />
        </motion.div>

        {/* Help Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {helpCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="ncash-card p-6 hover:border-ncash-bright/30 transition-colors cursor-pointer"
            >
              <div className="text-3xl mb-3">{category.icon}</div>
              <h3 className="font-display text-lg font-semibold mb-3">{category.title}</h3>
              <ul className="space-y-2">
                {category.topics.map((topic) => (
                  <li key={topic} className="text-sm text-muted-foreground hover:text-ncash-bright transition-colors cursor-pointer">
                    {topic}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="ncash-card p-8"
        >
          <h3 className="font-display text-2xl font-bold mb-6 text-center">Still Need Help?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <MessageCircle className="w-8 h-8 text-ncash-bright mx-auto mb-3" />
              <h4 className="font-semibold mb-1">Live Chat</h4>
              <p className="text-sm text-muted-foreground">Available 24/7</p>
            </div>
            <div className="text-center p-4">
              <Phone className="w-8 h-8 text-ncash-bright mx-auto mb-3" />
              {/* <h4 className="font-semibold mb-1">Call Us</h4>
              <p className="text-sm text-muted-foreground">+977 1-4444-XXX</p> */}
            </div>
            <div className="text-center p-4">
              <Mail className="w-8 h-8 text-ncash-bright mx-auto mb-3" />
              <h4 className="font-semibold mb-1">Email</h4>
              <p className="text-sm text-muted-foreground">support@himalpay.com.np</p>
            </div>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
}
