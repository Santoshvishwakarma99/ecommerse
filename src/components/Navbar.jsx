import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import { UserIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useContext } from "react";
import { SearchContext } from "./SearchContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);
  const { cartItems } = useCart();
  const { query, setQuery } = useContext(SearchContext);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleMobileShoes = () => setShowMobileDropdown(!showMobileDropdown);

  
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      navigate("/search"); 
    }
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
       
        <div className="text-xl font-bold text-black">
          <Link to="/">GORDON & BROS</Link>
        </div>

       
      <ul className="hidden md:flex space-x-6 text-black items-center">
        <li><Link to="/">Home</Link></li>

         <li className="relative group">
           <Link to="/Shoes" className="hover:text-blue-600">Shoes</Link>
          <div className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 delay-150 flex flex-col bg-white shadow-lg mt-2 top-7 rounded-md border w-40 z-50">
            <Link to="/Shoes/Boots" className="px-4 py-2 hover:bg-gray-100">Boots</Link>
            <Link to="/Shoes/Sandals" className="px-4 py-2 hover:bg-gray-100">Sandals</Link>
            <Link to="/Shoes/Formal" className="px-4 py-2 hover:bg-gray-100">Formal</Link>
            <Link to="/Shoes/Sneakers" className="px-4 py-2 hover:bg-gray-100">Sneakers</Link>
          </div>
        </li>

         <li><Link to="/About">About</Link></li>
         <li><Link to="/Contact">Contact</Link></li>
      </ul>


        {/* Search and icon ke liye*/}
      <div className="hidden md:flex items-center space-x-4 relative">
       <input
         type="text"
         placeholder="Search..."
         className="px-3 py-1 rounded-full border text-black w-52 outline-none"
         value={query}
         onChange={(e) => setQuery(e.target.value)}
         onKeyDown={handleKeyPress}
       />

          
       <div onClick={() => navigate('/signup')} className="cursor-pointer">
            <UserIcon className="w-6 h-6 text-black " />
          </div>

          {/* Cart ka  Icon */}
       <div onClick={() => navigate('/cart')} className="relative cursor-pointer">
        <ShoppingCartIcon className="w-6 h-6 text-black" />
        {cartItems.length > 0 && (
          <span className="absolute top-2 right-2 bg-red-500 text-white rounded-full px-1 text-xs">
            {cartItems.length}
          </span>
        )}
      </div>
        </div>

       
      <div className="md:hidden">
          <button onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

     
      {isOpen && (
      <div className="md:hidden px-4 pb-4 pt-2 bg-white shadow-md rounded-b-md space-y-2">
          <Link to="/" onClick={() => setIsOpen(false)} className="block">Home</Link>
          <div>
            <button onClick={toggleMobileShoes} className="w-full text-left">
              Shoes {showMobileDropdown ? '▲' : '▼'}
            </button>
            {showMobileDropdown && (
              <div className="ml-4 mt-1 space-y-1">
                <Link to="/Shoes/Boots" onClick={() => setIsOpen(false)} className="block">Boots</Link>
                <Link to="/Shoes/Sandals" onClick={() => setIsOpen(false)} className="block">Sandals</Link>
                <Link to="/Shoes/Formal" onClick={() => setIsOpen(false)} className="block">Formal</Link>
                <Link to="/Shoes/Sneakers" onClick={() => setIsOpen(false)} className="block">Sneakers</Link>
              </div>
            )}
       </div>
          <Link to="/About" onClick={() => setIsOpen(false)} className="block">About</Link>
          <Link to="/Contact" onClick={() => setIsOpen(false)} className="block">Contact</Link>
        </div>
      )}
    </nav>
  );
}
