import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const TypewriterText: React.FC<{ text: string; speed?: number; startDelay?: number }> = ({
  text,
  speed = 150,
  startDelay = 0,
}) => {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [started, index, text, speed]);

  const lines = displayed.split("\n");
  return (
    <span className="inline-block text-right leading-6 whitespace-pre-wrap">
      {lines.map((line, i) => (
        <React.Fragment key={i}>
          {line}
          {i < lines.length - 1 && <br />}
        </React.Fragment>
      ))}
      {started && (
        <motion.span
          className="inline-block"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          |
        </motion.span>
      )}
    </span>
  );
};

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const particles = Array.from({ length: 50 });
  const [warp, setWarp] = useState(false);
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowParticles(true), 3000);
    return () => clearTimeout(t);
  }, []);

  // запускаем переход: fade + навигация с overlap
  useEffect(() => {
    if (!warp) return;

    // сначала запускаем fade-out
    const fadeTimer = setTimeout(() => {
      document.body.classList.add("fade-to-black");
    }, 800);

    // потом навигация (через 600мс после начала фейда)
    const navTimer = setTimeout(() => {
      navigate("/portfolio"); // без replace — чтобы "назад" работало стабильно
      document.body.classList.remove("fade-to-black");
    }, 800);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(navTimer);
    };
  }, [warp, navigate]);

  return (
    <motion.div
      className="relative w-full h-[100dvh] overflow-hidden text-white bg-black"
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, filter: "blur(12px)" }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      {/* particles */}
      {showParticles && (
        <motion.div
          className="fixed inset-0 pointer-events-none flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          {particles.map((_, i) => {
            const angle = (i / particles.length) * 2 * Math.PI;
            const rand = Math.random();
            const radius = 60 + Math.pow(rand, 2) * 50;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <motion.div
                key={i}
                className="w-1 h-1 bg-white rounded-full absolute"
                style={{ top: "50%", left: "50%" }}
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  warp
                    ? { x: [x, x * 8], y: [y, y * 8], opacity: [1, 0], scale: [1, 3] }
                    : {
                        x: [x, x + Math.random() * 5 - 2.5, x],
                        y: [y, y + Math.random() * 5 - 2.5, y],
                        opacity: [0, 0.8, 0.4],
                        scale: [0.8, 1, 1.1],
                      }
                }
                transition={{
                  duration: warp ? 1.5 : 4 + Math.random() * 2,
                  repeat: warp ? 0 : Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }}
              />
            );
          })}
        </motion.div>
      )}

      {/* текст и кнопка */}
      <div className="relative max-w-6xl mx-auto h-full">
        <motion.div
          className="w-full h-full relative"
          animate={warp ? { scale: 2.2, opacity: 0 } : { scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <motion.div
            className="absolute top-10 left-10 text-6xl pixel-font"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            [ STOP ]
          </motion.div>

          <motion.div
            className="absolute top-40 right-20 text-2xl tracking-widest underline pixel-font"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            THIS → IS
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-10 text-4xl border p-2 pixel-font"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            A <br /> CHECKPOINT
          </motion.div>

          <motion.div
            className="absolute bottom-20 right-10 text-md text-right leading-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <TypewriterText text={`WHY\nNOT\nTAKE\nA\n[ BREAK ]`} speed={100} startDelay={2000} />
          </motion.div>

          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 2 }}
          >
            {!warp && (
              <motion.button
                className="w-24 h-24 border-2 border-white rounded-full flex items-center justify-center text-white z-10 hover:bg-white hover:text-black transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setWarp(true)}
              >
                <FaPlay size={32} />
              </motion.button>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* локальный fade для overlap */}
      {warp && (
        <motion.div
          className="absolute inset-0 bg-black pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      )}
    </motion.div>
  );
};

export default Hero;
