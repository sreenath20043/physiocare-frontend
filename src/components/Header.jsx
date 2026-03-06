// src/components/Header.jsx
import { Avatar, Dropdown, DropdownDivider, DropdownHeader, DropdownItem } from 'flowbite-react';
import { Activity } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Profile from '../user/components/Profile';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userData , setUserData]= useState({})

  let userDetails = JSON.parse(sessionStorage.getItem('userDetails'))
  
  useEffect(()=>{
    setUserData(userDetails)
  },[])

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border w-full">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <nav className="flex justify-between items-center h-20">

          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="flex items-center gap-2 sm:gap-3 cursor-pointer select-none">
                <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-br from-[#23b7d9] to-[#15d39e] text-white flex items-center justify-center">
                  <Activity size={22} className="sm:w-[26px] sm:h-[26px]" strokeWidth={2.5} />
                </div>
                <h1 className="text-lg sm:text-2xl font-semibold text-[#2b3b56]">
                  PhysioCare
                </h1>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-10">

            <Link to="/" className="text-gray-700 hover:text-[#23b7d9] font-medium text-sm">
              Home
            </Link>

            <Link to="/about" className="text-gray-700 hover:text-[#23b7d9] font-medium text-sm">
              About
            </Link>

            <Link to="/service" className="text-gray-700 hover:text-[#23b7d9] font-medium text-sm">
              Services
            </Link>

            <Link to="/alldoctors" className="text-gray-700 hover:text-[#23b7d9] font-medium text-sm">
              Booking
            </Link>

            <Link to="/contact" className="text-gray-700 hover:text-[#23b7d9] font-medium text-sm">
              Contact
            </Link>

            {
              userData ? null :
              <Link to="/doctorportal" className="text-gray-700 hover:text-[#23b7d9] font-medium text-sm">
                Doctor Portal
              </Link>
            }

            {/* User Dropdown */}
            {
              userData ?
                <Dropdown
                  arrowIcon={false}
                  inline
                  label={
                    <Avatar
                      alt="User settings"
                      img={userData.profile}
                      rounded
                    />
                  }
                >
                  <DropdownHeader>
                    <span className="block text-sm">{userData.username}</span>
                    <span className="block truncate text-sm font-medium">{userData.email}</span>
                  </DropdownHeader>

                  <Link to={'/profile'}>
                    <DropdownItem>Profile</DropdownItem>
                  </Link>

                  <DropdownDivider />

                  <Link to={'/login'}>
                    <DropdownItem>Sign out</DropdownItem>
                  </Link>
                </Dropdown>
                :
                <Link to={'/login'}>
                  <button className="ml-4 px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors text-sm">
                    Sign-in
                  </button>
                </Link>
            }

          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>

        </nav>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 pt-3 pb-4 space-y-2">

            <Link to="/" className="block py-2 text-base font-medium text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>

            <Link to="/about" className="block py-2 text-base font-medium text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}>
              About
            </Link>

            <Link to="/service" className="block py-2 text-base font-medium text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>

            <Link to="/alldoctors" className="block py-2 text-base font-medium text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}>
              Booking
            </Link>

            {/* <Link to="/videos" className="block py-2 text-base font-medium text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}>
              Videos
            </Link> */}

            <Link to="/contact" className="block py-2 text-base font-medium text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>

            {
              userData ? null :
              <Link to="/doctorportal" className="block py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}>
                Doctor Portal
              </Link>
            }

            {
  userData ? (
    <>
      <Link
        to="/profile"
        onClick={() => setIsMenuOpen(false)}
        className="block py-2 text-base font-medium text-gray-700 hover:text-blue-600"
      >
        Profile
      </Link>

      <Link
        to="/login"
        onClick={() => {
          sessionStorage.clear();
          setIsMenuOpen(false);
        }}
        className="block py-2 text-base font-medium text-red-600 hover:text-red-700"
      >
        Sign out
      </Link>
    </>
  ) : (
    <Link to={'/login'}>
      <button className="w-full mt-3 px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors text-sm">
        Sign-in
      </button>
    </Link>
  )
}

          </div>
        </div>
      )}
    </header>
  );
};

export default Header;