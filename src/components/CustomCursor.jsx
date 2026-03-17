import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const mouse = {
    x: useSpring(0, { stiffness: 500, damping: 28 }),
    y: useSpring(0, { stiffness: 500, damping: 28 })
  };

  useEffect(() => {
    const manageMouseMove = (e) => {
      const { clientX, clientY } = e;
      mouse.x.set(clientX);
      mouse.y.set(clientY);
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a') || e.target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", manageMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      <motion.div
        style={{
          left: mouse.x,
          top: mouse.y,
        }}
        animate={{
          scale: isHovering ? 2.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
        className={`fixed w-4 h-4 -ml-2 -mt-2 rounded-full mix-blend-difference transition-colors duration-300 ${
          isHovering ? "bg-white/10 border border-white/20" : "bg-white"
        }`}
      />
    </div>
  );
};

export default CustomCursor;
