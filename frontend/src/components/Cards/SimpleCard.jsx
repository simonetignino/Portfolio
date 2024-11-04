import { motion } from "framer-motion";

const SimpleCard = ({ title, desc, price }) => {
  // Definiamo le varianti di animazione simili a quelle usate in HeroSection
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 1.5, // Ritardo iniziale di 1.5s come richiesto
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.04, 0.62, 0.23, 0.98],
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex justify-center"
    >
      <div className="card w-80 sm:w-80 h-56 sm:max-h-48 my-2 sm:my-4 bg-[#2C2C36] relative rounded-lg">
        <div className="container-card p-4 flex flex-col items-center justify-center">
          <motion.div className="title text-[#f6c443] mb-3" variants={item}>
            <span>{title}</span>
          </motion.div>
          <motion.div
            className="description text-slate-300 text-[14px] sm:text-[14px] md:text-[14px] lg:text-[14px] "
            variants={item}
          >
            <span>{desc}</span>
          </motion.div>
          <motion.div
            className="description text-[#f6c443] text-[14px] sm:mt-10 mt-16 md:mt-6 xl:mt-10"
            variants={item}
          >
            <span>{price}</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default SimpleCard;