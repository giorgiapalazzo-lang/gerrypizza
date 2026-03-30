/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useEffect } from 'react';
import { ShoppingCart, Phone, MapPin, Clock, Plus, Minus, X, Trash2, ChevronRight, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_DATA, MenuItem } from './data/menu';

interface CartItem extends MenuItem {
  quantity: number;
  isHalfMeter?: boolean;
}

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("Pizze Classiche");

  const categories = useMemo(() => {
    const cats = Array.from(new Set(MENU_DATA.map(item => item.category)));
    return cats;
  }, []);

  const addToCart = (item: MenuItem, isHalfMeter: boolean = false) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id && i.isHalfMeter === isHalfMeter);
      if (existing) {
        return prev.map(i => 
          (i.id === item.id && i.isHalfMeter === isHalfMeter) 
            ? { ...i, quantity: i.quantity + 1 } 
            : i
        );
      }
      return [...prev, { ...item, quantity: 1, isHalfMeter }];
    });
  };

  const removeFromCart = (id: string, isHalfMeter?: boolean) => {
    setCart(prev => prev.filter(i => !(i.id === id && i.isHalfMeter === isHalfMeter)));
  };

  const updateQuantity = (id: string, delta: number, isHalfMeter?: boolean) => {
    setCart(prev => prev.map(i => {
      if (i.id === id && i.isHalfMeter === isHalfMeter) {
        const newQty = Math.max(1, i.quantity + delta);
        return { ...i, quantity: newQty };
      }
      return i;
    }));
  };

  const total = useMemo(() => {
    return cart.reduce((sum, item) => {
      const price = item.isHalfMeter ? (item.priceHalfMeter || item.price) : item.price;
      return sum + (price * item.quantity);
    }, 0);
  }, [cart]);

  const sendWhatsAppOrder = () => {
    const phoneNumber = "393351724203";
    let message = "Ciao Pizzeria Gerry! Vorrei effettuare un ordine:\n\n";
    
    cart.forEach(item => {
      const price = item.isHalfMeter ? (item.priceHalfMeter || item.price) : item.price;
      message += `• ${item.quantity}x ${item.name}${item.isHalfMeter ? ' (1/2 Metro)' : ''} - €${(price * item.quantity).toFixed(2)}\n`;
    });
    
    message += `\n💰 *Totale: €${total.toFixed(2)}*`;
    message += `\n\n📍 Indirizzo di consegna: [Inserire qui]`;
    message += `\n📝 Note: [Inserire qui]`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#fdfcf8] text-[#1a1a1a] font-sans selection:bg-orange-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-black tracking-tighter text-orange-600 uppercase italic">Pizzeria Gerry</h1>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mt-1">Pizza & Kebab da Asporto</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full">
              <MapPin size={16} className="text-orange-500" />
              <span>Via Felice Cavallotti, 321 - Sesto SG</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full">
              <Clock size={16} className="text-orange-500" />
              <span>11:00-14:30 | 18:00-22:30</span>
            </div>
            <a href="tel:0226260852" className="flex items-center gap-2 bg-orange-50 text-orange-700 px-3 py-1.5 rounded-full hover:bg-orange-100 transition-colors">
              <Phone size={16} />
              <span>02 26260852</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=1920" 
          alt="Pizzeria Gerry Hero" 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter uppercase mb-4">
              La Vera Pizza <br /> <span className="text-orange-500">A Sesto SG</span>
            </h2>
            <p className="text-white/80 text-lg font-medium max-w-lg mx-auto mb-8">
              Ingredienti freschi, impasto a lunga lievitazione e consegna rapida direttamente a casa tua.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => document.getElementById('menu-start')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-orange-600 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-orange-700 transition-all active:scale-95 shadow-xl shadow-orange-900/20"
              >
                Scopri il Menù
              </button>
              <a 
                href="tel:0226260852"
                className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-gray-100 transition-all active:scale-95"
              >
                Chiama Ora
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <main id="menu-start" className="max-w-6xl mx-auto px-4 py-8 pb-24">
        {/* Category Navigation */}
        <div className="flex overflow-x-auto gap-2 pb-4 mb-8 no-scrollbar sticky top-[116px] md:top-[76px] bg-[#fdfcf8] z-30 py-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-bold transition-all ${
                activeCategory === cat 
                  ? 'bg-orange-600 text-white shadow-lg shadow-orange-200 scale-105' 
                  : 'bg-white border border-gray-200 text-gray-600 hover:border-orange-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="mb-8 p-4 bg-orange-50 border border-orange-100 rounded-xl text-center">
          <p className="text-sm font-bold text-orange-800 uppercase tracking-wide">
            ✨ Aggiunte extra: €1,50 a ingrediente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MENU_DATA.filter(item => item.category === activeCategory).map(item => (
            <motion.div 
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              key={item.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image || `https://picsum.photos/seed/${item.name}/600/400`} 
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                  <span className="font-black text-orange-600">€{item.price.toFixed(2)}</span>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="mb-2">
                  <h3 className="font-bold text-lg leading-tight group-hover:text-orange-600 transition-colors">{item.name}</h3>
                </div>
                {item.ingredients && (
                  <p className="text-sm text-gray-500 italic leading-relaxed mb-4 line-clamp-2">{item.ingredients}</p>
                )}
                
                <div className="flex flex-col gap-2 mt-auto">
                  <button 
                    onClick={() => addToCart(item)}
                    className="w-full bg-gray-900 text-white py-2.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-orange-600 transition-all active:scale-95"
                  >
                    <Plus size={16} />
                    Aggiungi
                  </button>
                  {item.priceHalfMeter && (
                    <button 
                      onClick={() => addToCart(item, true)}
                      className="w-full bg-white border-2 border-gray-900 text-gray-900 py-2 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:border-orange-600 hover:text-orange-600 transition-all active:scale-95"
                    >
                      <Plus size={16} />
                      1/2 Metro (€{item.priceHalfMeter.toFixed(2)})
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Cart Button Floating */}
      <AnimatePresence>
        {cart.length > 0 && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsCartOpen(true)}
            className="fixed bottom-6 right-6 bg-orange-600 text-white p-4 rounded-full shadow-2xl shadow-orange-300 z-50 flex items-center gap-2 group"
          >
            <ShoppingCart size={24} />
            <span className="font-bold pr-1">{cart.length}</span>
            <div className="h-6 w-px bg-white/20 mx-1" />
            <span className="font-black">€{total.toFixed(2)}</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                <div className="flex items-center gap-3">
                  <ShoppingCart className="text-orange-600" />
                  <h2 className="text-xl font-black tracking-tight uppercase italic">Il Tuo Ordine</h2>
                </div>
                <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-4">
                    <Trash2 size={48} strokeWidth={1} />
                    <p className="font-medium">Il carrello è vuoto</p>
                  </div>
                ) : (
                  cart.map(item => (
                    <div key={`${item.id}-${item.isHalfMeter}`} className="flex justify-between items-center gap-4">
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 leading-tight">
                          {item.name} {item.isHalfMeter && <span className="text-orange-600 text-xs">(1/2 Metro)</span>}
                        </h4>
                        <p className="text-sm text-orange-600 font-black mt-1">
                          €{((item.isHalfMeter ? (item.priceHalfMeter || item.price) : item.price) * item.quantity).toFixed(2)}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 bg-gray-100 p-1 rounded-xl">
                        <button 
                          onClick={() => updateQuantity(item.id, -1, item.isHalfMeter)}
                          className="p-1.5 hover:bg-white rounded-lg transition-colors shadow-sm"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="font-bold w-4 text-center text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1, item.isHalfMeter)}
                          className="p-1.5 hover:bg-white rounded-lg transition-colors shadow-sm"
                        >
                          <Plus size={14} />
                        </button>
                        <button 
                          onClick={() => removeFromCart(item.id, item.isHalfMeter)}
                          className="ml-2 p-1.5 text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="p-6 bg-gray-50 border-t border-gray-100 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 font-medium">Subtotale</span>
                  <span className="font-bold">€{total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 font-medium">Consegna</span>
                  <span className="font-bold">€2.00</span>
                </div>
                <div className="pt-4 border-t border-gray-200 flex justify-between items-center">
                  <span className="text-lg font-black uppercase italic">Totale</span>
                  <span className="text-2xl font-black text-orange-600">€{(total + 2).toFixed(2)}</span>
                </div>
                <button 
                  disabled={cart.length === 0}
                  onClick={sendWhatsAppOrder}
                  className="w-full bg-green-600 text-white py-4 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-green-700 transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none shadow-xl shadow-green-100"
                >
                  <MessageCircle size={24} />
                  ORDINA SU WHATSAPP
                </button>
                <p className="text-[10px] text-center text-gray-400 uppercase tracking-widest font-bold">
                  Il pagamento verrà effettuato alla consegna (anche con POS)
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Footer Info */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h2 className="text-2xl font-black tracking-tighter text-orange-500 uppercase italic mb-4">Pizzeria Gerry</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              La vera pizza napoletana e il miglior kebab di Sesto San Giovanni. Ingredienti freschi e consegna rapida a casa tua.
            </p>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs text-gray-500 mb-4">Contatti</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-orange-500" />
                <span>Via Felice Cavallotti, 321 - 20099 Sesto SG</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-orange-500" />
                <span>02 26260852 | 335 1724203</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={18} className="text-orange-500" />
                <span>WhatsApp: 335 1724203</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs text-gray-500 mb-4">Orari di Apertura</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Lunedì - Sabato</span>
                <span>11:00 - 14:30 | 18:00 - 22:30</span>
              </li>
              <li className="flex justify-between text-orange-500 font-bold">
                <span>Martedì</span>
                <span>CHIUSO</span>
              </li>
              <li className="flex justify-between">
                <span>Domenica</span>
                <span>18:00 - 22:30 (Pranzo Chiuso)</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 mt-8 p-6 bg-white/5 rounded-2xl border border-white/10">
          <h5 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Informazioni Allergeni</h5>
          <p className="text-[10px] text-gray-500 leading-relaxed uppercase">
            Se avete particolari intolleranze o allergie, sotto alla descrizione di ogni piatto troverete il numero dell'allergene contenuto. In caso di dubbi vi preghiamo di chiedere al nostro personale che sarà a vostra disposizione per qualsiasi chiarimento (Reg. UE 1169 del 2011).
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4 mt-12 pt-8 border-t border-white/5 text-center text-[10px] text-gray-600 uppercase tracking-widest font-bold">
          © 2026 Pizzeria Gerry - Tutti i diritti riservati. Consegna a domicilio €2,00.
        </div>
      </footer>
    </div>
  );
}
