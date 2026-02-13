import { motion } from "framer-motion";

export function ComingSoonBanner() {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-[60] ncash-gradient-bg py-2"
    >
      <div className="container mx-auto px-4 flex items-center justify-center gap-3 text-white text-sm font-medium">
        <motion.div
          className="w-1.5 h-1.5 rounded-full bg-white"
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span>
          N-Cash by Himal Pay — currently in development. Launching across Nepal
          soon.
        </span>
      </div>
    </motion.div>
  );
}
