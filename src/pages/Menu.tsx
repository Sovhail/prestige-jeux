import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Coffee, Wine, Utensils, Star, Award } from 'lucide-react';

const menuSections = [
  {
    title: 'Signature Cocktails',
    icon: Wine,
    items: [
      { name: 'Le Prestige Royal', price: '85 MAD', desc: 'Élixir doré, notes d\'agrumes et flamme de cannelle.' },
      { name: '8-Ball Sour', price: '75 MAD', desc: 'Velours framboise, gin premium, écume légère.' },
      { name: 'Snooker Sunset', price: '90 MAD', desc: 'Mélange exotique, ambre et épices d\'Orient.' }
    ]
  },
  {
    title: 'Grands Crus Café',
    icon: Coffee,
    items: [
      { name: 'Blue Mountain', price: '45 MAD', desc: 'L\'excellence jamaïcaine, notes boisées et veloutées.' },
      { name: 'Yrgacheffe Éthiopie', price: '40 MAD', desc: 'Arômes floraux, acidité noble, fin de bouche citronnée.' },
      { name: 'Kopi Luwak', price: '95 MAD', desc: 'L\'exception mondiale, corps onctueux, arômes chocolatés.' }
    ]
  },
  {
    title: 'La Table Gastronomique',
    icon: Utensils,
    items: [
      { name: 'Filet de Boeuf Or', price: '210 MAD', desc: 'Maturation 30 jours, jus corsé à la truffe noire.' },
      { name: 'Saumon Mariné Anis', price: '185 MAD', desc: 'Fumé minute, crème fouettée au wasabi doux.' },
      { name: 'Tagine Royal Moderniste', price: '195 MAD', desc: 'Agneau de lait, fruits confits, pistaches torréfiées.' }
    ]
  }
];

export default function Menu() {
  const { t } = useLanguage();

  return (
    <div className="pt-40 pb-20 bg-black min-h-screen relative overflow-hidden">
      {/* Decorative Atmosphere */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-fire/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 -z-10" />

      <div className="max-w-5xl mx-auto px-8">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           className="text-center mb-32"
        >
          <span className="text-gold tracking-[0.4em] uppercase text-xs mb-4 block font-sans">Gastronomie</span>
          <h1 className="text-6xl md:text-[8vw] font-display font-bold gold-text leading-none mb-12">LA CARTE</h1>
          <div className="w-24 h-[1px] bg-gold mx-auto mb-8" />
          <p className="text-white/40 italic text-xl max-w-2xl mx-auto">
            Une symphonie de saveurs orchestrée pour les palais les plus exigeants.
          </p>
        </motion.div>

        <div className="space-y-32">
          {menuSections.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex items-center gap-6 mb-16">
                 <section.icon className="w-8 h-8 text-gold" />
                 <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-widest">{section.title}</h2>
                 <div className="flex-grow h-[1px] bg-gold/20" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
                 {section.items.map((item, i) => (
                   <motion.div 
                     key={i} 
                     className="group"
                     whileHover={{ x: 10 }}
                     transition={{ duration: 0.3 }}
                   >
                     <div className="flex justify-between items-baseline border-b border-white/5 pb-2 mb-2 group-hover:border-gold/30 transition-colors">
                        <h3 className="text-lg font-bold group-hover:text-gold transition-colors">{item.name}</h3>
                        <span className="text-gold font-display font-bold">{item.price}</span>
                     </div>
                     <p className="text-sm text-white/40 leading-relaxed italic">{item.desc}</p>
                   </motion.div>
                 ))}
              </div>
              
              {/* Decorative side number */}
              <div className="absolute -left-20 top-0 text-[100px] font-display font-bold text-white/[0.03] select-none pointer-events-none hidden xl:block">
                0{idx + 1}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="mt-40 p-12 border border-gold/10 bg-luxury-gray text-center relative"
        >
           <Award className="w-12 h-12 text-gold mx-auto mb-8 animate-float" />
           <p className="text-white/60 mb-8 max-w-lg mx-auto">Toutes nos viandes sont d'origine certifiée. Nos desserts sont préparés quotidiennement par notre chef pâtissier.</p>
           <div className="flex justify-center gap-2">
             <Star className="w-4 h-4 text-gold fill-gold" />
             <Star className="w-4 h-4 text-gold fill-gold" />
             <Star className="w-4 h-4 text-gold fill-gold" />
           </div>
        </motion.div>
      </div>
    </div>
  );
}
