import { motion } from "framer-motion";

import { Target, Users, Mountain, Heart } from "lucide-react";
import {PageLayout} from "../components/PageLayout";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To democratize financial services across Nepal, making digital payments accessible to every citizen from Kathmandu to the remotest Himalayan villages.",
  },
  {
    icon: Users,
    title: "Our Vision",
    description: "A financially inclusive Nepal where geography is no barrier to economic participation and prosperity.",
  },
  {
    icon: Mountain,
    title: "Our Roots",
    description: "Born in Nepal, built for Nepal. We understand the unique challenges of our diverse geography and are committed to bridging the financial divide.",
  },
  {
    icon: Heart,
    title: "Our Promise",
    description: "Transparent, secure, and affordable digital payment solutions that put Nepal's people first.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AboutUs() {
  return (
    <PageLayout 
      title="About Us" 
      subtitle="Building Nepal's financial future, one transaction at a time"
    >
      <div className="max-w-4xl mx-auto">
        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="ncash-card p-8 md:p-12 mb-12"
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">
            Our Story
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Himal Pay Pvt. Ltd. was founded with a simple yet powerful vision: to bring 
              modern financial services to every corner of Nepal. In a country where majestic 
              mountains meet ancient traditions, we saw an opportunity to bridge the gap between 
              urban convenience and rural necessity.
            </p>
            <p>
              N-Cash, our flagship digital wallet, is designed specifically for Nepali users. 
              We understand that our users speak different languages, live in areas with varying 
              connectivity, and have unique financial needs. That's why we've built N-Cash to be 
              simple, reliable, and truly accessible.
            </p>
            <p>
              As we prepare for our launch, we're working tirelessly to establish agent networks 
              in all 77 districts, ensuring that N-Cash reaches not just the cities, but the 
              villages where it's needed most.
            </p>
          </div>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={itemVariants}
              className="ncash-card p-6"
            >
              <div className="ncash-gradient-bg w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <value.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Coming Soon Note */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center ncash-card p-8 border-ncash-bright/20"
        >
          <p className="text-ncash-bright font-medium mb-2">🚀 Launching Soon</p>
          <p className="text-muted-foreground">
            Stay tuned for Nepal's most anticipated digital wallet launch!
          </p>
        </motion.div>
      </div>
    </PageLayout>
  );
}
