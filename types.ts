
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Rice Dishes' | 'Protein & Sides' | 'Swallows & Soups' | 'Specials';
  image: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface BrandInfo {
  name: string;
  tagline: string;
  phone: string;
  address: string;
  googleRating: number;
  reviewCount: number;
  hours: string;
  locationLink: string;
  glovoLink: string;
}
