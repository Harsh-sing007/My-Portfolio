import { motion, useScroll, useTransform } from 'framer-motion';
import { Cpu } from 'lucide-react';

const techCategories = [
  {
    label: 'Languages',
    color: 'from-amber-500/10 to-orange-500/5',
    accent: 'text-amber-400',
    border: 'border-amber-500/20',
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
    color: 'from-cyan-500/10 to-blue-500/5',
    accent: 'text-cyan-400',
    border: 'border-cyan-500/20',
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
    color: 'from-emerald-500/10 to-green-500/5',
    accent: 'text-emerald-400',
    border: 'border-emerald-500/20',
    techs: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
      { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg' },
      { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg' },
      { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
    ],
  },
  {
    label: 'DevOps & Tools',
    color: 'from-purple-500/10 to-pink-500/5',
    accent: 'text-purple-400',
    border: 'border-purple-500/20',
    techs: [
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
      { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' },
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 80, damping: 15 } },
};

const Services = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <section id="services" className="bg-[#050505] py-[120px] relative overflow-hidden min-h-screen">
      
      {/* Parallax Background Text */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none"
      >
        <span className="font-display text-[40vw] uppercase leading-none tracking-tighter">
          Stack
        </span>
      </motion.div>

      {/* Animated Background Gradients */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse pointer-events-none" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] mix-blend-screen animate-pulse pointer-events-none delay-1000" style={{ animationDuration: '6s' }} />

      <div className="container px-6 md:px-12 mx-auto max-w-[1240px] relative z-10">
        
        {/* Header Section */}
        <div className="mb-24 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center mb-6"
          >
            <motion.div 
              initial={{ scale: 0, rotate: -45 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-xl shadow-purple-500/10"
            >
              <Cpu className="w-6 h-6 text-white" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-semibold tracking-widest text-white/70 uppercase">Technical Expertise</span>
            </motion.div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', delay: 0.1 }}
            className="font-display text-[50px] md:text-[80px] text-white uppercase leading-none tracking-tighter"
          >
            Skills & Stack
          </motion.h2>
        </div>

        {/* Categories Grid (Bento Box Style) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {techCategories.map((cat, index) => (
            <motion.div
              key={cat.label}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className={`relative overflow-hidden rounded-[32px] border ${cat.border} bg-gradient-to-b ${cat.color} p-8 md:p-10 backdrop-blur-xl group/card shadow-2xl flex flex-col`}
            >
              {/* Card Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 bg-gradient-to-br from-white/5 to-transparent transition-opacity duration-700 pointer-events-none" />

              <div className="mb-8">
                <h3 className={`text-2xl md:text-3xl font-display uppercase tracking-widest ${cat.accent}`}>
                  {cat.label}
                </h3>
              </div>

              {/* Technologies Grid inside Card */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-auto">
                {cat.techs.map((tech, techIdx) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (techIdx * 0.05) }}
                    className="relative group/tech flex flex-col items-center"
                  >
                    {/* Floating Icon Container */}
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#0f0f0f]/80 border border-white/5 shadow-inner flex items-center justify-center p-3 sm:p-4 mb-3 transition-all duration-300 group-hover/tech:bg-white/10 group-hover/tech:border-white/20 group-hover/tech:scale-110 group-hover/tech:-translate-y-1">
                      <img 
                        src={tech.icon} 
                        alt={tech.name} 
                        className="w-full h-full object-contain filter drop-shadow-lg transition-transform duration-500 group-hover/tech:scale-110"
                      />
                    </div>

                    {/* Tech Name Label */}
                    <span className="text-[10px] md:text-xs font-sans font-medium text-white/60 tracking-wider uppercase text-center transition-colors duration-300 group-hover/tech:text-white">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
