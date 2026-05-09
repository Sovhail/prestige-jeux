import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'fr' | 'ar';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations: Record<Language, Record<string, string>> = {
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'L\'Histoire',
    'nav.services': 'Expériences',
    'nav.gallery': 'Galerie',
    'nav.menu': 'Gastronomie',
    'nav.pricing': 'Tarifs',
    'nav.reservation': 'Réservation',
    'nav.contact': 'Conciergerie',
    'hero.tagline': 'L\'ART DU JEU • L\'ELITE DU LOUNGE',
    'hero.title': 'PRESTIGE DE JEUX',
    'hero.subtitle': 'Où la précision rencontre le luxe absolu. Une immersion sensorielle au coeur de Meknès.',
    'hero.cta': 'Réserver Votre Table',
    'about.title': 'Une Institution de Prestige',
    'services.title': 'Nos Espaces d\'Exception',
    'services.billiard.title': 'Billet Professionnel',
    'services.snooker.title': 'Snooker Élite',
    'services.cafe.title': 'Café Raffiné',
    'services.restaurant.title': 'Gastronomie Fine',
    'services.events.title': 'Évènements Privés',
    'footer.rights': 'Tous droits réservés.',
    'contact.title': 'Contactez Votre Conciergerie',
    'admin.login': 'Espace Admin',
    'book.now': 'Réserver Maintenant',
    'whatsapp.btn': 'Contactez-nous',
    'gallery.title': 'L\'Univers en Images',
    'menu.title': 'Carte des Plaisirs',
    'pricing.title': 'L\'Accès au Prestige'
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.about': 'قصتنا',
    'nav.services': 'تجاربنا',
    'nav.gallery': 'المعرض',
    'nav.menu': 'فن الطبخ',
    'nav.pricing': 'الأسعار',
    'nav.reservation': 'الحجز',
    'nav.contact': 'اتصل بنا',
    'hero.tagline': 'فن اللعب • نخبة الاستراحة',
    'hero.title': 'بريستيج دي جو',
    'hero.subtitle': 'حيث تلتقي الدقة بالفخامة المطلقة. تجربة غامرة في قلب مكناس.',
    'hero.cta': 'احجز طاولتك الآن',
    'about.title': 'مؤسسة عريقة',
    'services.title': 'مساحاتنا الاستثنائية',
    'services.billiard.title': 'بلياردو المحترفين',
    'services.snooker.title': 'سنوكر النخبة',
    'services.cafe.title': 'مقهى راقٍ',
    'services.restaurant.title': 'مطبخ فاخر',
    'services.events.title': 'مناسبات خاصة',
    'footer.rights': 'جميع الحقوق محفوظة.',
    'contact.title': 'تواصل معنا',
    'admin.login': 'دخول المشرف',
    'book.now': 'احجز الآن',
    'whatsapp.btn': 'تواصل معنا عبر واتساب',
    'gallery.title': 'عالمنا بالصور',
    'menu.title': 'قائمة الملذات',
    'pricing.title': 'الوصول إلى التميز'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem('prestige_lang');
    return (saved as Language) || 'fr';
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('prestige_lang', newLang);
  };

  const t = (key: string) => {
    return translations[lang][key] || key;
  };

  const isRTL = lang === 'ar';

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang, isRTL]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, isRTL }}>
      <div className={isRTL ? 'font-arabic' : 'font-sans'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
