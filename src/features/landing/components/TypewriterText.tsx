import { motion } from "framer-motion";
import { memo, useEffect, useMemo, useState } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  startDelay?: number;
}

const TypewriterTextComponent = ({ text, speed = 150, startDelay = 0 }: TypewriterTextProps) => {
  const [progress, setProgress] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const delayTimer = window.setTimeout(() => {
      setIsActive(true);
    }, startDelay);

    return () => {
      window.clearTimeout(delayTimer);
    };
  }, [startDelay]);

  useEffect(() => {
    if (!isActive || progress >= text.length) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setProgress((current) => current + 1);
    }, speed);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isActive, progress, speed, text.length]);

  const displayed = useMemo(() => text.slice(0, progress), [progress, text]);
  const lines = useMemo(() => displayed.split("\n"), [displayed]);

  return (
    <span className="inline-block whitespace-pre-wrap text-right leading-6">
      {lines.map((line, lineIndex) => (
        <span key={`typed-line-${lineIndex.toString()}`}>
          {line}
          {lineIndex < lines.length - 1 ? <br /> : null}
        </span>
      ))}
      {isActive ? (
        <motion.span
          className="inline-block"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          |
        </motion.span>
      ) : null}
    </span>
  );
};

export const TypewriterText = memo(TypewriterTextComponent);
