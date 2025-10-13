import { motion } from "framer-motion";

import { projectSummaries } from "@/entities/project";
import { easeSoft } from "@/shared/config/motion";

import { ProjectCard } from "../components/ProjectCard";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.45, ease: easeSoft },
  }),
};

const gridReveal = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.15, duration: 0.5, ease: easeSoft },
  },
};

export const PortfolioPage = () => (
  <div className="flex w-full flex-1 flex-col items-center text-center">
    <motion.h1
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      custom={0.25}
      className="pixel-font mb-4 text-[clamp(2rem,6vw,4rem)] uppercase tracking-tight text-white/90"
    >
      python backend developer
    </motion.h1>

    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      custom={0.35}
      className="mb-16 flex flex-col items-center text-center text-[0.75rem] tracking-[0.15em] text-white/70"
    >
      <div className="flex flex-row gap-2">
        <motion.img
          src="/imgs/profile.png"
          alt="Nikita avatar"
          className="h-24 w-24 rounded-sm object-cover mix-blend-screen brightness-[220%] contrast-[180%] invert saturate-0"
          whileHover={{ rotate: -1.5 }}
          transition={{ duration: 0.4, ease: easeSoft }}
        />
        <div className="flex flex-col justify-center text-start">
          <span className="pixel-font text-[1rem] text-white/90">Nikita</span>
          <span className="pixel-font text-[1rem] text-white/90">23yo</span>
          <span className="pixel-font text-[1rem] text-white/90">Moscow, RU</span>
        </div>
      </div>
      <span className="mt-2 px-4 text-white/40">
        fastapi / sqlalchemy / postgresql / redis / docker / pytest / celery
      </span>
    </motion.div>

    <motion.div
      variants={gridReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 md:grid-cols-3"
    >
      {projectSummaries.map((project, index) => (
        <ProjectCard key={project.slug} project={project} index={index} />
      ))}
    </motion.div>
  </div>
);
