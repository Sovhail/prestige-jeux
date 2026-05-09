import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  BarChart3, Users, Utensils, Calendar, Settings, LogOut, 
  Search, Filter, ChevronRight, CheckCircle2, XCircle, Clock
} from 'lucide-react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('reservations');
  const [stats, setStats] = useState({ reservations: 0, menuItems: 0 });
  const [reservations, setReservations] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('prestige_token');
    if (!token) {
      navigate('/admin');
      return;
    }

    const fetchData = async () => {
      try {
        const [statsRes, resRes] = await Promise.all([
          fetch('/api/admin/stats', { headers: { Authorization: `Bearer ${token}` } }),
          fetch('/api/admin/reservations', { headers: { Authorization: `Bearer ${token}` } })
        ]);

        if (statsRes.status === 401) {
          localStorage.removeItem('prestige_token');
          navigate('/admin');
          return;
        }

        const statsData = await statsRes.json();
        const resData = await resRes.json();

        setStats(statsData);
        setReservations(resData);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('prestige_token');
    navigate('/admin');
  };

  if (isLoading) return <div className="min-h-screen bg-black flex items-center justify-center text-gold">Initialisation du Dashboard...</div>;

  return (
    <div className="min-h-screen bg-[#020202] flex text-white font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-luxury-gray border-r border-white/5 flex flex-col p-6 fixed h-full z-10">
        <div className="mb-12">
           <h1 className="text-xl font-display font-bold gold-text">PRESTIGE</h1>
           <p className="text-[10px] text-white/30 tracking-[0.2em]">ADMIN CONSOLE</p>
        </div>

        <nav className="flex-grow space-y-2">
          {[
            { id: 'stats', label: 'Vue d\'ensemble', icon: BarChart3 },
            { id: 'reservations', label: 'Réservations', icon: Calendar },
            { id: 'menu', label: 'Carte & Menu', icon: Utensils },
            { id: 'users', label: 'Clients', icon: Users },
            { id: 'settings', label: 'Configuration', icon: Settings },
          ].map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all ${
                activeTab === item.id ? 'bg-gold text-black' : 'text-white/60 hover:bg-white/5 hover:text-gold'
              }`}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <button 
          onClick={handleLogout}
          className="mt-auto flex items-center space-x-3 p-3 text-red-400 hover:bg-red-500/10 rounded-lg transition-all"
        >
          <LogOut className="w-5 h-5" />
          <span className="text-sm font-medium">Déconnexion</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-grow ml-64 p-10">
        <header className="flex justify-between items-center mb-10">
           <div>
             <h2 className="text-3xl font-display font-bold">Dashboard</h2>
             <p className="text-white/40 text-sm">Gestion de l'établissement en temps réel</p>
           </div>
           <div className="flex items-center space-x-4">
             <div className="relative">
               <Search className="absolute left-3 top-2.5 w-4 h-4 text-white/30" />
               <input className="bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm outline-none focus:border-gold/50" placeholder="Rechercher..." />
             </div>
             <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold">A</div>
           </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            { label: 'Réservations', value: stats.reservations, sub: '+12% ce mois', icon: Calendar, color: 'text-blue-400' },
            { label: 'Menu Items', value: stats.menuItems, sub: '5 catégories', icon: Utensils, color: 'text-orange-400' },
            { label: 'Nouveaux Avis', value: 8, sub: 'Rating 4.9/5', icon: CheckCircle2, color: 'text-green-400' },
            { label: 'CA Estimé', value: '12k', sub: 'MAD ce jour', icon: BarChart3, color: 'text-gold' },
          ].map((s, i) => (
            <div key={i} className="bg-luxury-gray border border-white/5 p-6 rounded-2xl">
              <div className="flex justify-between mb-4">
                <s.icon className={`w-8 h-8 ${s.color}`} />
                <span className="text-[10px] bg-white/5 px-2 py-1 rounded text-white/40 uppercase tracking-widest">Live</span>
              </div>
              <h3 className="text-white/50 text-sm mb-1">{s.label}</h3>
              <div className="text-3xl font-bold mb-1">{s.value}</div>
              <p className="text-[10px] text-green-400">{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Dynamic Content Table */}
        <div className="bg-luxury-gray border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
           <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/[0.01]">
              <h3 className="font-bold">Réservations Récentes</h3>
              <button className="text-xs text-gold flex items-center space-x-1 hover:underline">
                <span>Voir tout</span>
                <ChevronRight className="w-3 h-3" />
              </button>
           </div>
           <div className="overflow-x-auto">
             <table className="w-full text-left">
               <thead>
                 <tr className="text-xs uppercase tracking-widest text-white/30 bg-white/[0.02]">
                   <th className="p-6 font-medium">Client</th>
                   <th className="p-6 font-medium">Date & Heure</th>
                   <th className="p-6 font-medium">Convives</th>
                   <th className="p-6 font-medium">Statut</th>
                   <th className="p-6 font-medium">Actions</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-white/5">
                 {reservations.map((res: any) => (
                   <tr key={res.id} className="group hover:bg-white/[0.02] transition-colors">
                     <td className="p-6">
                       <div className="font-medium">{res.name}</div>
                       <div className="text-xs text-white/30">{res.phone}</div>
                     </td>
                     <td className="p-6">
                       <div className="text-sm">{res.date}</div>
                       <div className="text-xs text-white/30">{res.time}</div>
                     </td>
                     <td className="p-6">
                        <span className="bg-white/5 px-2 py-1 rounded-md text-xs">{res.guests} pers.</span>
                     </td>
                     <td className="p-6">
                       <span className="inline-flex items-center space-x-1.5 text-[10px] bg-yellow-500/10 text-yellow-500 px-2 py-1 rounded-full uppercase tracking-widest font-bold">
                         <Clock className="w-3 h-3" />
                         <span>Attente</span>
                       </span>
                     </td>
                     <td className="p-6">
                       <div className="flex space-x-3">
                         <button className="p-2 bg-green-500/10 text-green-500 hover:bg-green-500 hover:text-white rounded-lg transition-all" title="Confirmer">
                           <CheckCircle2 className="w-4 h-4" />
                         </button>
                         <button className="p-2 bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white rounded-lg transition-all" title="Annuler">
                           <XCircle className="w-4 h-4" />
                         </button>
                       </div>
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
        </div>
      </main>
    </div>
  );
}
