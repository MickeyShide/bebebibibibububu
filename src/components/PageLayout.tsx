import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const easeSoft = [0.4, 0, 0.2, 1] as const;

const PageLayout: React.FC = () => {
  const location = useLocation();

  return (
    <div className="flex min-h-[100dvh] flex-col bg-black text-white">
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.5, ease: easeSoft }}
          className="flex-1 overflow-hidden px-6 py-8"
        >
          <div className="mx-auto flex h-full w-full max-w-6xl flex-col items-center">
            <Outlet />
          </div>
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default PageLayout;
