import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Instagram, Facebook, Share2, MapPin, Phone, Mail, Crown } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Share2, href: '#', label: 'TikTok' },
  ];

  return (
    <footer className="bg-black pt-32 pb-12 overflow-hidden relative border-t border-gold/10">
      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gold/5 blur-[150px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-20 mb-32">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-10">
            <Link to="/" className="inline-flex flex-col">
              <img src="/src/assets/images/regenerated_image_1778347088731.jpg" className="h-20 object-contain drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]" alt="Prestige de Jeux" />
            </Link>
            <p className="text-white/40 max-w-sm leading-relaxed text-sm">
              L'excellence du divertissement haut de gamme à Meknès. Une expérience immersive où la passion du jeu rencontre le luxe absolu.
            </p>
            <div className="flex space-x-6 rtl:space-x-reverse">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -5 }}
                  className="w-12 h-12 flex items-center justify-center border border-gold/20 hover:border-gold transition-colors group"
                >
                  <social.icon className="w-5 h-5 text-gold/60 group-hover:text-gold transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-10">
             <h4 className="text-xs tracking-[0.3em] font-bold text-white uppercase border-b border-gold/20 pb-4">Navigation</h4>
             <ul className="space-y-4">
               {['home', 'about', 'services', 'gallery', 'reservation'].map((link) => (
                 <li key={link}>
                   <Link to={
                        link === 'home' ? '/' : 
                        ['about', 'services'].includes(link) ? `/#${link}` : 
                        `/${link}`
                      } className="text-sm text-white/40 hover:text-gold transition-colors flex items-center group">
                      <div className="w-0 group-hover:w-4 h-[1px] bg-gold mr-0 group-hover:mr-3 transition-all duration-300" />
                      {t(`nav.${link}`)}
                   </Link>
                 </li>
               ))}
             </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-10">
             <h4 className="text-xs tracking-[0.3em] font-bold text-white uppercase border-b border-gold/20 pb-4">Conciergerie</h4>
             <ul className="space-y-6">
                <li className="flex items-start space-x-4 rtl:space-x-reverse group">
                  <MapPin className="w-5 h-5 text-gold/60 mt-1 group-hover:text-gold" />
                  <span className="text-sm text-white/40 group-hover:text-white transition-colors">Angle Avenue FAR et Rue de la Liberté, <br />Meknès, Maroc</span>
                </li>
                <li className="flex items-center space-x-4 rtl:space-x-reverse group">
                  <Phone className="w-5 h-5 text-gold/60 group-hover:text-gold" />
                  <span className="text-sm text-white/40 group-hover:text-white transition-colors">0663650333</span>
                </li>
                <li className="flex items-center space-x-4 rtl:space-x-reverse group">
                  <Mail className="w-5 h-5 text-gold/60 group-hover:text-gold" />
                  <span className="text-sm text-white/40 group-hover:text-white transition-colors">contact@prestigedejeux.ma</span>
                </li>
             </ul>
          </div>

          {/* Map Section */}
          <div className="space-y-10 lg:col-span-4">
             <h4 className="text-xs tracking-[0.3em] font-bold text-white uppercase border-b border-gold/20 pb-4">Localisation</h4>
             <div className="relative group overflow-hidden border border-gold/20">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.16554698539!2d-5.573677223590826!3d33.85962422787549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda05bda0426f649%3A0x5b61857c6384cd3f!2sPrestige%20de%20jeux!5e0!3m2!1sfr!2sma!4v1778345525664!5m2!1sfr!2sma" 
                 width="100%" 
                 height="350" 
                 style={{ border: 0, filter: 'grayscale(1) contrast(1.2) brightness(0.8)' }} 
                 className="group-hover:filter-none transition-all duration-700"
                 allowFullScreen={true}
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
               />
               <div className="absolute inset-0 pointer-events-none border-[1px] border-gold/10 group-hover:border-gold/30 transition-colors" />
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex items-center gap-2 text-[10px] text-white/20 tracking-widest uppercase">
             <Crown className="w-4 h-4 text-gold/20" />
             <span>© 2024 Prestige de Jeux. All Rights Reserved.</span>
           </div>
           
           <div className="flex gap-8 text-[10px] text-white/20 tracking-widest uppercase">
              <Link to="/terms" className="hover:text-gold transition-colors">Conditions</Link>
              <Link to="/privacy" className="hover:text-gold transition-colors">Confidentialité</Link>
              <Link to="/admin" className="hover:text-gold transition-colors">Admin</Link>
           </div>
           
           <div className="flex items-center gap-4">
              <span className="text-[10px] text-gold/40 italic">La référence du luxe</span>
           </div>
        </div>
      </div>
    </footer>
  );
}
