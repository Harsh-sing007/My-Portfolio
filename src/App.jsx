import React from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Recognitions from './components/Recognitions';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';


function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isLoading]);

  return (

    <div className="bg-[#050505] min-h-screen selection:bg-white/10 selection:text-white relative">
      <AnimatePresence mode="wait">
        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <CustomCursor />
      
      {/* Cinematic Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-red-600 origin-left z-[99999]"
        style={{ scaleX }}
      />

      {/* Global Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[998] opacity-[0.03] mix-blend-overlay noise" />

      {/* Main Content Rendered Immediately */}
      <motion.main 
        id="main" 
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Projects />
        <Certifications />
        <Recognitions />
        <Education />
        <Contact />
        <Footer />
      </motion.main>
    </div>

  );
}

export default App;
