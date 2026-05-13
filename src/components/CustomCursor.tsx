"use client";

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 150 };
  const scaleSpringConfig = { damping: 40, stiffness: 120 };
  
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);
  const scale = useSpring(isHovering ? 2.5 : 1, scaleSpringConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = target.closest('a, button, [role="button"]');
      setIsHovering(!!isClickable);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-brand-gold pointer-events-none z-[9999] hidden md:flex items-center justify-center"
      style={{
        x: x,
        y: y,
        translateX: '-50%',
        translateY: '-50%',
        scale: scale,
        backgroundColor: isHovering ? 'rgba(243, 156, 18, 0.1)' : 'transparent',
      }}
    >
      <div className={`w-1 h-1 bg-brand-gold rounded-full transition-transform duration-700 ${isHovering ? 'scale-0' : 'scale-100'}`} />
    </motion.div>
  );
};

export default CustomCursor;
