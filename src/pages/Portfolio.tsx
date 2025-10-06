import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiMail } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// безопасная загрузка изображения
const ImageFadeIn: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  return (
    <img
      src="/imgs/shide.png"
      alt="background"
      loading="lazy"
      onLoad={() => setLoaded(true)}
      className={`invert max-w-[200px] opacity-50 transition-opacity duration-700 ease-out mx-auto ${
        loaded ? "opacity-40" : "opacity-0"
      }`}
      style={{
        width: "40%",
        marginTop: "3rem",
        filter: "contrast(200%) brightness(220%) grayscale(100%)",
        willChange: "opacity",
      }}
    />
  );
};

const Portfolio: React.FC = () => {
  const navigate = useNavigate();

  const projectCards = [
    { title: "FLOWERAVE", desc: "Ticketing microservice mesh with QR-stream sync." },
    { title: "СКАНЫШИ", desc: "Collectible delivery layer using Yandex Maps v3." },
  ];

  return (
    <motion.div
      className="w-full min-h-[100svh] bg-black text-white overflow-x-hidden"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", "Segoe UI", Roboto, sans-serif',
        willChange: "opacity, transform",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {/* top bar */}
      <header
        className="flex h-20 justify-between items-center px-10 py-6 text-xl uppercase text-white/50 pixel-font select-none"
        style={{ willChange: "opacity, transform" }}
      >
        <div className="flex items-center gap-6">
          <img
            src="/imgs/shide.png"
            alt="logo"
            loading="lazy"
            className="invert h-10 w-auto contrast-[250%] brightness-[300%] saturate-0 mix-blend-screen transition-opacity duration-700 ease-out"
          />
          <div className="flex items-center gap-4">
            <a
              href="mailto:MICKEYSHIDE@GMAIL.COM"
              className="hover:text-white focus-visible:text-white transition"
              title="Email"
              aria-label="Email"
            >
              <FiMail className="text-2xl" />
            </a>
            <a
              href="https://t.me/platformloops"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white focus-visible:text-white transition"
              title="Telegram"
              aria-label="Telegram"
            >
              <FaTelegramPlane className="text-2xl" />
            </a>
          </div>
        </div>

        <div className="space-x-6 flex items-center">
          <button
            onClick={() => navigate(-1)}
            className="hover:text-white focus-visible:text-white transition"
            aria-label="Go back"
          >
            ← CHECKPOINT
          </button>
        </div>
      </header>

      {/* main content */}
      <main
        className="flex flex-col items-center text-center px-4 pt-10 pb-20 max-w-6xl mx-auto"
        style={{ willChange: "opacity, transform" }}
      >
        <motion.h1
          className="text-[clamp(2.8rem,6vw,6rem)] pixel-font leading-[1.1]"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          BACKEND
          <br />
          ARCHITECTURE
        </motion.h1>

        <motion.div
          className="my-10 h-[1px] w-32 bg-white/30"
          animate={{ scaleX: [1, 0.6, 1], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.p
          className="max-w-2xl text-white/70 text-xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.8 } }}
        >
          FastAPI / PostgreSQL / Redis / Celery
          <br />
          pipelines · alerts · metrics · uptime
        </motion.p>

        {/* карточки проектов */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-8 px-6"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.2, delayChildren: 1.1 } },
          }}
        >
          {projectCards.map((card, i) => {
            const jpg = `/imgs/bg-${i + 1}.jpg`;
            const png = `/imgs/bg-${i + 1}.png`;

            const [bg, setBg] = useState(jpg);

            useEffect(() => {
              const img = new Image();
              img.src = jpg;
              img.onload = () => setBg(jpg);
              img.onerror = () => setBg(png);
            }, [jpg, png]);

            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 150, damping: 12 },
                }}
                className="relative w-[260px] h-[260px] rounded-2xl overflow-hidden cursor-pointer group bg-center bg-no-repeat bg-cover will-change-transform"
                style={{
                  backgroundImage: `url(${bg})`,
                  backgroundSize: "115%",
                }}
              >
                <div
                  className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-700 rounded-2xl"
                  aria-hidden="true"
                />

                <div className="z-10 absolute inset-0 flex flex-col justify-end items-center text-center p-4 transition-all duration-500 pointer-events-none">
                  <motion.h3
                    className="text-2xl font-medium text-white tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p className="text-white/80 text-sm max-w-[180px] leading-relaxed opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {card.desc}
                  </motion.p>
                </div>

                <div
                  className="absolute -inset-[1px] bg-gradient-to-t from-black/80 via-black/40 via-50% to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"
                  aria-hidden="true"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </main>

      {/* footer */}
      <footer className="w-full flex flex-col items-center gap-6 select-none">
        <motion.button
          className="px-8 py-3 border border-white/30 rounded-full text-xl uppercase hover:border-white hover:bg-white hover:text-black transition focus-visible:ring-2 focus-visible:ring-white/50"
          whileHover={{ scale: 1.05 }}
        >
          INITIATE HANDSHAKE
        </motion.button>

        <div className="flex gap-4 text-white/40">
          <a
            href="mailto:MICKEYSHIDE@GMAIL.COM"
            className="hover:text-white focus-visible:text-white transition"
            title="Email"
            aria-label="Email"
          >
            <FiMail className="text-2xl" />
          </a>
          <a
            href="https://t.me/platformloops"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white focus-visible:text-white transition"
            title="Telegram"
            aria-label="Telegram"
          >
            <FaTelegramPlane className="text-2xl" />
          </a>
        </div>

        <p className="text-base uppercase tracking-[0.3em] text-white/40">
          MICKEYSHIDE@GMAIL.COM
        </p>

        <div className="w-full border-t py-4 border-white/10 px-10 flex flex-wrap justify-between text-sm text-white/50 tracking-wide">
          <p>
            STATUS: <span className="text-emerald-400">STABLE</span>
          </p>
          <p>
            LATENCY <span className="text-white/40">8.2ms</span>
          </p>
          <p>BUILD V3.11</p>
        </div>
      </footer>
    </motion.div>
  );
};

export default Portfolio;
