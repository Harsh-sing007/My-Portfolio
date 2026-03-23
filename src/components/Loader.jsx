import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LOGS = [
  "INITIALIZING CLOUD INSTANCE...",
  "CONNECTING TO REPOSITORY...",
  "EXTRACTING ASSETS...",
  "OPTIMIZING BUNDLES...",
  "CONFIGURING CI/CD PIPELINES...",
  "INTERNALIZING LOGIC...",
  "BOOTING INTERFACE...",
  "SYSTEMS READY."
];

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const interval = 20;
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + step;
      });
    }, interval);

    // Dynamic Logs
    const logInterval = setInterval(() => {
      setLogIndex((prev) => (prev < LOGS.length - 1 ? prev + 1 : prev));
    }, 250);

    return () => {
      clearInterval(timer);
      clearInterval(logInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        clipPath: "inset(0 0 100% 0)",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
      }}
      className="fixed inset-0 z-[99999] bg-[#050505] flex flex-col items-center justify-center overflow-hidden font-mono"
    >
      {/* Background Decorative Grid (Subtle DevOps Vibe) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative z-10 flex flex-col items-center max-w-md w-full px-10">
        
        {/* Terminal Header */}
        <div className="w-full flex items-center gap-2 mb-4 opacity-20">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <div className="w-2 h-2 rounded-full bg-yellow-500" />
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <div className="h-[1px] flex-1 bg-white/20 ml-2" />
        </div>

        {/* Binary/Hex Background Flicker */}
        <div className="absolute left-[-20%] top-[-20%] opacity-[0.02] text-[8px] leading-none pointer-events-none select-none uppercase break-all">
            {Array.from({length: 20}).map((_, i) => (
                <p key={i}>0x48 0x61 0x72 0x73 0x68 0x20 0x53 0x69 0x6e 0x67 0x68 0x0a</p>
            ))}
        </div>

        {/* Main Progress Display */}
        <div className="relative w-full mb-8">
            <div className="flex justify-between items-baseline mb-2">
                <motion.span 
                  className="text-white text-4xl font-black tracking-tighter tabular-nums"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 0.1, repeat: Infinity }}
                >
                    {Math.round(progress)}
                    <span className="text-sm font-light text-white/40 ml-1">%</span>
                </motion.span>
                <span className="text-[10px] text-red-600 font-bold uppercase tracking-[0.3em]">Deploying...</span>
            </div>
            
            {/* Minimalist Progress Bar */}
            <div className="w-full h-[1px] bg-white/10 relative">
                <motion.div 
                    className="absolute inset-y-0 left-0 bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.5)]"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ ease: "linear" }}
                />
            </div>
        </div>

        {/* Terminal log logs */}
        <div className="w-full h-8 overflow-hidden relative">
            <AnimatePresence mode="wait">
                <motion.p
                    key={logIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 0.4 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-[10px] text-white uppercase tracking-[0.2em] font-medium"
                >
                    <span className="text-red-600 mr-2">➜</span>
                    {LOGS[logIndex]}
                </motion.p>
            </AnimatePresence>
        </div>

      </div>

      {/* Decorative corner accents */}
      <div className="absolute top-10 left-10 w-4 h-4 border-t border-l border-white/20" />
      <div className="absolute top-10 right-10 w-4 h-4 border-t border-r border-white/20" />
      <div className="absolute bottom-10 left-10 w-4 h-4 border-b border-l border-white/20" />
      <div className="absolute bottom-10 right-10 w-4 h-4 border-b border-r border-white/20" />

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-black/60" />
    </motion.div>
  );
};

export default Loader;
