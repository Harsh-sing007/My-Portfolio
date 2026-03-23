import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import critical images to preload during the sequence
import heroPic from '../assets/hero.webp';
import aidjImg from '../assets/projects/aidj.webp';
import ratinamazeImg from '../assets/projects/ratinamaze.webp';
import cicdImg from '../assets/projects/cicd.webp';

const CRITICAL_ASSETS = [
  heroPic,
  aidjImg,
  ratinamazeImg,
  cicdImg,
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg'
];

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [glitchText, setGlitchText] = useState("INIT_UPLINK");
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  useEffect(() => {
    let loadedCount = 0;
    const totalAssets = CRITICAL_ASSETS.length;

    // Real Asset Preloading
    CRITICAL_ASSETS.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        const newProgress = (loadedCount / totalAssets) * 100;
        // Only jump progress if it's ahead of the timer
        setProgress(prev => Math.max(prev, newProgress));
        if (loadedCount === totalAssets) setAssetsLoaded(true);
      };
    });

    // Minimum visual timer for smooth perception
    const duration = 2500;
    const interval = 30;
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100 && assetsLoaded) {
          clearInterval(timer);
          setTimeout(onComplete, 800);
          return 100;
        }
        if (prev >= 95 && !assetsLoaded) return 95; // Wait for assets at 95%
        return Math.min(prev + step, 100);
      });
    }, interval);

    const glitchInterval = setInterval(() => {
        const texts = ["CORE_BOOT", "SYNC_ASSETS", "IMAGE_PRELOAD", "HTTP_HANDSHAKE", "UPLINK_STABLE", "AUTH_ADMIN"];
        setGlitchText(texts[Math.floor(Math.random() * texts.length)]);
    }, 150);

    return () => {
      clearInterval(timer);
      clearInterval(glitchInterval);
    };
  }, [onComplete, assetsLoaded]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 1.05,
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

      <div className="relative z-10 flex flex-col items-center">
        
        {/* Central Core Uplink Ring */}
        <div className="relative w-48 h-48 mb-12">
            <motion.svg 
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                viewBox="0 0 100 100" 
                className="w-full h-full"
            >
                <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                <circle 
                    cx="50" cy="50" r="48" 
                    fill="none" stroke="#DC2626" strokeWidth="1" 
                    strokeDasharray="15 185" 
                    strokeLinecap="round"
                />
            </motion.svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.span 
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 0.1, repeat: Infinity }}
                    className="text-6xl font-black text-white tracking-tighter"
                >
                    {Math.round(progress)}
                </motion.span>
                <span className="text-[10px] text-white/30 tracking-[0.5em] mt-2">STREAMING</span>
            </div>
        </div>

        {/* Status Sequence */}
        <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-6">
                <motion.div 
                    key={glitchText}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-[10px] font-mono text-red-600 font-bold tracking-[0.4em]"
                >
                    {glitchText}
                </motion.div>
            </div>

            <div className="flex gap-1">
                {Array.from({length: 12}).map((_, i) => (
                    <div 
                        key={i}
                        className={`w-3 h-1 transition-all duration-300 ${progress > (i / 12) * 100 ? 'bg-red-600 shadow-[0_0_8px_#DC2626]' : 'bg-white/5'}`}
                    />
                ))}
            </div>
        </div>
      </div>

      {/* Info labels */}
      <div className="absolute top-12 left-12 flex flex-col gap-1 opacity-20 text-[9px] font-mono tracking-widest leading-none">
          <p>ST_ASSETS: {assetsLoaded ? "SYNCED" : "WAITING"}</p>
          <p>LOAD_LEVEL: {Math.round(progress)}%</p>
      </div>
    </motion.div>
  );
};

export default Loader;
