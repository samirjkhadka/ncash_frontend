import { motion, useScroll, useTransform } from "framer-motion";
import { Users, Building, ArrowRightLeft, Landmark } from "lucide-react";
import { useRef } from "react";

const impactStats = [
  {
    icon: Users,
    title: "For Every Nepali",
    description:
      "Building an inclusive platform accessible from Kathmandu to the remotest village in Karnali",
  },
  {
    icon: Building,
    title: "Business Empowerment",
    description:
      "Enabling merchants and entrepreneurs of every size with digital-first financial tools",
  },
  {
    icon: ArrowRightLeft,
    title: "Seamless Transactions",
    description:
      "Designing infrastructure for fast, reliable, and secure digital transactions nationwide",
  },
  {
    icon: Landmark,
    title: "BFI Partnerships",
    description:
      "Collaborating with leading banks and financial institutions to deliver trusted services",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

export function RuralImpact() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const mountainY = useTransform(scrollYProgress, [0, 1], [50, -30]);
  const particleY = useTransform(scrollYProgress, [0, 1], [30, -50]);

  return (
    <section
      ref={sectionRef}
      id="impact"
      className="ncash-section relative overflow-hidden"
    >
      <div className="absolute inset-0 ncash-gradient-bg opacity-95" />

      <motion.svg
        className="absolute bottom-0 left-0 right-0 w-full opacity-10"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{ y: mountainY }}
      >
        <path
          fill="white"
          d="M0,64L48,80C96,96,192,128,288,149.3C384,171,480,181,576,165.3C672,149,768,107,864,101.3C960,96,1056,128,1152,138.7C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </motion.svg>

      {/* Floating particles with parallax */}
      <motion.div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ y: particleY }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-white/20"
            style={{ left: `${10 + i * 12}%`, top: `${20 + (i % 3) * 25}%` }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </motion.div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
            className="inline-block px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-4"
          >
            Our Reach & Vision
          </motion.span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Building Nepal's Digital
            <br />
            Financial Ecosystem
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            N-Cash is designed to create a robust digital financial ecosystem —
            connecting people, businesses, and institutions across the nation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactStats.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.04,
                transition: { duration: 0.25 },
              }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 cursor-default group"
            >
              <motion.div
                className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <item.icon className="w-7 h-7 text-white" />
              </motion.div>
              <h3 className="font-display text-lg font-semibold text-white mb-2 text-center">
                {item.title}
              </h3>
              <p className="text-white/70 text-sm text-center">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <motion.blockquote
            className="text-xl md:text-2xl text-white font-medium italic max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            "We envision a Nepal where every individual and business has
            seamless access to modern financial services — powered by
            technology, driven by trust."
          </motion.blockquote>
          <motion.p
            className="text-white/70 mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            — The N-Cash Promise
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
