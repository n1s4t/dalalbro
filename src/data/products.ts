import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Cotton Shirt',
    price: 89,
    originalPrice: 120,
    category: 'shirts',
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Classic cotton shirt with modern fit. Perfect for business or casual wear.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Blue', 'Black'],
    isNew: true,
    isFeatured: true
  },
  {
    id: '2',
    name: 'Slim Fit Chinos',
    price: 75,
    category: 'pants',
    image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Modern slim-fit chinos made from premium cotton blend.',
    sizes: ['30', '32', '34', '36', '38'],
    colors: ['Khaki', 'Navy', 'Black'],
    isFeatured: true
  },
  {
    id: '3',
    name: 'Leather Dress Shoes',
    price: 199,
    originalPrice: 250,
    category: 'shoes',
    image: 'https://images.pexels.com/photos/292999/pexels-photo-292999.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Handcrafted leather dress shoes with classic Oxford styling.',
    sizes: ['7', '8', '9', '10', '11', '12'],
    colors: ['Black', 'Brown'],
    isFeatured: true
  },
  {
    id: '4',
    name: 'Luxury Watch',
    price: 299,
    category: 'accessories',
    image: 'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Elegant timepiece with stainless steel band and water resistance.',
    sizes: ['One Size'],
    colors: ['Silver', 'Gold', 'Black'],
    isNew: true
  },
  {
    id: '5',
    name: 'Designer Polo Shirt',
    price: 65,
    category: 'shirts',
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Premium polo shirt with modern cut and soft cotton fabric.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Navy', 'White', 'Gray'],
    isNew: true
  },
  {
    id: '6',
    name: 'Casual Sneakers',
    price: 129,
    category: 'shoes',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Comfortable casual sneakers perfect for everyday wear.',
    sizes: ['7', '8', '9', '10', '11', '12'],
    colors: ['White', 'Black', 'Gray']
  },
  {
    id: '7',
    name: 'Denim Jeans',
    price: 95,
    category: 'pants',
    image: 'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Classic denim jeans with regular fit and premium denim.',
    sizes: ['30', '32', '34', '36', '38'],
    colors: ['Dark Blue', 'Light Blue', 'Black']
  },
  {
    id: '8',
    name: 'Leather Belt',
    price: 45,
    category: 'accessories',
    image: 'https://images.pexels.com/photos/5698683/pexels-photo-5698683.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Genuine leather belt with classic buckle design.',
    sizes: ['30', '32', '34', '36', '38'],
    colors: ['Black', 'Brown']
  }
];