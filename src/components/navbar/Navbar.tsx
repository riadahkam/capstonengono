"use client";

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-12 py-4 bg-[#2b3175] border-b-4 border-[#d8a436]">
      {/* Logo Section */}
      <Link href="/" className="flex items-center">
        <img
          src="/images/ums.png"
          alt="Logo Universitas Muhammadiyah Surakarta"
          className="h-10 md:h-10 w-auto object-contain"
        />
      </Link>

      {/* Navigation Links and Actions */}
      <div className="flex items-center gap-8">
        <ul className="flex items-center gap-6 text-white text-sm font-medium">
          <li>
            <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="cursor-pointer px-5 py-2 rounded-lg hover:bg-[#d8a436] transition-all duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#tentang-kami" onClick={(e) => handleScroll(e, 'tentang-kami')} className="cursor-pointer px-5 py-2 rounded-lg hover:bg-[#d8a436] transition-all duration-300">
              Tentang Kami
            </a>
          </li>
          <li>
            <a href="#panduan" onClick={(e) => handleScroll(e, 'panduan')} className="cursor-pointer px-5 py-2 rounded-lg hover:bg-[#d8a436] transition-all duration-300">
              Panduan
            </a>
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
