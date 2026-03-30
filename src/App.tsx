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
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("Focacce alte");

  const categoryOrder = [
    "Focacce alte",
    "Calzoni",
    "Panuozzi fritti e al forno",
    "Sfizi",
    "Panini e piadine kebab",
    "Pizze Classiche",
    "Pizze Speciali",
    "Pizze di Mare",
    "Pizze Bianche",
    "Pizze Gerry",
    "Pizze al Kebab",
    "Pizze al Mezzo Metro",
    "Bibite"
  ];

  const categories = useMemo(() => {
    const cats = Array.from(new Set(MENU_DATA.map(item => item.category)))
      .filter(cat => cat !== "Menu Mezzogiorno");
    
    return cats.sort((a, b) => {
      const indexA = categoryOrder.indexOf(a);
      const indexB = categoryOrder.indexOf(b);
      if (indexA === -1) return 1;
      if (indexB === -1) return -1;
      return indexA - indexB;
    });
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

  const deliveryFee = 2.00;
  const subtotal = useMemo(() => {
    return cart.reduce((sum, item) => {
      const price = item.isHalfMeter ? (item.priceHalfMeter || item.price) : item.price;
      return sum + (price * item.quantity);
    }, 0);
  }, [cart]);

  const total = useMemo(() => {
    return subtotal > 0 ? subtotal + deliveryFee : 0;
  }, [subtotal]);

  const sendWhatsAppOrder = () => {
    const phoneNumber = "393351724203";
    let message = "Ciao Pizzeria Gerry! Vorrei effettuare un ordine:\n\n";
    
    cart.forEach(item => {
      const price = item.isHalfMeter ? (item.priceHalfMeter || item.price) : item.price;
      message += `• ${item.quantity}x ${item.name}${item.isHalfMeter ? ' (1/2 Metro)' : ''} - €${(price * item.quantity).toFixed(2)}\n`;
    });
    
    message += `\n🚚 Consegna: €${deliveryFee.toFixed(2)}`;
    message += `\n💰 *Totale: €${total.toFixed(2)}*`;
    message += `\n\n📍 Indirizzo di consegna: [Inserire qui]`;
    message += `\n📝 Note: [Inserire qui]`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#fdfcf8] text-[#1a1a1a] font-sans selection:bg-orange-100">
      {/* Pre-Header Info Bar */}
      <div className="bg-gray-900 text-white py-2 overflow-hidden border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4">
          {/* Desktop Version */}
          <div className="hidden md:flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em]">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5"><MapPin size={12} className="text-orange-500" /> Via Felice Cavallotti, 321 - Sesto SG</span>
              <span className="w-px h-3 bg-white/20" />
              <span className="flex items-center gap-1.5"><Clock size={12} className="text-orange-500" /> 11:00-14:30 | 18:00-22:30</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="tel:0226260852" className="hover:text-orange-500 transition-colors flex items-center gap-1.5">
                <Phone size={12} className="text-orange-500" /> 02 26260852
              </a>
              <span className="w-px h-3 bg-white/20" />
              <a href="https://wa.me/393351724203" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors flex items-center gap-1.5">
                <MessageCircle size={12} className="text-green-500" /> WhatsApp
              </a>
            </div>
          </div>
          
          {/* Mobile Marquee Version */}
          <div className="md:hidden flex whitespace-nowrap animate-marquee">
            <div className="flex items-center gap-8 text-[10px] font-bold uppercase tracking-widest pr-8">
              <span className="flex items-center gap-1.5"><MapPin size={12} className="text-orange-500" /> Via Felice Cavallotti, 321 - Sesto SG</span>
              <span className="flex items-center gap-1.5"><Clock size={12} className="text-orange-500" /> 11:00-14:30 | 18:00-22:30</span>
              <span className="flex items-center gap-1.5"><Phone size={12} className="text-orange-500" /> 02 26260852</span>
              <span className="flex items-center gap-1.5"><MessageCircle size={12} className="text-green-500" /> WhatsApp: 335 1724203</span>
            </div>
            <div className="flex items-center gap-8 text-[10px] font-bold uppercase tracking-widest">
              <span className="flex items-center gap-1.5"><MapPin size={12} className="text-orange-500" /> Via Felice Cavallotti, 321 - Sesto SG</span>
              <span className="flex items-center gap-1.5"><Clock size={12} className="text-orange-500" /> 11:00-14:30 | 18:00-22:30</span>
              <span className="flex items-center gap-1.5"><Phone size={12} className="text-orange-500" /> 02 26260852</span>
              <span className="flex items-center gap-1.5"><MessageCircle size={12} className="text-green-500" /> WhatsApp: 335 1724203</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsCategoryMenuOpen(true)}
              className="p-2.5 bg-gray-50 rounded-2xl hover:bg-orange-50 transition-colors group lg:hidden"
            >
              <ChevronRight size={20} className="text-gray-600 group-hover:text-orange-600" />
            </button>
            <div className="flex items-center gap-4">
              <div className="bg-orange-600 p-2 rounded-xl rotate-3">
                <h1 className="text-xl font-black text-white italic tracking-tighter uppercase leading-none">Gerry</h1>
              </div>
              <div>
                <h2 className="text-lg font-black tracking-tighter text-gray-900 uppercase italic leading-none">Pizzeria</h2>
                <p className="text-[8px] font-bold text-gray-400 uppercase tracking-[0.3em] mt-0.5">Sesto San Giovanni</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 bg-gray-50 rounded-2xl hover:bg-orange-50 transition-colors group"
            >
              <ShoppingCart size={20} className="text-gray-600 group-hover:text-orange-600" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                  {cart.length}
                </span>
              )}
            </button>
            <a 
              href="tel:0226260852"
              className="hidden sm:flex items-center gap-2 bg-orange-600 text-white px-5 py-2.5 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-orange-700 transition-all active:scale-95 shadow-lg shadow-orange-200"
            >
              <Phone size={14} />
              Chiama
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden py-20 md:py-0">
        <img 
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=1920" 
          alt="Pizzeria Gerry Hero" 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-8xl font-black text-white italic tracking-tighter uppercase mb-6 leading-[0.9]">
              Gerry <br /> <span className="text-orange-500">Pizza e Kebab</span>
            </h2>
            <p className="text-white/90 text-sm md:text-xl font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
              Menu pizza a mezzogiorno. Panino o piadina kebab con bibita e patatine fritte. Valido solo per pizza classica e solo in locale/asporto. Consegna a domicilio disponibile.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => document.getElementById('menu-start')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-orange-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-orange-700 transition-all active:scale-95 shadow-2xl shadow-orange-900/40 text-sm"
              >
                Scopri il Menù
              </button>
              <a 
                href="tel:0226260852"
                className="bg-white text-gray-900 px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-gray-100 transition-all active:scale-95 text-sm"
              >
                Chiama Ora
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lunch Specials Section */}
      <section className="bg-orange-600 py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-black italic text-white uppercase tracking-tighter mb-4">
              Menu Mezzogiorno
            </h2>
            <p className="text-orange-100 font-bold uppercase tracking-[0.3em] text-xs">
              Dal Lunedì al Sabato (Esclusi Festivi)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {MENU_DATA.filter(item => item.category === "Menu Mezzogiorno").map(item => (
              <motion.div 
                key={item.id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-[2.5rem] p-8 shadow-2xl flex flex-col sm:flex-row gap-8 items-center"
              >
                <div className="w-32 h-32 flex-shrink-0 bg-gray-50 rounded-3xl overflow-hidden shadow-inner">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start mb-4 gap-2">
                    <h3 className="text-2xl font-black italic uppercase tracking-tight leading-tight">{item.name}</h3>
                    <div className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full font-black text-xl">
                      €{item.price.toFixed(2)}
                    </div>
                  </div>
                  
                  <div className="text-gray-500 text-xs leading-relaxed mb-6">
                    <p className="font-bold text-gray-900 uppercase tracking-widest mb-2">Cosa include:</p>
                    <ul className="space-y-1">
                      {item.name.includes("Pizza") ? (
                        <>
                          <li className="flex items-center gap-2 justify-center sm:justify-start"><div className="w-1 h-1 bg-orange-500 rounded-full" /> Pizza classica a scelta</li>
                          <li className="flex items-center gap-2 justify-center sm:justify-start"><div className="w-1 h-1 bg-orange-500 rounded-full" /> Bibita a scelta</li>
                          <li className="flex items-center gap-2 justify-center sm:justify-start"><div className="w-1 h-1 bg-orange-500 rounded-full" /> Patatine fritte</li>
                        </>
                      ) : (
                        <>
                          <li className="flex items-center gap-2 justify-center sm:justify-start"><div className="w-1 h-1 bg-orange-500 rounded-full" /> Panino o piadina kebab</li>
                          <li className="flex items-center gap-2 justify-center sm:justify-start"><div className="w-1 h-1 bg-orange-500 rounded-full" /> Bibita a scelta</li>
                          <li className="flex items-center gap-2 justify-center sm:justify-start"><div className="w-1 h-1 bg-orange-500 rounded-full" /> Patatine fritte</li>
                        </>
                      )}
                    </ul>
                  </div>

                  <button 
                    onClick={() => addToCart(item)}
                    className="w-full bg-gray-900 text-white py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-black transition-all active:scale-95 flex items-center justify-center gap-2"
                  >
                    <Plus size={14} /> Aggiungi al carrello
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <main id="menu-start" className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Desktop Sidebar (Persistent but elegant) */}
          <aside className="hidden lg:block lg:w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              <div>
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-6">Esplora Menù</h3>
                <nav className="space-y-1">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => {
                        setActiveCategory(cat);
                        document.getElementById('menu-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }}
                      className={`w-full text-left px-5 py-4 rounded-2xl text-sm font-bold transition-all flex items-center justify-between group ${
                        activeCategory === cat 
                          ? 'bg-orange-600 text-white shadow-xl shadow-orange-100 translate-x-2' 
                          : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                      }`}
                    >
                      {cat}
                      <ChevronRight size={14} className={`transition-transform ${activeCategory === cat ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 group-hover:opacity-50'}`} />
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-6 bg-gray-900 rounded-3xl text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl -mr-16 -mt-16" />
                <h4 className="relative z-10 text-lg font-black italic uppercase leading-tight mb-2">Hai fame?</h4>
                <p className="relative z-10 text-xs text-white/60 mb-4">Ordina subito e ricevi a casa in 30 minuti.</p>
                <a href="tel:0226260852" className="relative z-10 inline-flex items-center gap-2 text-orange-500 font-black text-[10px] uppercase tracking-widest hover:text-orange-400">
                  Chiama ora <ChevronRight size={12} />
                </a>
              </div>
            </div>
          </aside>

          {/* Mobile Category Trigger (Floating) */}
          <div className="lg:hidden mb-8">
            <button 
              onClick={() => setIsCategoryMenuOpen(true)}
              className="w-full bg-white border border-gray-100 p-5 rounded-[2rem] shadow-xl flex items-center justify-between group active:scale-95 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="bg-orange-100 p-3 rounded-2xl text-orange-600">
                  <ShoppingCart size={20} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Stai guardando</p>
                  <p className="text-lg font-black italic uppercase tracking-tight text-gray-900 leading-none">{activeCategory}</p>
                </div>
              </div>
              <div className="bg-gray-900 text-white p-3 rounded-2xl">
                <ChevronRight size={20} />
              </div>
            </button>
          </div>

          {/* Menu Grid Area */}
          <div id="menu-grid" className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-black italic uppercase tracking-tighter">
                {activeCategory}
              </h3>
              <div className="h-px flex-1 bg-gray-100 mx-6 hidden sm:block" />
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                {MENU_DATA.filter(item => item.category === activeCategory).length} Articoli
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                {item.category === "Menu Mezzogiorno" && (
                  <div className="absolute top-3 left-3 bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-sm uppercase tracking-widest">
                    PROMO
                  </div>
                )}
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
          </div>
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

      {/* Category Drawer (Mobile & Desktop Toggle) */}
      <AnimatePresence>
        {isCategoryMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCategoryMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[60]"
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed left-0 top-0 bottom-0 w-full max-w-xs bg-white z-[70] shadow-2xl flex flex-col"
            >
              <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                <div>
                  <h2 className="text-2xl font-black tracking-tight uppercase italic leading-none">Menù</h2>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">Scegli una categoria</p>
                </div>
                <button onClick={() => setIsCategoryMenuOpen(false)} className="p-3 bg-white shadow-sm hover:bg-gray-100 rounded-2xl transition-colors">
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      setIsCategoryMenuOpen(false);
                      document.getElementById('menu-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className={`w-full text-left px-6 py-5 rounded-3xl text-sm font-black uppercase tracking-tight transition-all flex items-center justify-between ${
                      activeCategory === cat 
                        ? 'bg-orange-600 text-white shadow-xl shadow-orange-100' 
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {cat}
                    {activeCategory === cat && <div className="w-2 h-2 bg-white rounded-full shadow-glow" />}
                  </button>
                ))}
              </div>

              <div className="p-8 bg-gray-50 border-t border-gray-100">
                <a 
                  href="tel:0226260852"
                  className="w-full bg-gray-900 text-white py-5 rounded-3xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 shadow-xl shadow-gray-200"
                >
                  <Phone size={16} /> Chiama la Pizzeria
                </a>
              </div>
            </motion.div>
          </>
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
                  <span className="font-bold">€{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 font-medium">Consegna</span>
                  <span className="font-bold">€{deliveryFee.toFixed(2)}</span>
                </div>
                <div className="pt-4 border-t border-gray-200 flex justify-between items-center">
                  <span className="text-lg font-black uppercase italic">Totale</span>
                  <span className="text-2xl font-black text-orange-600">€{total.toFixed(2)}</span>
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
                <span>Via Felice Cavallotti, 321 - 20099 Sesto San Giovanni (MI)</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-orange-500" />
                <span>02 26260852 | 335 1724203</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={18} className="text-orange-500" />
                <span>WhatsApp: 335 1724203</span>
              </li>
              <li className="text-xs text-gray-400 mt-2">
                Consegna a domicilio: € 2,00. Pagamenti con bancomat anche a domicilio.
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
          <h5 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Sostanze o prodotti che provocano allergie o intolleranze</h5>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-[10px] text-gray-500 uppercase list-disc list-inside">
            <li>Cereali contenenti glutine</li>
            <li>Crostacei e prodotti a base di crostacei</li>
            <li>Uova e prodotti a base di uova</li>
            <li>Pesce e prodotti a base di pesce</li>
            <li>Arachidi e prodotti a base di arachidi</li>
            <li>Soia e prodotti a base di soia</li>
            <li>Latte e prodotti a base di latte</li>
            <li>Frutta a guscio e prodotti derivati</li>
            <li>Sedano e prodotti a base di sedano</li>
            <li>Senape e prodotti a base di senape</li>
            <li>Semi di sesamo e prodotti a base di semi di sesamo</li>
            <li>Anidride solforosa e solfiti</li>
            <li>Lupini e prodotti a base di lupini</li>
            <li>Molluschi e prodotti a base di molluschi</li>
          </ul>
          <p className="mt-4 text-[10px] text-gray-600 italic uppercase">
            Nota: prodotti di origine surgelata o congelata; le immagini sono solo a scopo illustrativo.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4 mt-12 pt-8 border-t border-white/5 text-center text-[10px] text-gray-600 uppercase tracking-widest font-bold">
          © 2026 Pizzeria Gerry - Tutti i diritti riservati. Consegna a domicilio €2,00.
        </div>
      </footer>
    </div>
  );
}
