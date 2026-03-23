import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { projects } from '../data/portfolioData';

/* ── Spring config for silky motion ── */
const spring = { type: 'spring', stiffness: 120, damping: 20 };

const Projects = () => {
  return (
    <section
      id="work"
      className="relative w-full bg-[#080808] text-white pt-28 pb-32 overflow-hidden"
    >
      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-violet-600/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-cyan-400/5 blur-[120px]" />

      {/* Heading */}
      <div className="container mx-auto px-6 md:px-16 mb-20 flex flex-col items-start">
        <motion.div 
          initial={{ scale: 0, rotate: -20 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-xl shadow-black/20"
        >
          <Briefcase className="w-6 h-6 text-white" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[11px] font-semibold tracking-[0.3em] text-white/30 uppercase mb-4"
        >
          Selected Work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-[clamp(3rem,7vw,6.5rem)] leading-[0.92] tracking-tighter uppercase text-white"
        >
          Projects
        </motion.h2>
      </div>

      {/* Cards */}
      <div className="container mx-auto px-6 md:px-16 flex flex-col gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

/* ── Individual project card ── */
const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  const rawY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const imgY = useSpring(rawY, { stiffness: 80, damping: 20 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.85, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover="hovered"
      className="group relative rounded-[32px] overflow-hidden border border-white/8 bg-white/[0.04] shadow-[0_8px_60px_rgba(0,0,0,0.5)] hover:border-white/20 transition-colors duration-500"
    >
      <div className="flex flex-col lg:flex-row min-h-[480px]">

        {/* ── Image panel ── */}
        <div className="relative lg:w-[55%] w-full h-[280px] lg:h-auto overflow-hidden bg-[#111]">
          <motion.img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover object-center"
            style={{ y: imgY, transform: "translateZ(0)" }}
            variants={{ hovered: { scale: 1.06 } }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          />
          {/* gradient fade right into content */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#080808] opacity-80 pointer-events-none hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-60 pointer-events-none lg:hidden" />

          {/* Index badge */}
          <div className="absolute top-5 left-5 w-9 h-9 rounded-full bg-black/50 border border-white/10 backdrop-blur-md flex items-center justify-center">
            <span className="text-[11px] font-bold text-white/40">0{project.id}</span>
          </div>
        </div>

        {/* ── Content panel ── */}
        <div className="relative z-10 flex flex-col justify-between lg:w-[45%] p-8 md:p-12 gap-8">

          <div className="space-y-6">
            {/* Tags row */}
            <motion.div
              className="flex flex-wrap gap-2"
              variants={{ hovered: { x: 4 } }}
              transition={spring}
            >
              <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white/30 border border-white/10 rounded-full">
                {project.year}
              </span>
              <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white/50 border border-white/10 rounded-full bg-white/5">
                {project.category}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h3
              className="text-2xl md:text-3xl lg:text-[2rem] font-display font-semibold leading-[1.15] tracking-tight text-white"
              variants={{ hovered: { x: 4 } }}
              transition={{ ...spring, delay: 0.03 }}
            >
              {project.title}
            </motion.h3>

            {/* Description */}
            <motion.p
              className="text-white/55 text-[15px] md:text-base leading-relaxed"
              variants={{ hovered: { x: 4 } }}
              transition={{ ...spring, delay: 0.05 }}
            >
              {project.description}
            </motion.p>

            {/* Tech stack */}
            {project.techStack && (
              <motion.div
                className="flex flex-wrap gap-2"
                variants={{ hovered: { x: 4 } }}
                transition={{ ...spring, delay: 0.07 }}
              >
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-[11px] font-semibold text-white/60 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:text-white/90 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            )}
          </div>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-wrap gap-3"
            variants={{ hovered: { x: 4 } }}
            transition={{ ...spring, delay: 0.09 }}
          >
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-bold hover:bg-white/90 transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.12)]"
              >
                Live Demo
                <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-white/80 text-sm font-semibold hover:bg-white/10 hover:border-white/30 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              View on GitHub
              <svg className="w-3 h-3 opacity-0 -translate-x-1 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom shine on hover */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
        variants={{ hovered: { opacity: 1, scaleX: 1 }, initial: { opacity: 0, scaleX: 0.4 } }}
        initial="initial"
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
};

export default Projects;
