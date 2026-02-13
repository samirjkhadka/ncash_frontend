import { motion } from "framer-motion";
import { Smartphone, Shield, Zap, Globe, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";


const highlights = [
  { icon: Zap, label: "Unified Experience", desc: "Payments, transfers, and lifestyle in one app" },
  { icon: Shield, label: "Fully Regulated", desc: "Licensed by Nepal Rastra Bank" },
  { icon: Globe, label: "All 77 Districts", desc: "Designed for nationwide accessibility" },
];

export function Download() {
  return (
    <section id="download" className="ncash-section">
      <div className="container mx-auto">
        <div className="ncash-card p-8 md:p-12 lg:p-16 relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-ncash-bright/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-ncash-deep/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ncash-bright/10 border border-ncash-bright/20 mb-6"
              >
                <motion.span
                  className="w-2 h-2 rounded-full bg-ncash-bright"
                  animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-sm font-medium text-ncash-bright">Coming Soon</span>
              </motion.div>
              
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                The Future of Digital <span className="ncash-gradient-text">Payments in Nepal</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                N-Cash is building a unified platform that brings together payments, 
                financial services, and everyday convenience — designed for the way Nepal moves.
              </p>

              {/* Highlights */}
              <div className="space-y-4 mb-8">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.15, duration: 0.4 }}
                    className="flex items-center gap-4 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      className="w-11 h-11 rounded-xl ncash-gradient-bg flex items-center justify-center flex-shrink-0 shadow-md"
                    >
                      <item.icon className="w-5 h-5 text-white" />
                    </motion.div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Button
                size="lg"
                className="ncash-gradient-bg ncash-glow h-12 px-8 font-semibold gap-2 group"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  <div className="w-48 h-48 md:w-56 md:h-56 ncash-gradient-bg rounded-3xl flex items-center justify-center shadow-2xl ncash-glow">
                    <Smartphone className="w-24 h-24 md:w-28 md:h-28 text-white" />
                  </div>
                  
                  <motion.div 
                    className="absolute -bottom-4 -right-4 bg-card rounded-xl shadow-lg px-4 py-3 border border-border"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="w-6 h-6 rounded-full border-2 border-ncash-bright border-t-transparent"
                      />
                      <div>
                        <p className="text-xs text-muted-foreground">Launching</p>
                        <p className="text-sm font-bold text-foreground">Soon</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-8 -left-8 w-16 h-16 ncash-card rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <span className="text-2xl">🇳🇵</span>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -bottom-4 -left-12 w-14 h-14 ncash-card rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <span className="text-xl">📱</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
