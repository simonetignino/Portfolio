import React from "react";
import { motion } from "framer-motion";
import profiloImage from "../media/PROFILO.png";
import Spinner from "./Spinner/Spinner";
import InfoSection from "./Informazioni/InfoSection.jsx";

export default function LeftSection() {
  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const progressBarVariants = {
    hidden: { width: 0 },
    visible: (width) => ({
      width: width,
      transition: { duration: 1, ease: "easeOut", delay: 0.5 },
    }),
  };

  const skills = [
    { name: "HTML", percentage: "83%" },
    { name: "CSS", percentage: "60%" },
    { name: "JS", percentage: "76%" },
    { name: "React", percentage: "77%" },
    { name: "Bootstrap", percentage: "83%" },
  ];

  return (
    <motion.div
      className="hidden md:block w-64 h-screen bg-[#1F1F2A] text-white shadow-md sticky top-0"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="profile w-full" variants={itemVariants}>
        <motion.div
          className="flex flex-col items-center pb-4 bg-[#24242E]"
          whileHover={{ backgroundColor: "#2a2a36" }}
          transition={{ duration: 0.3 }}
        >
          <motion.img
            className="w-28 h-28 rounded-full mt-7 mb-2"
            src={profiloImage}
            alt="immagine profilo"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.05 }}
          />
          <motion.span
            className="text-sm font-bold mb-2"
            variants={itemVariants}
          >
            Simone Tignino
          </motion.span>
          <motion.span
            className="text-slate-300 text-xs"
            variants={itemVariants}
          >
            Full Stack Web Developer
          </motion.span>
        </motion.div>
      </motion.div>

      <motion.div className="general-info text-sm p-4" variants={itemVariants}>
        {[
          { label: "Regione:", value: "Sicilia" },
          { label: "Città:", value: "Pedara, CT" },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="flex justify-between"
            variants={itemVariants}
            whileHover={{ x: 5 }}
          >
            <span className="font-bold">{item.label}</span>
            <span className="text-slate-300">{item.value}</span>
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={itemVariants}>
        <motion.div
          className="spinners flex items-center justify-center mx-8 border-b-[1px] border-t-[1px] border-gray-500"
          variants={itemVariants}
        >
          <Spinner progress={100} value={"Italiano"} />
          <Spinner progress={70} value={"Inglese"} />
        </motion.div>
      </motion.div>

      <motion.div className="pro-lan p-4 mx-5" variants={itemVariants}>
        {skills.map((skill, index) => (
          <motion.div key={index} className="mt-4" variants={itemVariants}>
            <motion.div
              className="lan-info flex justify-between text-xs"
              whileHover={{ x: 5 }}
            >
              <span>{skill.name}</span>
              <span>{skill.percentage}</span>
            </motion.div>
            <div className="bar bg-slate-700 w-full h-1 rounded">
              <motion.div
                className="loaded-bar bg-amber-400 h-1 rounded"
                custom={skill.percentage}
                variants={progressBarVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ backgroundColor: "#fcd34d" }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div className="flex justify-center">
        <motion.div className="absolute bottom-2">
          <InfoSection />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
