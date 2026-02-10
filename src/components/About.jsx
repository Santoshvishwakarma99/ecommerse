import React from 'react';
import craftsmanship from '../assets/cra.webp';

export default function About() {
  return (
    <div className="pt-20 px-4 bg-white text-gray-800">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Welcome to <span className="font-semibold">Gordon & Bros</span> – where craftsmanship meets comfort and style. We design shoes that walk with you, wherever you go.
        </p>
      </div>

      {/* Brand Story */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <img
          src={craftsmanship}
          alt="craftsmanship"
          className="rounded-xl shadow-lg"
          />
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700">
            Born from the love of fine leather and timeless design, Gordon & Bros was established with a mission to bring premium quality shoes to everyone. Every pair tells a story of passion, precision, and heritage.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-100 py-12 px-4 rounded-xl mb-16">
        <h2 className="text-2xl font-semibold text-center mb-10">Why Choose Us?</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/9693/9693983.png" alt="Leather" className="w-12 h-12 mx-auto mb-4" />
            <h4 className="font-bold">Finest Leather</h4>
            <p className="text-sm text-gray-600">We use premium-grade leather sourced ethically.</p>
          </div>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/197/197419.png" alt="India" className="w-12 h-12 mx-auto mb-4" />
            <h4 className="font-bold">Made in India</h4>
            <p className="text-sm text-gray-600">Proudly crafted with Indian artistry and innovation.</p>
          </div>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/8083/8083703.png" alt="Shipping" className="w-12 h-12 mx-auto mb-4" />
            <h4 className="font-bold">Free Shipping</h4>
            <p className="text-sm text-gray-600">Enjoy doorstep delivery with no extra cost.</p>
          </div>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" alt="Verified" className="w-12 h-12 mx-auto mb-4" />
            <h4 className="font-bold">Quality Guarantee</h4>
            <p className="text-sm text-gray-600">Each shoe goes through strict quality checks.</p>
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700 text-lg">
          To provide elegant, comfortable and durable shoes for modern men — shoes that reflect personality, professionalism, and pride.
        </p>
      </div>

      {/* Final CTA */}
      <div className="text-center py-12 border-t mt-12">
        <h3 className="text-xl font-semibold mb-2">Want to know more?</h3>
        <p className="text-gray-600">Reach out via our contact page or explore our collections today.</p>
      </div>
    </div>
  );
}
