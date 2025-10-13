import { motion } from "framer-motion";
import { memo, useMemo } from "react";

import { easeSoft } from "@/shared/config/motion";

const LAST_UPDATE = "07.10.2025";

const SiteFooterComponent = () => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <motion.footer
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: easeSoft, delay: 0.15 }}
      className="w-full bg-black/60 backdrop-blur-sm"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-6 text-[0.6rem] uppercase tracking-[0.25em] text-white/40 sm:flex-row sm:items-center sm:justify-between">
        <span>&copy; {currentYear} mickeyshide</span>
        <span className="text-white/30">Updated: {LAST_UPDATE}</span>
      </div>
    </motion.footer>
  );
};

export const SiteFooter = memo(SiteFooterComponent);
