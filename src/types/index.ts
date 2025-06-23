export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: 'shirts' | 'pants' | 'accessories' | 'shoes';
  image: string;
  description: string;
  sizes: string[];
  colors: string[];
  isNew?: boolean;
  isFeatured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}