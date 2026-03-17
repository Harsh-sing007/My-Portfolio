import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { education } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="w-full bg-[#080808] py-32 relative overflow-hidden border-t border-white/5">
      {/* Background radial glow */}
      <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="mb-20 flex flex-col items-center md:items-start"
        >
          <motion.div 
            initial={{ scale: 0, rotate: -20 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: false }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-xl shadow-blue-500/10"
          >
            <GraduationCap className="w-6 h-6 text-white" />
          </motion.div>
          <p className="text-[11px] font-semibold tracking-[0.4em] text-white/30 uppercase mb-4 text-center md:text-left">Academic Journey</p>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.92] tracking-tighter uppercase text-white text-center md:text-left">Education</h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 relative">
          {/* Vertical line for the timeline effect */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-white/10 to-transparent" />

          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="relative pl-8 md:pl-20"
            >
              {/* Timeline marker */}
              <div className="absolute left-[-4px] md:left-[28px] top-4 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] z-10" />
              
              <div className="group relative p-8 rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:bg-white/[0.05] transition-all duration-500 overflow-hidden">
                {/* Subtle hover accent */}
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
                
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-[10px] font-bold text-white/40 tracking-[0.2em] uppercase py-1.5 px-3 border border-white/10 rounded-full bg-white/5">
                        {item.year}
                      </span>
                      {item.grade && (
                        <span className="text-[10px] font-bold text-blue-400 tracking-[0.2em] uppercase py-1.5 px-3 border border-blue-400/20 rounded-full bg-blue-400/10">
                          {item.grade}
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-display font-semibold text-white tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    <p className="text-white/60 text-lg md:text-xl font-medium leading-tight max-w-2xl">
                      {item.subtitle}
                    </p>
                  </div>
                  
                  {/* Decorative icon for the card */}
                  <div className="opacity-10 self-end md:self-auto group-hover:opacity-30 group-hover:scale-110 transition-all duration-500">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
                    </svg>
                  </div>
                </div>
                
                {/* Artistic background blur on card hover */}
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-500/10 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
