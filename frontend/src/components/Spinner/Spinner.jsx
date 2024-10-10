import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Spinner({ progress, value }) {
    const [currentProgress, setCurrentProgress] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentProgress(progress);
        }, 300); // Piccolo ritardo per far partire l'animazione dopo che il componente è montato

        return () => clearTimeout(timer);
    }, [progress]);

    return (
        <motion.div 
            className="wrapper flex flex-col items-center justify-center p-3 py-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
        >
            <motion.div 
                className="circular-bar w-12 h-12 flex items-center justify-center rounded-full relative"
                initial={{ rotate: -90 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <svg className="absolute top-0 left-0" width="48" height="48">
                    <motion.circle
                        cx="24"
                        cy="24"
                        r="20"
                        stroke="#F6C444"
                        strokeWidth="8"
                        fill="transparent"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: currentProgress / 100 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                    <circle
                        cx="24"
                        cy="24"
                        r="20"
                        stroke="#181823"
                        strokeWidth="4"
                        fill="transparent"
                    />
                </svg>
                <motion.div 
                    className="percent flex items-center justify-center bg-[#1F1F2A] rounded-full w-10 h-10"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 10 }}
                >
                    <motion.span 
                        className="text-[10px] text-[grey]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        {currentProgress}%
                    </motion.span>
                </motion.div>
            </motion.div>
            <motion.label 
                className="text-[12px] mt-2"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.3 }}
            >
                {value}
            </motion.label>
        </motion.div>
    );
}