import {  useEffect,  type ReactNode } from "react";
import { motion } from "framer-motion";
import { ComingSoonBanner } from "./ComingSoonBanner";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";


interface PageLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

export function PageLayout({ children, title, subtitle }: PageLayoutProps) {
  useEffect(() => {
     document.documentElement.classList.remove("dark");
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <ComingSoonBanner />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-16 relative overflow-hidden">
        {/* Parallax Background */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-ncash-bright/10 blur-3xl"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-ncash-deep/15 blur-3xl"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="ncash-gradient-text">{title}</span>
            </h1>
            {subtitle && (
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="container mx-auto px-4 md:px-8 pb-20"
      >
        {children}
      </motion.main>

      <Footer />
    </div>
  );
}
