import React from 'react';
import Link from 'next/link';

// Dummy data (mensimulasikan database)
const opportunities = [
  {
    id: 1,
    type: "Webinar",
    status: "Aktif",
    title: "Webinar: Cloud Computing dengan AWS",
    description: "Pelajari dasar-dasar cloud computing menggunakan Amazon Web Services. Webinar ini membahas EC2, S3, dan layanan inti lainnya.",
    date: "20 Mei 2026",
    company: null,
    requirements: ["Mahasiswa aktif Informatika UMS", "Memiliki akun AWS Free Tier"],
    skpi: "2 Poin SKPI (Pengembangan Diri)"
  },
  {
    id: 2,
    type: "Bootcamp",
    status: "Segera",
    title: "Bootcamp: Full-Stack Web Development",
    description: "Bootcamp intensif selama 3 hari untuk mempelajari React, Node.js, dan PostgreSQL. Peserta akan membuat project nyata.",
    date: "Segera",
    company: null,
    requirements: ["Mahasiswa minimal semester 4", "Memahami dasar-dasar HTML, CSS, JS"],
    skpi: "5 Poin SKPI (Kompetensi Tambahan)"
  },
  {
    id: 3,
    type: "Magang",
    status: "Aktif",
    title: "Magang: Frontend Developer di PT Teknologi Maju",
    description: "Kesempatan magang selama 6 bulan sebagai Frontend Developer. Akan bekerja langsung dengan tim profesional.",
    date: "30 Juni 2026",
    company: "PT Teknologi Maju",
    requirements: ["Mahasiswa semester 6-8", "Menguasai React.js dan Tailwind CSS", "Bersedia WFO di Jakarta"],
    skpi: "Konversi SKS Magang Pilihan"
  },
  {
    id: 4,
    type: "Webinar",
    status: "Aktif",
    title: "Webinar: Cybersecurity Fundamentals",
    description: "Pengenalan keamanan siber mencakup ethical hacking, network security, dan best practices dalam industri IT.",
    date: "15 April 2026",
    company: null,
    requirements: ["Terbuka untuk umum", "Memiliki minat di bidang keamanan jaringan"],
    skpi: "2 Poin SKPI (Pengembangan Diri)"
  },
  {
    id: 5,
    type: "Magang",
    status: "Aktif",
    title: "Magang: Data Analyst di Startup Edutech",
    description: "Magang remote sebagai Data Analyst. Mengolah data pengguna platform edukasi untuk memberikan insight bisnis.",
    date: "25 Mei 2026",
    company: "EduTech Indonesia",
    requirements: ["Familiar dengan SQL dan Python/R", "Memiliki kemampuan analisa data yang baik", "Wajib mengirimkan portofolio"],
    skpi: "Konversi SKS Magang Pilihan"
  }
];

import NavbarMahasiswa from '@/components/navbar/NavbarMahasiswa';

export default async function OpportunityDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = parseInt(resolvedParams.id, 10);
  const data = opportunities.find((item) => item.id === id);

  if (!data) {
    return (
      <div className="min-h-screen bg-[#fafafa] flex flex-col font-sans">
        <NavbarMahasiswa />
        <div className="flex flex-col items-center justify-center flex-1">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Peluang tidak ditemukan</h1>
          <Link href="/dashboard" className="text-blue-600 font-semibold hover:underline">&larr; Kembali ke Dashboard</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans pb-20">
      <NavbarMahasiswa />
      
      <div className="max-w-4xl mx-auto pt-10 px-6">
        {/* Back Button */}
        <Link href="/dashboard" className="text-gray-500 hover:text-[#2b3175] flex items-center gap-2 mb-6 text-sm font-semibold transition w-fit">
          &larr; Kembali
        </Link>
        
        {/* Detail Card */}
        <div className="bg-white rounded-[2rem] border border-gray-100 p-8 md:p-12 shadow-sm">
          
          {/* Header Tags */}
          <div className="flex items-center gap-3 mb-6">
            <span className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase ${
              data.type === 'Webinar' ? 'bg-blue-50 text-blue-600' :
              data.type === 'Bootcamp' ? 'bg-purple-50 text-purple-600' :
              'bg-teal-50 text-teal-600'
            }`}>
              {data.type}
            </span>
            <span className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase ${
              data.status === 'Aktif' ? 'bg-green-50 text-green-600' : 'bg-yellow-50 text-yellow-600'
            }`}>
              {data.status}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-[34px] font-bold text-[#1a202c] mb-4 tracking-tight leading-snug">
            {data.title}
          </h1>
          
          {/* Deadline */}
          <p className="text-gray-500 text-sm mb-10">
            Deadline: <span className="font-medium text-gray-700">{data.date}</span>
          </p>

          {/* Deskripsi Program */}
          <div className="mb-10">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Deskripsi Program</h2>
            <p className="text-gray-500 leading-relaxed text-sm md:text-base">
              {data.description}
            </p>
          </div>

          {/* Syarat Pendaftaran */}
          <div className="mb-10">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Syarat Pendaftaran</h2>
            <ul className="flex flex-col gap-3">
              {data.requirements.map((req, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-500 text-sm md:text-base">
                  <svg className="w-5 h-5 text-[#00b0e4] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {req}
                </li>
              ))}
            </ul>
          </div>

          {/* Poin SKPI Box */}
          <div className="bg-[#f2fafd] rounded-xl p-6 mb-10 border border-blue-50">
            <h3 className="font-bold text-gray-900 text-base mb-2">Poin SKPI / Konversi</h3>
            <p className="text-[#00b0e4] font-bold text-sm">{data.skpi}</p>
          </div>

          {/* Action Button */}
          <button className="w-full bg-[#1da1d8] hover:bg-[#158bbd] text-white font-bold py-4 rounded-xl transition shadow-md flex justify-center items-center gap-2 text-lg mb-6">
            Daftar di Sumber Asli
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </button>

          {/* Verification Text */}
          <div className="flex items-center justify-center gap-2 text-gray-400 text-xs font-medium">
            <svg className="w-4 h-4 text-[#00b0e4]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            Data ini diverifikasi oleh Admin Informatika UMS
          </div>

        </div>
      </div>
    </div>
  );
}
