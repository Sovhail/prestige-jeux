import { motion, useScroll, useTransform } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { ChevronRight, Award, Coffee, Utensils, Zap, Play, Star, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import Magnetic from '../components/Magnetic';

export default function Home() {
  const { t, isRTL } = useLanguage();
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative bg-black select-none overflow-x-hidden" ref={containerRef}>
      {/* Cinematic Hero */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-[6vw] pt-40 pb-20 md:py-32">
        {/* Background Layers */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ x: mousePos.x * -0.2, y: y1.get() * 0.5 }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-[0.08] filter brightness-[0.4] transition-opacity duration-1000"
            style={{ backgroundImage: 'url("/src/assets/images/regenerated_image_1778342660777.jpg")' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-10" />
        </motion.div>

        <div className="relative z-20 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-20 items-center">
          {/* Left Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 md:space-y-12"
          >
            <motion.span 
              initial={{ opacity: 0, letterSpacing: '0.1em' }}
              animate={{ opacity: 1, letterSpacing: '0.4em' }}
              transition={{ duration: 1.2 }}
              className="inline-block text-gold text-[10px] md:text-xs font-sans uppercase tracking-[0.4em] font-bold"
            >
              {t('hero.tagline')}
            </motion.span>
            
            <h1 
              className="font-display font-bold tracking-tighter text-white max-w-[900px] leading-[0.9]"
              style={{
                fontSize: "clamp(2.4rem, 12vw, 4.5rem)", // Default mobile
                // Responsive override will be handled by Tailwind or standard CSS if needed, 
                // but let's use the explicit desktop clamp in a style tag for precision
              }}
            >
              <span className="block mb-2 md:mb-4">PRESTIGE</span>
              <span className="gold-text block" style={{ fontSize: "clamp(2.4rem, 13vw, 8rem)", height: "139.19799999999998px" }}>DE JEUX</span>
            </h1>

            <p className="text-white/60 text-base md:text-lg max-w-lg leading-relaxed font-sans">
              L'excellence du billard et du snooker à Meknès. Un sanctuaire de luxe où le jeu rencontre le raffinement absolu.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
              <Magnetic>
                <Link to="/reservation" className="btn-gold group relative w-full sm:w-auto overflow-hidden text-center block">
                  <span className="relative z-10 uppercase tracking-widest">{t('hero.cta')}</span>
                  <motion.div 
                    className="absolute inset-0 bg-white/20 translate-x-[-101%] group-hover:translate-x-[101%] transition-transform duration-700 skew-x-12"
                  />
                </Link>
              </Magnetic>
              <Magnetic>
                <Link to="/gallery" className="btn-outline-gold group flex items-center justify-center space-x-3 w-full sm:w-auto">
                  <Play className="w-4 h-4 text-gold fill-gold group-hover:fill-black transition-colors" />
                  <span className="uppercase tracking-widest">VOIR LA GALERIE</span>
                </Link>
              </Magnetic>
            </div>
          </motion.div>

          {/* Right Side: Visual */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.9, x: 30 }}
             animate={{ opacity: 1, scale: 1, x: 0 }}
             transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
             className="relative flex justify-center items-center h-full min-h-[200px] md:min-h-[500px]"
          >
            {/* Ambient Background Glow */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1], 
                opacity: [0.1, 0.2, 0.1] 
              }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute w-[60%] aspect-square bg-gold/20 blur-[80px] md:blur-[120px] rounded-full pointer-events-none"
            />
            
            <div className="relative group w-full max-w-[min(400px,42vw)] md:max-w-[min(520px,42vw)]">
              <motion.img 
                src="/src/assets/images/regenerated_image_1778347791544.jpg" 
                style={{ width: "379.062px" }}
                className="h-auto object-contain drop-shadow-[0_0_30px_rgba(212,175,55,0.3)] md:drop-shadow-[0_0_50px_rgba(212,175,55,0.4)]"
                animate={{ 
                  y: [0, -15, 0],
                  filter: [
                    "drop-shadow(0 0 30px rgba(212,175,55,0.3))",
                    "drop-shadow(0 0 60px rgba(212,175,55,0.6))",
                    "drop-shadow(0 0 30px rgba(212,175,55,0.3))"
                  ]
                }}
                transition={{ 
                  y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
                  filter: { repeat: Infinity, duration: 3, ease: "easeInOut" }
                }}
              />
              
              {/* Flame overlay animation refined */}
              <motion.div
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute inset-0 bg-gradient-to-t from-gold/10 to-transparent mix-blend-overlay pointer-events-none"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Reveal Hint */}
        <motion.div 
          animate={{ opacity: [0.2, 0.5, 0.2], y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 z-30 flex flex-col items-center pointer-events-none md:flex hidden"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-gold via-gold/40 to-transparent" />
        </motion.div>
      </section>

      {/* About Section - Overlapping style */}
      <section id="about" className="relative py-40 z-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 text-[200px] font-display font-bold text-white/[0.03] select-none pointer-events-none">
              01
            </div>
            <div className="relative z-10 space-y-8">
              <span className="inline-block px-4 py-1 border border-gold/30 text-gold text-[10px] tracking-widest uppercase">
                L'âme du Prestige
              </span>
              <h2 className="text-5xl md:text-7xl font-display font-bold leading-tight">
                Une passion <br />
                <span className="gold-text">gravée</span> dans l'or
              </h2>
              <p className="text-white/60 text-lg leading-relaxed max-w-lg">
                Prestige de jeux n'est pas seulement un lieu de divertissement. C'est une institution dédiée au raffinement. Ici, le temps s'arrête pour laisser place à la stratégie, à la précision et au plaisir des sens.
              </p>
              <div className="flex gap-12 pt-8">
                <div>
                  <h4 className="text-4xl font-display font-bold gold-text">12</h4>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Tables Importées</p>
                </div>
                <div>
                  <h4 className="text-4xl font-display font-bold gold-text">20+</h4>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Grands Crus Café</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6 relative"
          >
             <div className="space-y-6 pt-12">
               <img src="/src/assets/images/regenerated_image_1778342962977.png" className="w-full h-80 object-cover border border-white/10 hover:border-gold/50 transition-colors" alt="Pool" />
               <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000" className="w-full h-64 object-cover border border-white/10 hover:border-gold/50 transition-colors" alt="Cocktail" />
             </div>
             <div className="space-y-6">
               <img src="/src/assets/images/regenerated_image_1778342982723.png" className="w-full h-64 object-cover border border-white/10 hover:border-gold/50 transition-colors" alt="Snooker" />
               <img src="/src/assets/images/regenerated_image_1778343001913.png" className="w-full h-80 object-cover border border-white/10 hover:border-gold/50 transition-colors" alt="Interior" />
             </div>
             {/* Decorative element */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-gold/20 rotate-45 pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* Services Showcase - Horizontal Scroll Concept style */}
      <section id="services" className="py-40 bg-luxury-gray relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
           <span className="text-gold tracking-[.4em] uppercase text-xs mb-4 block font-sans">Services</span>
           <h2 className="text-5xl md:text-8xl font-display font-bold gold-text">L'Excellence du Service</h2>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { id: '01', title: 'Billard & Snooker', icon: Trophy, desc: 'L\'élite des tables pour une expérience inégalée.' },
            { id: '02', title: 'La Table Prestige', icon: Utensils, desc: 'Une gastronomie qui défie vos attentes.' },
            { id: '03', title: 'Le Bar Lounge', icon: Coffee, desc: 'Des élixirs pour accompagner votre succès.' },
            { id: '04', title: 'Réservations Privées', icon: Star, desc: 'Vos évènements, notre mise en scène.' }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass group p-10 hover:border-gold/50 transition-all duration-500 hover:-translate-y-4"
            >
              <div className="flex justify-between items-start mb-12">
                <item.icon className="w-12 h-12 text-gold group-hover:scale-110 group-hover:text-fire transition-all duration-500" />
                <span className="text-4xl font-display font-bold text-white/5 group-hover:text-gold/20 transition-colors">{item.id}</span>
              </div>
              <h3 className="text-2xl font-bold mb-6 group-hover:gold-text transition-colors">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-8">{item.desc}</p>
              <Link to="/services" className="text-xs tracking-widest text-gold flex items-center group/link">
                <span>EN SAVOIR PLUS</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-2" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-40 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <span className="text-gold tracking-[.4em] uppercase text-xs mb-4 block font-sans">Témoignages</span>
           <h2 className="text-4xl md:text-6xl font-display font-bold mb-20 italic">"Une expérience sensorielle sans compromis."</h2>
           
           <div className="relative h-40">
             <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               className="text-white/60 space-y-4"
             >
                <p className="text-xl">"Le meilleur service de billard au Maroc. L'ambiance est feutrée, le personnel est d'une discrétion exemplaire."</p>
                <div className="pt-4 flex justify-center items-center gap-4">
                  <div className="w-12 h-px bg-gold" />
                  <span className="text-gold font-bold uppercase tracking-widest">Amine B.</span>
                  <div className="w-12 h-px bg-gold" />
                </div>
             </motion.div>
           </div>
        </div>
      </section>
      
      {/* Visual CTA */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
        <div 
          className="absolute inset-0 bg-cover bg-fixed bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1574673139737-c1011383842c?q=80&w=2000")' }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center px-6">
           <h2 className="text-5xl md:text-8xl font-display font-bold mb-12">Prêt à jouer ?</h2>
           <Link to="/reservation" className="btn-gold">RÉSERVER VOTRE TABLE</Link>
        </div>
      </section>
    </div>
  );
}
