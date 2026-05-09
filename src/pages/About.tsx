import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Trophy, Users, Star, Target, Crown, Sparkles, Award } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="pt-40 pb-20 bg-black min-h-screen">
      {/* Narrative Section */}
      <section className="max-w-7xl mx-auto px-8 mb-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
           <motion.div
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1 }}
           >
             <span className="text-gold tracking-[0.4em] uppercase text-xs mb-6 block font-sans">L'Héritage</span>
             <h1 className="text-6xl md:text-8xl font-display font-bold gold-text leading-tight mb-10">
               L'Art de <br />
               Vivre au <br />
               Sommet
             </h1>
             <p className="text-white/60 text-xl leading-relaxed mb-8 italic font-display">
               "Le prestige n'est pas une destination, c'est une exigence constante."
             </p>
             <div className="w-20 h-[2px] bg-gold mb-10" />
             <p className="text-white/40 text-lg leading-relaxed mb-12">
               Né d'une passion inébranlable pour le billard et les sports de précision, <strong>Prestige de jeux</strong> a été fondé avec une vision claire : redéfinir le concept du lounge de luxe à Meknès. Nous avons parcouru le monde pour sélectionner les meilleures tables, les éclairages les plus précis et les matériaux les plus nobles.
             </p>
             <div className="flex gap-8 items-center">
               <div className="p-6 border border-white/5 hover:border-gold/30 transition-colors">
                  <span className="block text-3xl font-display font-bold gold-text mb-2">2018</span>
                  <span className="text-[10px] tracking-widest uppercase text-white/40">Fondation</span>
               </div>
               <div className="p-6 border border-white/5 hover:border-gold/30 transition-colors">
                  <span className="block text-3xl font-display font-bold gold-text mb-2">1500㎡</span>
                  <span className="text-[10px] tracking-widest uppercase text-white/40">D'Excellence</span>
               </div>
               <motion.img 
                 initial={{ opacity: 0, rotate: -20 }}
                 whileInView={{ opacity: 1, rotate: 0 }}
                 src="/src/assets/images/regenerated_image_1778342688382.png" 
                 className="w-24 h-24 object-contain ml-auto opacity-50 hover:opacity-100 transition-opacity" 
                 alt="Seal of Quality" 
               />
             </div>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1 }}
             className="relative"
           >
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1000" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
                  alt="Prestige Interior" 
                />
              </div>
              {/* Floating element */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -bottom-10 -right-10 w-64 h-64 border border-gold/20 flex items-center justify-center bg-black/40 backdrop-blur-md hidden md:flex"
              >
                 <div className="text-center p-8 border border-gold/40">
                   <Crown className="w-10 h-10 text-gold mx-auto mb-4" />
                   <p className="text-xs tracking-widest uppercase font-bold text-gold">Membre Élite</p>
                   <p className="text-[10px] text-white/40 mt-2">Accès exclusif aux tournois VIP</p>
                 </div>
              </motion.div>
           </motion.div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-40 bg-luxury-gray relative overflow-hidden">
        <div className="absolute inset-0 bg-gold/5 blur-[200px] -z-10" />
        <div className="max-w-7xl mx-auto px-8">
           <div className="text-center mb-24">
             <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Nos Piliers</h2>
             <div className="w-24 h-[1px] bg-gold mx-auto" />
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
             {[
               { icon: Target, title: 'Précision', desc: 'Chaque table est nivelée au micron près pour garantir un jeu pur.' },
               { icon: Sparkles, title: 'Atmosphère', desc: 'Un design sonore et olfactif conçu pour l\'apaisement des sens.' },
               { icon: Award, title: 'Expertise', desc: 'Nos maîtres de salle sont des passionnés à votre service.' },
               { icon: Trophy, title: 'Compétition', desc: 'Le théâtre des plus grands duels de billard du pays.' }
             ].map((item, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="p-10 border border-white/5 bg-black/20 backdrop-blur-sm hover:border-gold/40 transition-all group"
               >
                 <item.icon className="w-10 h-10 text-gold mb-8 group-hover:scale-110 transition-transform" />
                 <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                 <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
               </motion.div>
             ))}
           </div>
        </div>
      </section>

      {/* Team / Founders Concept */}
      <section className="py-40">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
           >
             <div className="aspect-video overflow-hidden border border-white/5">
                <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" alt="Lounge" />
             </div>
           </motion.div>
           <div className="space-y-8">
             <h2 className="text-4xl font-display font-bold">Votre Satisfaction, <br />Notre Récompense</h2>
             <p className="text-white/60">
               Derrière chaque visite mémorable se cache une équipe dévouée. De la cuisine aux tables de jeu, nous travaillons de concert pour vous offrir le meilleur de Meknès.
             </p>
             <ul className="space-y-4">
               <li className="flex items-center gap-4 text-sm text-gold">
                 <div className="w-8 h-[1px] bg-gold" /> Personnel Bilingue
               </li>
               <li className="flex items-center gap-4 text-sm text-gold">
                 <div className="w-8 h-[1px] bg-gold" /> Sécurité 24/7
               </li>
               <li className="flex items-center gap-4 text-sm text-gold">
                 <div className="w-8 h-[1px] bg-gold" /> Service voiturier
               </li>
             </ul>
           </div>
        </div>
      </section>
    </div>
  );
}
