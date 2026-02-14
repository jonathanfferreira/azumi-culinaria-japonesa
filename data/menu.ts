import { MenuItem } from '../types';

export type MenuItemWithCategory = MenuItem & { category: string; featured?: boolean };

export const menuItems: MenuItemWithCategory[] = [
  // RAMEN
  {
    id: 1,
    name: "Dino Ramen",
    description: "Macarrão caseiro, caldo rico 48h, ovo marinado, guioza, kara-ague e lombo.",
    price: 71.90,
    image: "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?q=80&w=800&auto=format&fit=crop",
    category: "ramen",
    featured: true
  },
  {
    id: 3,
    name: "Veggie Ramen",
    description: "Caldo de vegetais defumados, shitake fresco, tofu delicado e fios de pimenta.",
    price: 61.90,
    isVegetarian: true,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=800&auto=format&fit=crop",
    category: "ramen"
  },
  {
    id: 4,
    name: "Miso Ramen",
    description: "Sabor profundo do miso vermelho, milho doce maçaricado e manteiga de alho.",
    price: 58.90,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=800&auto=format&fit=crop",
    category: "ramen"
  },

  // COMBOS
  {
    id: 2,
    name: "Combo Azumi",
    description: "Katsudon tradicional (lombo empanado com ovo sobre arroz) + 6 Guiozas.",
    price: 103.90,
    image: "https://loremflickr.com/800/600/katsudon,japanese,food/all",
    category: "combos",
    featured: true
  },
  {
    id: 10,
    name: "Combo Pirata",
    description: "1 Dino Ramen Pequeno + 1 Porção de Guioza Suíno + 1 Coca-cola lata.",
    price: 113.90,
    image: "https://loremflickr.com/800/600/ramen,gyoza,japanese/all",
    category: "combos"
  },
  {
    id: 11,
    name: "Combo Zen",
    description: "Ramen vegetariano pequeno + 6 un. Guioza de legumes + 1 Suco.",
    price: 111.90,
    image: "https://loremflickr.com/800/600/vegetarian,ramen,japanese/all",
    category: "combos",
    isVegetarian: true
  },

  // TRADICIONAIS
  {
    id: 20,
    name: "Gyudon",
    description: "Arroz japonês com carne agridoce, ovo, cebola e cebolinha.",
    price: 58.90,
    image: "https://loremflickr.com/800/600/gyudon,beef,bowl/all",
    category: "tradicionais"
  },
  {
    id: 21,
    name: "Oyakodon",
    description: "Arroz japonês com frango agridoce, ovo, cebola e cebolinha.",
    price: 55.90,
    image: "https://loremflickr.com/800/600/oyakodon,chicken,bowl/all",
    category: "tradicionais"
  },
  {
    id: 22,
    name: "Yakimeshi",
    description: "Arroz japonês frito com ovo, cenoura, cebola, vagem e cebolinha.",
    price: 61.70,
    image: "https://loremflickr.com/800/600/fried,rice,japanese/all",
    category: "tradicionais"
  },
  {
    id: 23,
    name: "Missoshiru",
    description: "Sopa a base de soja com tofu e cebolinha.",
    price: 19.90,
    image: "https://loremflickr.com/800/600/miso,soup,japanese/all",
    category: "tradicionais"
  },

  // OBENTÔ
  {
    id: 30,
    name: "Obentô Tonkatsu",
    description: "Oniguiri, Tonkatsu (Porco), Verduras e Tsukemono. (Grande)",
    price: 62.90,
    image: "https://loremflickr.com/800/600/bento,box,japanese/all",
    category: "obento"
  },

  // YAKISOBA
  {
    id: 40,
    name: "Yakitudo",
    description: "Macarrão frito com carne, frango, calabresa, bacon, camarão e legumes.",
    price: 98.90,
    image: "https://loremflickr.com/800/600/yakisoba,noodles/all",
    category: "yakisoba"
  },
  {
    id: 41,
    name: "Yakisoba Tradicional",
    description: "Macarrão caseiro frito, tempero da casa e ovo frito.",
    price: 74.70,
    image: "https://loremflickr.com/800/600/yakisoba,japanese,food/all",
    category: "yakisoba"
  },

  // PETISCOS & EXTRAS
  {
    id: 5,
    name: "Kara-ague",
    description: "Frango frito japonês estilo izakaya. Crocância extrema, suculência absurda.",
    price: 32.90,
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=800&auto=format&fit=crop",
    category: "petiscos"
  },
  {
    id: 6,
    name: "Guioza (6un)",
    description: "Pastéis artesanais suínos, tostados na chapa e finalizados no vapor.",
    price: 28.90,
    image: "https://images.unsplash.com/photo-1625938144755-652e08e359b7?q=80&w=800&auto=format&fit=crop",
    category: "petiscos"
  },
  {
    id: 50,
    name: "Guioza de Legumes",
    description: "Recheio de repolho, proteína de soja, cenoura, nirá e mandioca.",
    price: 47.90,
    image: "https://images.unsplash.com/photo-1625938144755-652e08e359b7?q=80&w=800&auto=format&fit=crop",
    category: "vegetarianos",
    isVegetarian: true
  }
];

export const categories = [
  { id: 'all', label: 'Tudo' },
  { id: 'ramen', label: 'Ramen' },
  { id: 'combos', label: 'Combos' },
  { id: 'tradicionais', label: 'Tradicionais' },
  { id: 'obento', label: 'Obentô' },
  { id: 'yakisoba', label: 'Yakisoba' },
  { id: 'petiscos', label: 'Petiscos' },
  { id: 'vegetarianos', label: 'Vegetarianos' }
];
