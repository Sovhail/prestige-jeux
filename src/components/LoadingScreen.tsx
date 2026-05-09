import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Animated 8-Ball */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotate: -180 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="relative w-32 h-32 mb-8"
          >
            <div className="absolute inset-0 bg-black rounded-full shadow-[inset_-10px_-10px_30px_rgba(255,255,255,0.1),0_0_50px_rgba(212,175,55,0.2)] flex items-center justify-center border border-white/5">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-3xl">8</span>
              </div>
            </div>
            {/* Glow Effect */}
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute inset-0 rounded-full bg-gold/20 blur-2xl -z-10"
            />
          </motion.div>

          {/* Text Reveal */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-2xl md:text-4xl font-display font-bold tracking-[0.3em] gold-text uppercase"
            >
              Prestige
            </motion.h1>
          </div>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '200px' }}
            transition={{ delay: 0.8, duration: 1.2 }}
            className="h-[1px] bg-gold/50 mt-4"
          />

          {/* Background Sparks/Fire Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: Math.random() * window.innerWidth, 
                  y: window.innerHeight + 10,
                  opacity: 0 
                }}
                animate={{ 
                  y: -10,
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0]
                }}
                transition={{ 
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
                className="absolute w-1 h-1 bg-fire rounded-full blur-[1px]"
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
