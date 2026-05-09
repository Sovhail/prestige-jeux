import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Faut-il réserver à l\'avance ?',
    answer: 'La réservation est fortement recommandée le soir et les week-ends pour garantir la disponibilité de nos tables de billard et snooker professionnelles.'
  },
  {
    question: 'Quels sont vos horaires d\'ouverture ?',
    answer: 'Nous sommes ouverts du lundi au dimanche, de 10h00 à 02h00 du matin en semaine, et jusqu\'à 04h00 du matin les vendredis et samedis.'
  },
  {
    question: 'Proposez-vous des espaces privés ?',
    answer: 'Oui, nous disposons de salons VIP et de zones privatisables pour vos évènements corporatifs ou célébrations personnelles.'
  },
  {
    question: 'Avez-vous un service voiturier ?',
    answer: 'Absolument. Un service de voiturier sécurisé est à votre disposition dès votre arrivée devant l\'établissement.'
  },
  {
    question: 'Le restaurant est-il accessible sans jouer ?',
    answer: 'Bien sûr. Notre restaurant gastronomique et notre café lounge accueillent tous les clients souhaitant passer un moment d\'exception, indépendamment de la pratique du billard.'
  }
];

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="pt-40 pb-20 bg-black min-h-screen">
      <div className="max-w-4xl mx-auto px-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-center mb-24"
        >
          <span className="text-gold tracking-[0.4em] uppercase text-xs mb-4 block font-sans">Support</span>
          <h1 className="text-6xl md:text-8xl font-display font-bold gold-text mb-12">Questions Fréquentes</h1>
          <div className="w-24 h-[1px] bg-gold mx-auto mb-8" />
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-white/5 bg-luxury-gray group"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-8 text-left transition-colors hover:text-gold"
              >
                <div className="flex items-center gap-6">
                   <HelpCircle className={`w-6 h-6 transition-colors ${openIndex === i ? 'text-gold' : 'text-white/20'}`} />
                   <span className="text-xl font-display font-medium">{faq.question}</span>
                </div>
                {openIndex === i ? <Minus className="text-gold" /> : <Plus className="text-gold/40 group-hover:text-gold" />}
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-8 pt-0 text-white/40 leading-relaxed border-t border-white/5 bg-black/20">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
