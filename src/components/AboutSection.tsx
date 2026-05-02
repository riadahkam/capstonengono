import React from 'react';

const AboutSection = () => {
  return (
    <section className="bg-white py-20 px-6 lg:px-20 w-full flex flex-col items-center">
      {/* Header Section */}
      <div className="text-center max-w-3xl mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Tentang IT Learning Hub
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Dikembangkan oleh tim mahasiswa Teknik Informatika Universitas Muhammadiyah Surakarta
        </p>
      </div>

      {/* Grid Layout Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-6xl">

        {/* Left Column (2 Cards Stacked) */}
        <div className="flex flex-col gap-6">

          {/* Card 1: Masalah yang Diselesaikan */}
          <div className="bg-[#2b3175] rounded-3xl p-8 sm:pr-48 flex flex-col justify-center text-white relative overflow-hidden min-h-[250px]">
            <div className="z-10 relative">
              <h3 className="font-bold text-xl mb-3">Masalah yang Diselesaikan</h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                Informasi webinar, bootcamp, dan magang sering tersebar tidak terorganisir di grup WhatsApp dan media sosial. Mahasiswa kesulitan menemukan peluang yang relevan dan sering ketinggalan deadline.
              </p>
            </div>
            {/* Image Placeholder (Right Aligned) */}
            <div className="absolute right-0 bottom-0 w-40 md:w-48 flex justify-end items-end h-full opacity-50 sm:opacity-100">
              <img
                src="/images/orang 1.png"
                alt="Masalah"
                className="object-contain object-bottom h-full max-h-[220px]"
              />
            </div>
          </div>

          {/* Card 2: Dukungan SKPI */}
          <div className="bg-[#2b3175] rounded-3xl p-8 sm:pl-48 flex flex-col justify-center text-white relative overflow-hidden min-h-[250px]">
            <div className="z-10 relative">
              <h3 className="font-bold text-xl mb-3">Dukungan SKPI</h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                Platform ini mendukung pendokumentasian Surat Keterangan Pendamping Ijazah (SKPI) bagi mahasiswa. Setiap kegiatan dilengkapi informasi poin SKPI untuk memudahkan pelaporan.
              </p>
            </div>
            {/* Image Placeholder (Left Aligned) */}
            <div className="absolute left-0 bottom-0 w-40 md:w-48 flex justify-start items-end h-full opacity-50 sm:opacity-100">
              <img
                src="/images/orang 2.png"
                alt="Dukungan SKPI"
                className="object-contain object-bottom h-full max-h-[220px]"
              />
            </div>
          </div>

        </div>

        {/* Right Column (1 Large Card) */}
        <div className="bg-[#d8a436] rounded-3xl p-8 sm:p-10 flex flex-col text-white relative overflow-hidden min-h-[524px]">
          <div className="z-10 mb-8">
            <h3 className="font-bold text-2xl mb-4">Tim Pengembang</h3>
            <p className="text-sm md:text-base text-white/95 leading-relaxed">
              Aplikasi ini dikembangkan oleh satu tim mahasiswa Teknik Informatika UMS sebagai solusi nyata untuk permasalahan akses informasi di lingkungan kampus. Kami berkomitmen menghadirkan platform yang terintegrasi, mudah digunakan, dan bermanfaat bagi seluruh civitas akademika Informatika UMS.
            </p>
          </div>
          {/* Image Placeholder (Bottom Aligned) */}
          <div className="absolute bottom-0 left-0 w-full flex justify-center items-end px-8">
            <img
              src="/images/orang 3.png"
              alt="Tim Pengembang"
              className="object-contain object-bottom w-full max-w-[450px]"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
