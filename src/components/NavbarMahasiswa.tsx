import React from 'react';
import Link from 'next/link';

export default function NavbarMahasiswa() {
  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow-sm">
      <Link href="/" className="font-bold text-2xl text-[#2b3175] italic tracking-wider flex items-center gap-2">
        UMS <span className="text-sm font-normal not-italic text-gray-500 hidden sm:inline">IT Learning Hub</span>
      </Link>
      <div className="flex items-center gap-4">
        <span className="text-sm font-semibold text-gray-700">Halo, Mahasiswa!</span>
        <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-[#2b3175] font-bold">
          M
        </div>
      </div>
    </nav>
  );
}
