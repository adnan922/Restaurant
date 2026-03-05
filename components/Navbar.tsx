"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' 
          : 'bg-gradient-to-b from-black/50 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo - Changes from White to Amber */}
          <Link 
            href="/" 
            className={`font-playfair text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-amber-600' : 'text-white'
            }`}
          >
           Restaurant
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center font-medium">
            <Link href="/" className={`transition-colors duration-300 hover:text-amber-500 ${isScrolled ? 'text-zinc-700' : 'text-white/90'}`}>Home</Link>
            <Link href="/about" className={`transition-colors duration-300 hover:text-amber-500 ${isScrolled ? 'text-zinc-700' : 'text-white/90'}`}>About Us</Link>
            <Link href="/menu" className={`transition-colors duration-300 hover:text-amber-500 ${isScrolled ? 'text-zinc-700' : 'text-white/90'}`}>Menu</Link>
            
            {/* Catering Dropdown */}
            <div className="relative group cursor-pointer py-2">
              <span className={`flex items-center transition-colors duration-300 hover:text-amber-500 ${isScrolled ? 'text-zinc-700' : 'text-white/90'}`}>
                Catering <ChevronDown className="w-4 h-4 ml-1" />
              </span>
              
              {/* Invisible padding bridge container */}
              <div className="absolute top-full left-0 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 pt-4">
                
                {/* The actual visible menu box */}
                <div className="bg-white shadow-xl p-4 rounded-lg min-w-[200px] border border-zinc-100">
                  <Link href="/catering/private-catering" className="block py-2 text-zinc-600 hover:text-amber-600 transition-colors">
                    Private Catering
                  </Link>
                  <Link href="/catering/corporate-catering" className="block py-2 text-zinc-600 hover:text-amber-600 transition-colors">
                    Corporate Catering
                  </Link>
                </div>

              </div>
            </div>
            
            <Link href="/contact" className={`transition-colors duration-300 hover:text-amber-500 ${isScrolled ? 'text-zinc-700' : 'text-white/90'}`}>Contact Us</Link>
            
            {/* Reservation Button - Swaps styles based on scroll */}
            <Link 
              href="/contact" 
              className={`px-6 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ${
                isScrolled 
                  ? 'bg-amber-600 text-white hover:bg-amber-700' 
                  : 'bg-white text-zinc-900 hover:bg-zinc-100'
              }`}
            >
              Reservation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={`transition-colors duration-300 ${isScrolled ? 'text-zinc-900' : 'text-white'}`}>
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Always solid white so it's readable) */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pt-4 pb-6 shadow-2xl flex flex-col space-y-4 absolute w-full left-0 top-full border-t border-zinc-100">
          <Link href="/" className="text-zinc-700 font-medium hover:text-amber-600 px-2" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" className="text-zinc-700 font-medium hover:text-amber-600 px-2" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link href="/menu" className="text-zinc-700 font-medium hover:text-amber-600 px-2" onClick={() => setIsOpen(false)}>Menu</Link>
          <Link href="/catering/private-catering" className="text-zinc-700 font-medium hover:text-amber-600 px-2" onClick={() => setIsOpen(false)}>Private Catering</Link>
          <Link href="/catering/corporate-catering" className="text-zinc-700 font-medium hover:text-amber-600 px-2" onClick={() => setIsOpen(false)}>Corporate Catering</Link>
          <Link href="/contact" className="text-zinc-700 font-medium hover:text-amber-600 px-2" onClick={() => setIsOpen(false)}>Contact Us</Link>
          <Link href="/contact" className="bg-amber-600 text-white w-full py-3 rounded-lg text-center font-medium shadow-md mt-4" onClick={() => setIsOpen(false)}>Make a Reservation</Link>
        </div>
      )}
    </nav>
  );
}
