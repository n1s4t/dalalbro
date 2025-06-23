import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X, User } from 'lucide-react';
import { CartItem } from '../types';

interface HeaderProps {
  cartItems: CartItem[];
  onCartClick: () => void;
  onCategoryFilter: (category: string) => void;
  activeCategory: string;
}

const Header: React.FC<HeaderProps> = ({ cartItems, onCartClick, onCategoryFilter, activeCategory }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'shirts', name: 'Shirts' },
    { id: 'pants', name: 'Pants' },
    { id: 'shoes', name: 'Shoes' },
    { id: 'accessories', name: 'Accessories' }
  ];

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-sm">DB</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Dalal Bro
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => onCategoryFilter(category.id)}
                className={`transition-colors duration-200 hover:text-yellow-400 ${
                  activeCategory === category.id ? 'text-yellow-400 font-semibold' : ''
                }`}
              >
                {category.name}
              </button>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center bg-gray-800 rounded-full px-4 py-2 flex-1 max-w-md mx-8">
            <Search className="w-4 h-4 text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-white placeholder-gray-400 outline-none flex-1"
            />
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-800 rounded-full transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button
              onClick={onCartClick}
              className="relative p-2 hover:bg-gray-800 rounded-full transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-yellow-500 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cartItemCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-800 rounded-full transition-colors"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-800 py-4">
            <div className="flex flex-col space-y-4">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => {
                    onCategoryFilter(category.id);
                    setIsMenuOpen(false);
                  }}
                  className={`text-left transition-colors duration-200 hover:text-yellow-400 ${
                    activeCategory === category.id ? 'text-yellow-400 font-semibold' : ''
                  }`}
                >
                  {category.name}
                </button>
              ))}
              <div className="lg:hidden flex items-center bg-gray-800 rounded-full px-4 py-2 mt-4">
                <Search className="w-4 h-4 text-gray-400 mr-3" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent text-white placeholder-gray-400 outline-none flex-1"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;