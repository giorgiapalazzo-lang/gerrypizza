export interface MenuItem {
  id: string;
  name: string;
  ingredients?: string;
  price: number;
  priceHalfMeter?: number;
  category: string;
  image?: string;
}

export const MENU_DATA: MenuItem[] = [
  // Menu Mezzogiorno
  { id: "m1", name: "Menu Pizza a Mezzogiorno", ingredients: "Pizza classica a scelta + bibita + patatine fritte. Valido solo su pizza classica, esclusa pizza kebab, esclusi festivi.", price: 8.50, category: "Menu Mezzogiorno", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600" },
  { id: "m2", name: "Menu Kebab a Mezzogiorno", ingredients: "Panino o piadina kebab + bibita + patatine fritte. Valido dal lunedì al sabato, esclusi festivi.", price: 7.50, category: "Menu Mezzogiorno", image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&q=80&w=600" },

  // Focacce alte
  { id: "fa1", name: "Mediterranea", ingredients: "Pomodoro, mozzarella, olive nere", price: 4.50, category: "Focacce alte", image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&q=80&w=600" },
  { id: "fa2", name: "Pugliese", ingredients: "Pomodoro, cipolla, salsiccia, origano", price: 5.50, category: "Focacce alte", image: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&q=80&w=600" },
  { id: "fa3", name: "Patate e Wurstel", ingredients: "Patate, wurstel, cipolla, salsa di yogurt", price: 5.50, category: "Focacce alte", image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&q=80&w=600" },
  { id: "fa4", name: "Patataccia", ingredients: "Pomodoro, mozzarella, salsiccia, patate, cipolla, olio, origano", price: 5.50, category: "Focacce alte", image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&q=80&w=600" },
  { id: "fa5", name: "Cipolla", ingredients: "Cipolla, mozzarella, olio, origano", price: 4.00, category: "Focacce alte", image: "https://images.unsplash.com/photo-1528137858128-da30bb27436a?auto=format&fit=crop&q=80&w=600" },
  { id: "fa6", name: "Frescona", ingredients: "Pomodoro, mozzarella, stracciatella, pomodorini gialli e rossi, rucola, sale", price: 8.50, category: "Focacce alte", image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&q=80&w=600" },
  { id: "fa7", name: "Frescona Burger", ingredients: "Piatta con hamburger, insalata, pomodoro, cipolla, salsa di yogurt", price: 8.50, category: "Focacce alte", image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&q=80&w=600" },
  { id: "fa8", name: "Aghi di prezzemolo e capperi", ingredients: "Pomodorini freschi, acciughe, capperi, olio, aglio, peperoncino", price: 7.50, category: "Focacce alte", image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=600" },

  // Calzoni
  { id: "c1", name: "Classico", ingredients: "Pomodoro, mozzarella", price: 6.00, category: "Calzoni", image: "https://images.unsplash.com/photo-1559978137-8c560d91e9bc?auto=format&fit=crop&q=80&w=600" },
  { id: "c2", name: "Farcito", ingredients: "Pomodoro, mozzarella, prosciutto cotto, funghi, carciofi, olive", price: 7.50, category: "Calzoni", image: "https://images.unsplash.com/photo-1559978137-8c560d91e9bc?auto=format&fit=crop&q=80&w=600" },
  { id: "c3", name: "Cotto", ingredients: "Pomodoro, mozzarella, prosciutto cotto", price: 7.00, category: "Calzoni", image: "https://images.unsplash.com/photo-1559978137-8c560d91e9bc?auto=format&fit=crop&q=80&w=600" },

  // Panuozzi fritti e al forno
  { id: "p1", name: "Classico", ingredients: "Mozzarella", price: 3.50, category: "Panuozzi fritti e al forno", image: "https://images.unsplash.com/photo-1559978137-8c560d91e9bc?auto=format&fit=crop&q=80&w=600" },
  { id: "p2", name: "Cotto", ingredients: "Mozzarella, prosciutto cotto", price: 4.00, category: "Panuozzi fritti e al forno", image: "https://images.unsplash.com/photo-1559978137-8c560d91e9bc?auto=format&fit=crop&q=80&w=600" },
  { id: "p3", name: "Bari", ingredients: "Mozzarella, salsiccia, cipolla cotta al forno, provolone", price: 4.00, category: "Panuozzi fritti e al forno", image: "https://images.unsplash.com/photo-1559978137-8c560d91e9bc?auto=format&fit=crop&q=80&w=600" },
  { id: "p4", name: "Boscaiolo", ingredients: "Mozzarella, salsiccia, friarielli", price: 4.00, category: "Panuozzi fritti e al forno", image: "https://images.unsplash.com/photo-1559978137-8c560d91e9bc?auto=format&fit=crop&q=80&w=600" },

  // Sfizi
  { id: "s1", name: "Patatine Fritte", price: 4.00, category: "Sfizi", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=600" },
  { id: "s2", name: "Nuggets (6 pezzi)", price: 4.50, category: "Sfizi", image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=600" },
  { id: "s3", name: "Gnocco fritto (8 pezzi)", price: 4.50, category: "Sfizi", image: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=600" },
  { id: "s4", name: "Arancini di patate (10 pezzi)", price: 4.00, category: "Sfizi", image: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=600" },
  { id: "s5", name: "Mozzarelline (10 pezzi)", price: 4.50, category: "Sfizi", image: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=600" },
  { id: "s6", name: "Anelli di cipolla (6 pezzi)", price: 4.00, category: "Sfizi", image: "https://images.unsplash.com/photo-1639122612239-7a3351469b3a?auto=format&fit=crop&q=80&w=600" },

  // Panini e piadine kebab
  { id: "k1", name: "Panino Kebab", ingredients: "Panino, insalata, pomodoro, cipolla, salsa di yogurt", price: 5.00, category: "Panini e piadine kebab", image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&q=80&w=600" },
  { id: "k2", name: "Piadina Kebab", ingredients: "Piadina, insalata, pomodoro, cipolla, salsa di yogurt", price: 5.50, category: "Panini e piadine kebab", image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&q=80&w=600" },
  { id: "k3", name: "Pizza Kebab", ingredients: "Pizza con kebab, insalata, pomodoro, cipolla, salsa di yogurt", price: 6.00, category: "Panini e piadine kebab", image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&q=80&w=600" },
  { id: "k4", name: "Pizze con doppia mozzarella", price: 9.00, category: "Panini e piadine kebab", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600" },

  // Pizze Classiche
  { id: "pc1", name: "Margherita", ingredients: "Pomodoro, mozzarella", price: 5.00, category: "Pizze Classiche", image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=600" },
  { id: "pc2", name: "Marinara", ingredients: "Pomodoro, aglio, origano", price: 4.00, category: "Pizze Classiche", image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=600" },
  { id: "pc3", name: "Napoli", ingredients: "Pomodoro, mozzarella, acciughe, origano", price: 6.00, category: "Pizze Classiche", image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=600" },
  { id: "pc4", name: "Romana", ingredients: "Pomodoro, mozzarella, acciughe, capperi, origano", price: 6.50, category: "Pizze Classiche", image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=600" },
  { id: "pc5", name: "Pugliese", ingredients: "Pomodoro, mozzarella, cipolla", price: 6.00, category: "Pizze Classiche", image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=600" },
  { id: "pc6", name: "Prosciutto", ingredients: "Pomodoro, mozzarella, prosciutto cotto", price: 6.00, category: "Pizze Classiche", image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=600" },
  { id: "pc7", name: "Funghi", ingredients: "Pomodoro, mozzarella, funghi", price: 6.00, category: "Pizze Classiche", image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=600" },
  { id: "pc8", name: "Carciofi", ingredients: "Pomodoro, mozzarella, carciofi", price: 6.00, category: "Pizze Classiche", image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=600" },
  { id: "pc9", name: "Wurstel", ingredients: "Pomodoro, mozzarella, wurstel", price: 6.00, category: "Pizze Classiche", image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=600" },
  { id: "pc10", name: "Salsiccia", ingredients: "Pomodoro, mozzarella, salsiccia", price: 6.50, category: "Pizze Classiche", image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=600" },
  { id: "pc11", name: "Salame piccante", ingredients: "Pomodoro, mozzarella, salame piccante", price: 6.50, category: "Pizze Classiche", image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=600" },
  { id: "pc12", name: "Tonno e cipolla", ingredients: "Pomodoro, mozzarella, tonno, cipolla", price: 7.00, category: "Pizze Classiche", image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=600" },
  { id: "pc13", name: "Prosciutto e funghi", ingredients: "Pomodoro, mozzarella, prosciutto cotto, funghi", price: 7.00, category: "Pizze Classiche", image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=600" },
  { id: "pc14", name: "4 stagioni", ingredients: "Pomodoro, mozzarella, prosciutto cotto, funghi, carciofi, olive", price: 7.50, category: "Pizze Classiche", image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=600" },
  { id: "pc15", name: "Capricciosa", ingredients: "Pomodoro, mozzarella, prosciutto cotto, funghi, carciofi, olive, acciughe, origano", price: 8.00, category: "Pizze Classiche", image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=600" },
  { id: "pc16", name: "4 formaggi", ingredients: "Pomodoro, mozzarella, gorgonzola, fontina, emmental", price: 7.50, category: "Pizze Classiche", image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=600" },
  { id: "pc17", name: "Verdure", ingredients: "Pomodoro, mozzarella, zucchine, melanzane, peperoni", price: 7.50, category: "Pizze Classiche", image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=600" },
  { id: "pc18", name: "Speck e zola", ingredients: "Pomodoro, mozzarella, speck, gorgonzola", price: 7.50, category: "Pizze Classiche", image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=600" },
  { id: "pc19", name: "Boscaiola", ingredients: "Pomodoro, mozzarella, funghi, salsiccia", price: 7.50, category: "Pizze Classiche", image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=600" },
  { id: "pc20", name: "Tirolese", ingredients: "Pomodoro, mozzarella, speck, porcini", price: 8.00, category: "Pizze Classiche", image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=600" },
  { id: "pc21", name: "Americana", ingredients: "Pomodoro, mozzarella, wurstel, patatine fritte", price: 7.50, category: "Pizze Classiche", image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=600" },

  // Pizze Speciali
  { id: "ps1", name: "Valtellina", ingredients: "Pomodoro, mozzarella, bresaola, rucola, grana", price: 8.50, category: "Pizze Speciali", image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=600" },
  { id: "ps2", name: "Delicata", ingredients: "Pomodoro, mozzarella, crudo, rucola, grana", price: 8.50, category: "Pizze Speciali", image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=600" },
  { id: "ps3", name: "Sfiziosa", ingredients: "Pomodoro, mozzarella, crudo, porcini", price: 8.50, category: "Pizze Speciali", image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=600" },
  { id: "ps4", name: "Bufala", ingredients: "Pomodoro, mozzarella di bufala, basilico", price: 7.50, category: "Pizze Speciali", image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=600" },

  // Pizze di Mare
  { id: "pm1", name: "Frutti di mare", ingredients: "Pomodoro, mozzarella, frutti di mare, aglio, prezzemolo", price: 9.00, category: "Pizze di Mare", image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=600" },
  { id: "pm2", name: "Gamberetti e zucchine", ingredients: "Pomodoro, mozzarella, gamberetti, zucchine", price: 8.50, category: "Pizze di Mare", image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=600" },

  // Pizze Bianche
  { id: "pb1", name: "Biancaneve", ingredients: "Mozzarella", price: 5.00, category: "Pizze Bianche", image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=600" },
  { id: "pb2", name: "Zola e noci", ingredients: "Mozzarella, gorgonzola, noci", price: 7.50, category: "Pizze Bianche", image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=600" },
  { id: "pb3", name: "Friarielli e salsiccia", ingredients: "Mozzarella, friarielli, salsiccia", price: 8.00, category: "Pizze Bianche", image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=600" },

  // Pizze Gerry
  { id: "pg1", name: "Gerry", ingredients: "Pomodoro, mozzarella, kebab, patatine fritte, salse", price: 9.00, category: "Pizze Gerry", image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=600" },
  { id: "pg2", name: "Super Gerry", ingredients: "Pomodoro, mozzarella, kebab, patatine fritte, salse, uovo", price: 10.00, category: "Pizze Gerry", image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=600" },

  // Pizze al Kebab
  { id: "pk1", name: "Kebab", ingredients: "Pomodoro, mozzarella, kebab", price: 7.50, category: "Pizze al Kebab", image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=600" },
  { id: "pk2", name: "Kebab speciale", ingredients: "Pomodoro, mozzarella, kebab, insalata, pomodoro fresco, cipolla, salse", price: 8.50, category: "Pizze al Kebab", image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=600" },

  // Pizze al Mezzo Metro
  { id: "pmm1", name: "Margherita (Mezzo Metro)", ingredients: "Pomodoro, mozzarella", price: 13.00, category: "Pizze al Mezzo Metro", image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=600" },
  { id: "pmm2", name: "Farcita (Mezzo Metro)", ingredients: "A scelta tra le classiche", price: 16.00, category: "Pizze al Mezzo Metro", image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=600" },

  // Bibite
  { id: "b1", name: "Coca Cola (33 cl)", price: 2.00, category: "Bibite", image: "https://images.unsplash.com/photo-1544145945-f904253d0c7b?auto=format&fit=crop&q=80&w=600" },
  { id: "b1-large", name: "Coca Cola (1,5 l)", price: 3.00, category: "Bibite", image: "https://images.unsplash.com/photo-1544145945-f904253d0c7b?auto=format&fit=crop&q=80&w=600" },
  { id: "b2", name: "Fanta (33 cl)", price: 2.00, category: "Bibite", image: "https://images.unsplash.com/photo-1544145945-f904253d0c7b?auto=format&fit=crop&q=80&w=600" },
  { id: "b2-large", name: "Fanta (1,5 l)", price: 3.00, category: "Bibite", image: "https://images.unsplash.com/photo-1544145945-f904253d0c7b?auto=format&fit=crop&q=80&w=600" },
  { id: "b3", name: "Sprite (33 cl)", price: 2.00, category: "Bibite", image: "https://images.unsplash.com/photo-1544145945-f904253d0c7b?auto=format&fit=crop&q=80&w=600" },
  { id: "b3-large", name: "Sprite (1,5 l)", price: 3.00, category: "Bibite", image: "https://images.unsplash.com/photo-1544145945-f904253d0c7b?auto=format&fit=crop&q=80&w=600" },
  { id: "b4", name: "Tè limone (50 cl)", price: 2.00, category: "Bibite", image: "https://images.unsplash.com/photo-1544145945-f904253d0c7b?auto=format&fit=crop&q=80&w=600" },
  { id: "b5", name: "Tè pesca (50 cl)", price: 2.00, category: "Bibite", image: "https://images.unsplash.com/photo-1544145945-f904253d0c7b?auto=format&fit=crop&q=80&w=600" },
  { id: "b6", name: "Acqua (50 cl)", price: 1.00, category: "Bibite", image: "https://images.unsplash.com/photo-1548919973-5cfe5d4fc474?auto=format&fit=crop&q=80&w=600" },

];
