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
  // Pizze Classiche
  { id: "1", name: "Marinara", ingredients: "pomodoro, aglio, olio, origano", price: 4.00, priceHalfMeter: 10.00, category: "Pizze Classiche", image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=600" },
  { id: "2", name: "Margherita", ingredients: "pomodoro, mozzarella", price: 5.00, priceHalfMeter: 14.00, category: "Pizze Classiche", image: "https://images.unsplash.com/photo-1573821663912-56990124e3f2?auto=format&fit=crop&q=80&w=600" },
  { id: "3", name: "Biancaneve", ingredients: "mozzarella, ricotta, grana, stracchino", price: 7.50, priceHalfMeter: 18.00, category: "Pizze Classiche", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600" },
  { id: "4", name: "Diavola", ingredients: "pomodoro, mozzarella, salame piccante, peperoncino", price: 7.00, priceHalfMeter: 20.00, category: "Pizze Classiche", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=600" },
  { id: "5", name: "Cotto", ingredients: "pomodoro, mozzarella, prosciutto cotto", price: 7.00, priceHalfMeter: 20.00, category: "Pizze Classiche", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=600" },
  { id: "6", name: "Wurstel", ingredients: "pomodoro, mozzarella, wurstel", price: 7.00, priceHalfMeter: 18.00, category: "Pizze Classiche", image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&q=80&w=600" },
  { id: "7", name: "4 Stagioni", ingredients: "pomodoro, mozzarella, prosciutto cotto, funghi, carciofi, olive", price: 8.00, priceHalfMeter: 20.00, category: "Pizze Classiche", image: "https://images.unsplash.com/photo-1511688855354-1261f61583d1?auto=format&fit=crop&q=80&w=600" },
  { id: "8", name: "Capricciosa", ingredients: "pomodoro, mozzarella, prosciutto cotto, funghi, carciofi, acciughe, olive, capperi, origano", price: 8.50, priceHalfMeter: 20.00, category: "Pizze Classiche", image: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&q=80&w=600" },
  { id: "9", name: "Ortolana", ingredients: "pomodoro, mozzarella, melanzane, zucchine, peperoni", price: 7.00, priceHalfMeter: 20.00, category: "Pizze Classiche", image: "https://images.unsplash.com/photo-1528137858128-da30bb27436a?auto=format&fit=crop&q=80&w=600" },
  { id: "10", name: "Tedesca", ingredients: "pomodoro, mozzarella, salsiccia, patatine fritte", price: 8.00, priceHalfMeter: 20.00, category: "Pizze Classiche", image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&q=80&w=600" },
  { id: "11", name: "Italiana", ingredients: "pomodoro, mozzarella, rucola, pomodorini, grana", price: 8.00, priceHalfMeter: 20.00, category: "Pizze Classiche", image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&q=80&w=600" },
  { id: "12", name: "Tirolese", ingredients: "pomodoro, mozzarella, zola, speck", price: 8.50, priceHalfMeter: 20.00, category: "Pizze Classiche", image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&q=80&w=600" },
  { id: "13", name: "Patatosa", ingredients: "mozzarella, pesto, patate cotte al forno", price: 7.50, priceHalfMeter: 18.00, category: "Pizze Classiche", image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&q=80&w=600" },
  { id: "14", name: "Vegetale", ingredients: "pomodoro, mozzarella, radicchio, grana", price: 7.00, priceHalfMeter: 20.00, category: "Pizze Classiche", image: "https://images.unsplash.com/photo-1528137858128-da30bb27436a?auto=format&fit=crop&q=80&w=600" },
  { id: "15", name: "Olivia", ingredients: "mozzarella, spinaci, provola affumicata, grana", price: 8.00, priceHalfMeter: 20.00, category: "Pizze Classiche", image: "https://images.unsplash.com/photo-1555072956-7758afb20e8f?auto=format&fit=crop&q=80&w=600" },
  { id: "16", name: "Coraggiosa", ingredients: "pomodoro, mozzarella, cipolla, pancetta, tomo, acciughe, peperoncino", price: 8.00, priceHalfMeter: 20.00, category: "Pizze Classiche", image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=600" },
  { id: "17", name: "Napoli", ingredients: "pomodoro, mozzarella, acciughe, origano", price: 7.00, priceHalfMeter: 18.00, category: "Pizze Classiche", image: "https://images.unsplash.com/photo-1573821663912-56990124e3f2?auto=format&fit=crop&q=80&w=600" },
  { id: "18", name: "4 Salumi", ingredients: "pomodoro, mozzarella, prosciutto cotto, salame, salsiccia, wurstel", price: 9.00, priceHalfMeter: 20.00, category: "Pizze Classiche", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600" },
  { id: "19", name: "Contadina", ingredients: "pomodoro, mozzarella, salsiccia, funghi, peperoni", price: 8.50, priceHalfMeter: 20.00, category: "Pizze Classiche", image: "https://images.unsplash.com/photo-1511688855354-1261f61583d1?auto=format&fit=crop&q=80&w=600" },
  { id: "20", name: "Tonno e Cipolla", ingredients: "pomodoro, mozzarella, tonno, cipolla", price: 7.50, priceHalfMeter: 18.00, category: "Pizze Classiche", image: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&q=80&w=600" },
  { id: "21", name: "4 Formaggi", ingredients: "mozzarella, zola, scamorza, brie", price: 8.00, priceHalfMeter: 20.00, category: "Pizze Classiche", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600" },
  { id: "22", name: "Mari e Monti", ingredients: "pomodoro, mozzarella, gamberetti, porcini", price: 8.00, priceHalfMeter: 20.00, category: "Pizze Classiche", image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&q=80&w=600" },
  { id: "23", name: "Porciccia", ingredients: "pomodoro, mozzarella, porcini, salsiccia", price: 8.50, priceHalfMeter: 20.00, category: "Pizze Classiche", image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&q=80&w=600" },
  { id: "24", name: "Braccio di Ferro", ingredients: "pomodoro, mozzarella, spinaci, ricotta", price: 8.00, priceHalfMeter: 20.00, category: "Pizze Classiche", image: "https://images.unsplash.com/photo-1555072956-7758afb20e8f?auto=format&fit=crop&q=80&w=600" },
  { id: "25", name: "Stracchino", ingredients: "pomodoro, mozzarella, stracchino, rucola", price: 8.00, priceHalfMeter: 20.00, category: "Pizze Classiche", image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&q=80&w=600" },
  { id: "26", name: "Bismark", ingredients: "pomodoro, mozzarella, prosciutto cotto, uovo", price: 8.00, priceHalfMeter: 20.00, category: "Pizze Classiche", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=600" },
  { id: "27", name: "Pizza Kebab", ingredients: "pomodoro, mozzarella, carne di kebab, insalata, pomodori, cipolla, salsa yogurt, salsa piccante", price: 9.00, priceHalfMeter: 20.00, category: "Pizze Classiche", image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&q=80&w=600" },

  // Pizze Mais
  { id: "28", name: "Pizza Mais", ingredients: "mozzarella, prosciutto cotto, mais, panna", price: 8.00, priceHalfMeter: 20.00, category: "Pizze Mais", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600" },
  { id: "29", name: "Romana", ingredients: "pomodoro, mozzarella, acciughe, capperi, olive", price: 8.00, priceHalfMeter: 20.00, category: "Pizze Mais", image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=600" },
  { id: "30", name: "Siciliana", ingredients: "pomodoro, acciughe, capperi, olive, origano", price: 8.00, priceHalfMeter: 20.00, category: "Pizze Mais", image: "https://images.unsplash.com/photo-1573821663912-56990124e3f2?auto=format&fit=crop&q=80&w=600" },
  { id: "31", name: "Campagna", ingredients: "pomodoro, bufala, porcini", price: 8.00, priceHalfMeter: 20.00, category: "Pizze Mais", image: "https://images.unsplash.com/photo-1511688855354-1261f61583d1?auto=format&fit=crop&q=80&w=600" },
  { id: "32", name: "Pugliese", ingredients: "pomodoro, mozzarella, cipolla, origano", price: 7.00, priceHalfMeter: 18.00, category: "Pizze Mais", image: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&q=80&w=600" },
  { id: "33", name: "Parmigiana", ingredients: "pomodoro, mozzarella, melanzane, grana", price: 7.00, priceHalfMeter: 18.00, category: "Pizze Mais", image: "https://images.unsplash.com/photo-1528137858128-da30bb27436a?auto=format&fit=crop&q=80&w=600" },
  { id: "34", name: "Regina", ingredients: "pomodoro, mozzarella, prosciutto cotto, funghi", price: 7.00, priceHalfMeter: 18.00, category: "Pizze Mais", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=600" },
  { id: "35", name: "Genovese", ingredients: "pomodoro, mozzarella, patatine fritte", price: 7.00, priceHalfMeter: 18.00, category: "Pizze Mais", image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&q=80&w=600" },
  { id: "36", name: "Americana", ingredients: "pomodoro, mozzarella, prosciutto cotto, panna", price: 7.50, priceHalfMeter: 18.00, category: "Pizze Mais", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600" },
  { id: "37", name: "Affumicata", ingredients: "pomodoro, mozzarella, scamorza, wurstel, speck", price: 8.50, priceHalfMeter: 20.00, category: "Pizze Mais", image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&q=80&w=600" },
  { id: "38", name: "Calabrese", ingredients: "pomodoro, mozzarella di bufala, salame piccante, peperoni", price: 8.50, priceHalfMeter: 20.00, category: "Pizze Mais", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=600" },

  // Pizze senza glutine
  { id: "sg1", name: "Margherita Senza Glutine", ingredients: "pomodoro, mozzarella, basilico", price: 9.00, category: "Pizze Senza Glutine", image: "https://images.unsplash.com/photo-1573821663912-56990124e3f2?auto=format&fit=crop&q=80&w=600" },

  // Tranci alti
  { id: "ta1", name: "Marinara (Trancio Alto)", ingredients: "pomodoro, aglio, olio, origano", price: 4.00, category: "Tranci Alti", image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=600" },
  { id: "ta2", name: "Margherita (Trancio Alto)", ingredients: "pomodoro, mozzarella", price: 6.50, category: "Tranci Alti", image: "https://images.unsplash.com/photo-1573821663912-56990124e3f2?auto=format&fit=crop&q=80&w=600" },
  { id: "ta3", name: "Pugliese (Trancio Alto)", ingredients: "pomodoro fresco, olio, sale, origano", price: 4.00, category: "Tranci Alti", image: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&q=80&w=600" },

  // Focacce alte
  { id: "fa1", name: "Mediterranea", ingredients: "olio, sale", price: 4.50, category: "Focacce Alte", image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&q=80&w=600" },
  { id: "fa2", name: "Pugliese", ingredients: "pomodoro fresco, olio, sale, origano", price: 5.50, category: "Focacce Alte", image: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&q=80&w=600" },
  { id: "fa3", name: "Patatosa", ingredients: "patate al forno, salsiccia, olio", price: 8.50, category: "Focacce Alte", image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&q=80&w=600" },
  { id: "fa4", name: "Cipolletta", ingredients: "cipolle cotte, olio, sale", price: 8.00, category: "Focacce Alte", image: "https://images.unsplash.com/photo-1528137858128-da30bb27436a?auto=format&fit=crop&q=80&w=600" },
  { id: "fa5", name: "Frescone", ingredients: "bresaola, rucola, grana a scaglie", price: 8.50, category: "Focacce Alte", image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&q=80&w=600" },
  { id: "fa6", name: "Acciughe e Capperi", ingredients: "pomodori freschi, acciughe, capperi, olio", price: 7.50, category: "Focacce Alte", image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=600" },

  // Calzoni
  { id: "c1", name: "Classico", ingredients: "pomodoro, mozzarella", price: 6.00, category: "Calzoni", image: "https://images.unsplash.com/photo-1559978137-8c560d91e9bc?auto=format&fit=crop&q=80&w=600" },
  { id: "c2", name: "Farcito", ingredients: "pomodoro, mozzarella, prosciutto cotto, funghi, carciofi, olive", price: 7.50, category: "Calzoni", image: "https://images.unsplash.com/photo-1559978137-8c560d91e9bc?auto=format&fit=crop&q=80&w=600" },
  { id: "c3", name: "Cotto", ingredients: "pomodoro, mozzarella, prosciutto cotto", price: 7.00, category: "Calzoni", image: "https://images.unsplash.com/photo-1559978137-8c560d91e9bc?auto=format&fit=crop&q=80&w=600" },

  // Panzerotti
  { id: "p1", name: "Classico", ingredients: "pomodoro, mozzarella", price: 3.50, category: "Panzerotti", image: "https://images.unsplash.com/photo-1559978137-8c560d91e9bc?auto=format&fit=crop&q=80&w=600" },
  { id: "p2", name: "Cotto", ingredients: "pomodoro, mozzarella, prosciutto cotto", price: 4.00, category: "Panzerotti", image: "https://images.unsplash.com/photo-1559978137-8c560d91e9bc?auto=format&fit=crop&q=80&w=600" },
  { id: "p3", name: "Bari", ingredients: "pomodoro, mozzarella, cipolla cotta al forno, provolone", price: 4.00, category: "Panzerotti", image: "https://images.unsplash.com/photo-1559978137-8c560d91e9bc?auto=format&fit=crop&q=80&w=600" },
  { id: "p4", name: "Salsiccia e Friarielli", ingredients: "pomodoro, mozzarella, salsiccia, friarielli", price: 4.00, category: "Panzerotti", image: "https://images.unsplash.com/photo-1559978137-8c560d91e9bc?auto=format&fit=crop&q=80&w=600" },

  // Sfizi
  { id: "s1", name: "Patatine Fritte", price: 4.00, category: "Sfizi", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=600" },
  { id: "s2", name: "Gnocchi Fritto", price: 4.50, category: "Sfizi", image: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=600" },
  { id: "s3", name: "Crocchette di Patate (8 pezzi)", price: 4.50, category: "Sfizi", image: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=600" },
  { id: "s4", name: "Mozzarelline (10 pezzi)", price: 4.00, category: "Sfizi", image: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=600" },
  { id: "s5", name: "Anelli di Cipolla (10 pezzi)", price: 4.00, category: "Sfizi", image: "https://images.unsplash.com/photo-1639122612239-7a3351469b3a?auto=format&fit=crop&q=80&w=600" },
  { id: "s6", name: "Nuggets (6 pezzi)", price: 4.50, category: "Sfizi", image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=600" },

  // Kebab
  { id: "k1", name: "Panino Kebab", ingredients: "carne di kebab, insalata, pomodoro, cipolla, salsa yogurt, salsa piccante", price: 5.00, category: "Kebab", image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&q=80&w=600" },
  { id: "k2", name: "Piadina Kebab", ingredients: "carne di kebab, insalata, pomodoro, cipolla, salsa yogurt, salsa piccante", price: 5.50, category: "Kebab", image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&q=80&w=600" },
  { id: "k3", name: "Pizza Kebab", ingredients: "pomodoro, mozzarella, carne di kebab, insalata, pomodoro, cipolla, salsa yogurt, salsa piccante", price: 9.00, category: "Kebab", image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&q=80&w=600" },
  { id: "k4", name: "Vaschetta Piccola + Pane", price: 5.00, category: "Kebab", image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&q=80&w=600" },
  { id: "k5", name: "Vaschetta Grande + Pane", price: 7.00, category: "Kebab", image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&q=80&w=600" },

  // Bevande
  { id: "b1", name: "Lattine (Coca Cola, Fanta, Sprite, Thè limone o pesca)", price: 2.00, category: "Bevande", image: "https://images.unsplash.com/photo-1544145945-f904253d0c7b?auto=format&fit=crop&q=80&w=600" },
  { id: "b2", name: "Acqua naturale o frizzante (50 cl)", price: 1.00, category: "Bevande", image: "https://images.unsplash.com/photo-1548919973-5cfe5d4fc474?auto=format&fit=crop&q=80&w=600" },
  { id: "b3", name: "Succhi di frutta", price: 2.00, category: "Bevande", image: "https://images.unsplash.com/photo-1544145945-f904253d0c7b?auto=format&fit=crop&q=80&w=600" },

  // Menu Mezzogiorno
  { id: "m1", name: "Menu Pizza a Mezzogiorno", ingredients: "Pizza classica a scelta + bibita + patatine fritte (esclusa pizza kebab, escluso festivi)", price: 8.50, category: "Menu Mezzogiorno", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600" },
  { id: "m2", name: "Menu Kebab a Mezzogiorno", ingredients: "Panino o piadina kebab + bibita + patatine fritte (escluso festivi)", price: 7.50, category: "Menu Mezzogiorno", image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&q=80&w=600" },
];
