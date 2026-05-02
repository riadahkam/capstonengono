"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState('Mahasiswa');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Login berhasil sebagai ${role}! Selamat datang di IT Learning Hub.`);

    if (role === 'Mahasiswa') {
      router.push('/dashboard');
    } else if (role === 'Admin') {
      router.push('/admin');
    } else if (role === 'Perusahaan') {
      router.push('/perusahaan');
    }
  };

  return (
    <div className="h-screen bg-[#2b3175] flex flex-col items-center justify-center p-6 font-sans">

      {/* Header text */}
      <div className="text-center mb-8 text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">Masuk Ke IT Learning Hub</h1>
        <p className="text-sm md:text-base text-gray-200">Akses Informasi Webinar, Bootcamp, dan Magang</p>
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-[2rem] p-8 md:p-12 w-full max-w-2xl shadow-2xl">

        {/* Role Toggle */}
        <div className="flex bg-[#f3f4f6] rounded-full p-2 mb-10">
          <button
            type="button"
            onClick={() => setRole('Mahasiswa')}
            className={`flex-1 text-center py-3 text-sm font-semibold rounded-full transition ${role === 'Mahasiswa' ? 'text-white bg-[#2b3175] shadow-md' : 'text-gray-500 hover:bg-gray-200'}`}
          >
            Mahasiswa
          </button>
          <button
            type="button"
            onClick={() => setRole('Admin')}
            className={`flex-1 text-center py-3 text-sm font-semibold rounded-full transition ${role === 'Admin' ? 'text-white bg-[#2b3175] shadow-md' : 'text-gray-500 hover:bg-gray-200'}`}
          >
            Admin
          </button>
          <button
            type="button"
            onClick={() => setRole('Perusahaan')}
            className={`flex-1 text-center py-3 text-sm font-semibold rounded-full transition ${role === 'Perusahaan' ? 'text-white bg-[#2b3175] shadow-md' : 'text-gray-500 hover:bg-gray-200'}`}
          >
            Perusahaan
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Email Field */}
          <div className="flex flex-col gap-2">
            <label className="font-bold text-gray-900 text-sm md:text-base ml-1">Email</label>
            <input
              type="email"
              className="bg-[#f3f4f6] rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#2b3175] transition text-gray-800"
              required
            />
          </div>

          {/* Password Field */}
          <div className="flex flex-col gap-2">
            <label className="font-bold text-gray-900 text-sm md:text-base ml-1">Password</label>
            <input
              type="password"
              className="bg-[#f3f4f6] rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#2b3175] transition text-gray-800"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#2b3175] hover:bg-[#20255c] text-white font-semibold py-4 rounded-2xl mt-4 transition shadow-lg text-lg"
          >
            Masuk
          </button>
        </form>

        {/* Link to Register */}
        <div className="text-center mt-8">
          <p className="text-gray-600 text-sm">
            Belum punya akun?{' '}
            <Link href="/register" className="text-[#2b3175] font-bold hover:underline">
              Daftar sekarang
            </Link>
          </p>
        </div>
      </div>

      {/* Back Link */}
      <Link href="/" className="mt-8 text-gray-300 hover:text-white flex items-center gap-2 text-sm transition font-medium">
        &larr; Kembali ke Beranda
      </Link>
    </div>
  );
}
