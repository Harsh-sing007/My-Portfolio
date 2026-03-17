import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from './Magnetic';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#work', label: 'Work' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#services', label: 'TechStack' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-full max-w-fit px-4 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'}`}
      >
        <div className={`flex items-center justify-between gap-6 px-2 py-2 transition-all duration-500 rounded-full border ${isScrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-2xl border-white/10 shadow-2xl scale-[0.98]' : 'bg-transparent border-transparent'}`}>

          {/* Left Links — desktop only */}
          <div className="hidden lg:flex items-center gap-1 pl-4">
            <Magnetic><NavLink href="#about" label="About" /></Magnetic>
            <Magnetic><NavLink href="#work" label="Work" /></Magnetic>
            <Magnetic><NavLink href="#achievements" label="Achievements" /></Magnetic>
          </div>

          {/* Logo */}
          <Magnetic>
            <div className="w-9 h-9 lg:w-8 lg:h-8 rounded-full bg-white flex items-center justify-center font-display text-black text-sm ml-2 lg:ml-0 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              H
            </div>
          </Magnetic>

          {/* Right Links — desktop only */}
          <div className="hidden lg:flex items-center gap-1 pr-1.5">
            <Magnetic><NavLink href="#services" label="TechStack" /></Magnetic>
            <Magnetic><NavLink href="#contact" label="Contact" /></Magnetic>
            <Magnetic>
                <a
                  href="/HarshSinghCV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative h-10 pl-6 pr-5 flex items-center overflow-hidden bg-white/5 border border-white/10 rounded-full ml-2"
                >
                  <div className="relative flex items-center gap-2 transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                    <span className="text-[12px] font-black uppercase tracking-widest text-white/90">Resume</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center gap-2 translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0 bg-white rounded-full">
                    <span className="text-[12px] font-black uppercase tracking-widest text-black">Resume</span>
                  </div>
                </a>
            </Magnetic>
          </div>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="lg:hidden pr-4 pl-2 flex flex-col justify-center gap-1.5 w-10 h-10"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'w-0 opacity-0' : 'w-4'}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile slide-down menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
            animate={{ opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
            exit={{ opacity: 0, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[99] bg-[#050505] flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full noise opacity-[0.05] pointer-events-none" />
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                onClick={() => setMenuOpen(false)}
                className="font-display text-[clamp(2rem,8vw,3.5rem)] uppercase text-white/40 hover:text-white tracking-tighter transition-all hover:scale-110 active:scale-95"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="/HarshSinghCV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              onClick={() => setMenuOpen(false)}
              className="mt-4 px-8 py-4 bg-white text-black rounded-full font-black uppercase text-xs tracking-widest shadow-xl"
            >
              Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const NavLink = ({ href, label }) => (
  <a href={href} className="group relative h-10 px-4 flex items-center overflow-hidden">
    <div className="relative flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
      <span className="text-[11px] font-black uppercase tracking-widest text-white/40 h-10 flex items-center transition-colors group-hover:text-white/60">{label}</span>
      <span className="text-[11px] font-black uppercase tracking-widest text-white h-10 flex items-center absolute top-full">{label}</span>
    </div>
  </a>
);

export default Navbar;
