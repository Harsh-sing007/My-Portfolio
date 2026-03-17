import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Github, Heart, ExternalLink, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="relative w-full bg-[#050505] text-white pt-32 pb-12 overflow-hidden border-t border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-red-600/10 to-transparent blur-[120px] pointer-events-none opacity-50" />

      <div className="container mx-auto px-6 md:px-16 relative z-10">
        <div className="flex flex-col items-center text-center space-y-16">
          
          {/* Final Message */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl mb-4"
            >
              🙇‍♂️
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display text-[clamp(2.5rem,7vw,6.5rem)] leading-[0.92] tracking-tighter uppercase text-white font-black"
            >
              Thank You <br /> For <span className="text-red-600">Stopping By</span>.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-white/40 text-lg md:text-xl font-medium tracking-wide max-w-2xl mx-auto"
            >
              I'm always looking for new challenges and interesting people to collaborate with. Let's make something incredible together.
            </motion.p>
          </div>

          {/* Social Links Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <SocialIcon href="https://linkedin.com/in/harsh-singh1712" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
            <SocialIcon href="mailto:harshsingh45831@gmail.com" icon={<Mail className="w-5 h-5" />} label="Email" />
            <SocialIcon href="https://github.com/Harsh-sing007" icon={<Github className="w-5 h-5" />} label="GitHub" />
          </motion.div>

          {/* Bottom Info Bar */}
          <div className="w-full pt-24 space-y-10">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex flex-col items-center md:items-start gap-2">
                <p className="text-[13px] font-bold tracking-widest text-white/20 uppercase">
                  Made with <Heart size={12} className="inline-block text-red-600 mx-1 mb-0.5 fill-red-600" /> by 
                  <span className="text-white ml-2">Harsh Singh</span>
                </p>
                <p className="text-[11px] text-white/10 font-medium">© 2026 • Aspiring DevOps Engineer</p>
              </div>

              {/* Scroll to top button */}
              <button 
                onClick={scrollToTop}
                className="group flex flex-col items-center gap-2 text-white/20 hover:text-white transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-red-600 group-hover:bg-red-600/10 transition-all duration-500">
                  <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Back to top</span>
              </button>

              <div className="flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-white/30">
                 <a href="#about" className="hover:text-white transition-colors">About</a>
                 <a href="#work" className="hover:text-white transition-colors">Work</a>
                 <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Cinematic corner fades */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-red-600/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-red-600/5 to-transparent pointer-events-none" />
    </footer>
  );
};

const SocialIcon = ({ href, icon, label }) => {
  const isExternal = href.startsWith('http');
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className="group relative flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden"
    >

    <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
      {icon}
    </div>
    <span className="relative z-10 text-sm font-bold text-white/60 group-hover:text-white transition-colors">
      {label}
    </span>
    {/* Shine effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
  </a>
    );
};


export default Footer;
