import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Home, Services, and Testimonials in the center
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services & Products', path: '/services' },
    { name: 'Testimonials', path: '/testimonials' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo on the Left */}
          <div className="flex flex-shrink-0 items-center">
            <Link to="/">
              <img 
                src="/assets/images/Logo.jpg" 
                alt="Company Logo" 
                className="h-10 w-auto object-contain" 
              />
            </Link>
          </div>

          {/* Center Navigation Links */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="group relative py-2 text-sm font-semibold text-gray-600 transition-colors hover:text-sky-500"
                >
                  {link.name}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-sky-500 transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Button on the Right */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="rounded-lg bg-sky-500 px-7 py-2.5 text-sm font-bold text-white shadow-md shadow-sky-100 transition-all hover:bg-sky-600 hover:shadow-lg active:scale-95"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? (
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden border-t bg-white shadow-xl`}>
        <div className="space-y-1 px-4 pb-6 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block rounded-md px-3 py-4 text-lg font-medium text-gray-700 hover:bg-sky-50 hover:text-sky-500"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full rounded-xl bg-sky-500 py-4 text-center text-lg font-bold text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;