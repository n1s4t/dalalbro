import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-gradient-to-r from-green-400 to-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">
              New
            </span>
          )}
          {product.originalPrice && (
            <span className="bg-gradient-to-r from-red-400 to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
              Sale
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors">
            <Heart className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        {/* Quick Add Button */}
        <button
          onClick={() => onAddToCart(product)}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gray-800 flex items-center gap-2"
        >
          <ShoppingCart className="w-4 h-4" />
          Quick Add
        </button>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors">
            {product.name}
          </h3>
          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full capitalize">
            {product.category}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gray-900">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
        </div>

        {/* Size Options */}
        <div className="flex flex-wrap gap-1 mb-3">
          {product.sizes.slice(0, 4).map(size => (
            <span
              key={size}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded border hover:border-yellow-400 transition-colors cursor-pointer"
            >
              {size}
            </span>
          ))}
          {product.sizes.length > 4 && (
            <span className="text-xs text-gray-500 px-2 py-1">
              +{product.sizes.length - 4} more
            </span>
          )}
        </div>

        {/* Color Options */}
        <div className="flex gap-2">
          {product.colors.slice(0, 3).map(color => (
            <div
              key={color}
              className="w-6 h-6 rounded-full border-2 border-gray-300 cursor-pointer hover:border-yellow-400 transition-colors"
              style={{
                backgroundColor: color.toLowerCase() === 'white' ? '#ffffff' : 
                               color.toLowerCase() === 'black' ? '#000000' :
                               color.toLowerCase() === 'blue' ? '#3B82F6' :
                               color.toLowerCase() === 'navy' ? '#1E3A8A' :
                               color.toLowerCase() === 'gray' ? '#6B7280' :
                               color.toLowerCase() === 'brown' ? '#8B4513' :
                               color.toLowerCase() === 'khaki' ? '#C3B091' :
                               color.toLowerCase() === 'silver' ? '#C0C0C0' :
                               color.toLowerCase() === 'gold' ? '#FFD700' : '#94A3B8'
              }}
              title={color}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;