import React from 'react';
import { motion } from 'framer-motion';
import { Code, Laptop, Server, Database } from 'lucide-react';

export default function DeveloperHero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.04, 0.62, 0.23, 0.98]
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const codeBlock = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative py-5 bg-[#1F1F2A] text-white overflow-hidden flex items-center">
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div 
          className="absolute top-10 left-10 w-32 h-32 bg-[#f6c443] rounded-full blur-[100px] opacity-20"
          animate={{ 
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-32 h-32 bg-[#f6c443] rounded-full blur-[100px] opacity-20"
          animate={{ 
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </motion.div>
      
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-4 z-10 flex flex-col lg:flex-row items-center justify-between">
        <motion.div 
          className="lg:w-1/2 space-y-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold"
            variants={item}
          >
            <motion.span 
              className="text-[#f6c443] inline-block"
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Ciao, sono Simone Tignino
            </motion.span>
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-3xl text-gray-400"
            variants={item}
          >
            Full Stack Web Developer
          </motion.h2>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            variants={item}
          >
            <SkillPill icon={<Laptop className="w-5 h-5" />} text="Frontend" />
            <SkillPill icon={<Server className="w-5 h-5" />} text="Backend" />
            <SkillPill icon={<Database className="w-5 h-5" />} text="Database" />
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            variants={item}
          >
            <motion.button 
              className="px-8 py-3 bg-[#f6c443] text-[#1F1F2A] rounded-full font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Visualizza progetti
            </motion.button>
            <motion.button 
              className="px-8 py-3 border-2 border-[#f6c443] text-[#f6c443] rounded-full font-semibold"
              whileHover={{ backgroundColor: '#f6c443', color: '#1F1F2A' }}
              whileTap={{ scale: 0.95 }}
            >
              Contattami
            </motion.button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="lg:w-1/2 mt-12 lg:mt-0"
          initial="hidden"
          animate="visible"
          variants={codeBlock}
        >
          <CodeEditor />
        </motion.div>
      </div>
      
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
      </motion.div>
    </div>
  );
}

function SkillPill({ icon, text }) {
  return (
    <motion.div 
      className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full"
      whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
    >
      {icon}
      <span>{text}</span>
    </motion.div>
  );
}

function CodeEditor() {
  const codeLines = [
    'const developer = {',
    '  name: "Simone Tignino",',
    '  role: "Full Stack Developer",',
    '  skills: ["Frontend", "Backend", "DevOps"],',
    '  passion: "Creating amazing web experiences"',
    '};'
  ];

  return (
    <motion.div 
      className="bg-black/30 p-6 rounded-lg backdrop-blur-sm border border-gray-700"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className="flex items-center space-x-2 mb-4">
        <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 rounded-full bg-red-500" />
        <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 rounded-full bg-yellow-500" />
        <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      <div className="font-mono">
        {codeLines.map((line, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ textIndent: line.startsWith('  ') ? '1rem' : '0' }}
          >
            <span className="text-blue-400">{line.includes(':') ? line.split(':')[0] + ':' : line}</span>
            <span className="text-green-400">{line.includes(':') ? line.split(':')[1] : ''}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}