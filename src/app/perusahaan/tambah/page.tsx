"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import NavbarAdmin from '@/components/navbar/NavbarAdmin';
import Footer from '@/components/Footer';

export default function TambahDataPage() {
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate save and redirect
        router.push('/admin');
    };

    return (
        <div className="min-h-screen bg-[#fafafa] font-sans flex flex-col">
            <NavbarAdmin />
            <main className="flex-1 max-w-3xl mx-auto px-6 py-10 w-full">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold text-gray-900">Tambah Lowongan Magang</h1>
                        <Link href="/perusahaan" className="text-gray-400 hover:text-gray-600 transition">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </Link>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
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
                                <option value="Segera">Segera</option >
                            </select>
                        </div>
                        <div className="pt-4 flex gap-3 justify-end">
                            <button type="submit" className="bg-[#2b3175] hover:bg-[#20255c] text-white px-6 py-2.5 font-semibold rounded-lg shadow-sm transition">
                                Simpan Data
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}
