import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Crown, Star, Shield, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Classique',
    price: '100 MAD',
    period: '/ heure',
    icon: Star,
    features: ['Table Standard', 'Accessoires Inclus', 'Service Café', 'Accès Lounge'],
    color: 'border-white/10'
  },
  {
    name: 'Prestige',
    price: '180 MAD',
    period: '/ heure',
    icon: Crown,
    features: ['Table Professionnelle', 'Queue Individuelle', 'Service Prioritaire', 'Accès Salons VIP', 'Boisson au choix'],
    color: 'border-gold/50 shadow-[0_0_30px_rgba(212,175,55,0.1)]'
  },
  {
    name: 'Membre Club',
    price: '2500 MAD',
    period: '/ mois',
    icon: Shield,
    features: ['Accès Illimité', 'Coach Privé (4h/mois)', 'Évènements Réservés', 'Vestiaire Privatif', 'Tarifs invités spéciaux'],
    color: 'border-gold'
  }
];

export default function Pricing() {
  const { t } = useLanguage();

  return (
    <div className="pt-40 pb-20 bg-black min-h-screen relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gold/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 -z-10" />

      <div className="max-w-7xl mx-auto px-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-center mb-32"
        >
          <span className="text-gold tracking-[0.4em] uppercase text-xs mb-4 block font-sans">L'Exclusivité</span>
          <h1 className="text-6xl md:text-8xl font-display font-bold gold-text mb-8">{t('pricing.title')}</h1>
          <p className="text-white/40 text-xl max-w-2xl mx-auto leading-relaxed">
            Choisissez l'expérience qui correspond à vos ambitions. Des forfaits sur-mesure pour une immersion totale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-12 border bg-luxury-gray relative group flex flex-col ${plan.color}`}
            >
              {i === 1 && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-black px-4 py-1 text-[10px] font-bold uppercase tracking-widest">
                  La plus prisée
                </div>
              )}
              
              <div className="flex justify-between items-start mb-12">
                 <plan.icon className="w-12 h-12 text-gold group-hover:scale-110 transition-transform duration-500" />
                 <h3 className="text-3xl font-display font-bold uppercase">{plan.name}</h3>
              </div>

              <div className="mb-12">
                 <span className="text-5xl font-display font-bold gold-text">{plan.price}</span>
                 <span className="text-white/40 ml-2 font-display italic">{plan.period}</span>
              </div>

              <ul className="space-y-6 flex-grow mb-12">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-sm text-white/60 group-hover:text-white transition-colors">
                    <Zap className="w-4 h-4 text-gold/40 group-hover:text-gold" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-5 text-[10px] font-bold uppercase tracking-widest transition-all duration-500 ${
                i === 2 ? 'btn-gold' : 'btn-outline-gold'
              }`}>
                Pratiquer l'Excellence
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 text-center">
           <p className="text-white/20 text-xs italic tracking-widest uppercase">
             * Toutes les sessions de billard incluent le service d'un assistant de salle.
           </p>
        </div>
      </div>
    </div>
  );
}
