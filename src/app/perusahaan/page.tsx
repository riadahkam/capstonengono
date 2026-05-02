import React from 'react';
import NavbarPerusahaan from '@/components/navbar/NavbarPerusahaan';

export default function PerusahaanDashboardPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] font-sans pb-20">
      <NavbarPerusahaan />
      <main className="max-w-7xl mx-auto px-6 mt-10">
        <h1 className="text-[32px] font-bold text-gray-900 mb-6 tracking-tight">Dasbor Perusahaan</h1>
        <div className="bg-white rounded-2xl border border-gray-100 p-10 shadow-sm text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Selamat Datang, Mitra Perusahaan</h2>
          <p className="text-gray-500">Anda dapat mempublikasikan lowongan magang atau webinar baru di sini.</p>
        </div>
      </main>
    </div>
  );
}
