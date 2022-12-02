import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import styles from "../styles/expandcard.module.css";
import DescCard from "../components/DescCard";

const ReferenceCard = () => {
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
            References ↓
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
                <DescCard description="Allan is one of the most passionate people I've ever worked with. He pours his heart and soul into his work and his projects really do a great job of showcasing that. - Ali Raza Khan"></DescCard>
                <br />
                <DescCard description="Allan's always shown to be quite humorous and intelligent while also being able to provide proper insight with any trouble I may have. - Akshay Vakil"></DescCard>
                <br />
                <DescCard description="I've known Allan for many years, and I can confidently say he's one of the most out-of-the-box people I've met. - Kevin Nguyen "></DescCard>
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

export default ReferenceCard;
