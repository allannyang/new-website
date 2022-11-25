import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import styles from "../styles/expandcard.module.css";
import LangCard from "../components/LangCard";

const ExpandCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div className={styles.all}>
      <motion.div className={styles.app}>
        <motion.div
          transition={{ layout: { duration: 5, type: "spring" } }}
          onClick={() => setIsOpen(!isOpen)}
          className={styles.card}
          style={{ borderRadius: "0.4rem" }}
          initial={{
            height: 0,
            opacity: 0,
          }}
          animate={{
            height: "auto",
            opacity: 1,
          }}
          exit={{
            height: 0,
            opacity: 0,
          }}
        >
          <motion.h2 layout="position" className={styles.div}>
            Language Proficiency ↓
          </motion.h2>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                transition={{ layout: { duration: 5, type: "spring" } }}
                initial={{
                  height: 0,
                  width: 0,
                  opacity: 0,
                }}
                exit={{
                  height: 0,
                  width: 0,
                  opacity: 0,
                  transition: {
                    height: {
                      duration: 0.65,
                      delay: 0.15,
                    },
                    width: {
                      duration: 0.65,
                      delay: 0.15,
                    },
                    opacity: {
                      duration: 0.15,
                    },
                  },
                }}
                animate={{
                  height: "auto",
                  width: "auto",
                  opacity: 1,
                  transition: {
                    height: {
                      duration: 0.5,
                    },
                    width: {
                      duration: 0.5,
                    },
                    opacity: {
                      duration: 0.25,
                      delay: 0.45,
                    },
                  },
                }}
                classname={styles.expand}
              >
                <LangCard description="Java ██████"></LangCard>
                <br />
                <LangCard description="C █████"></LangCard>
                <br />
                <LangCard description="HTML/CSS/JS ████"></LangCard>
                <br />
                <LangCard description="Python ████"></LangCard>
                <br />
                <LangCard description="SQL ███"></LangCard>
                <br />
                <LangCard description="Racket ██"></LangCard>
                <br />
                <br />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ExpandCard;
