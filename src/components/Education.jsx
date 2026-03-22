import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { GraduationCap, Calendar, Award, School, Sparkles } from 'lucide-react';
import { education } from '../data/portfolioData';

const EducationCard = ({ item, index }) => {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-100, 100], [5, -5]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-5, 5]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - (rect.left + rect.width / 2));
    mouseY.set(e.clientY - (rect.top + rect.height / 2));
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className="group relative p-10 md:p-12 rounded-[48px] border border-white/5 bg-[#0a0a0a] backdrop-blur-3xl hover:border-white/10 transition-all duration-500 overflow-hidden shadow-2xl h-full flex flex-col items-center text-center group"
    >
      {/* Dynamic Cursor Spotlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"
        style={{
          background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(220, 38, 38, 0.05) 0%, transparent 60%)`,
        }}
      />

      <div className="relative z-10 w-full flex flex-col items-center h-full" style={{ transform: 'translateZ(40px)' }}>
        
        {/* Modern Logo Showcase with Shine */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
          className="relative mb-10 w-fit"
        >
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-[32px] bg-white/[0.04] border border-white/5 p-5 flex items-center justify-center backdrop-blur-3xl shadow-2xl group-hover:bg-white/[0.08] group-hover:border-white/20 transition-all duration-500 overflow-hidden">
            {item.logo ? (
              <img 
                src={item.logo} 
                alt={item.title} 
                className="w-full h-full object-contain brightness-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform duration-700"
              />
            ) : (
              <School className="w-12 h-12 text-white/20" />
            )}
            
            {/* Glossy Overlay Shine */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"
            />
          </div>

          {/* Floating Sparkle Indicator */}
          <div className="absolute -right-2 -top-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <Sparkles className="w-5 h-5 text-red-500 animate-pulse" />
          </div>
          
          {/* Outer Pulsing Glow */}
          <div className="absolute inset-[-10px] rounded-[38px] border border-red-500/10 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-40 transition-all duration-700 animate-pulse" />
        </motion.div>

        {/* Date Indicator Badge */}
        <div className="flex items-center gap-2 px-5 py-2 rounded-2xl border border-white/5 bg-white/[0.03] text-[10px] font-black text-white/30 tracking-[0.3em] uppercase mb-8 group-hover:bg-white/10 group-hover:text-white transition-all duration-500">
          <Calendar className="w-3.5 h-3.5" />
          {item.year}
        </div>

        <div className="flex-1 flex flex-col items-center">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 leading-[1.1] tracking-tighter uppercase max-w-[320px]">
            {item.title}
            </h3>
            
            <p className="text-white/40 text-[14px] md:text-[15px] font-medium leading-[1.6] mb-8 max-w-[260px] italic">
            {item.subtitle}
            </p>
        </div>

        {item.grade && (
          <div className="flex items-center gap-3 px-6 py-2.5 rounded-full border border-red-500/10 bg-red-500/[0.04] text-[11px] font-black text-red-500 tracking-[0.2em] uppercase shadow-inner mt-auto">
            <Award className="w-4 h-4" />
            {item.grade}
          </div>
        )}
      </div>

      {/* Hero-style Background Typography */}
      <div className="absolute -right-12 -bottom-12 w-48 h-48 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-1000 pointer-events-none rotate-12">
        <GraduationCap className="w-full h-full text-white" />
      </div>
      
      {/* Radial Gradient Corner Flare */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-red-600/5 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
};

const Education = () => {
  return (
    <section id="education" className="w-full min-h-screen bg-[#050505] relative overflow-hidden flex flex-col justify-center py-32 px-8 md:px-16 border-t border-white/5">
      {/* Large Cinematic Background Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.012] pointer-events-none select-none">
        <span className="font-display text-[42vw] uppercase text-white tracking-tighter">ALMA</span>
      </div>

      <div className="container mx-auto max-w-[1550px] relative z-10">
        <div className="mb-24 flex flex-col items-center text-center">
          <motion.div 
            initial={{ scale: 0, rotate: -30 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="w-20 h-20 rounded-[28px] bg-white/5 border border-white/10 flex items-center justify-center mb-10 shadow-2xl backdrop-blur-2xl"
          >
            <GraduationCap className="w-10 h-10 text-red-600" />
          </motion.div>
          
          <p className="text-[12px] font-black tracking-[0.6em] text-white/20 uppercase mb-5 italic">Educational Background</p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-[clamp(4.5rem,11vw,9.5rem)] leading-[0.8] tracking-tighter uppercase text-white"
          >
            Academy <br /> <span className="text-white/20">& Provenance</span>
          </motion.h2>
        </div>

        {/* Improved Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-14 items-stretch">
          {education.map((item, index) => (
            <EducationCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>

      {/* Cinematic Ambient Effects */}
      <div className="absolute top-0 right-[-10%] w-[1000px] h-[1000px] bg-red-600/[0.03] blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-[-10%] w-[900px] h-[900px] bg-blue-600/[0.02] blur-[180px] rounded-full pointer-events-none" />
    </section>
  );
};

export default Education;
