import React from 'react';
import products from '../datas/products'
import ProductCard from './ProductCard';

const Sneakers = () => {
  return (
    <div>
     <h2 className='my-10 text-3xl font-bold text-center text-gray-800 relative'>Sneakers Collection</h2>
      <div className='flex flex-wrap gap-10'>
        {products.sneakers.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Sneakers;
