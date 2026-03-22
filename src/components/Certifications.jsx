import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Award, ExternalLink, Sparkles } from 'lucide-react';

const certifications = [
  {
    id: 1,
    title: "Introduction to Generative AI",
    issuer: "Google Cloud",
    date: "Aug 2024",
    description: "Certification in Google Cloud's Generative AI course. Gained understanding of Generative AI, Large Language Models (LLMs), and how to leverage Google Cloud tools like Vertex AI for AI development.",
    logo: "https://www.gstatic.com/images/branding/product/2x/googleg_48dp.png",
    certImage: "/src/assets/certifications/cert1.webp", 
    color: "from-blue-600/20 to-blue-400/10",
    border: "border-blue-500/20",
    glow: "rgba(59, 130, 246, 0.3)",
    viewUrl: "https://www.skills.google/public_profiles/7d71a91a-f1bc-4cec-826b-33ba1ffeabcf/badges/16996641"
  },
  {
    id: 2,
    title: "Technology Job Simulation",
    issuer: "Deloitte / Forage",
    date: "July 2025",
    description: "Successfully completed a job simulation involving real-world tasks such as software engineering, problem solving, and professional communication in a corporate technology environment.",
    logo: "https://images.squarespace-cdn.com/content/v1/5f1fe9f4931a31704207908b/1598460670390-58R39V74RK9E7N7H07T4/Forage+Logo+Blue.png",
    certImage: "/src/assets/certifications/cert2.webp",
    color: "from-purple-600/20 to-pink-400/10",
    border: "border-purple-500/20",
    glow: "rgba(168, 85, 247, 0.3)",
    viewUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_ZDSPJF4E8zbWaEJdG_1752595131436_completion_certificate.pdf"
  },
  {
    id: 3,
    title: "Introduction to Internet of Things",
    issuer: "NPTEL / IIT Kharagpur",
    date: "Nov 2024",
    description: "Academic certification in Internet of Things from NPTEL. Learned about IoT system architecture, networking protocols, sensors, and cloud integration for smart applications.",
    logo: "https://mhrd.gov.in/sites/default/files/nptel_logo.png",
    certImage: "/src/assets/certifications/cert3.webp",
    color: "from-orange-600/20 to-amber-400/10",
    border: "border-orange-500/20",
    glow: "rgba(249, 115, 22, 0.3)",
    viewUrl: "https://drive.google.com/file/d/194lqnCwAMrlOFg175Xh2R-tGofH24Nsj/view?usp=drive_link"
  },
  {
    id: 4,
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "Dec 2024",
    description: "Completed the freeCodeCamp certification for Responsive Web Design. Gained proficiency in modern CSS (Flexbox, Grid), accessible design, and semantic HTML for a mobile-first web.",
    logo: "https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg",
    certImage: "/src/assets/certifications/cert4.webp",
    color: "from-emerald-600/20 to-green-400/10",
    border: "border-emerald-500/20",
    glow: "rgba(16, 185, 129, 0.3)",
    viewUrl: "https://drive.google.com/file/d/1FkcRjhIo-GkGb2TJQvFBrKgWRN3SEITj/view"
  },
  {
    id: 5,
    title: "Getting Started with DevOps on AWS",
    issuer: "Amazon Web Services",
    date: "Jan 2025",
    description: "Specialized AWS training on core DevOps principles. Focused on building CI/CD pipelines, automating infrastructure with AWS services, and maintaining cloud reliability.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    certImage: "/src/assets/certifications/cert5.webp",
    color: "from-amber-600/20 to-yellow-400/10",
    border: "border-amber-500/20",
    glow: "rgba(245, 158, 11, 0.3)",
    viewUrl: "https://drive.google.com/file/d/1ThY4x_WIIHed3Nlhh3Qjzhpm-Hu9cdXw/view?usp=drive_link"
  },
  {
    id: 6,
    title: "Mastering Data Structures & Algorithms",
    issuer: "Board Infinity",
    date: "Jul 2025",
    description: "Summer Training focused on problem-solving patterns: Sliding Window, Two Pointers, Binary Search, Recursion, Dynamic Programming, and Graph algorithms. Strengthened algorithmic efficiency through rigorous coding challenges.",
    logo: "https://www.boardinfinity.com/assets/img/bi-logo.png",
    certImage: "/src/assets/certifications/cert6.webp",
    color: "from-red-600/20 to-orange-400/10",
    border: "border-red-500/20",
    glow: "rgba(239, 68, 68, 0.3)",
    viewUrl: "https://drive.google.com/file/d/11xCL9ZBE-ICLaOYcgl2OG9gKkaUgabNl/view"
  }
];

