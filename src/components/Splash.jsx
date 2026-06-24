import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ronaldoImage from "../../public/images/ronaldo.png";
import "./Splash.css";

const WORDS = ["Building", "Designing", "Deploying", "Aditya Jaiswal"];

export default function Splash({ onDone }) {
  const [index, setIndex] = useState(0);
  const [showRonaldo, setShowRonaldo] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (index < WORDS.length - 1) {
      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 450);

      return () => clearTimeout(timer);
    }

    // After "Aditya Jaiswal" appears
    const ronaldoTimer = setTimeout(() => {
      setShowRonaldo(true);
    }, 1200);

    // Fade splash out
    const exitTimer = setTimeout(() => {
      setExiting(true);
    }, 3200);

    // Remove splash
    const doneTimer = setTimeout(() => {
      onDone();
    }, 3900);

    return () => {
      clearTimeout(ronaldoTimer);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [index, onDone]);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          className="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="splash-grid" />

          <div className="splash-content">
            <AnimatePresence mode="wait">
              {!showRonaldo ? (
                <motion.span
                  key={WORDS[index]}
                  className={`splash-word ${
                    index === WORDS.length - 1 ? "splash-word-final" : ""
                  }`}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -30,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                >
                  {WORDS[index]}
                </motion.span>
              ) : (
                <motion.img
                  key="ronaldo"
                  src={ronaldoImage}
                  alt="Cristiano Ronaldo"
                  className="ronaldo-image"
                  initial={{
                    opacity: 0,
                    scale: 0.6,
                    y: 40,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                />
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
