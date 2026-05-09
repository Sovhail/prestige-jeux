import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Trophy, Coffee, Utensils, Star, Music, Users, Shield, Clock } from 'lucide-react';

const services = [
  {
    id: 'billiard',
    icon: Trophy,
    title: t => t('services.billiard.title'),
    desc: 'L\'excellence du billard avec des tables de compétition internationale. Un éclairage de précision et des queues de haute facture.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1000',
    features: ['Tables de tournoi', 'Accessoires Premium', 'Coaching Privé']
  },
  {
    id: 'snooker',
    icon: Star,
    title: t => t('services.snooker.title'),
    desc: 'Un espace dédié au snooker professionnel. Feutre de laine vierge et ambiance feutrée pour une concentration maximale.',
    image: 'https://images.unsplash.com/photo-1609133333333-e9909247c87c?q=80&w=1000',
    features: ['Dimensions Officielles', 'Silence Absolu', 'Espace VIP']
  },
  {
    id: 'cafe',
    icon: Coffee,
    title: t => t('services.cafe.title'),
    desc: 'Une sélection de cafés rares et de thés d\'exception servis dans un cadre lounge sophistiqué.',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000',
    features: ['Barista Expert', 'Grands Crus', 'Pâtisseries Fines']
  },
  {
    id: 'restaurant',
    icon: Utensils,
    title: t => t('services.restaurant.title'),
    desc: 'Une carte gastronomique raffinée alliant tradition marocaine et modernité internationale.',
    image: 'https://images.unsplash.com/photo-1574673139737-c1011383842c?q=80&w=1000',
    features: ['Chef Étoilé', 'Produits Frais', 'Dîners Privés']
  },
  {
    id: 'events',
    icon: Users,
    title: t => t('services.events.title'),
    desc: 'Privatisez nos espaces pour vos évènements corporatifs ou célébrations privées de prestige.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000',
    features: ['Service Traiteur', 'Équipement AV', 'Sécurité Privée']
  }
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <div className="pt-40 pb-20 bg-black">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-8 mb-32">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="max-w-3xl"
        >
          <span className="text-gold tracking-[0.4em] uppercase text-xs mb-6 block font-sans">L'Expérience</span>
          <h1 className="text-6xl md:text-8xl font-display font-bold gold-text mb-8">Nos Espaces <br />de Prestige</h1>
          <p className="text-white/40 text-xl leading-relaxed">
            Chaque détail a été pensé pour offrir une parenthèse d'exception. Découvrez l'alliance parfaite entre sport de précision et art de vivre.
          </p>
        </motion.div>
      </div>

      {/* Services List */}
      <div className="space-y-40">
        {services.map((service, i) => (
          <section key={service.id} className="relative">
             <div className={`max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`${i % 2 !== 0 ? 'lg:order-2' : ''}`}
                >
                  <div className="relative group overflow-hidden">
                     <motion.img 
                       whileHover={{ scale: 1.05 }}
                       transition={{ duration: 0.8 }}
                       src={service.image} 
                       className="w-full aspect-[4/5] object-cover border border-white/10" 
                       alt={service.id} 
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-10"
                >
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <service.icon className="w-10 h-10 text-gold" />
                    <span className="text-gold/40 font-display italic text-2xl">0{i+1}</span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-display font-bold">{service.title(t)}</h2>
                  <p className="text-white/60 text-lg leading-relaxed">
                    {service.desc}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3 rtl:space-x-reverse group">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full group-hover:scale-150 transition-transform" />
                        <span className="text-xs uppercase tracking-widest text-white/80 group-hover:text-gold transition-colors">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-10">
                    <button className="btn-outline-gold">EN SAVOIR PLUS</button>
                  </div>
                </motion.div>
             </div>
          </section>
        ))}
      </div>

      {/* Philosophy / Quality Section */}
      <section className="py-40 mt-40 bg-luxury-gray relative">
         <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Shield, title: 'Confidentialité', desc: 'Des espaces pensés pour votre discrétion absolue.' },
              { icon: Clock, title: 'Disponibilité', desc: 'Une conciergerie à votre écoute jusqu\'au bout de la nuit.' },
              { icon: Star, title: 'Exclusivité', desc: 'Des privilèges réservés à nos membres les plus fidèles.' }
            ].map((item, i) => (
              <div key={i} className="text-center space-y-6 group">
                <div className="w-20 h-20 bg-black border border-gold/20 flex items-center justify-center mx-auto group-hover:border-gold transition-colors rotate-45 group-hover:rotate-0 duration-500">
                  <item.icon className="w-8 h-8 text-gold -rotate-45 group-hover:rotate-0 transition-all duration-500" />
                </div>
                <h3 className="text-xl font-bold pt-4">{item.title}</h3>
                <p className="text-white/40 text-sm max-w-xs mx-auto">{item.desc}</p>
              </div>
            ))}
         </div>
      </section>
    </div>
  );
}
