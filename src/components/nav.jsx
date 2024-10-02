import React, { useState } from "react";
import { FiUser, FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center py-8 px-8 lg:px-40 bg-[#335043] text-white">
      {/* Logo */}
      <h1 className="text-3xl lg:text-4xl">Furni</h1>

      {/* Hamburger Menu for Mobile */}
      <div className="lg:hidden">
        <button
          onClick={toggleMobileMenu}
          className="text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Navigation Links for Desktop */}
      <ul className="hidden lg:flex justify-between items-center text-xl space-x-6 lg:space-x-10">
        <li>
          <a href="#" className="hover:border-b-2 hover:border-yellow-400 transition-all duration-300 pb-1">Home</a>
        </li>
        <li>
          <a href="#" className="hover:border-b-2 hover:border-yellow-400 transition-all duration-300 pb-1">About</a>
        </li>
        <li>
          <a href="#" className="hover:border-b-2 hover:border-yellow-400 transition-all duration-300 pb-1">Services</a>
        </li>
        <li>
          <a href="#" className="hover:border-b-2 hover:border-yellow-400 transition-all duration-300 pb-1">Blog</a>
        </li>
        <li>
          <a href="#" className="hover:border-b-2 hover:border-yellow-400 transition-all duration-300 pb-1">Contact us</a>
        </li>
        <li>
          <a href="#" className="hover:border-b-2 hover:border-yellow-400 transition-all duration-300 pb-1">
            <FiUser />
          </a>
        </li>
        <li>
          <a href="#" className="hover:border-b-2 hover:border-yellow-400 transition-all duration-300 pb-1">
            <FiShoppingCart />
          </a>
        </li>
      </ul>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="absolute top-20 right-0 w-full bg-[#335043] flex flex-col items-center space-y-4 py-5 text-center text-xl lg:hidden">
          <li>
            <a href="#" className="hover:border-b-2 hover:border-yellow-400 transition-all duration-300 pb-1">Home</a>
          </li>
          <li>
            <a href="#" className="hover:border-b-2 hover:border-yellow-400 transition-all duration-300 pb-1">About</a>
          </li>
          <li>
            <a href="#" className="hover:border-b-2 hover:border-yellow-400 transition-all duration-300 pb-1">Services</a>
          </li>
          <li>
            <a href="#" className="hover:border-b-2 hover:border-yellow-400 transition-all duration-300 pb-1">Blog</a>
          </li>
          <li>
            <a href="#" className="hover:border-b-2 hover:border-yellow-400 transition-all duration-300 pb-1">Contact us</a>
          </li>
          <li>
            <a href="#" className="hover:border-b-2 hover:border-yellow-400 transition-all duration-300 pb-1">
              <FiUser />
            </a>
          </li>
          <li>
            <a href="#" className="hover:border-b-2 hover:border-yellow-400 transition-all duration-300 pb-1">
              <FiShoppingCart />
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
