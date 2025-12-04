// src/components/Header.jsx
import { Activity } from 'lucide-react';
import React, { useState } from 'react';
import { FaBars, FaTimes, FaHeartbeat, FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className=" top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center ">
            <Link to="/" className="flex items-center">
            
               <div className="flex items-center gap-3 cursor-pointer select-none">
      <div className="p-3 rounded-xl bg-gradient-to-br from-[#23b7d9] to-[#15d39e] text-white flex items-center justify-center">
        <Activity size={26} strokeWidth={2.5} />
      </div>
      <h1 className="text-2xl font-semibold text-[#2b3b56]">
        PhysioCare
      </h1>
    </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-[#23b7d9] font-medium text-sm">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-[#23b7d9]  font-medium text-sm">
              About
            </Link>
            <Link to="/service" className="text-gray-700 hover:text-[#23b7d9]  font-medium text-sm">
              Services
            </Link>
            <Link to="/alldoctors" className="text-gray-700 hover:text-[#23b7d9]  font-medium text-sm">
              Doctors
            </Link>
            <Link to="/videos" className="text-gray-700 hover:text-[#23b7d9]  font-medium text-sm">
              Videos
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-[#23b7d9]  font-medium text-sm">
              Contact
            </Link>
           <Link to={'/login'}>
              <button className="ml-4 px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors text-sm">
                Sign-in
              </button>
           </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <FaTimes className="block h-6 w-6" />
              ) : (
                <FaBars className="block h-6 w-6" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <div className="px-3 py-2">
              <button className="flex items-center text-base font-medium text-gray-700">
                Pages <FaChevronDown className="ml-1 text-xs" />
              </button>
              {/* Mobile dropdown menu would go here */}
            </div>
            <Link
              to="/services"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/doctors"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Doctors
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            {/* <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link> */}
            <button className="w-full mt-2 px-4 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700">
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;