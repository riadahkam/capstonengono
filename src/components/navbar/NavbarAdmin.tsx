import React from 'react';
import Link from 'next/link';

export default function NavbarAdmin() {
  return (
    <nav className="relative z-50 w-full flex items-center justify-between px-12 py-4 bg-[#2b3175] border-b-2 border-[#d8a436]">
      {/* Logo Section */}
      <Link href="/admin" className="flex items-center">
        <img
          src="/images/ums.png"
          alt="Logo Universitas Muhammadiyah Surakarta"
          className="h-10 md:h-10 w-auto object-contain"
        />
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-6">
        <Link href="/admin" className="text-white font-semibold flex items-center gap-2 hover:text-gray-200 transition text-sm md:text-base">
          <svg className="w-5 h-5 hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" /></svg>
          Admin Dashboard
        </Link>
        <Link href="/admin/post-management" className="text-white font-semibold hover:text-gray-200 transition text-sm md:text-base">
          Post Management
        </Link>
        <Link href="/" className="text-white font-semibold flex items-center gap-2 ml-4 hover:text-gray-200 transition text-sm md:text-base">
          Keluar
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
        </Link>
      </div>
    </nav>
  );
}
