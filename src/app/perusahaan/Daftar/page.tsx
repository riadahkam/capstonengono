import React from 'react';
import Link from 'next/link';
import NavbarPerusahaan from '@/components/navbar/NavbarPerusahaan';

export default function DaftarPelamarPage() {
    return (
        <div className="h-screen bg-[#fafafa] font-sans pb-20 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <NavbarPerusahaan />
            <main className="max-w-7xl mx-auto px-6 mt-10">

                {/* Welcome Section */}
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Selamat Datang, PT Teknologi Maju</h2>
                <p className="text-gray-500">Kelola lowongan magang dan lihat pelamar mahasiswa</p>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-center gap-4">
                        <div className="bg-[#E8F4FA] p-3 rounded-xl text-[#1da1d8]">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" /></svg>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 leading-none">1</h3>
                            <p className="text-sm text-gray-500 mt-1">Lowongan Aktif</p>
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
                            <h3 className="text-2xl font-bold text-gray-900 leading-none">2</h3>
                            <p className="text-sm text-gray-500 mt-1">Berkas Tersedia</p>
                        </div>
                    </div>
                </div>

                {/* Tabs - Using previous styling but updated for navigation */}
                <div className="mt-8 inline-flex bg-white rounded-xl shadow-sm border border-[#d8a436]/50 p-1.5 gap-2">
                    <Link href="/perusahaan" className="text-gray-700 px-6 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 transition">
                        Kelola Lowongan
                    </Link>
                    <button className="bg-[#2b3175] text-white px-6 py-2 rounded-lg text-sm font-semibold shadow-sm">
                        Daftar Pelamar
                    </button>
                </div>

                {/* Table Section */}
                <div className="mt-12 mb-4">
                    <h2 className="text-xl font-bold text-gray-900">Daftar Pelamar Mahasiswa</h2>
                    <p className="text-sm text-gray-500 mt-1">Mahasiswa yang sudah melamar ke lowongan Anda</p>
                </div>

                <div className="overflow-x-auto bg-white border border-gray-300 rounded-md shadow-sm">
                    <table className="w-full text-left text-sm whitespace-nowrap">
                        {/* Menggunakan style table header sebelumnya (bg-[#2F3185] dan lis emas) */}
                        <thead className="bg-[#2F3185] text-white border-b-4 border-[#d8a436]">
                            <tr>
                                <th className="px-6 py-3.5 font-semibold text-left">Nama Mahasiswa</th>
                                <th className="px-6 py-3.5 font-semibold text-left">NIM</th>
                                <th className="px-6 py-3.5 font-semibold text-left">Lowongan</th>
                                <th className="px-6 py-3.5 font-semibold text-left">Email</th>
                                <th className="px-6 py-3.5 font-semibold text-left">Tanggal Lamar</th>
                                <th className="px-6 py-3.5 font-semibold text-left">Berkas</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-gray-600">
                            <tr className="hover:bg-gray-50 transition">
                                <td className="px-6 py-4 text-left text-gray-900 font-medium">Ahmad Fauzi</td>
                                <td className="px-6 py-4 text-left text-gray-500">L200210001</td>
                                <td className="px-6 py-4 text-left text-gray-500">Magang: Frontend Developer di PT Teknologi Maju</td>
                                <td className="px-6 py-4 text-left text-gray-500">ahmad.fauzi@student.ums.ac.id</td>
                                <td className="px-6 py-4 text-left text-gray-500">2026-03-28</td>
                                <td className="px-6 py-4 text-left">
                                    <button className="flex items-center gap-1.5 text-[#1da1d8] hover:text-[#158bbd] transition text-sm font-medium">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                        CV_AhmadFauzi.pdf
                                    </button>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition">
                                <td className="px-6 py-4 text-left text-gray-900 font-medium">Siti Nurhaliza</td>
                                <td className="px-6 py-4 text-left text-gray-500">L200210045</td>
                                <td className="px-6 py-4 text-left text-gray-500">Magang: Frontend Developer di PT Teknologi Maju</td>
                                <td className="px-6 py-4 text-left text-gray-500">siti.nurhaliza@student.ums.ac.id</td>
                                <td className="px-6 py-4 text-left text-gray-500">2026-03-30</td>
                                <td className="px-6 py-4 text-left">
                                    <button className="flex items-center gap-1.5 text-[#1da1d8] hover:text-[#158bbd] transition text-sm font-medium">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                        CV_SitiNurhaliza.pdf
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}
