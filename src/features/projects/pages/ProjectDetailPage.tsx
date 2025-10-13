import { motion } from "framer-motion";
import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";

import { getProjectBySlug } from "@/entities/project";
import { easeSoft } from "@/shared/config/motion";

import type { Variants } from "framer-motion";

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const detailHeaderVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.45, ease: easeSoft },
  }),
};
/* eslint-enable @typescript-eslint/no-unsafe-assignment */

export const ProjectDetailPage = () => {
  const params = useParams<{ id: string }>();
  const project = getProjectBySlug(params.id ?? "");
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const handleLoaded = (src: string) => {
    setLoadedImages((prev) => ({ ...prev, [src]: true }));
  };

  return (
    <div className="flex w-full flex-1 flex-col items-center gap-16 text-center">
      <motion.section
        variants={detailHeaderVariants}
        initial="hidden"
        animate="visible"
        custom={0.9}
        className="flex flex-col items-center gap-6"
      >
        <motion.h1
          className="pixel-font text-[clamp(2.5rem,7vw,5rem)] uppercase tracking-tight text-white/90"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.45, ease: easeSoft }}
        >
          {project.title}
        </motion.h1>
        <p className="max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
          {project.description}
        </p>
        <div className="flex flex-wrap justify-center gap-3 text-[0.65rem] uppercase tracking-[0.25em] text-white/50 sm:text-xs">
          {project.technologies.map((tech, techIndex) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + techIndex * 0.05, duration: 0.45, ease: easeSoft }}
              className="border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-sm"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.5, ease: easeSoft }}
        className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {project.gallery.map((src, index) => {
          const isLoaded = loadedImages[src];

          return (
            <motion.figure
              key={src}
              className="relative overflow-hidden rounded-sm border border-white/5 bg-white/5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.25, ease: easeSoft }}
              whileHover={{ y: -8, scale: 1.01 }}
            >
              <motion.img
                src={src}
                alt={`${project.title} preview ${(index + 1).toString()}`}
                className={`h-full w-full select-none object-cover transition-all duration-700 ease-out ${
                  isLoaded ? "opacity-100 blur-0" : "opacity-0 blur-md"
                }`}
                onLoad={() => {
                  handleLoaded(src);
                }}
                onError={() => {
                  handleLoaded(src);
                }}
                loading="lazy"
              />
              {!isLoaded ? (
                <div className="absolute inset-0 animate-pulse bg-white/5" aria-hidden />
              ) : null}
            </motion.figure>
          );
        })}
      </motion.section>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.45, ease: easeSoft }}
        className="flex w-full justify-center"
      >
        <Link
          to="/portfolio"
          className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-white"
        >
          <motion.span whileHover={{ x: -4 }} className="text-lg">
            <FiArrowLeft aria-hidden />
          </motion.span>
          <span>Back to portfolio</span>
        </Link>
      </motion.div>
    </div>
  );
};
