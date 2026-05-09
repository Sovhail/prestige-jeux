import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { X, Maximize2 } from 'lucide-react';

const galleryItems = [
  { id: 9, category: 'all', image: '/src/assets/images/regenerated_image_1778342660777.jpg', title: 'L\'Atmosphère Prestige' },
  { id: 10, category: 'all', image: '/src/assets/images/regenerated_image_1778347088731.jpg', title: 'Notre Identité' },
  { id: 1, category: 'pool', image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1000', title: 'Americana Pro' },
  { id: 2, category: 'snooker', image: 'https://images.unsplash.com/photo-1609133333333-e9909247c87c?q=80&w=1000', title: 'Snooker Elite' },
  { id: 3, category: 'cafe', image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000', title: 'Café Signature' },
  { id: 4, category: 'restaurant', image: 'https://images.unsplash.com/photo-1574673139737-c1011383842c?q=80&w=1000', title: 'Table Gastronomique' },
  { id: 5, category: 'lounge', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000', title: 'Espace Lounge' },
  { id: 6, category: 'pool', image: 'https://images.unsplash.com/photo-1574673139737-c1011383842c?q=80&w=1000', title: 'Détail Précision' },
  { id: 7, category: 'events', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000', title: 'Soirée Privée' },
  { id: 8, category: 'cafe', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000', title: 'Art Latte' },
];

const categories = ['all', 'pool', 'snooker', 'cafe', 'restaurant', 'events'];

export default function Gallery() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = filter === 'all' ? galleryItems : galleryItems.filter(item => item.category === filter);

  return (
    <div className="pt-40 pb-20 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-center mb-20"
        >
          <span className="text-gold tracking-[0.4em] uppercase text-xs mb-4 block font-sans">Visual Discovery</span>
          <h1 className="text-6xl md:text-8xl font-display font-bold gold-text mb-12">{t('gallery.title')}</h1>
          
          <div className="flex flex-wrap justify-center gap-4">
             {categories.map((cat) => (
               <button
                 key={cat}
                 onClick={() => setFilter(cat)}
                 className={`px-6 py-2 text-[10px] tracking-widest uppercase border transition-all duration-500 ${
                   filter === cat ? 'bg-gold text-black border-gold' : 'border-gold/20 text-gold/60 hover:border-gold/50'
                 }`}
               >
                 {cat}
               </button>
             ))}
          </div>
        </motion.div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-square group cursor-pointer overflow-hidden border border-white/5"
                onClick={() => setSelectedImage(item.image)}
              >
                <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-8 text-center">
                   <Maximize2 className="w-8 h-8 text-gold mb-4" />
                   <h3 className="text-xl font-display font-bold text-white uppercase tracking-widest">{item.title}</h3>
                   <div className="w-12 h-[1px] bg-gold mt-4" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl p-8 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-8 right-8 text-white hover:text-gold transition-colors">
              <X className="w-10 h-10" />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selectedImage}
              className="max-w-full max-h-full object-contain shadow-2xl border border-white/10"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
