import { motion } from "framer-motion";
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { easeSoft } from "@/shared/config/motion";

import { TypewriterText } from "./TypewriterText";

interface ParticleDefinition {
  id: number;
  originX: number;
  originY: number;
  driftX: number;
  driftY: number;
  idleDuration: number;
}

const PARTICLE_COUNT = 50;
const PARTICLE_DELAY_MS = 3000;
const WARP_NAVIGATION_DELAY_MS = 800;
const TYPEWRITER_TEXT = `WHY\nNOT\nTAKE\nA\n[ BREAK ]`;

const buildParticles = (count: number): ParticleDefinition[] =>
  Array.from({ length: count }, (_, index) => {
    const angle = (index / count) * 2 * Math.PI;
    const random = Math.random();
    const radius = 60 + random ** 2 * 50;
    const originX = Math.cos(angle) * radius;
    const originY = Math.sin(angle) * radius;
    const driftX = Math.random() * 5 - 2.5;
    const driftY = Math.random() * 5 - 2.5;
    const idleDuration = 4 + Math.random() * 2;

    return {
      id: index,
      originX,
      originY,
      driftX,
      driftY,
      idleDuration,
    };
  });

const LandingHeroComponent = () => {
  const navigate = useNavigate();
  const [warp, setWarp] = useState(false);
  const [showParticles, setShowParticles] = useState(false);

  const particles = useMemo(() => buildParticles(PARTICLE_COUNT), []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowParticles(true);
    }, PARTICLE_DELAY_MS);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!warp) {
      return undefined;
    }

    document.body.classList.add("fade-to-black");

    const navigationTimer = window.setTimeout(() => {
      void navigate("/portfolio");
      document.body.classList.remove("fade-to-black");
    }, WARP_NAVIGATION_DELAY_MS);

    return () => {
      window.clearTimeout(navigationTimer);
      document.body.classList.remove("fade-to-black");
    };
  }, [navigate, warp]);

  const handleWarp = useCallback(() => {
    setWarp(true);
  }, []);

  return (
    <motion.section
      className="relative h-[100dvh] w-full overflow-hidden bg-black text-white"
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, filter: "blur(12px)" }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      {showParticles ? (
        <motion.div
          className="pointer-events-none fixed inset-0 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          {particles.map(({ id, originX, originY, driftX, driftY, idleDuration }) => (
            <motion.div
              key={id}
              className="absolute h-1 w-1 rounded-full bg-white"
              style={{ top: "50%", left: "50%" }}
              initial={{ opacity: 0, scale: 0 }}
              animate={
                warp
                  ? {
                      x: [originX, originX * 8],
                      y: [originY, originY * 8],
                      opacity: [1, 0],
                      scale: [1, 3],
                    }
                  : {
                      x: [originX, originX + driftX, originX],
                      y: [originY, originY + driftY, originY],
                      opacity: [0, 0.8, 0.4],
                      scale: [0.8, 1, 1.1],
                    }
              }
              transition={{
                duration: warp ? 1.5 : idleDuration,
                repeat: warp ? 0 : Infinity,
                repeatType: "mirror",
                ease: easeSoft,
              }}
            />
          ))}
        </motion.div>
      ) : null}

      <div className="relative mx-auto h-full max-w-6xl">
        <motion.div
          className="relative h-full w-full"
          animate={warp ? { scale: 2.2, opacity: 0 } : { scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <motion.span
            className="pixel-font absolute left-10 top-10 text-6xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            [ STOP ]
          </motion.span>

          <motion.span
            className="pixel-font absolute right-20 top-40 text-2xl tracking-widest underline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            THIS ONE IS
          </motion.span>

          <motion.span
            className="pixel-font absolute bottom-10 left-10 border p-2 text-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            A <br /> CHECKPOINT
          </motion.span>

          <motion.div
            className="absolute bottom-20 right-10 text-right text-base leading-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <TypewriterText
              key={TYPEWRITER_TEXT}
              text={TYPEWRITER_TEXT}
              speed={100}
              startDelay={2000}
            />
          </motion.div>

          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 2 }}
          >
            {warp ? null : (
              <motion.button
                type="button"
                className="z-10 flex h-24 w-24 items-center justify-center rounded-full border-2 border-white text-white transition-colors duration-300 hover:bg-white hover:text-black"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWarp}
                aria-label="Initiate warp"
              >
                <FaPlay size={32} />
              </motion.button>
            )}
          </motion.div>
        </motion.div>
      </div>

      {warp ? (
        <motion.div
          className="pointer-events-none absolute inset-0 bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      ) : null}
    </motion.section>
  );
};

export const LandingHero = memo(LandingHeroComponent);
