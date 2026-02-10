import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../datas/products';
import { useCart } from './CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const allProducts = [
    ...products.boots,
    ...products.sandals,
    ...products.formal,
    ...products.sneakers,
  ];
  const product = allProducts.find(p => String(p.id) === String(id));

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');

  if (!product) return <h2 className="text-center mt-12">Product not found</h2>;

  const handleIncrease = () => setQuantity(prev => prev + 1);
  const handleDecrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size.");
      return;
    }
    addToCart({ ...product, quantity, selectedSize });
  };

  const handleBuyNow = () => {
    if (!selectedSize) {
      alert("Please select a size.");
      return;
    }
    // Include GST for buy now flow as well
    const amount = (product.price * quantity * 1.18).toFixed(2);
    window.location.href = `/payment?amount=${amount}`;
  };

  return (
    <div className="flex flex-col md:flex-row max-w-6xl mx-auto p-4 md:p-6 gap-4 md:gap-6 items-start">
      
      {/* Left Side ka Image */}
      <div className="w-full md:w-1/2 flex justify-start animate-pop-in">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[500px] object-cover rounded-xl shadow-md mt-10 img-hover-zoom"
        />
      </div>

      {/* Right Side me Details */}
      <div className="w-full md:w-1/2 flex flex-col justify-start mt-24">
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
        <div className="text-yellow-400 text-xl mb-1">★★★★☆</div>
        <p className="text-gray-500 text-sm mb-4">(4.0)</p>

        <p className="mb-4">{product.description}</p>

        {/* Size select krne ke liye */}
        <div className="mb-4">
          <h3 className="font-semibold">Select Size:</h3>
          <div className="flex space-x-2 mt-2 flex-wrap">
            {[7, 8, 9, 10].map(size => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-1 border rounded mb-2
                  ${selectedSize === size ? 'bg-black text-white' : 'bg-white text-black'}
                  hover:bg-black hover:text-white transition`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity Select krne ke liye */}
        <div className="flex items-center space-x-4 mb-4">
          <h3 className="font-semibold">Quantity:</h3>
          <button onClick={handleDecrease} className="px-2 py-1 border rounded">-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrease} className="px-2 py-1 border rounded">+</button>
        </div>

        <p className="mb-4 font-semibold text-lg">Total: ₹{product.price * quantity}</p>

        {/* Add to cart button */}
        <div className="flex gap-4 flex-wrap">
          <button
            onClick={handleAddToCart}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add to Cart
          </button>

          <button
            onClick={handleBuyNow}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