const TiltCard = ({ cert, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]), { stiffness: 400, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), { stiffness: 400, damping: 30 });

  function onMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative flex flex-col rounded-[32px] overflow-hidden border border-white/10 bg-[#0d0d0d] transition-all duration-500 hover:border-white/20 active:scale-[0.98]"
    >
      {/* Dynamic Glow Effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ 
          background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${cert.glow} 0%, transparent 70%)` 
        }}
      />

      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-black/40" style={{ transform: "translateZ(20px)" }}>
        {cert.certImage ? (
          <motion.img 
            src={cert.certImage} 
            alt={cert.title}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
            variants={{ hovered: { scale: 1.1 } }}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-white/5 to-white/[0.02] p-8">
            <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4">
              <img src={cert.logo} alt="" className="w-10 h-10 object-contain opacity-40 grayscale" />
            </div>
            <p className="text-[10px] uppercase tracking-widest text-white/20 font-bold italic">Certificate Preview Pending</p>
          </div>
        )}

        {/* Floating Badge */}
        <div className="absolute top-4 right-4 z-20" style={{ transform: "translateZ(30px)" }}>
          <span className="text-[10px] font-bold text-white tracking-widest uppercase py-1 px-3 border border-white/10 rounded-full bg-black/60 backdrop-blur-md shadow-lg">
            {cert.date}
          </span>
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent mix-blend-overlay group-hover:opacity-50 transition-opacity" />
      </div>

      {/* Content Container */}
      <div className="relative p-8 pt-0 flex-1 flex flex-col justify-between" style={{ transform: "translateZ(10px)" }}>
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center p-1.5 group-hover:bg-white/10 transition-colors">
              <img src={cert.logo} alt={cert.issuer} className="w-full h-full object-contain brightness-110" />
            </div>
            <p className="text-[10px] font-bold tracking-[0.25em] text-white/40 uppercase group-hover:text-blue-400/80 transition-colors uppercase">{cert.issuer}</p>
          </div>
          
          <h3 className="text-xl md:text-2xl font-display font-bold text-white leading-tight mb-4 group-hover:text-blue-400 transition-colors tracking-tight">
            {cert.title}
          </h3>
          
          <p className="text-white/40 text-xs md:text-[13px] leading-relaxed line-clamp-2 md:line-clamp-3 group-hover:text-white/60 transition-colors">
            {cert.description}
          </p>
        </div>

        <div className="mt-8 flex gap-3 overflow-hidden">
          <a 
            href={cert.viewUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group/btn flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl bg-white text-black text-xs font-bold hover:bg-white/90 transition-all duration-300 shadow-xl shadow-black/40 relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Verify Credentials
              <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </span>
            {/* Gloss shine */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
          </a>
        </div>
      </div>

      {/* Modern Sparkle indicator on top left if it has an image */}
      {cert.certImage && (
        <div className="absolute top-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Sparkles className="w-4 h-4 text-blue-400/60 animate-pulse" />
        </div>
      )}
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <section id="certifications" className="relative w-full bg-[#080808] py-32 overflow-hidden border-t border-white/5">
      {/* Background decoration with animated bloom */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.03, 0.05, 0.03]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.03, 0.05, 0.03]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" 
      />

      <div className="container mx-auto px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 flex flex-col items-center text-center"
        >
          <motion.div 
            initial={{ scale: 0, rotate: -20 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-2xl shadow-blue-500/20 backdrop-blur-xl"
          >
            <Award className="w-7 h-7 text-white" />
          </motion.div>
          <p className="text-[12px] font-bold tracking-[0.4em] text-white/30 uppercase mb-4">Credentials & Accreditation</p>
          <h2 className="font-display text-[clamp(3.5rem,8vw,6.5rem)] leading-[0.9] tracking-tighter uppercase text-white">
            Official <br className="md:hidden" /> <span className="text-white/40">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {certifications.map((cert, index) => (
            <TiltCard key={cert.id} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
