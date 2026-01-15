import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Projects', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Brand Logo */}
          <div className="flex flex-shrink-0 items-center">
            <span className="text-2xl font-extrabold tracking-tight text-gray-900">
              PRO<span className="text-blue-600">FOLIO</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group relative px-1 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-blue-600"
                >
                  {link.name}
                  {/* Underline Hover Animation */}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-blue-600 transition-transform duration-300 group-hover:scale-x-100"></span>
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="rounded-full bg-gray-900 px-6 py-2 text-sm font-semibold text-white transition-all hover:bg-gray-800 hover:shadow-lg active:scale-95">
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden border-t border-gray-100 bg-white`}>
        <div className="space-y-1 px-4 pb-3 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block rounded-md px-3 py-4 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
            >
              {link.name}
            </a>
          ))}
          <button className="mt-4 w-full rounded-xl bg-blue-600 py-3 text-center text-base font-bold text-white shadow-md">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;