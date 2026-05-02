"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import NavbarPerusahaan from '@/components/navbar/NavbarPerusahaan';

export default function PerusahaanDashboardPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTambahSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate save and close modal
    setIsModalOpen(false);
  };

  return (
    <div className="h-screen bg-[#fafafa] font-sans pb-20 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <NavbarPerusahaan />
      <main className="max-w-7xl mx-auto px-6 mt-10">

        {/* Welcome Section */}
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Selamat Datang, Mitra Perusahaan</h2>
        <p className="text-gray-500">Anda dapat mempublikasikan lowongan magang atau webinar baru di sini.</p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="bg-[#E8F4FA] p-3 rounded-xl text-[#1da1d8]">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" /></svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 leading-none">1</h3>
              <p className="text-sm text-gray-500 mt-1">Lowongan aktif</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="bg-[#e6f8ec] p-3 rounded-xl text-[#22c55e]">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 leading-none">2</h3>
              <p className="text-sm text-gray-500 mt-1">Total Pelamar</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="bg-[#f3e8ff] p-3 rounded-xl text-[#a855f7]">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 leading-none">1</h3>
              <p className="text-sm text-gray-500 mt-1">Berkas tersedia</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-8 inline-flex bg-white rounded-xl shadow-sm border border-[#d8a436]/50 p-1.5 gap-2">
          <button className="bg-[#2b3175] text-white px-6 py-2 rounded-lg text-sm font-semibold shadow-sm">Kelola Lowongan</button>
          <Link href="/perusahaan/Daftar" className="text-gray-700 px-6 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 transition">
            Daftar Pelamar
          </Link>
        </div>

        {/* Table Section */}
        <div className="flex justify-between items-center mt-12 mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Lowongan Magang Anda</h2>
          <button onClick={() => setIsModalOpen(true)} className="bg-[#2D80B6] hover:bg-[#216794] transition text-white px-5 py-2.5 rounded-md text-sm font-semibold shadow-sm">
            Tambah Lowongan
          </button>
        </div>

        <div className="overflow-x-auto bg-white border border-gray-300 rounded-md shadow-sm">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-[#2F3185] text-white border-b-4 border-[#d8a436]">
              <tr>
                <th className="px-6 py-3.5 font-semibold w-1/3">Judul Lowongan</th>
                <th className="px-6 py-3.5 font-semibold text-center">Lokasi</th>
                <th className="px-6 py-3.5 font-semibold text-center">Deadline</th>
                <th className="px-6 py-3.5 font-semibold text-center">Status</th>
                <th className="px-6 py-3.5 font-semibold text-center">Pelamar</th>
                <th className="px-6 py-3.5 font-semibold text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-600">
              <tr className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 text-left text-gray-900">Magang: Frontend Developer di PT Teknologi Maju</td>
                <td className="px-6 py-4 text-left text-gray-500">Jakarta Selatan</td>
                <td className="px-6 py-4 text-left text-gray-500">30 Juni 2026</td>
                <td className="px-6 py-4 text-left">
                  <span className="inline-block bg-[#e6f8ec] text-[#22c55e] px-4 py-1.5 rounded-full text-xs font-bold">
                    Aktif
                  </span>
                </td>
                <td className="px-6 py-4 text-left">
                  <button className="flex items-center gap-1.5 text-[#1da1d8] hover:text-[#158bbd] transition text-sm font-medium">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    2 Pelamar
                  </button>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center gap-3">
                    <button className="text-[#1da1d8] hover:text-[#158bbd] transition">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                    </button>
                    <button className="text-red-500 hover:text-red-700 transition">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>

      {/* Modal Tambah Lowongan */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto pt-10 pb-10">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 w-full max-w-3xl my-auto">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Tambah Lowongan Magang</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600 transition">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <div className="p-6 max-h-[80vh] overflow-y-auto">
              <form onSubmit={handleTambahSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Judul Program</label>
                  <input type="text" className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2b3175] text-black" placeholder="Contoh: Magang Front-End Developer" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Nama Perusahaan</label>
                  <input type="text" className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2b3175] text-black" placeholder="Contoh: PT. Maju Mundur" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Lokasi</label>
                  <input type="text" className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2b3175] text-black" placeholder="Contoh: Surakarta" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Deskripsi Lengkap</label>
                  <textarea rows={4} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2b3175] text-black" placeholder="Deskripsi Lowongan Magang"></textarea>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Persyaratan (satu per baris)</label>
                  <textarea rows={4} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2b3175] text-black" placeholder="Contoh:&#10;Mahasiswa aktif Informatika UMS&#10;Memiliki akun AWS Free Tier"></textarea>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Poin Manfaat SKPI</label>
                  <input type="text" className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2b3175] text-black" placeholder="Contoh: 2 Poin SKPI (Pengembangan Diri)" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Link Pendaftaran</label>
                  <input type="text" className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2b3175] text-black" placeholder="https://example.com/daftar" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Atribut Waktu / Deadline</label>
                  <input type="text" className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2b3175] text-black" placeholder="Contoh: 7 Oktober 2026 atau segera" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Status</label>
                  <select className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2b3175] text-black">
                    <option value="Aktif">Aktif</option>
                    <option value="Tutup">Tutup</option>
                    <option value="Segera">Segera</option>
                  </select>
                </div>
                <div className="pt-4 flex gap-3 justify-end">
                  <button type="button" onClick={() => setIsModalOpen(false)} className="px-6 py-2.5 font-semibold rounded-lg text-gray-600 hover:bg-gray-100 transition">
                    Batal
                  </button>
                  <button type="submit" className="bg-[#2b3175] hover:bg-[#20255c] text-white px-6 py-2.5 font-semibold rounded-lg shadow-sm transition">
                    Simpan Data
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
