import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [gstRate, setGstRate] = useState(0.18); // 18% GST by default

  // Add to cart with quantity and size
  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(
        item => item.id === product.id && item.selectedSize === product.selectedSize
      );

      if (existing) {
        return prev.map(item => {
          if (item.id === product.id && item.selectedSize === product.selectedSize) {
            const updatedQuantity = item.quantity + product.quantity;
            const subtotal = item.price * updatedQuantity;
            const gstAmount = parseFloat((subtotal * gstRate).toFixed(2));
            const totalWithGst = parseFloat((subtotal + gstAmount).toFixed(2));
            return { ...item, quantity: updatedQuantity, gstAmount, totalWithGst };
          }
          return item;
        });
      }

      const subtotal = product.price * product.quantity;
      const gstAmount = parseFloat((subtotal * gstRate).toFixed(2));
      const totalWithGst = parseFloat((subtotal + gstAmount).toFixed(2));
      return [...prev, { ...product, gstAmount, totalWithGst }];
    });
  };

  // item ko cart me se remove krne ke liye
  const removeFromCart = (productId, selectedSize) => {
    setCartItems(prev =>
      prev.filter(item => !(item.id === productId && item.selectedSize === selectedSize))
    );
  };

  // cart ko clear krne ke liye
  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, gstRate, setGstRate }}>
      {children}
    </CartContext.Provider>
  );
};
