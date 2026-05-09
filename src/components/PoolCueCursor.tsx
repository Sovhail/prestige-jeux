import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'motion/react';

export default function PoolCueCursor() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const requestRef = useRef<number>();

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const CUE_WIDTH = 70;
  const CUE_HEIGHT = 10;

  useEffect(() => {
    const checkDesktop = () => {
      // Check for both screen width and pointing device capability
      const isFinePointer = window.matchMedia('(pointer: fine)').matches;
      const isLargeScreen = window.innerWidth > 1024;
      setIsDesktop(isLargeScreen && isFinePointer);
    };

    checkDesktop();
    window.addEventListener('resize', checkDesktop);

    const moveCursor = (e: MouseEvent) => {
      // Small optimization: only update if we are actually in desktop mode
      if (window.innerWidth > 1024 && window.matchMedia('(pointer: fine)').matches) {
        mouseX.set(e.clientX - CUE_WIDTH * 0.85);
        mouseY.set(e.clientY - CUE_HEIGHT * 0.5);
      }
    };

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('gallery-item') ||
        target.closest('.interactive-card') ||
        target.closest('.clickable')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHoverStart);

    return () => {
      window.removeEventListener('resize', checkDesktop);
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHoverStart);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [mouseX, mouseY]);

  if (!isDesktop || shouldReduceMotion) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden">
      {/* Main Cue Cursor */}
      <motion.div
        style={{
          left: smoothX,
          top: smoothY,
          position: 'absolute',
          width: CUE_WIDTH,
          height: CUE_HEIGHT,
          rotate: -35,
          transformOrigin: '85% 50%',
          willChange: 'transform',
        }}
        animate={{
          scale: isHovering ? 1.12 : 1,
        }}
        className="relative flex items-center"
      >
        {/* Cue Stick Body */}
        <div className="w-full h-[4px] bg-gradient-to-r from-[#3d2b1f] via-[#795548] to-[#3d2b1f] rounded-full relative">
          {/* Gold Decorative Rings */}
          <div className="absolute left-[20%] w-[1px] h-full bg-gold/60" />
          <div className="absolute right-[15%] w-[2px] h-full bg-gold shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
          
          {/* Tip (The clickable point is roughly at the end of this) */}
          <div className="absolute right-0 w-[5px] h-full bg-black rounded-r-sm" />
          
          {/* Tip Glow */}
          <motion.div 
            animate={{ 
              opacity: isHovering ? [0.6, 0.9, 0.6] : [0.2, 0.4, 0.2],
              scale: isHovering ? [1, 1.4, 1] : [1, 1.1, 1]
            }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-gold/40 blur-[8px] rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
}
