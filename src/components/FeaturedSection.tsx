import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types';

interface FeaturedSectionProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const FeaturedSection: React.FC<FeaturedSectionProps> = ({ products, onAddToCart }) => {
  const featuredProducts = products.filter(product => product.isFeatured);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-xl text-gray-600">
            Handpicked essentials that define contemporary menswear
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;