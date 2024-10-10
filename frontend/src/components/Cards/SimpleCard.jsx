import { motion } from "framer-motion";

export default function SimpleCard({ title, desc }) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      className="card h-64 sm:max-h-48 max-w-96 my-2 sm:my-4 bg-[#2C2C36] relative rounded-lg"
    >
      <div className="container-card p-4 flex flex-col items-center justify-center">
        <div className="title text-[#f6c443] mb-3">
          <span>{title}</span>
        </div>
        <div className="description text-slate-300 text-[14px]">
          <span>{desc}</span>
        </div>
      </div>
      <div className="redirect text-[#f6c443] sm:ml-4 ml-2">
        <span className="text-[12px] underline flex">
          Richiedi Preventivo
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
      </div>
    </motion.div>
  );
}
