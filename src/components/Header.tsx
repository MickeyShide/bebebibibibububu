import React from "react";
import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";

const easeSoft = [0.4, 0, 0.2, 1] as const;

const Header: React.FC = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: easeSoft, delay: 0.1 }}
      className="w-full border-b border-white/10 bg-black/60 backdrop-blur-sm"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 text-[0.7rem] uppercase tracking-[0.2em] text-white/50 sm:flex-row">
        <img
          src="/imgs/shide.png"
          alt="logo"
          loading="lazy"
          className="h-10 w-auto invert contrast-[250%] brightness-[300%] saturate-0 mix-blend-screen transition-opacity duration-700 ease-out"
        />
        <div className="flex gap-4 text-[0.6rem]">
          <a href="mailto:MICKEYSHIDE@GMAIL.COM" className="flex flex-row items-center gap-2 hover:text-white transition">
            <FiMail size={16} />
            <span className="hidden sm:block">mickeyshide@gmail.com</span>
          </a>
          <a
            href="https://t.me/mickeyshide"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center gap-2 hover:text-white transition"
          >
            <FaTelegramPlane size={16} />
            <span className="hidden sm:block">mickeyshide</span>
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
