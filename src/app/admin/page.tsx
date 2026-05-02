"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import NavbarAdmin from '@/components/navbar/NavbarAdmin';
import Footer from '@/components/Footer';

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState('webinar'); // 'webinar' | 'magang'
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTambahSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate save and close modal
    setIsModalOpen(false);
  };

  return (
    <div className="h-screen bg-[#fafafa] font-sans overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <NavbarAdmin />

      <main className="max-w-7xl mx-auto px-6 mt-10">

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-10">
          <button
            onClick={() => setActiveTab('webinar')}
            className={`flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg shadow-sm transition border ${activeTab === 'webinar'
              ? 'bg-[#2b3175] text-white border-[#2b3175]'
              : 'bg-[#f0f9fa] text-gray-700 border-gray-200 hover:bg-gray-100'
              }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            Webinar & Bootcamp
          </button>
          <button
            onClick={() => setActiveTab('magang')}
            className={`flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg shadow-sm transition border ${activeTab === 'magang'
              ? 'bg-[#2b3175] text-white border-[#2b3175]'
              : 'bg-[#f0f9fa] text-gray-700 border-gray-200 hover:bg-gray-100'
              }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            Lowongan Magang (Perusahaan)
          </button>
        </div>

        {/* Content based on activeTab */}
        {activeTab === 'webinar' ? (
          <>
            {/* Header & Button */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-1">Kelola Webinar & Bootcamp</h1>
                <p className="text-gray-500 text-sm">Dikelola oleh Admin internal Informatika UMS</p>
              </div>
              <button onClick={() => setIsModalOpen(true)} className="bg-[#1da1d8] hover:bg-[#158bbd] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition shadow-sm inline-block">
                Tambah Baru
              </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg shadow-sm mb-10">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-[#3b439c] text-white border-b-4 border-[#F5C13A]">
                  <tr>
                    <th className="px-6 py-4 font-semibold text-center w-1/4">Judul Program</th>
                    <th className="px-6 py-4 font-semibold text-center">Kategori</th>
                    <th className="px-6 py-4 font-semibold text-center">Penyelenggara</th>
                    <th className="px-6 py-4 font-semibold text-center">Waktu</th>
                    <th className="px-6 py-4 font-semibold text-center">Status</th>
                    <th className="px-6 py-4 font-semibold text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {/* Row 1 */}
                  <tr className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 text-center"></td>
                    <td className="px-6 py-4 text-center"></td>
                    <td className="px-6 py-4 text-center"></td>
                    <td className="px-6 py-4 text-center"></td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-block bg-[#A6FCB5] text-[#036E17] px-4 py-1 rounded-full text-xs font-bold">
                        Aktif
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-3">
                        <button className="text-[#00b0e4] hover:text-[#0089b3] transition">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                        </button>
                        <button className="text-red-500 hover:text-red-700 transition">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 2 */}
                  <tr className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 text-center"></td>
                    <td className="px-6 py-4 text-center"></td>
                    <td className="px-6 py-4 text-center"></td>
                    <td className="px-6 py-4 text-center"></td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-block bg-[#FFE5A2] text-[#A67B0A] px-4 py-1 rounded-full text-xs font-bold">
                        Segera
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-3">
                        <button className="text-[#00b0e4] hover:text-[#0089b3] transition">
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
          </>
        ) : (
          <>
            {/* Header for Lowongan Magang */}
            <div className="flex flex-col mb-6 gap-1">
              <h1 className="text-2xl font-bold text-gray-900">Lowongan Magang dari Perusahaan</h1>
              <p className="text-gray-500 text-sm">Data diinput oleh perusahaan partner. Admin hanya dapat menghapus jika diperlukan.</p>
            </div>

            {/* Table for Lowongan Magang */}
            <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg shadow-sm mb-10">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-[#3b439c] text-white border-b-4 border-[#F5C13A]">
                  <tr>
                    <th className="px-6 py-4 font-semibold text-center w-1/4">Judul Lowongan</th>
                    <th className="px-6 py-4 font-semibold text-center">Perusahaan</th>
                    <th className="px-6 py-4 font-semibold text-center">Lokasi</th>
                    <th className="px-6 py-4 font-semibold text-center">Deadline</th>
                    <th className="px-6 py-4 font-semibold text-center">Status</th>
                    <th className="px-6 py-4 font-semibold text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {/* Row 1 */}
                  <tr className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 text-center"></td>
                    <td className="px-6 py-4 text-center"></td>
                    <td className="px-6 py-4 text-center"></td>
                    <td className="px-6 py-4 text-center"></td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-block bg-[#A6FCB5] text-[#036E17] px-4 py-1 rounded-full text-xs font-bold">
                        Aktif
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center">
                        <button className="text-red-500 hover:bg-red-100 transition border border-red-200 p-1.5 rounded-md bg-red-50">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 2 */}
                  <tr className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 text-center"></td>
                    <td className="px-6 py-4 text-center"></td>
                    <td className="px-6 py-4 text-center"></td>
                    <td className="px-6 py-4 text-center"></td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-block bg-[#A6FCB5] text-[#036E17] px-4 py-1 rounded-full text-xs font-bold">
                        Aktif
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center">
                        <button className="text-red-500 hover:bg-red-100 transition border border-red-200 p-1.5 rounded-md bg-red-50">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}
      </main>

      {/* Modal Tambah Data */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto pt-10 pb-10">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 w-full max-w-3xl my-auto">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Tambah Data Baru</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600 transition">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <div className="p-6 max-h-[80vh] overflow-y-auto">
              <form onSubmit={handleTambahSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Judul Program</label>
                  <input type="text" className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2b3175] text-black" placeholder="Contoh: Webinar: Cloud Computing dengan AWS" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Kategori</label>
                  <select className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2b3175] text-black">
                    <option value="Webinar">Webinar</option>
                    <option value="Bootcamp">Bootcamp</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Nama Penyelenggara</label>
                  <input type="text" className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2b3175] text-black" placeholder="Contoh: Admin Informatika UMS" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Deskripsi Lengkap</label>
                  <textarea rows={4} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2b3175] text-black" placeholder="Tuliskan deskripsi lengkap mengenai program ini..."></textarea>
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
                  <input type="text" className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2b3175] text-black" placeholder="7 Oktober 2026 atau segera" />
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

      <Footer />
    </div>
  );
}
