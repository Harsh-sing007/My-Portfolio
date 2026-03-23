import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [glitchText, setGlitchText] = useState("INIT_UPLINK");

  useEffect(() => {
    const duration = 2000;
    const interval = 20;
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + step;
      });
    }, interval);

    const glitchInterval = setInterval(() => {
        const texts = ["CORE_BOOT", "DATA_SYNC", "AES_ENCRYPT", "GRID_LOAD", "UPLINK_STABLE", "AUTH_ADMIN"];
        setGlitchText(texts[Math.floor(Math.random() * texts.length)]);
    }, 150);

    return () => {
      clearInterval(timer);
      clearInterval(glitchInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 1.1,
        filter: "blur(20px)",
        transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
      }}
      className="fixed inset-0 z-[99999] bg-[#050505] flex flex-col items-center justify-center overflow-hidden font-display uppercase"
    >
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-[0.05]">
          <div className="absolute inset-0" style={{ 
              backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', 
              backgroundSize: '40px 40px',
              mask: 'radial-gradient(circle at center, black, transparent 80%)'
          }} />
      </div>

      {/* Scanning Laser Line */}
      <motion.div 
        animate={{ top: ['-10%', '110%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-600/40 to-transparent z-10 blur-[1px]"
      />

      <div className="relative z-10 flex flex-col items-center">
        
        {/* Central Core Uplink Ring */}
        <div className="relative w-48 h-48 mb-12">
            {/* Outer Spinning Ring */}
            <motion.svg 
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                viewBox="0 0 100 100" 
                className="w-full h-full"
            >
                <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                <circle 
                    cx="50" cy="50" r="48" 
                    fill="none" stroke="#DC2626" strokeWidth="1" 
                    strokeDasharray="20 180" 
                    strokeLinecap="round"
                />
            </motion.svg>

            {/* Inner Ring */}
            <motion.svg 
                animate={{ rotate: -360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                viewBox="0 0 100 100" 
                className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)]"
            >
                <circle 
                    cx="50" cy="50" r="48" 
                    fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" 
                    strokeDasharray="10 40" 
                />
            </motion.svg>

            {/* Percentage Center */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.span 
                    animate={{ scale: [1, 1.05, 1], opacity: [1, 0.8, 1] }}
                    transition={{ duration: 0.1, repeat: Infinity }}
                    className="text-6xl font-black text-white tracking-tighter"
                >
                    {Math.round(progress)}
                </motion.span>
                <span className="text-[10px] text-white/30 tracking-[0.5em] mt-2">SYNCING</span>
            </div>
        </div>

        {/* Binary Footer Sequence */}
        <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-8">
                <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-white/20" />
                <motion.div 
                    key={glitchText}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-xs font-mono text-red-600 font-bold tracking-[0.3em]"
                >
                    {glitchText}
                </motion.div>
                <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-white/20" />
            </div>

            <div className="flex gap-2">
                {Array.from({length: 8}).map((_, i) => (
                    <motion.div 
                        key={i}
                        animate={{ opacity: [0.1, 0.5, 0.1] }}
                        transition={{ duration: 0.8, delay: i * 0.1, repeat: Infinity }}
                        className={`w-4 h-1 ${progress > (i + 1) * 12.5 ? 'bg-red-600 shadow-[0_0_10px_#DC2626]' : 'bg-white/10'}`}
                    />
                ))}
            </div>
        </div>
      </div>

      {/* Futuristic Corner Info */}
      <div className="absolute top-12 left-12 flex flex-col gap-1 opacity-20 text-[9px] font-mono tracking-widest leading-none">
          <p>ST_CODE: HARSH_007</p>
          <p>LOC_DATA: 23° 04' N / 72° 34' E</p>
          <p>STAT: NOMINAL</p>
      </div>

      <div className="absolute bottom-12 right-12 flex flex-col items-end gap-1 opacity-20 text-[9px] font-mono tracking-widest leading-none">
          <p>OS_V8.0.0_PRODUCTION</p>
          <p>EST_LOAD_TIME: 2.1S</p>
          <p>ROOT: /ARCHITECTURE</p>
      </div>

    </motion.div>
  );
};

export default Loader;
