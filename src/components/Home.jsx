import React from 'react';
import bannerImg from '../assets/slide.webp';
import ct1 from '../assets/ct1.webp';
import ct2 from '../assets/ct2.webp';
import ct3 from '../assets/ct3.webp';
import ct5 from '../assets/ct5.webp';
import bb1 from '../assets/bb1.webp'
import products from '../datas/products';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

export default function Home() {

  const productSections = [
    { title: 'Boots', product: products.boots[0] },
    { title: 'Sandals', product: products.sandals[0] },
    { title: 'Formal', product: products.formal[0] },
    { title: 'Sneakers', product: products.sneakers[0] },
  ];

  const categories = [
  { title: 'SANDALS', image: ct1 , route: '/Shoes/Sandals' },
  { title: 'FORMAL', image: ct2 , route: '/Shoes/Formal' },
  { title: 'BOOTS', image: ct3 , route: '/Shoes/Boots' },
  { title: 'SNEAKERS', image: ct5 , route: '/Shoes/Sneakers' },
];

  return (
    <div className="pt-12">
      {/* Banner */}
      <div>
        <img
          src={bannerImg}
          alt="Homepage Banner"
          className="w-full object-fill"
        />
      </div>

      {/* Products Section */}
      <div className="py-12 px-4 bg-gray-200">
        <h2 className="text-2xl font-bold text-center mb-8">Best Sellers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {
          productSections.map((section, index) => (
            <div key={index} className="text-center">
              <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
              <ProductCard product={section.product} />
            </div>
          ))}
        </div>
      </div>

      {/* CATEGORY Heading */}
      <div className="flex justify-center items-center h-20">
        <h1 className="text-2xl font-bold text-gray-800">CATEGORY</h1>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {categories.map((cat, idx) => (
            <Link to={cat.route} key={idx}>
          <div
            key={idx}
            onClick={() => window.scrollTo(0, 0)}//page pe jate hi top se dikhe
            className="relative overflow-hidden group cursor-pointer transform transition duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl rounded-lg animate-pop-in"
            style={{ animationDelay: `${idx * 120}ms` }}
          >
            <img
              src={cat.image}
              alt={cat.title}
              className="w-full h-[450px] object-cover transform transition-transform duration-[5000ms] ease-in-out group-hover:scale-110"
            />
            <div className="absolute bottom-4 left-0 right-0 text-center text-white font-semibold text-lg tracking-widest">
              {cat.title}
            </div>
          </div>
          </Link>
        ))}
      </div>

      {/* Information section */}
<div className="bg-black text-white py-10 px-6 mt-10">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
    
    {/* Left Image */}
    <div>
      <img 
        src={bb1} 
        alt="Shoes" 
        className="w-full object-cover rounded-md"
      />
    </div>

    {/* Right side ka Text */}
    <div className="text-center md:text-left">
      <h3 className="text-sm uppercase tracking-widest mb-2">
        Welcome to Gordon & Bros
      </h3>
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Timeless Elegance Meets <br /> German Precision
      </h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        At Gordon & Bros, we take immense pride in crafting leather shoes 
        that are a testament to German precision and artisanal expertise. 
        Our shoes are more than just a fashion statement; they are an 
        embodiment of sophistication and grace. When you choose Gordon & Bros, 
        you're choosing unparalleled craftsmanship.
      </p>
   
      <Link to="/about" className="font-semibold">
  Our Story
</Link>

    </div>
  </div>
</div>




      {/* Features Section ke icon */}
      <div className="bg-gray-100 py-12 px-4 mt-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/9693/9693983.png" alt="Diamond" className="w-12 h-12 mx-auto mb-4" />
            <h4 className="text-sm font-semibold uppercase tracking-wide">Finest Leather Shoes</h4>
          </div>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/197/197419.png" alt="India Flag" className="w-12 h-12 mx-auto mb-4" />
            <h4 className="text-sm font-semibold uppercase tracking-wide">Designed in India</h4>
          </div>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" alt="Craftsmanship" className="w-12 h-12 mx-auto mb-4" />
            <h4 className="text-sm font-semibold uppercase tracking-wide">Craftsmanship</h4>
          </div>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/8083/8083703.png" alt="Free Shipping" className="w-12 h-12 mx-auto mb-4" />
            <h4 className="text-sm font-semibold uppercase tracking-wide">Free Shipping</h4>
          </div>
        </div>
      </div>

      {/* Customer Reviews*/}
<div className="bg-gray-100 py-12 px-4 mt-12">
  <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
    What Our Customers Say
  </h2>

  <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
    {/* Review 1 */}
    <div className="bg-white shadow-md rounded-xl p-6">
      <p className="text-gray-700 text-lg italic mb-4">
        "Gordon & Bros shoes are a class apart. Quality, comfort, and style in one package. Highly recommended."
      </p>
      <p className="text-right text-sm font-semibold text-gray-600">– Sarah M.</p>
    </div>

    {/* Review 2 */}
    <div className="bg-white shadow-md rounded-xl p-6">
      <p className="text-gray-700 text-lg italic mb-4">
        "The craftsmanship is top-notch. I wear them daily and they still look brand new. Worth every penny!"
      </p>
      <p className="text-right text-sm font-semibold text-gray-600">– John D.</p>
    </div>

    {/* Review 3 */}
    <div className="bg-white shadow-md rounded-xl p-6">
      <p className="text-gray-700 text-lg italic mb-4">
        "Perfect fit and super stylish. Finally found shoes that blend comfort with elegance."
      </p>
      <p className="text-right text-sm font-semibold text-gray-600">– Emily R.</p>
    </div>
  </div>
</div>

    </div>
  );
}
