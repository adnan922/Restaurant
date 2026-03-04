"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link href="/" className="font-playfair text-2xl font-bold text-amber-600">
            Restaurant
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center font-medium text-zinc-700">
            <Link href="/" className="hover:text-amber-600 transition">Home</Link>
            <Link href="/about" className="hover:text-amber-600 transition">About Us</Link>
            <Link href="/menu" className="hover:text-amber-600 transition">Menu</Link>
            
            <div className="relative group cursor-pointer">
              <span className="flex items-center hover:text-amber-600 transition">
                Catering <ChevronDown className="w-4 h-4 ml-1" />
              </span>
              <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg p-4 rounded-md min-w-[200px]">
                <Link href="/catering/private-catering" className="block py-2 hover:text-amber-600">Private Catering</Link>
                <Link href="/catering/corporate-catering" className="block py-2 hover:text-amber-600">Corporate Catering</Link>
              </div>
            </div>
            <Link href="/contact" className="hover:text-amber-600 transition">Contact Us</Link>
            <Link href="/contact" className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition shadow-md">
            Reservation
            </Link>
            
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-700">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 shadow-lg flex flex-col space-y-4">
          <Link href="/" className="text-zinc-700 font-medium">Home</Link>
          <Link href="#about" className="text-zinc-700 font-medium">About Us</Link>
          <Link href="#menu" className="text-zinc-700 font-medium">Menu</Link>
          <Link href="#catering" className="text-zinc-700 font-medium">Catering</Link>
          <button className="bg-amber-600 text-white w-full py-2 rounded-md">Reservation</button>
        </div>
      )}
    </nav>
  );
}