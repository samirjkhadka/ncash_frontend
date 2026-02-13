import { motion } from "framer-motion";
import { PageLayout } from "../components/PageLayout";
import { Calendar, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "The Future of Digital Payments in Nepal",
    excerpt: "How mobile wallets are transforming the way Nepalis handle money and what it means for financial inclusion.",
    date: "Coming Soon",
    category: "Industry Insights",
    image: "📱",
  },
  {
    title: "Why Rural Nepal Needs Digital Banking",
    excerpt: "Exploring the challenges and opportunities of bringing financial services to remote communities.",
    date: "Coming Soon",
    category: "Financial Inclusion",
    image: "🏔️",
  },
  {
    title: "Security Best Practices for Digital Wallets",
    excerpt: "Tips and guidelines to keep your digital money safe in an increasingly connected world.",
    date: "Coming Soon",
    category: "Security",
    image: "🔒",
  },
  {
    title: "How to Become a Successful N-Cash Agent",
    excerpt: "A comprehensive guide for entrepreneurs looking to join our agent network.",
    date: "Coming Soon",
    category: "Agent Guide",
    image: "💼",
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

export default function Blog() {
  return (
    <PageLayout
      title="Blog"
      subtitle="Insights, updates, and stories from N-Cash"
    >
      <div className="max-w-4xl mx-auto">
        {/* Coming Soon Notice */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="ncash-card p-6 mb-12 text-center border-ncash-bright/20"
        >
          <p className="text-ncash-bright font-medium">
            ✨ Our blog is launching soon with the N-Cash app!
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.title}
              variants={itemVariants}
              className="ncash-card p-6 group cursor-pointer hover:border-ncash-bright/30 transition-all"
            >
              <div className="text-4xl mb-4">{post.image}</div>
              <span className="text-xs text-ncash-bright font-medium uppercase tracking-wide">
                {post.category}
              </span>
              <h3 className="font-display text-lg font-semibold mt-2 mb-2 group-hover:text-ncash-bright transition-colors">
                {post.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-1 text-muted-foreground">
                  <Calendar className="w-4 h-4" /> {post.date}
                </span>
                <span className="text-ncash-bright flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </PageLayout>
  );
}
