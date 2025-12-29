
import { BrandInfo, MenuItem, Review } from './types';

export const BRAND: BrandInfo = {
  name: "Cravings and More",
  tagline: "Satisfy Your Cravings — Anytime, Every Time",
  phone: "0902 394 0192",
  address: "Ile Iwe Bustop, Egbe Road, Opposite Cravings and More, Alimosho, Lagos, Nigeria",
  googleRating: 4.3,
  reviewCount: 425,
  hours: "Open daily — Closes at 9:00 PM",
  locationLink: "https://www.google.com/maps/search/?api=1&query=Cravings+and+More+Ile+Iwe+Bustop",
  glovoLink: "https://glovoapp.com" // Placeholder for actual store link
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "1",
    name: "Rice, Beans & Fried Plantains",
    description: "A classic Nigerian combo served with stew and succulent protein of choice.",
    price: 2500,
    category: "Rice Dishes",
    image: "https://picsum.photos/seed/rice1/600/400"
  },
  {
    id: "2",
    name: "Basmati Jollof Rice with Snail",
    description: "Premium basmati jollof served with jumbo snail and assorted protein.",
    price: 7500,
    category: "Rice Dishes",
    image: "https://picsum.photos/seed/rice2/600/400"
  },
  {
    id: "3",
    name: "Stir-Fried Spaghetti with Chicken Sauce",
    description: "Spicy spaghetti stir-fried with seasonal veggies and served with peppered gizzard.",
    price: 4500,
    category: "Specials",
    image: "https://picsum.photos/seed/spag/600/400"
  },
  {
    id: "4",
    name: "Assorted Protein Mix",
    description: "A medley of goat meat, beef, and shaki in our signature spicy sauce.",
    price: 3000,
    category: "Protein & Sides",
    image: "https://picsum.photos/seed/meat/600/400"
  },
  {
    id: "5",
    name: "Pounded Yam & Egusi Soup",
    description: "Fluffy pounded yam paired with rich melon seed soup and leafy vegetables.",
    price: 3500,
    category: "Swallows & Soups",
    image: "https://picsum.photos/seed/egusi/600/400"
  },
  {
    id: "6",
    name: "Spicy Snail",
    description: "Gigantic snails sautéed in a rich, spicy onion and pepper sauce.",
    price: 5000,
    category: "Protein & Sides",
    image: "https://picsum.photos/seed/snail/600/400"
  }
];

export const REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Tunde Bakare",
    rating: 5,
    text: "The best jollof rice in Alimosho! The snail was perfectly spiced and tender. Definitely coming back.",
    date: "2 weeks ago"
  },
  {
    id: "r2",
    author: "Chioma Okoro",
    rating: 4,
    text: "Ordered through Glovo. The stir-fried spaghetti arrived hot and fresh. Great value for money.",
    date: "1 month ago"
  },
  {
    id: "r3",
    author: "Emeka Obi",
    rating: 5,
    text: "Consistent quality every time. Their drive-through is efficient and the staff are friendly.",
    date: "3 days ago"
  }
];
