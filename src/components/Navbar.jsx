import React from 'react';
import { Link } from 'react-router-dom';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-tr from-[#4e54c8] to-[#8f94fb] p-4 shadow-lg fixed w-full top-0 left-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <Link to="/" className="text-white hover:text-indigo-300">Business Nexus</Link>
        </div>

        {/* Navbar Links */}
        <div className="hidden md:flex space-x-6 text-white font-medium">
          <Link to="/" className="hover:text-indigo-200">Home</Link>
          <Link to="/about" className="hover:text-indigo-200">About</Link>
          <Link to="/services" className="hover:text-indigo-200">Services</Link>
          <Link to="/contact" className="hover:text-indigo-200">Contact</Link>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <Link to="/login" className="text-white hover:bg-white/30 p-2 rounded-full">
            <FaSignInAlt className="text-xl" />
          </Link>
          <Link to="/register" className="bg-white text-indigo-700 hover:bg-indigo-100 py-2 px-4 rounded-lg font-semibold transition duration-300">
            Register
          </Link>
        </div>

        {/* Mobile Menu (Hamburger) */}
        <div className="md:hidden">
          <button className="text-white">
            <span className="material-icons">menu</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
