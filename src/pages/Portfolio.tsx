import React from "react";
import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";

const Portfolio: React.FC = () => {
  const projects = [
    { title: "FLOWERAVE", desc: "microservice mesh // qr-sync" },
    { title: "СКАНЫШИ", desc: "collectible map layer // yandex maps" },
    { title: "OTHER SHIT", desc: "Diverse side projects" },
  ];

  // единые анимационные пресеты
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.6, ease: "easeOut" },
    }),
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 1.1,
        staggerChildren: 0.25,
      },
    },
  };

  return (
    <motion.div
      className="px-6 min-h-[100dvh] bg-black text-white font-mono flex flex-col items-center justify-start py-6 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      {/* header */}
      <motion.header
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        custom={0.8}
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

      {/* main */}
      <main className="text-center w-full max-w-6xl flex flex-col items-center">
        <motion.h1
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={1.0}
          className="text-[clamp(2rem,6vw,4rem)] uppercase tracking-tight text-white/90 pixel-font mb-4"
        >
          python backend developer
        </motion.h1>

        {/* profile */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={1.2}
          className="flex flex-col items-center text-center text-white/70 text-[0.75rem] tracking-[0.15em] mb-16"
        >
          <div className="flex flex-row gap-2">
            <motion.img
              src="/imgs/profile.png"
              alt="profile"
              className="w-24 h-24 rounded-sm object-cover invert contrast-[180%] brightness-[220%] saturate-0 mix-blend-screen"
            />
            <div className="flex flex-col justify-center text-start">
              <span className="text-white/90 pixel-font text-[1rem]">Nikita</span>
              <span className="text-white/90 pixel-font text-[1rem]">23yo</span>
              <span className="text-white/90 pixel-font text-[1rem]">Moscow, RU</span>
            </div>
          </div>
          <span className="text-white/40 mt-2 px-4">
            fastapi / sqlalchemy /
            postgresql / redis / docker / pytest / celery
          </span>
        </motion.div>

        {/* projects */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center"
        >
          {projects.map((p, i) => {
            const [imgSrc, setImgSrc] = React.useState(`/imgs/bg-${i + 1}.jpg`);
            const [imgError, setImgError] = React.useState(false);

            return (
              <motion.div
                key={i}
                variants={fadeIn}
                custom={i * 0.3 + 1.4}
                className="py-2 rounded-sm w-full max-w-[240px] flex flex-col justify-center items-center hover:border-white/40 transition-colors"
                whileHover={{ scale: 1.03 }}
              >
                {!imgError && (
                  <img
                    src={imgSrc}
                    alt={p.title}
                    className="w-4/5 mb-4 select-none opacity-90"
                    onError={() => {
                      if (imgSrc.endsWith(".jpg")) {
                        setImgSrc(`/imgs/bg-${i + 1}.png`);
                      } else {
                        setImgError(true);
                      }
                    }}
                  />
                )}
                <h3 className="text-white text-sm uppercase">{p.title}</h3>
                <p className="text-white/40 text-[0.65rem] uppercase text-center px-2">
                  {p.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={2.4}
          className="text-[0.7rem] text-white/30 tracking-[0.25em] uppercase pt-20"
        >
          Updated: 07.10.2025
        </motion.p>
      </main>
    </motion.div>
  );
};

export default Portfolio;
