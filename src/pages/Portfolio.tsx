import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type Project = {
  title: string;
  desc: string;
  slug: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "FLOWERAVE",
    desc: "microservice mesh // qr-sync",
    slug: "flowerave",
    image: "/imgs/bg-1.jpg",
  },
  {
    title: "СКАНЫШИ",
    desc: "collectible map layer // yandex maps",
    slug: "skanyshi",
    image: "/imgs/bg-2.png",
  },
  {
    title: "COREAPI",
    desc: "orchestration core // fintech platform",
    slug: "coreapi",
    image: "/imgs/shide.png",
  },
];

const MotionLink = motion(Link);

const easeSoft = [0.4, 0, 0.2, 1] as const;

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.45, ease: easeSoft },
  }),
};

type ProjectCardProps = {
  project: Project;
  index: number;
};

const fallbackImage = "/imgs/profile.png";

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [imgSrc, setImgSrc] = React.useState(project.image);
  const [isBroken, setIsBroken] = React.useState(false);

  React.useEffect(() => {
    setImgSrc(project.image);
    setIsBroken(false);
  }, [project.image]);

  return (
    <MotionLink
      to={`/projects/${project.slug}`}
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      custom={0.2 + index * 0.08}
      className="flex w-full max-w-[240px] flex-col items-center justify-center rounded-sm py-2 transition-colors hover:border-white/30"
      whileHover={{ scale: 1.03 }}
    >
      {!isBroken && (
        <img
          src={imgSrc}
          alt={project.title}
          className="w-4/5 mb-4 select-none opacity-90"
          onError={() => {
            if (imgSrc !== fallbackImage) {
              setImgSrc(fallbackImage);
            } else {
              setIsBroken(true);
            }
          }}
        />
      )}
      <h3 className="text-white text-sm uppercase">{project.title}</h3>
      <p className="text-white/40 text-[0.65rem] uppercase text-center px-2">{project.desc}</p>
    </MotionLink>
  );
};

const Portfolio: React.FC = () => {
  return (
    <div className="flex w-full flex-1 flex-col items-center text-center">
      <motion.h1
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        custom={0.25}
        className="mb-4 text-[clamp(2rem,6vw,4rem)] uppercase tracking-tight text-white/90 pixel-font"
      >
        python backend developer
      </motion.h1>

      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        custom={0.35}
        className="mb-16 flex flex-col items-center text-center text-[0.75rem] tracking-[0.15em] text-white/70"
      >
        <div className="flex flex-row gap-2">
          <motion.img
            src="/imgs/profile.png"
            alt="profile"
            className="h-24 w-24 rounded-sm object-cover invert contrast-[180%] brightness-[220%] saturate-0 mix-blend-screen"
          />
          <div className="flex flex-col justify-center text-start">
            <span className="pixel-font text-[1rem] text-white/90">Nikita</span>
            <span className="pixel-font text-[1rem] text-white/90">23yo</span>
            <span className="pixel-font text-[1rem] text-white/90">Moscow, RU</span>
          </div>
        </div>
        <span className="mt-2 px-4 text-white/40">
          fastapi / sqlalchemy /
          postgresql / redis / docker / pytest / celery
        </span>
      </motion.div>

      <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
