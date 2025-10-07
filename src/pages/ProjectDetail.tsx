import React from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

type ProjectContent = {
  title: string;
  description: string;
  technologies: string[];
  gallery: string[];
};

const projectData: Record<string, ProjectContent> = {
  flowerave: {
    title: "FLOWERAVE",
    description:
      "Microservice-driven retail ecosystem for festival merch. Enables QR-synced loyalty tracking with on-site kiosks and instant restock telemetry.",
    technologies: [
      "fastapi",
      "postgresql",
      "redis streams",
      "kafka",
      "docker",
      "grafana",
    ],
    gallery: ["/imgs/flowerave-1.jpg", "/imgs/flowerave-2.jpg", "/imgs/flowerave-3.jpg"],
  },
  skanyshi: {
    title: "СКАНЫШИ",
    description:
      "Gamified collectible layer above Yandex Maps with AR treasure hunts and NFC check-ins for offline venues and pop-up stores.",
    technologies: ["fastapi", "geoalchemy", "s3", "yandex maps sdk", "celery"],
    gallery: ["/imgs/skanyshi-1.jpg", "/imgs/skanyshi-2.jpg", "/imgs/skanyshi-3.jpg"],
  },
  coreapi: {
    title: "COREAPI",
    description:
      "Modular API core for fintech orchestration: handles auth federation, idempotent webhooks, streaming analytics, and zero-downtime deploys.",
    technologies: ["python", "asyncio", "fastapi", "kubernetes", "clickhouse", "otel"],
    gallery: ["/imgs/coreapi-1.jpg", "/imgs/coreapi-2.jpg", "/imgs/coreapi-3.jpg"],
  },
};

const easeSoft = [0.4, 0, 0.2, 1] as const;

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.45, ease: easeSoft },
  }),
};

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const key = id?.toLowerCase() ?? "";
  const project = projectData[key] ?? {
    title: "UNKNOWN",
    description:
      "This project is still brewing in the underground lab. Check back soon for more signal.",
    technologies: ["python", "fastapi", "redis"],
    gallery: ["/imgs/bg-1.jpg", "/imgs/bg-2.jpg"],
  };

  const [loadedImages, setLoadedImages] = React.useState<Record<string, boolean>>({});

  const markLoaded = React.useCallback((src: string) => {
    setLoadedImages((prev) => ({ ...prev, [src]: true }));
  }, []);

  return (
    <div className="flex w-full flex-1 flex-col items-center gap-16 text-center">
      <motion.section
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        custom={0.9}
        className="flex flex-col items-center gap-6"
      >
        <motion.h1
          className="text-[clamp(2.5rem,7vw,5rem)] uppercase tracking-tight text-white/90 pixel-font"
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
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={0.3 + techIndex * 0.05}
              className="border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-sm"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        custom={0.35}
        className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {project.gallery.map((src, index) => {
          const isLoaded = loadedImages[src];
          return (
            <motion.div
              key={src}
              className="relative overflow-hidden rounded-sm border border-white/5 bg-white/5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.45, ease: easeSoft }}
              whileHover={{ y: -8, scale: 1.01 }}
            >
              <motion.img
                src={src}
                alt={`${project.title} preview ${index + 1}`}
                className={`h-full w-full select-none object-cover transition-all duration-700 ease-out ${
                  isLoaded ? "blur-0 opacity-100" : "blur-md opacity-0"
                }`}
                onLoad={() => markLoaded(src)}
              />
              {!isLoaded && (
                <div className="absolute inset-0 animate-pulse bg-white/5" aria-hidden />
              )}
            </motion.div>
          );
        })}
      </motion.section>

      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        custom={0.5}
        className="flex w-full justify-center"
      >
        <Link
          to="/portfolio"
          className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-white/60 transition hover:text-white"
        >
          <motion.span whileHover={{ x: -4 }} className="text-lg">
            ←
          </motion.span>
          <span>back to portfolio</span>
        </Link>
      </motion.div>
    </div>
  );
};

export default ProjectDetail;
