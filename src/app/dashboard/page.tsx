"use client";

import React, { useState } from 'react';
import Link from 'next/link';

import NavbarMahasiswa from '@/components/navbar/NavbarMahasiswa';

export default function DashboardPage() {
  const [activeFilter, setActiveFilter] = useState('Semua');

  const opportunities = [
    {
      id: 1,
      type: "Webinar",
      status: "Aktif",
      title: "Webinar: Cloud Computing dengan AWS",
      description: "Pelajari dasar-dasar cloud computing menggunakan Amazon Web Services. Webinar ini membahas EC2, S3, dan layanan inti lainnya.",
      date: "20 Mei 2026",
      company: null
    },
    {
      id: 2,
      type: "Bootcamp",
      status: "Segera",
      title: "Bootcamp: Full-Stack Web Development",
      description: "Bootcamp intensif selama 3 hari untuk mempelajari React, Node.js, dan PostgreSQL. Peserta akan membuat project nyata.",
      date: "Segera",
      company: null
    },
    {
      id: 3,
      type: "Magang",
      status: "Aktif",
      title: "Magang: Frontend Developer di PT Teknologi Maju",
      description: "Kesempatan magang selama 6 bulan sebagai Frontend Developer. Akan bekerja langsung dengan tim profesional.",
      date: "30 Juni 2026",
      company: "PT Teknologi Maju"
    },
    {
      id: 4,
      type: "Webinar",
      status: "Aktif",
      title: "Webinar: Cybersecurity Fundamentals",
      description: "Pengenalan keamanan siber mencakup ethical hacking, network security, dan best practices dalam industri IT.",
      date: "15 April 2026",
      company: null
    },
    {
      id: 5,
      type: "Magang",
      status: "Aktif",
      title: "Magang: Data Analyst di Startup Edutech",
      description: "Magang remote sebagai Data Analyst. Mengolah data pengguna platform edukasi untuk memberikan insight bisnis.",
      date: "25 Mei 2026",
      company: "EduTech Indonesia"
    }
  ];

  const filters = ["Semua", "Webinar", "Bootcamp", "Magang"];

  const filteredOpportunities = opportunities.filter((item) =>
    activeFilter === "Semua" ? true : item.type === activeFilter
  );

  return (
    <div className="h-screen bg-[#fafafa] font-sans overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

      <NavbarMahasiswa />

      <main className="max-w-7xl mx-auto px-6 mt-10 pb-20">
        <h1 className="text-[32px] font-bold text-gray-900 mb-6 tracking-tight">Jelajahi Peluang</h1>

        {/* Search Bar */}
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Cari webinar, bootcamp, atau magang..."
            className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2b3175] text-gray-700 bg-white shadow-sm transition"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition shadow-sm ${activeFilter === filter
                ? 'bg-[#2b3175] text-white hover:bg-[#20255c]'
                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid Cards */}
        {filteredOpportunities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOpportunities.map((item) => (
              <Link href={`/dashboard/${item.id}`} key={item.id} className="bg-white rounded-2xl border-2 border-gray-100 p-6 flex flex-col shadow-md hover:shadow-md hover:shadow-[#2F3185] hover:border-[#2F3185] transition group cursor-pointer block">

                {/* Card Tags */}
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase ${item.type === 'Webinar' ? 'bg-blue-50 text-blue-600' :
                    item.type === 'Bootcamp' ? 'bg-purple-50 text-purple-600' :
                      'bg-teal-50 text-teal-600'
                    }`}>
                    {item.type}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase ${item.status === 'Aktif' ? 'bg-green-50 text-green-600' : 'bg-yellow-50 text-yellow-600'
                    }`}>
                    {item.status}
                  </span>
                </div>

                {/* Card Content */}
                <h3 className="font-bold text-gray-900 text-[17px] mb-3 line-clamp-2 group-hover:text-[#2b3175] transition">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm mb-8 flex-1 line-clamp-3 leading-relaxed">
                  {item.description}
                </p>

                {/* Card Footer */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-gray-500 text-xs font-semibold">
                    <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item.date}
                  </div>
                  {item.company && (
                    <span className="text-[#00b0e4] text-xs font-semibold truncate max-w-[120px]">
                      {item.company}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm col-span-full">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Tidak ada peluang</h3>
            <p className="text-gray-500">Belum ada data untuk kategori <span className="font-semibold text-gray-700">{activeFilter}</span> saat ini.</p>
          </div>
        )}
      </main>
    </div>
  );
}
