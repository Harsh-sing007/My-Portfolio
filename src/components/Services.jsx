import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Cpu, Terminal, Layout, Server, Settings, Code, Layers, Database, Shield } from 'lucide-react';

const techCategories = [
  {
    label: 'Languages',
    description: 'Core programming logic and application development.',
    icon: <Terminal className="w-5 h-5 text-amber-400" />,
    color: 'from-amber-600/15 to-orange-600/5',
    accent: 'text-amber-400',
    glow: 'rgba(245, 158, 11, 0.15)',
    techs: [
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
      { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
    ],
  },
  {
    label: 'Frontend & UI',
    description: 'Designing interactive and responsive web interfaces.',
    icon: <Layout className="w-5 h-5 text-cyan-400" />,
    color: 'from-cyan-600/15 to-blue-600/5',
    accent: 'text-cyan-400',
    glow: 'rgba(34, 211, 238, 0.15)',
    techs: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
      { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    ],
  },
  {
    label: 'Backend & Cloud',
    description: 'Server-side logic and scalable cloud infrastructure.',
    icon: <Database className="w-5 h-5 text-emerald-400" />,
    color: 'from-emerald-600/15 to-green-600/5',
    accent: 'text-emerald-400',
    glow: 'rgba(52, 211, 153, 0.15)',
    techs: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
      { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
      { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg' },
      { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
    ],
  },
  {
    label: 'DevOps & Tools',
    description: 'Automation, system administration, and deployment tools.',
    icon: <Settings className="w-5 h-5 text-purple-400" />,
    color: 'from-purple-600/15 to-pink-600/5',
    accent: 'text-purple-400',
    glow: 'rgba(192, 132, 252, 0.15)',
    techs: [
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
      { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' },
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
    ],
  },
];

const SkillCard = ({ category, index }) => {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [8, -8]), { stiffness: 400, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-150, 150], [-8, 8]), { stiffness: 400, damping: 30 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - (left + width / 2));
    mouseY.set(e.clientY - (top + height / 2));
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className="group relative flex flex-col justify-between p-10 md:p-12 rounded-[48px] border border-white/5 bg-[#080808] transition-all duration-500 overflow-hidden shadow-2xl h-full"
    >
      {/* Premium Border Animation (Glowing line that traces around) */}
      <motion.div 
        className="absolute inset-[1px] rounded-[47px] border-2 border-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20"
        style={{
          borderImage: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, ${category.glow} 180deg, transparent 360deg) 1`,
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
        }}
      />
      
      {/* Animated Static Border Glow */}
      <div className={`absolute inset-0 border border-white/10 group-hover:border-white/30 rounded-[48px] transition-colors duration-500 z-10`} />

      {/* Interactive Spotlight Glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"
        style={{
          background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${category.glow} 0%, transparent 60%)`,
        }}
      />

      {/* Decorative Gradient Blob */}
      <div className={`absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br ${category.color} blur-[120px] opacity-10 group-hover:opacity-30 transition-opacity z-0`} />

      <div className="relative z-10" style={{ transform: 'translateZ(40px)' }}>
        <div className="flex items-start justify-between mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 shadow-2xl backdrop-blur-xl group-hover:bg-white/10 transition-colors">
                {category.icon}
              </div>
              <h3 className={`text-2xl md:text-4xl font-display uppercase tracking-widest leading-none ${category.accent}`}>
                {category.label}
              </h3>
            </div>
            <p className="text-white/30 text-[15px] font-sans max-w-[340px] italic group-hover:text-white/50 transition-colors">
              {category.description}
            </p>
          </div>
        </div>

        {/* Tech Grid - Spacier Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-10">
          {category.techs.map((tech, i) => (
            <motion.div
              key={tech.name}
              className="flex flex-col items-center group/tech"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + (i * 0.05) }}
            >
              {/* Perpetual Motion Icon Container */}
              <motion.div
                animate={{ 
                  y: [0, -6, 0],
                  scale: [1, 1.05, 1],
                  rotate: [0, (i % 2 === 0 ? 3 : -3), 0]
                }}
                transition={{ 
                  duration: 5 + (i % 3), 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                whileHover={{ y: -12, scale: 1.25, rotate: 0 }}
                className="w-16 h-16 md:w-20 md:h-20 rounded-[28px] bg-white/[0.04] border border-white/5 p-4 flex items-center justify-center backdrop-blur-md shadow-2xl group-hover/tech:border-white/30 group-hover/tech:bg-white/10 transition-all duration-300"
              >
                <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain filter drop-shadow-2xl brightness-125" />
              </motion.div>
              <span className="mt-5 text-[11px] font-extrabold tracking-[0.2em] uppercase text-white/20 group-hover/tech:text-cyan-400 group-hover/tech:scale-110 transition-all duration-300">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Glowing Shine Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
};

const Services = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section 
      ref={containerRef}
      id="services" 
      className="bg-[#050505] min-h-screen py-32 md:py-48 px-8 md:px-16 relative overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Cinematic Background */}
      <motion.div 
        style={{ y: textY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.015] select-none"
      >
        <span className="font-display text-[50vw] uppercase text-white tracking-tighter">STACK</span>
      </motion.div>

      <div className="container mx-auto max-w-[1500px] relative z-10">
        <div className="mb-32 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="w-20 h-20 rounded-[32px] bg-white/5 border border-white/10 flex items-center justify-center mb-10 shadow-2xl shadow-blue-500/10 backdrop-blur-3xl"
          >
            <Cpu className="w-10 h-10 text-white" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-[clamp(5rem,12vw,10rem)] text-white uppercase leading-[0.8] tracking-tighter"
          >
            Technical <br /> <span className="text-white/30">Mastery</span>
          </motion.h2>
        </div>

        {/* Spacier 2-column grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-20">
          {techCategories.map((cat, index) => (
            <SkillCard key={cat.label} category={cat} index={index} />
          ))}
        </div>
      </div>

      {/* Floating Animated Orbs */}
      <motion.div 
        animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 -left-1/4 w-[1000px] h-[1000px] bg-blue-600/[0.03] blur-[200px] rounded-full pointer-events-none" 
      />
      <motion.div 
        animate={{ x: [0, -120, 0], y: [0, 80, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 -right-1/4 w-[900px] h-[900px] bg-purple-600/[0.03] blur-[180px] rounded-full pointer-events-none" 
      />
    </section>
  );
};

export default Services;
