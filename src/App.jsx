import React, { Suspense, lazy } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';

// Lazy load components below the fold
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Services = lazy(() => import('./components/Services'));
const Education = lazy(() => import('./components/Education'));
const Certifications = lazy(() => import('./components/Certifications'));
const Recognitions = lazy(() => import('./components/Recognitions'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

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
        
        {/* Progressive Loading with Individual Suspense Boundaries for better performance */}
        <Suspense fallback={<div className="h-96 bg-[#050505]" />}>
          <About />
        </Suspense>
        
        <Suspense fallback={<div className="h-96 bg-[#050505]" />}>
          <Services />
        </Suspense>

        <Suspense fallback={<div className="h-[600px] bg-[#050505]" />}>
          <Projects />
        </Suspense>

        <Suspense fallback={<div className="h-96 bg-[#050505]" />}>
          <Certifications />
        </Suspense>

        <Suspense fallback={<div className="h-96 bg-[#050505]" />}>
          <Recognitions />
        </Suspense>

        <Suspense fallback={<div className="h-96 bg-[#050505]" />}>
          <Education />
        </Suspense>

        <Suspense fallback={<div className="h-96 bg-[#050505]" />}>
          <Contact />
        </Suspense>

        <Suspense fallback={<div className="h-64 bg-[#050505]" />}>
          <Footer />
        </Suspense>
      </motion.main>
    </div>
  );
}

export default App;
