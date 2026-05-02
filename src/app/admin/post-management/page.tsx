import React from 'react';
import Link from 'next/link';

export default function PostManagementPage() {
  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      {/* Custom Navbar for Post Management page */}
      <nav className="relative z-50 w-full flex items-center justify-between px-6 py-4 bg-[#2b3175] border-b-2 border-[#d8a436]">
        <Link href="/admin" className="flex items-center">
          <img
            src="/images/ums logo.png"
            alt="Logo Universitas Muhammadiyah Surakarta"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </Link>
        <div className="flex items-center">
          <Link href="/admin" className="text-white font-medium flex items-center gap-2 hover:text-gray-200 transition text-sm md:text-base">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Kembali ke Dashboard
          </Link>
        </div>
      </nav>

      <main className="flex-1 max-w-6xl mx-auto px-6 py-12 w-full">
        <h1 className="text-[28px] font-bold text-gray-900 mb-10">Post Management</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Card 1: Webinar & Bootcamp */}
          <div className="border border-gray-200 rounded-xl p-8 shadow-sm">
            <div className="mb-4 text-[#0F94FA]">
              {/* Briefcase Icon */}
              <svg className="w-12 h-12 bg-[#C3E2FE] p-2 rounded-md" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Webinar & Bootcamp</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 pr-4">
              Dikelola oleh Admin internal Informatika UMS. Posting informasi webinar dan bootcamp yang relevan untuk mahasiswa
            </p>

            <div className="space-y-4">
              <div className="bg-[#2F3185] rounded-2xl px-6 py-4">
                <h3 className="font-bold text-white text-sm mb-1">Webinar: Cloud Computing dengan AWS</h3>
                <p className="text-xs text-white-500">Diposting oleh Admin • 20 Mei 2026</p>
              </div>
              <div className="bg-[#2F3185] rounded-2xl px-6 py-4">
                <h3 className="font-bold text-white text-sm mb-1">Bootcamp: Full-Stack Web Development</h3>
                <p className="text-xs text-white-500">Diposting oleh Admin • Segera</p>
              </div>
              <div className="bg-[#2F3185] rounded-2xl px-6 py-4">
                <h3 className="font-bold text-white text-sm mb-1">Webinar: Cybersecurity Fundamentals</h3>
                <p className="text-xs text-white-500">Diposting oleh Admin • 15 April 2026</p>
              </div>
            </div>
          </div>

          {/* Card 2: Internship Portal */}
          <div className="border border-gray-200 rounded-xl p-8 shadow-sm">
            <div className="mb-4 text-[#A67B0A]">
              {/* Map Pin Icon */}
              <svg className="w-12 h-12 bg-[#FFE5A2] p-2 rounded-md" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Internship Portal</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 pr-4">
              Portal khusus untuk perusahaan eksternal menginput detail lowongan magang mereka sendiri untuk mahasiswa Informatika UMS.
            </p>

            <div className="space-y-4">
              <div className="bg-[#2F3185] rounded-2xl px-6 py-4">
                <h3 className="font-bold text-white text-sm mb-1">Magang: Frontend Developer</h3>
                <p className="text-xs text-white-500">PT Teknologi Maju • Jakarta Selatan</p>
              </div>
              <div className="bg-[#2F3185] rounded-2xl px-6 py-4">
                <h3 className="font-bold text-white text-sm mb-1">Magang: Data Analyst</h3>
                <p className="text-xs text-white-500">EduTech Indonesia • Remote</p>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
