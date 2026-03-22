import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from './Magnetic';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Progress Animation
    let start = null;
    const duration = 1500; // Faster for better production perception

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const pct = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(pct);
      
      if (pct < 100) {
        requestAnimationFrame(step);
      } else {
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(onComplete, 1000);
        }, 500);
      }
    };

    requestAnimationFrame(step);

    // Particle Background Logic
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let particles = [];
    const particleCount = 60;
    const mouse = { x: null, y: null, radius: 150 };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    handleResize();

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
        this.color = `rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1})`;
      }

      update() {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = mouse.radius;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;

        if (distance < mouse.radius) {
          this.x -= directionX;
          this.y -= directionY;
        } else {
          if (this.x !== this.baseX) {
            let dx = this.x - this.baseX;
            this.x -= dx / 10;
          }
          if (this.y !== this.baseY) {
            let dy = this.y - this.baseY;
            this.y -= dy / 10;
          }
        }
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [onComplete]);

  const letters = 'HARSH SINGH'.split('');

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        y: "-100%",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
      }}
      className="fixed inset-0 z-[99999] bg-[#050505] flex flex-col items-center justify-center overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-40"
      />

      {/* Decorative center ring */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.05 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute w-[80vw] h-[80vw] rounded-full border border-white"
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* Letters Reveal */}
        <div className="flex gap-[0.02em] overflow-hidden mb-8">
          {letters.map((l, i) =>
            l === ' ' ? (
              <span key={i} className="w-[0.5em]" />
            ) : (
              <Magnetic key={i}>
                <motion.span
                  initial={{ y: '100%', rotateX: -90 }}
                  animate={{ y: 0, rotateX: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.2 + i * 0.04,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                  className="inline-block font-display text-[12vw] md:text-[8vw] uppercase text-white leading-none tracking-tighter cursor-default select-none transition-all duration-500 hover:text-red-600 hover:drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]"
                >
                  {l}
                </motion.span>
              </Magnetic>
            )
          )}
        </div>

        {/* Dynamic Progress Indicator */}
        <motion.div 
          className="flex flex-col items-center gap-4 group cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-[180px] md:w-[240px] h-[2px] bg-white/5 relative overflow-hidden rounded-full transition-all duration-300 group-hover:h-[4px] group-hover:bg-white/10">
            <motion.div
              className="absolute inset-y-0 left-0 bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.8)]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>
          
          <div className="flex items-center gap-6 overflow-hidden">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              className="text-white font-sans text-[10px] tracking-[0.5em] uppercase"
            >
              Loading Experience
            </motion.span>
            <motion.div className="flex items-baseline gap-1">
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-white font-sans text-xl md:text-2xl font-light tabular-nums"
              >
                {progress}
              </motion.span>
              <span className="text-white/20 text-xs font-sans font-light uppercase tracking-widest">%</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Interactive Hint */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 1 }}
        className="absolute bottom-12 text-[10px] uppercase tracking-[0.8em] text-white pointer-events-none"
      >
        Hover to Explore
      </motion.div>


      {/* Modern Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-radial-gradient from-transparent to-black/40" />
    </motion.div>
  );
};

export default Loader;

