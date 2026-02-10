import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="block">
      <div className="w-64 h-[400px] border rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 bg-white ml-10 mb-8 overflow-hidden relative animate-pop-in">
        
       {/* Product ka Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded-t-2xl img-hover-zoom"
        />

        {/* Information ka Section */}
        <div className="p-3">
          {/* Brand  name*/}
          <p className="text-sm text-gray-500 mb-1">Gordon & Bros</p>

          {/* Name */}
          <h3 className="text-md font-semibold text-gray-800 truncate">
            {product.name}
          </h3>

          {/* Rating  */}
          <div className="flex items-center text-yellow-500 text-sm mt-1">
            ⭐⭐⭐⭐☆
            {/* <span className="text-gray-400 text-xs ml-2">(120)</span> */}
          </div>

          {/* Price */}
          <div className="mt-2">
            <span className="text-lg font-bold text-green-600">₹{product.price}</span>
            <span className="text-sm text-gray-400 line-through ml-2">₹{product.price + 200}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

