import { motion } from "framer-motion";
import { memo, type ReactNode } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

import { easeSoft } from "@/shared/config/motion";

interface ContactLink {
  href: string;
  label: string;
  icon: ReactNode;
  text: string;
  external?: boolean;
}

const CONTACT_LINKS: readonly ContactLink[] = [
  {
    href: "mailto:mickeyshide@gmail.com",
    label: "Email mickeyshide@gmail.com",
    icon: <FiMail size={16} />,
    text: "mickeyshide@gmail.com",
  },
  {
    href: "https://t.me/mickeyshide",
    label: "Open Telegram profile mickeyshide",
    icon: <FaTelegramPlane size={16} />,
    text: "mickeyshide",
    external: true,
  },
] as const;

const SiteHeaderComponent = () => (
  <motion.header
    initial={{ opacity: 0, y: -12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: easeSoft, delay: 0.1 }}
    className="w-full bg-black/60 backdrop-blur-sm"
  >
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 text-[0.7rem] uppercase tracking-[0.2em] text-white/50 sm:flex-row">
      <img
        src="/imgs/shide.png"
        alt="Shide logo"
        loading="lazy"
        className="h-10 w-auto mix-blend-screen brightness-[300%] contrast-[250%] invert saturate-0 transition-opacity duration-700 ease-out"
        width={120}
        height={40}
      />
      <nav aria-label="Contact channels" className="flex gap-4 text-[0.6rem]">
        {CONTACT_LINKS.map(({ href, label, icon, text, external }) => (
          <a
            key={href}
            href={href}
            aria-label={label}
            className="flex flex-row items-center gap-2 transition-colors hover:text-white"
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : undefined)}
          >
            {icon}
            <span className="hidden sm:block">{text}</span>
          </a>
        ))}
      </nav>
    </div>
  </motion.header>
);

export const SiteHeader = memo(SiteHeaderComponent);
