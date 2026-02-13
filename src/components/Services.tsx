import { motion, useScroll, useTransform } from "framer-motion";
import {
  Banknote,
  QrCode,
  ShieldCheck,
  Plane,
  Sparkles,
  Building2,
} from "lucide-react";
import { useRef } from "react";

const services = [
  {
    icon: QrCode,
    title: "Effortless Payments",
    description:
      "Pay bills, scan QR codes, and settle payments — quickly and effortlessly from anywhere in Nepal.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Banknote,
    title: "Seamless Fund Mobility",
    description:
      "Send or receive funds across banks, wallets, and remittance channels with real-time settlement.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: ShieldCheck,
    title: "Financial Services Hub",
    description:
      "One-stop access to savings, insurance, investments, and more — all within a single platform.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Sparkles,
    title: "Entertainment & Lifestyle",
    description:
      "Explore events, book experiences, and unlock exclusive lifestyle offerings curated for you.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Plane,
    title: "Travel & Hospitality",
    description:
      "Discover and book flights, hotels, buses, and more — your journey starts with a single tap.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Building2,
    title: "Merchant Solutions",
    description:
      "Empowering businesses of every size with fintech-powered acquiring and payment acceptance tools.",
    color: "from-indigo-500 to-blue-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const blobY1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const blobY2 = useTransform(scrollYProgress, [0, 1], [60, -100]);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="ncash-section bg-muted/30 relative overflow-hidden"
    >
      <motion.div
        className="absolute top-0 right-0 w-80 h-80 bg-ncash-bright/5 rounded-full blur-3xl"
        style={{ y: blobY1 }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-ncash-deep/5 rounded-full blur-3xl"
        style={{ y: blobY2 }}
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
            N-Cash
          </motion.span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Six Ways We Simplify
            <br />
            <span className="ncash-gradient-text">Your Everyday Life</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From payments to financial access — N-Cash brings together
            everything you need in one unified digital experience.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.03,
                transition: { duration: 0.25 },
              }}
              className="ncash-card p-6 md:p-8 group cursor-pointer transition-shadow duration-300 hover:shadow-xl"
            >
              <motion.div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
                transition={{ duration: 0.5 }}
              >
                <service.icon className="w-7 h-7 text-white" />
              </motion.div>
              <h3 className="font-display text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              <motion.div
                className="h-0.5 ncash-gradient-bg mt-5 rounded-full origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
