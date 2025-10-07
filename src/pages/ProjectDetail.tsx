import React from "react";
import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
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

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
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
    <motion.div
      className="px-6 min-h-[100dvh] bg-black text-white font-mono flex flex-col items-center justify-start py-6 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      <motion.header
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        custom={0.6}
        className="w-full max-w-6xl flex flex-col sm:flex-row justify-between items-center text-[0.7rem] text-white/50 uppercase tracking-[0.2em] mb-10 gap-4"
      >
        <img
          src="/imgs/shide.png"
          alt="logo"
          loading="lazy"
          className="invert h-10 w-auto contrast-[250%] brightness-[300%] saturate-0 mix-blend-screen transition-opacity duration-700 ease-out"
        />
        <div className="flex gap-4 text-[0.6rem]">
          <a href="mailto:MICKEYSHIDE@GMAIL.COM" className="flex flex-row gap-2 hover:text-white transition">
            <FiMail size={16} />
            <span className="hidden sm:block">mickeyshide@gmail.com</span>
          </a>
          <a
            href="https://t.me/mickeyshide"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row gap-2 hover:text-white transition"
          >
            <FaTelegramPlane size={16} />
            <span className="hidden sm:block">mickeyshide</span>
          </a>
        </div>
      </motion.header>

      <main className="text-center w-full max-w-6xl flex flex-col items-center gap-16">
        <motion.section
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={0.9}
          className="flex flex-col items-center gap-6"
        >
          <motion.h1
            className="text-[clamp(2.5rem,7vw,5rem)] uppercase tracking-tight text-white/90 pixel-font"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.7, ease: "easeOut" }}
          >
            {project.title}
          </motion.h1>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed max-w-2xl">
            {project.description}
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-[0.65rem] sm:text-xs tracking-[0.25em] text-white/50 uppercase">
            {project.technologies.map((tech, techIndex) => (
              <motion.span
                key={tech}
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                custom={1.1 + techIndex * 0.1}
                className="px-3 py-1 border border-white/10 bg-white/5 backdrop-blur-sm"
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
          custom={1.3}
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {project.gallery.map((src, index) => {
            const isLoaded = loadedImages[src];
            return (
              <motion.div
                key={src}
                className="relative overflow-hidden rounded-sm border border-white/5 bg-white/5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.2, duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -8, scale: 1.01 }}
              >
                <motion.img
                  src={src}
                  alt={`${project.title} preview ${index + 1}`}
                  className={`w-full h-full object-cover select-none transition-all duration-700 ease-out ${
                    isLoaded ? "blur-0 opacity-100" : "blur-md opacity-0"
                  }`}
                  onLoad={() => markLoaded(src)}
                />
                {!isLoaded && (
                  <div className="absolute inset-0 bg-white/5 animate-pulse" aria-hidden />
                )}
              </motion.div>
            );
          })}
        </motion.section>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={1.6}
          className="w-full flex justify-center"
        >
          <Link
            to="/portfolio"
            className="flex items-center gap-2 text-white/60 hover:text-white transition text-sm uppercase tracking-[0.2em]"
          >
            <motion.span whileHover={{ x: -4 }} className="text-lg">
              ←
            </motion.span>
            <span>back to portfolio</span>
          </Link>
        </motion.div>
      </main>
    </motion.div>
  );
};

export default ProjectDetail;
