import React from "react";
import { motion } from "framer-motion";

const easeSoft = [0.4, 0, 0.2, 1] as const;

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: easeSoft, delay: 0.15 }}
      className="w-full border-t border-white/10 bg-black/60 backdrop-blur-sm"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-6 text-[0.6rem] uppercase tracking-[0.25em] text-white/40 sm:flex-row sm:items-center sm:justify-between">
        <span>© {year} mickeyshide</span>
        <span className="text-white/30">building async backends &amp; playful systems</span>
      </div>
    </motion.footer>
  );
};

export default Footer;
