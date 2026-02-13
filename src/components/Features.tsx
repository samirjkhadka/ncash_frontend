import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Clock, Globe, Lock, Fingerprint, Bell } from "lucide-react";
import { useRef } from "react";

const features = [
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description:
      "256-bit encryption safeguards every transaction. Your finances are protected to the highest standard.",
  },
  {
    icon: Clock,
    title: "Always Available",
    description:
      "Access your wallet around the clock. N-Cash is designed to work whenever you need it.",
  },
  {
    icon: Globe,
    title: "Nationwide Reach",
    description:
      "From mountain communities to the Terai plains, N-Cash is built to serve all 77 districts.",
  },
  {
    icon: Lock,
    title: "Transaction Authentication",
    description:
      "Multi-layer verification ensures only you can authorize payments and transfers.",
  },
  {
    icon: Fingerprint,
    title: "Biometric Access",
    description:
      "Quick and secure login with fingerprint or face recognition for effortless access.",
  },
  {
    icon: Bell,
    title: "Real-Time Notifications",
    description:
      "Stay informed with instant alerts for every transaction and account activity.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30, rotateX: 15 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const patternY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const accentY = useTransform(scrollYProgress, [0, 1], [60, -80]);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="ncash-section relative overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{ y: patternY }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23065D92' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-0 w-72 h-72 bg-ncash-bright/5 rounded-full blur-3xl"
        style={{ y: accentY }}
      />

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
            className="inline-block px-4 py-2 rounded-full bg-ncash-bright/10 text-ncash-bright text-sm font-medium mb-4"
          >
            Why N-Cash
          </motion.span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Built on a Foundation of{" "}
            <span className="ncash-gradient-text">Trust</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Security and reliability are not afterthoughts — they're the core of
            everything we build at N-Cash.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="flex gap-4 p-4 rounded-2xl hover:bg-muted/50 transition-colors duration-300"
            >
              <div className="flex-shrink-0">
                <motion.div
                  className="w-12 h-12 rounded-xl ncash-gradient-bg flex items-center justify-center"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </motion.div>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 flex flex-wrap justify-center gap-8 items-center"
        >
          {[
            { label: "Regulated by", value: "Nepal Rastra Bank" },
            { label: "Protected by", value: "256-bit Encryption" },
            { label: "Operated by", value: "Himal Pay Pvt. Ltd." },
          ].map((badge, i) => (
            <motion.div
              key={i}
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-sm text-muted-foreground mb-2">
                {badge.label}
              </p>
              <p className="font-display font-semibold">{badge.value}</p>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
}
