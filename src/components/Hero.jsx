import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Magnetic from './Magnetic';

const STATS = [
  { value: '2+', label: 'Projects' },
  { value: '100+', label: 'LeetCode' },
  { value: '2025', label: 'Hacktoberfest' },
];

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  const textY = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const firstName = "Harsh".split("");
  const lastName = "Singh".split("");

  return (
    <section ref={containerRef} id="hero" className="relative min-h-screen w-full overflow-hidden bg-[#050505]">
      
      {/* ── Ambient Background Elements (Optimized to static for performance) ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-red-600/5 rounded-full blur-[120px]" 
        />
        <div 
          className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] bg-blue-600/5 rounded-full blur-[150px]" 
        />
      </div>

      {/* ═══════════════════════════════════════════════════
          MOBILE LAYOUT
      ═══════════════════════════════════════════════════ */}
      <div className="md:hidden flex flex-col min-h-screen px-6 pt-28 pb-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-2 self-start bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-8 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]" />
          </span>
          <span className="text-white/60 text-[10px] font-bold tracking-[0.2em] uppercase">Available for work</span>
        </motion.div>


        <div className="flex-1 flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            className="text-white text-[10px] uppercase font-bold tracking-[0.5em] mb-4"
          >
            Hello, I am
          </motion.p>

          <h1 className="flex flex-col mb-10">
            <div className="overflow-hidden flex">
              {firstName.map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="block font-display text-[22vw] leading-[0.85] tracking-tighter uppercase text-white"
                >
                  {char}
                </motion.span>
              ))}
            </div>
            <div className="overflow-hidden flex">
              {lastName.map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="block font-display text-[22vw] leading-[0.85] tracking-tighter uppercase"
                  style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)', color: 'transparent' }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </h1>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            className="mb-8 pl-4 border-l-2 border-red-600/50"
          >
            <p className="text-white font-bold mb-1 tracking-tight">Aspiring DevOps Engineer</p>
            <p className="text-white/40 text-xs leading-relaxed font-medium">
              Transforming code into scalable, automated infrastructure.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="grid grid-cols-2 gap-3"
        >
          <a href="#work" className="bg-white text-black py-4 rounded-2xl text-xs font-black uppercase tracking-widest text-center shadow-lg">Work</a>
          <a href="/HarshSinghCV.pdf" target="_blank" className="border border-white/10 bg-white/5 text-white py-4 rounded-2xl text-xs font-black uppercase tracking-widest text-center backdrop-blur-md">CV</a>
        </motion.div>
      </div>

      {/* ═══════════════════════════════════════════════════
          DESKTOP LAYOUT
      ═══════════════════════════════════════════════════ */}
      <div className="hidden md:flex flex-col items-center justify-start pt-48 min-h-screen relative z-10 px-16">
        
        {/* Background Decorative Title */}
        <motion.div 
          style={{ y: textY, opacity }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        >
          <span className="font-display text-[35vw] text-white/[0.02] uppercase leading-none tracking-tighter">
            Harsh
          </span>
        </motion.div>

        <div className="relative flex flex-col items-center z-20">
          {/* Name Reveal - Grouped for staggered motion */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.05 } }
            }}
            className="flex flex-col items-center"
          >
            <div className="flex overflow-hidden pb-4 lg:-ml-32">
                {firstName.map((char, i) => (
                <motion.span
                    key={i}
                    variants={{
                        hidden: { y: "100%", rotateX: 90 },
                        visible: { y: 0, rotateX: 0 }
                    }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="block font-display text-[12vw] lg:text-[12vw] text-white cursor-default select-none tracking-[-0.05em]"
                >
                    {char}
                </motion.span>
                ))}
            </div>

            <div className="flex overflow-hidden lg:-mr-32">
                {lastName.map((char, i) => (
                <motion.span
                    key={i}
                    variants={{
                        hidden: { y: "100%", rotateX: -90 },
                        visible: { y: 0, rotateX: 0 }
                    }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="block font-display text-[12vw] lg:text-[12vw] text-transparent cursor-default select-none tracking-[-0.05em]"
                    style={{ 
                        WebkitTextStroke: '2px rgba(255,255,255,0.4)',
                        filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.1))'
                    }}
                >
                    {char}
                </motion.span>
                ))}
            </div>
          </motion.div>
        </div>

        {/* Magnetic Buttons & Bio Section (Smooth Staggered Orchestration) */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                delayChildren: 1.2,
                staggerChildren: 0.1,
                duration: 0.8
              }
            }
          }}
          className="flex items-center gap-12 mt-12"
        >

          <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="flex flex-col items-end text-right gap-2 max-w-[300px]">
            <p className="text-white text-lg font-black tracking-tighter uppercase">Aspiring DevOps Engineer</p>
            <p className="text-white/30 text-sm font-medium leading-tight">Mastering Cloud, Automation, and Scalable Infrastructure.</p>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }} className="flex items-center gap-4">
            <Magnetic>
              <a href="#work" className="group relative flex items-center justify-center w-48 h-48 rounded-full bg-white text-black overflow-hidden shadow-2xl shadow-white/5 active:scale-95 transition-transform">
                <span className="relative z-10 font-black uppercase text-sm tracking-[0.2em]">View Work</span>
                <div className="absolute inset-0 bg-red-600 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
                <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-black uppercase text-sm tracking-[0.2em] text-white z-20">View Work</span>
              </a>
            </Magnetic>

            <Magnetic>
              <a 
                href="/HarshSinghCV.pdf" 
                target="_blank" 
                className="group relative flex items-center justify-center w-24 h-24 rounded-full border border-white/20 text-white overflow-hidden hover:border-white transition-all active:scale-95"
              >
                <span className="text-[10px] font-black uppercase tracking-widest text-center px-2">CV</span>
                <div className="absolute inset-0 bg-white scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
                <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-black uppercase text-[10px] text-black z-10">CV</span>
              </a>
            </Magnetic>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }} className="flex flex-col gap-6 font-mono">
            {STATS.map((s, i) => (
              <motion.div key={i} variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }} className="flex items-center gap-4">
                 <span className="text-white/10 text-4xl leading-none">0{i + 1}</span>
                 <div className="flex flex-col">
                   <span className="text-white text-xl font-black tracking-tighter leading-none">{s.value}</span>
                   <span className="text-white/20 text-[9px] uppercase font-bold tracking-widest leading-none mt-1">{s.label}</span>
                 </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent" />
        <span className="text-[10px] text-white/20 uppercase tracking-[0.5em] font-bold">Scroll Down</span>
      </motion.div>
    </section>
  );
};

export default Hero;
