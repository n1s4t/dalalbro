import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedSection from './components/FeaturedSection';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { products } from './data/products';
import { Product, CartItem } from './types';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') return products;
    return products.filter(product => product.category === activeCategory);
  }, [activeCategory]);

  const handleAddToCart = (product: Product) => {
    const defaultSize = product.sizes[0];
    const defaultColor = product.colors[0];
    
    const existingItem = cartItems.find(
      item => item.id === product.id && 
               item.selectedSize === defaultSize && 
               item.selectedColor === defaultColor
    );

    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id && 
        item.selectedSize === defaultSize && 
        item.selectedColor === defaultColor
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      const newCartItem: CartItem = {
        ...product,
        quantity: 1,
        selectedSize: defaultSize,
        selectedColor: defaultColor
      };
      setCartItems([...cartItems, newCartItem]);
    }
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      handleRemoveItem(id);
    } else {
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      ));
    }
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleCategoryFilter = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        cartItems={cartItems}
        onCartClick={() => setIsCartOpen(true)}
        onCategoryFilter={handleCategoryFilter}
        activeCategory={activeCategory}
      />
      
      {activeCategory === 'all' && <Hero />}
      
      {activeCategory === 'all' && (
        <FeaturedSection
          products={products}
          onAddToCart={handleAddToCart}
        />
      )}
      
      <ProductGrid
        products={filteredProducts}
        onAddToCart={handleAddToCart}
      />
      
      <Footer />
      
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
}

export default App;