import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Smartphone,
  Shield,
  Zap,

  CheckCircle2,
  ArrowUpRight,
  Wifi,
  QrCode,
  Banknote,
} from "lucide-react";

import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";

export function Hero() {
  const [currentTransaction, setCurrentTransaction] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const orbY1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const mountainY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const transactions = [
    {
      name: "NEA Electricity",
      amount: "रु 1,250",
      type: "bill",
      status: "processing",
    },
    {
      name: "Ncell Top Up",
      amount: "रु 500",
      type: "topup",
      status: "processing",
    },
    {
      name: "Fund Transfer",
      amount: "रु 5,000",
      type: "transfer",
      status: "processing",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setCurrentTransaction((prev) => (prev + 1) % transactions.length);
      }, 1500);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const corePillars = [
    {
      icon: Banknote,
      label: "Fund Mobility",
      desc: "Send & receive seamlessly",
    },
    { icon: QrCode, label: "QR Payments", desc: "Scan, pay, done" },
    { icon: Shield, label: "Secure by Design", desc: "256-bit encryption" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Elements with Parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-ncash-bright/15 blur-3xl"
          style={{ y: orbY1 }}
          animate={{ x: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-ncash-deep/20 blur-3xl"
          style={{ y: orbY2 }}
          animate={{ x: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-ncash-bright/5 blur-3xl"
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -60]) }}
        />

        <motion.svg
          className="absolute bottom-0 left-0 right-0 w-full opacity-10"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{ y: mountainY }}
        >
          <path
            fill="currentColor"
            className="text-ncash-deep"
            d="M0,192L60,186.7C120,181,240,171,360,181.3C480,192,600,224,720,229.3C840,235,960,213,1080,181.3C1200,149,1320,107,1380,85.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </motion.svg>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ncash-bright/10 border border-ncash-bright/20 mb-8"
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-accent"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-sm font-medium text-ncash-bright">
                 Payment Service Provider
              </span>
            </motion.div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              <span className="text-foreground">Your Money</span>
              <br />
              <span className="ncash-gradient-text">Your Way</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 text-balance">
              Payments, fund transfers, financial services, and lifestyle — all
              unified into one seamless digital experience built for Nepal.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="ncash-gradient-bg ncash-glow text-lg px-8 py-6 font-semibold group"
              >
                Explore N-Cash
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 font-semibold border-border hover:bg-muted"
              >
                Our Vision
              </Button>
            </div>

            {/* Core Pillars Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-12 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0"
            >
              {corePillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="group p-4 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm text-center cursor-default"
                >
                  <div className="w-10 h-10 mx-auto mb-3 rounded-xl ncash-gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <pillar.icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-sm font-semibold text-foreground">
                    {pillar.label}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {pillar.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Phone Mockup with Parallax */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            style={{ y: phoneY }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 ncash-gradient-bg rounded-[3rem] blur-3xl opacity-30 scale-90" />

              <div className="relative bg-gradient-to-b from-card to-muted rounded-[3rem] p-3 shadow-2xl border border-border">
                <div className="bg-background rounded-[2.5rem] overflow-hidden w-64 md:w-72 h-[500px] md:h-[560px]">
                  <div className="p-6 h-full flex flex-col">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xs text-muted-foreground">
                        9:41
                      </span>
                      <div className="flex items-center gap-2">
                        <Wifi className="w-3 h-3 text-muted-foreground" />
                        <div className="flex gap-0.5">
                          <div className="w-1 h-2 bg-foreground/40 rounded-sm" />
                          <div className="w-1 h-2.5 bg-foreground/60 rounded-sm" />
                          <div className="w-1 h-3 bg-foreground/80 rounded-sm" />
                          <div className="w-1 h-3.5 bg-foreground rounded-sm" />
                        </div>
                        <div className="w-6 h-3 bg-ncash-bright rounded-sm relative">
                          <div className="absolute inset-0.5 right-1 bg-white/30 rounded-sm" />
                        </div>
                      </div>
                    </div>

                    {/* Balance Card */}
                    <motion.div className="ncash-gradient-bg rounded-2xl p-4 mb-4 shadow-lg relative overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-white/10"
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          repeatDelay: 2,
                        }}
                      />
                      <p className="text-white/70 text-sm mb-1">
                        Available Balance
                      </p>
                      <motion.p
                        className="text-white text-2xl font-display font-bold"
                        key={showSuccess ? "updated" : "original"}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        रु 45,250
                      </motion.p>
                      <div className="flex items-center justify-between mt-2">
                        <p className="text-white/70 text-xs">**** 8542</p>
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-6 h-4 bg-white/20 rounded flex items-center justify-center"
                        >
                          <div className="w-3 h-2 bg-white/40 rounded-sm" />
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {[
                        { icon: Smartphone, label: "Top Up" },
                        { icon: Zap, label: "Bills" },
                        { icon: ArrowUpRight, label: "Send" },
                      ].map((action, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="bg-muted rounded-xl p-2.5 flex flex-col items-center gap-1.5 cursor-pointer border border-border/50"
                        >
                          <div className="w-8 h-8 rounded-lg ncash-gradient-bg flex items-center justify-center">
                            <action.icon className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-xs font-medium">
                            {action.label}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Live Transaction */}
                    <div className="flex-1">
                      <p className="text-xs font-semibold mb-2 text-muted-foreground">
                        PROCESSING
                      </p>
                      <motion.div
                        key={currentTransaction}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        className="bg-muted rounded-xl p-3 mb-2 border border-border/50 relative overflow-hidden"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <p className="text-sm font-medium">
                              {transactions[currentTransaction].name}
                            </p>
                            <p className="text-xs text-muted-foreground capitalize">
                              {transactions[currentTransaction].type}
                            </p>
                          </div>
                          <p className="text-sm font-bold text-foreground">
                            {transactions[currentTransaction].amount}
                          </p>
                        </div>
                        <div className="h-1 bg-border rounded-full overflow-hidden">
                          <motion.div
                            className="h-full ncash-gradient-bg"
                            initial={{ width: "0%" }}
                            animate={{ width: showSuccess ? "100%" : "70%" }}
                            transition={{
                              duration: showSuccess ? 0.3 : 2.5,
                              ease: "easeOut",
                            }}
                          />
                        </div>
                        {showSuccess && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="absolute inset-0 bg-accent/10 backdrop-blur-sm flex items-center justify-center rounded-xl"
                          >
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", stiffness: 300 }}
                              className="flex items-center gap-2 text-ncash-bright"
                            >
                              <CheckCircle2 className="w-5 h-5" />
                              <span className="text-sm font-semibold">
                                Success!
                              </span>
                            </motion.div>
                          </motion.div>
                        )}
                      </motion.div>
                      <div className="space-y-1.5">
                        {transactions.slice(0, 2).map((tx, index) => (
                          <div
                            key={index}
                            className="flex justify-between items-center bg-muted/30 rounded-lg p-2 opacity-60"
                          >
                            <span className="text-xs">{tx.name}</span>
                            <div className="flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3 text-ncash-bright" />
                              <span className="text-xs text-muted-foreground">
                                {tx.amount}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
