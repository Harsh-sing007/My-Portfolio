import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

const recognitions = [
  {
    id: 1,
    title: "Super Contributor",
    event: "Hacktoberfest 2025",
    description: "Successfully merged 20+ quality pull requests into various open-source projects, demonstrating strong collaboration skills and commitment to the open-source community.",
    icon: "🎉",
    gradient: "from-fuchsia-600/30 to-purple-600/10",
    border: "border-fuchsia-500/20",
    shadow: "shadow-fuchsia-500/10"
  },
  {
    id: 2,
    title: "100 Days Badge",
    event: "LeetCode",
    description: "Achieved the 100 Days Badge on LeetCode by maintaining an unbroken streak of solving complex algorithmic problems, showcasing consistency and strong logical building.",
    icon: "🔥",
    gradient: "from-amber-600/30 to-orange-600/10",
    border: "border-amber-500/20",
    shadow: "shadow-amber-500/10"
  },
  {
    id: 3,
    title: "300+ DSA Problems",
    event: "Multi-Platform",
    description: "Solved over 300 data structures and algorithmic problems across LeetCode, GeeksforGeeks, SPOJ, and other platforms, mastering advanced problem-solving techniques.",
    icon: "💻",
    gradient: "from-blue-600/30 to-indigo-600/10",
    border: "border-blue-500/20",
    shadow: "shadow-blue-500/10"
  }
];

const Recognitions = () => {
  return (
    <section id="achievements" className="w-full bg-[#0d0d0d] py-32 relative overflow-hidden">
      {/* Decorative vertical lines */}
      <div className="absolute inset-0 flex justify-around opacity-5 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="w-px h-full bg-white" />
        ))}
      </div>

      <div className="container mx-auto px-6 md:px-16 relative z-10">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: false }}
           transition={{ duration: 0.8 }}
           className="mb-16 flex flex-col items-center md:items-start"
        >
          <motion.div 
            initial={{ scale: 0, rotate: -20 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: false }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-xl shadow-fuchsia-500/10"
          >
            <Trophy className="w-6 h-6 text-white" />
          </motion.div>
          <p className="text-[11px] font-semibold tracking-[0.4em] text-white/30 uppercase mb-4 text-center md:text-left">Milestones</p>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.92] tracking-tighter uppercase text-white text-center md:text-left">Achievements</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {recognitions.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative p-1 rounded-[30px] bg-gradient-to-br ${item.gradient} ${item.border} border overflow-hidden group shadow-2xl ${item.shadow}`}
            >
              {/* Internal card glass */}
              <div className="bg-black/80 backdrop-blur-3xl rounded-[29px] p-8 h-full flex flex-col justify-between border border-white/5">
                <div>
                  <div className="text-4xl mb-6 transform group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-500 inline-block">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-white/30 text-xs font-black uppercase tracking-[0.2em] mb-4">
                    {item.event}
                  </p>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-3">
                  <div className="w-8 h-px bg-white/10 group-hover:w-16 transition-all duration-500" />
                  <span className="text-[10px] font-bold text-white/20 group-hover:text-white/60 uppercase tracking-widest transition-colors">Verified</span>
                </div>
              </div>

              {/* Shine effect that travels across on hover */}
              <div className="absolute top-0 bottom-0 left-0 w-20 bg-white/10 skew-x-[30deg] -translate-x-[200%] group-hover:translate-x-[500%] transition-transform duration-1000 ease-in-out pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recognitions;
