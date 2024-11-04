import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github } from "lucide-react";

const InfoSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.04, 0.62, 0.23, 0.98],
      },
    },
  };

  return (
    <motion.main
      variants={container}
      initial="hidden"
      animate="show"
      className="flex justify-center items-center text-slate-300"
    >
      <motion.a
        href="https://www.linkedin.com/in/simone-tignino-307519301/"
        className="mx-2"
        variants={item}
      >
        <Linkedin />
      </motion.a>
      <motion.a
        href="https://github.com/simonetignino"
        className="mx-2"
        variants={item}
      >
        <Github />
      </motion.a>
    </motion.main>
  );
};

export default InfoSection;