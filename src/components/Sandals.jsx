import React from 'react';
import products from '../datas/products'
import ProductCard from './ProductCard';

const Sandals = () => {
  return (
    <div>
      <h2 className='my-10 text-3xl font-bold text-center text-gray-800 relative '>Sandals Collection</h2>
      <div className='flex flex-wrap gap-10'>
        {products.sandals.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Sandals;
