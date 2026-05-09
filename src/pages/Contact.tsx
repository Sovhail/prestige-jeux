import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Mail, MapPin, Send, MessageCircle, Globe } from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div className="pt-40 pb-20 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="mb-32"
        >
          <span className="text-gold tracking-[0.4em] uppercase text-xs mb-4 block font-sans">Contact & Conciergerie</span>
          <h1 className="text-6xl md:text-8xl font-display font-bold gold-text mb-8">{t('contact.title')}</h1>
          <p className="text-white/40 text-xl max-w-2xl leading-relaxed">
            Notre équipe est à votre entière disposition pour répondre à vos demandes les plus spécifiques. Excellence et discrétion garanties.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-40">
          {/* Info Column */}
          <div className="lg:col-span-5 space-y-16">
            <div className="space-y-12">
               <div className="flex items-start gap-8 group">
                 <div className="w-16 h-16 border border-gold/20 flex items-center justify-center group-hover:border-gold transition-colors duration-500">
                    <Phone className="w-6 h-6 text-gold" />
                 </div>
                 <div>
                    <h4 className="text-[10px] tracking-widest uppercase text-white/40 mb-2">Ligne Directe</h4>
                    <p className="text-2xl font-display font-bold text-white group-hover:text-gold transition-colors">+212 663-650333</p>
                 </div>
               </div>

               <div className="flex items-start gap-8 group">
                 <div className="w-16 h-16 border border-gold/20 flex items-center justify-center group-hover:border-gold transition-colors duration-500">
                    <MessageCircle className="w-6 h-6 text-gold" />
                 </div>
                 <div>
                    <h4 className="text-[10px] tracking-widest uppercase text-white/40 mb-2">WhatsApp Concierge</h4>
                    <p className="text-2xl font-display font-bold text-white group-hover:text-gold transition-colors">+212 663-650333</p>
                 </div>
               </div>

               <div className="flex items-start gap-8 group">
                 <div className="w-16 h-16 border border-gold/20 flex items-center justify-center group-hover:border-gold transition-colors duration-500">
                    <Mail className="w-6 h-6 text-gold" />
                 </div>
                 <div>
                    <h4 className="text-[10px] tracking-widest uppercase text-white/40 mb-2">Email Officiel</h4>
                    <p className="text-2xl font-display font-bold text-white group-hover:text-gold transition-colors">contact@prestigedejeux.ma</p>
                 </div>
               </div>

               <div className="flex items-start gap-8 group">
                 <div className="w-16 h-16 border border-gold/20 flex items-center justify-center group-hover:border-gold transition-colors duration-500">
                    <MapPin className="w-6 h-6 text-gold" />
                 </div>
                 <div>
                    <h4 className="text-[10px] tracking-widest uppercase text-white/40 mb-2">Localisation</h4>
                    <p className="text-xl font-display font-bold text-white group-hover:text-gold transition-colors">Angle Avenue FAR et Rue de la Liberté, <br />Meknès, Maroc</p>
                 </div>
               </div>
            </div>

            <div className="pt-8 p-12 border border-gold/10 bg-luxury-gray relative group overflow-hidden">
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
                 className="absolute -right-20 -bottom-20 w-64 h-64 border-[1px] border-gold/5 rounded-full"
               />
               <Globe className="w-8 h-8 text-gold/40 mb-6" />
               <p className="text-white/40 text-sm leading-relaxed relative z-10">
                 Situé au coeur battant de Meknès, Prestige de Jeux vous accueille tous les jours. Un espace d'exception pour vos moments de détente.
               </p>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-luxury-gray p-12 lg:p-20 relative">
             {/* Decorative corner */}
             <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-gold/20" />
             <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-gold/20" />

             <form className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                   <div className="space-y-4 relative group">
                      <label className="text-[10px] tracking-widest uppercase text-white/40 font-bold group-focus-within:text-gold transition-colors">Votre Nom</label>
                      <input className="w-full bg-transparent border-b border-white/10 py-4 focus:border-gold outline-none text-xl font-display transition-colors" placeholder="Jean Dupont" />
                   </div>
                   <div className="space-y-4 group">
                      <label className="text-[10px] tracking-widest uppercase text-white/40 font-bold group-focus-within:text-gold transition-colors">Votre Email</label>
                      <input className="w-full bg-transparent border-b border-white/10 py-4 focus:border-gold outline-none text-xl font-display transition-colors" placeholder="jean@mail.com" />
                   </div>
                </div>

                <div className="space-y-4 group">
                   <label className="text-[10px] tracking-widest uppercase text-white/40 font-bold group-focus-within:text-gold transition-colors">Sujet de Demande</label>
                   <input className="w-full bg-transparent border-b border-white/10 py-4 focus:border-gold outline-none text-xl font-display transition-colors" placeholder="Réservation VIP / Buffet / Evènement" />
                </div>

                <div className="space-y-4 group">
                   <label className="text-[10px] tracking-widest uppercase text-white/40 font-bold group-focus-within:text-gold transition-colors">Message</label>
                   <textarea className="w-full bg-transparent border-b border-white/10 py-4 min-h-[150px] focus:border-gold outline-none text-xl font-display transition-colors resize-none" placeholder="Comment pouvons-nous vous servir ?" />
                </div>

                <div className="pt-8">
                   <button className="btn-gold group w-full flex items-center justify-center space-x-4">
                      <span>ENVOYER LA DEMANDE</span>
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2" />
                   </button>
                </div>
             </form>
          </div>
        </div>

        {/* Map Section */}
        <section className="relative h-[600px] grayscale hover:grayscale-0 transition-all duration-1000 mb-20 overflow-hidden ring-1 ring-gold/20">
           <div className="absolute inset-0 bg-gold/5 pointer-events-none z-10" />
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.16554698539!2d-5.573677223590826!3d33.85962422787549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda05bda0426f649%3A0x5b61857c6384cd3f!2sPrestige%20de%20jeux!5e0!3m2!1sfr!2sma!4v1778345525664!5m2!1sfr!2sma" 
             className="w-full h-full border-0 brightness-[0.7] invert"
             loading="lazy" 
             referrerPolicy="no-referrer-when-downgrade"
           />
           {/* Map Label Overlay */}
           <div className="absolute bottom-12 left-12 z-20 bg-black/90 backdrop-blur-md p-8 border border-gold/20 max-w-xs transition-transform hover:scale-105 duration-500">
              <h4 className="text-gold font-bold mb-2 uppercase tracking-widest text-[10px]">Notre Adresse</h4>
              <p className="text-white text-sm leading-relaxed">Angle Avenue FAR et Rue de la Liberté, <br />Meknès, 50000, Maroc</p>
              <div className="w-12 h-[1px] bg-gold mt-4 shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
           </div>
        </section>
      </div>
    </div>
  );
}
