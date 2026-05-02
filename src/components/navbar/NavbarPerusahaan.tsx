import React from 'react';
import Link from 'next/link';

export default function NavbarPerusahaan() {
  return (
    <nav className="relative z-50 w-full flex items-center justify-between px-12 py-4 bg-[#2b3175] border-b-4 border-[#d8a436]">
      {/* Logo Section */}
      <Link href="/" className="flex items-center">
        <img
          src="/images/ums.png"
          alt="Logo Universitas Muhammadiyah Surakarta"
          className="h-10 md:h-10 w-auto object-contain"
        />
      </Link>

      <div className="flex items-center gap-4">
        <span className="text-sm font-semibold text-white">Halo, Perusahaan!</span>
        <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold shadow-md">
          P
        </div>
      </div>
    </nav>
  );
}
