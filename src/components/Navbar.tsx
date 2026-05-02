import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="relative z-50 w-full flex items-center justify-between px-6 py-4 bg-[#2b3175] border-b-2 border-[#d8a436]">
      {/* Logo Section */}
      <Link href="/" className="flex items-center">
        <img
          src="/images/ums logo.png"
          alt="Logo Universitas Muhammadiyah Surakarta"
          className="h-10 md:h-12 w-auto object-contain"
        />
      </Link>

      {/* Navigation Links and Actions */}
      <div className="flex items-center gap-8">
        <ul className="flex items-center gap-6 text-white text-sm font-medium">
          <li>
            <Link href="/" className="bg-[#d8a436] px-5 py-2 rounded-full hover:bg-[#c4922b] transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/tentang-kami" className="hover:text-gray-200 transition">
              Tentang Kami
            </Link>
          </li>
          <li>
            <Link href="/panduan" className="hover:text-gray-200 transition">
              Panduan
            </Link>
          </li>
        </ul>

        {/* Search Bar */}
        <div className="relative flex items-center">
          <div className="absolute left-3 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search"
            className="bg-[#3b439c] text-white text-sm rounded-full pl-9 pr-4 py-2 w-48 focus:outline-none focus:ring-1 focus:ring-[#00b0e4] placeholder-gray-400 transition"
          />
        </div>

        {/* Login Button */}
        <Link 
          href="/login" 
          className="bg-[#00b0e4] hover:bg-[#009bc9] text-white text-sm font-semibold px-6 py-2 rounded-full transition"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
