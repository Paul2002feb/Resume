import React from "react";
import { motion, stagger } from "framer-motion";

//animated the "Turning vision part" this makes it appear in 1s
const quote = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.3,
      staggerChildren: 0.1,
    },
  },
};

const singleWord = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

// 2 inputs text and className
const AnimatedText = ({ text, className = "" }) => {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0">
      <motion.h1
        className={`text-8x1 inline-block w-full text-green font-bold capitalize text-8xl dark:text-light ${className}`}
        variants={quote}
        // initial and animate take the values above
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={word + "_" + index}
            className="inline-block"
            variants={singleWord}
            // no need to initialize this.
            // initial="initial"
            // animate="animate"
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
