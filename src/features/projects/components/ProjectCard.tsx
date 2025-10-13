import { motion } from "framer-motion";
import { memo, useState } from "react";
import { Link } from "react-router-dom";

import type { ProjectSummary } from "@/entities/project";
import { easeSoft } from "@/shared/config/motion";

interface ProjectCardProps {
  project: ProjectSummary;
  index: number;
}

const FALLBACK_IMAGE = "/imgs/profile.png";
const MotionLink = motion(Link);

const cardReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: (offset = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.18 + offset,
      duration: 0.45,
      ease: easeSoft,
    },
  }),
};

const ProjectCardComponent = ({ project, index }: ProjectCardProps) => {
  const [source, setSource] = useState(project.coverImage);
  const [isBroken, setIsBroken] = useState(false);

  return (
    <MotionLink
      to={`/projects/${project.slug}`}
      variants={cardReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      custom={index * 0.08}
      className="flex w-full max-w-[240px] flex-col items-center justify-center rounded-sm border border-transparent py-2 transition-colors hover:border-white/30"
      whileHover={{ scale: 1.03 }}
    >
      {!isBroken ? (
        <img
          src={source}
          alt={project.title}
          loading="lazy"
          className="mb-4 w-4/5 select-none opacity-90"
          onError={() => {
            if (source !== FALLBACK_IMAGE) {
              setSource(FALLBACK_IMAGE);
            } else {
              setIsBroken(true);
            }
          }}
        />
      ) : null}
      <h3 className="text-sm uppercase text-white">{project.title}</h3>
      <p className="px-2 text-center text-[0.65rem] uppercase text-white/40">{project.tagline}</p>
    </MotionLink>
  );
};

export const ProjectCard = memo(ProjectCardComponent);
