// components/Header.tsx
"use client";

import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 py-4 shadow-lg fixed w-full top-0 z-30">
      <div className="container mx-auto flex items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            <h1 className="text-3xl font-bold text-white flex items-center">
              <FaUserCircle className="text-teal-400 text-4xl" />
              <span className="ml-2">Star Health</span>
            </h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link href="/" className="text-gray-300 hover:text-white transition duration-300">Home</Link>
          <Link href="/services" className="text-gray-300 hover:text-white transition duration-300">Services</Link>
          <Link href="/about-us" className="text-gray-300 hover:text-white transition duration-300">About Us</Link>
          <Link href="/" id='contact' className="text-gray-300 hover:text-white transition duration-300">Contact Us</Link>
          <Link href="/login" className="text-teal-400 hover:text-teal-300 transition duration-300">Login</Link>
          <Link href="/register" className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition duration-300">Register</Link>
        </nav>

        {/* Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white text-3xl">
            {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-y-0 right-0 w-64 bg-gray-800 text-white shadow-lg z-40 transform transition-transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full p-4">
          {/* Logo */}
          <div className="flex items-center justify-between mb-8">
            <Link href="/" className="text-2xl font-bold flex items-center">
              <FaUserCircle className="text-teal-400 text-3xl" />
              <span className="ml-2">Star Health</span>
            </Link>
            <button onClick={toggleMenu} className="text-white text-3xl">
              <AiOutlineClose />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-6">
            <Link href="/" className="text-xl hover:text-teal-400 transition duration-300" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/services" className="text-xl hover:text-teal-400 transition duration-300" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link href="/about" className="text-xl hover:text-teal-400 transition duration-300" onClick={() => setIsMenuOpen(false)}>About Us</Link>
            <Link href="/contact" className="text-xl hover:text-teal-400 transition duration-300" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
            <Link href="/login" className="text-teal-400 text-xl hover:text-teal-300 transition duration-300" onClick={() => setIsMenuOpen(false)}>Login</Link>
            <Link href="/register" className="bg-teal-500 text-white text-xl px-4 py-2 rounded-lg hover:bg-teal-600 transition duration-300" onClick={() => setIsMenuOpen(false)}>Register</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
