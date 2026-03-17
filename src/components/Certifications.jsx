import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certifications = [
  {
    id: 1,
    title: "Introduction to Generative AI",
    issuer: "Google Cloud",
    date: "Aug 2024",
    description: "Certification in Google Cloud's Generative AI course. Gained understanding of Generative AI, Large Language Models (LLMs), and how to leverage Google Cloud tools like Vertex AI for AI development.",
    logo: "https://www.gstatic.com/images/branding/product/2x/googleg_48dp.png",
    color: "from-blue-600/20 to-blue-400/10",
    border: "border-blue-500/20",
    viewUrl: "https://www.skills.google/public_profiles/7d71a91a-f1bc-4cec-826b-33ba1ffeabcf/badges/16996641"
  },
  {
    id: 2,
    title: "Technology Job Simulation",
    issuer: "Forage",
    date: "July 2025",
    description: "Successfully completed a job simulation involving real-world tasks such as software engineering, problem solving, and professional communication in a corporate technology environment.",
    logo: "https://images.squarespace-cdn.com/content/v1/5f1fe9f4931a31704207908b/1598460670390-58R39V74RK9E7N7H07T4/Forage+Logo+Blue.png",
    color: "from-purple-600/20 to-pink-400/10",
    border: "border-purple-500/20",
    viewUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_ZDSPJF4E8zbWaEJdG_1752595131436_completion_certificate.pdf"
  },
  {
    id: 3,
    title: "Introduction to Internet of Things",
    issuer: "NPTEL / IIT Kharagpur",
    date: "Nov 2024",
    description: "Academic certification in Internet of Things from NPTEL. Learned about IoT system architecture, networking protocols, sensors, and cloud integration for smart applications.",
    logo: "https://mhrd.gov.in/sites/default/files/nptel_logo.png",
    color: "from-orange-600/20 to-amber-400/10",
    border: "border-orange-500/20",
    viewUrl: "https://drive.google.com/file/d/194lqnCwAMrlOFg175Xh2R-tGofH24Nsj/view?usp=drive_link"
  },
  {
    id: 4,
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "Dec 2024",
    description: "Completed the freeCodeCamp certification for Responsive Web Design. Gained proficiency in modern CSS (Flexbox, Grid), accessible design, and semantic HTML for a mobile-first web.",
    logo: "https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg",
    color: "from-emerald-600/20 to-green-400/10",
    border: "border-emerald-500/20",
    viewUrl: "https://drive.google.com/file/d/1FkcRjhIo-GkGb2TJQvFBrKgWRN3SEITj/view"
  },
  {
    id: 5,
    title: "Getting Started with DevOps on AWS",
    issuer: "Amazon Web Services",
    date: "Jan 2025",
    description: "Specialized AWS training on core DevOps principles. Focused on building CI/CD pipelines, automating infrastructure with AWS services, and maintaining cloud reliability.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    color: "from-amber-600/20 to-yellow-400/10",
    border: "border-amber-500/20",
    viewUrl: "https://drive.google.com/file/d/1ThY4x_WIIHed3Nlhh3Qjzhpm-Hu9cdXw/view?usp=drive_link"
  },
  {
    id: 6,
    title: "Mastering Data Structures & Algorithms",
    issuer: "Board Infinity",
    date: "Jul 2025",
    description: "Summer Training focused on problem-solving patterns: Sliding Window, Two Pointers, Binary Search, Recursion, Dynamic Programming, and Graph algorithms. Strengthened algorithmic efficiency through rigorous coding challenges.",
    logo: "https://www.boardinfinity.com/assets/img/bi-logo.png",
    color: "from-red-600/20 to-orange-400/10",
    border: "border-red-500/20",
    viewUrl: "https://drive.google.com/file/d/11xCL9ZBE-ICLaOYcgl2OG9gKkaUgabNl/view"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="relative w-full bg-[#080808] py-32 overflow-hidden border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="mb-20 flex flex-col items-center text-center"
        >
          <motion.div 
            initial={{ scale: 0, rotate: 20 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: false }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-xl shadow-blue-500/10"
          >
            <Award className="w-6 h-6 text-white" />
          </motion.div>
          <p className="text-[11px] font-semibold tracking-[0.3em] text-white/30 uppercase mb-4">Credentials & Training</p>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.92] tracking-tighter uppercase text-white">Certifications</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`group relative flex flex-col p-8 rounded-[32px] border ${cert.border} bg-gradient-to-br ${cert.color} backdrop-blur-xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500`}
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center overflow-hidden p-3 group-hover:bg-black/60 transition-colors relative">
                  <img 
                    src={cert.logo} 
                    alt={cert.issuer} 
                    className="w-full h-full object-contain filter brightness-110 relative z-10" 
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-white/20 uppercase tracking-tighter text-center leading-none hidden">
                    {cert.issuer.split(' ').map(word => word[0]).join('')}
                  </div>
                </div>
                <span className="text-[10px] font-bold text-white/30 tracking-widest uppercase py-1 px-3 border border-white/5 rounded-full bg-white/5 italic">
                  {cert.date}
                </span>
              </div>

              <div className="flex-1">
                <p className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase mb-2">{cert.issuer}</p>
                <h3 className="text-xl md:text-2xl font-display font-semibold text-white leading-tight mb-4 group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-8">
                  {cert.description}
                </p>
              </div>

              <a 
                href={cert.viewUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group/btn flex items-center justify-between w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white/70 text-sm font-semibold hover:bg-white/10 hover:text-white transition-all overflow-hidden relative"
              >
                <span className="relative z-10">View Certificate</span>
                <svg className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
