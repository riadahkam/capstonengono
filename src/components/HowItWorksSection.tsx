import React from 'react';

const HowItWorksSection = () => {
  return (
    <section className="bg-white py-20 px-6 lg:px-20 w-full flex flex-col items-center">
      {/* Header Section */}
      <div className="text-center max-w-3xl mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Bagaimana Cara Kerjanya?
        </h2>
        <div className="w-24 h-1 bg-[#d8a436] mx-auto mb-4"></div>
        <p className="text-gray-600 text-sm md:text-base">
          Tiga langkah mudah untuk memanfaatkan IT Learning Hub
        </p>
      </div>

      {/* Grid Layout Container (3 Columns, No Gaps) */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-full max-w-6xl shadow-lg">
        
        {/* Step 1: Login Akun */}
        <div className="bg-[#2b3175] text-white p-12 md:p-16 flex flex-col items-center text-center relative overflow-hidden min-h-[360px]">
          {/* Icon Placeholder */}
          <div className="w-16 h-16 bg-gray-300/80 mb-8 z-10 flex-shrink-0"></div>
          
          <h3 className="font-bold text-xl mb-4 z-10">Login Akun</h3>
          <p className="text-sm text-gray-200 leading-relaxed z-10">
            Masuk menggunakan akun mahasiswa UMS untuk mengakses seluruh informasi peluang.
          </p>
          
          {/* Pixel Decoration Bottom Left */}
          <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#d8a436]"></div>
            <div className="absolute bottom-16 left-16 w-12 h-12 bg-[#d8a436]"></div>
            <div className="absolute bottom-6 left-[112px] w-8 h-8 bg-[#d8a436]"></div>
          </div>
        </div>

        {/* Step 2: Cari Peluang */}
        <div className="bg-[#d8a436] text-white p-12 md:p-16 flex flex-col items-center text-center min-h-[360px]">
          {/* Icon Placeholder */}
          <div className="w-16 h-16 bg-white/50 mb-8 flex-shrink-0"></div>
          
          <h3 className="font-bold text-xl mb-4">Cari Peluang</h3>
          <p className="text-sm text-white/95 leading-relaxed">
            Telusuri webinar, bootcamp, dan magang dengan filter kategori dan pencarian.
          </p>
        </div>

        {/* Step 3: Daftar & Upload Berkas */}
        <div className="bg-[#2b3175] text-white p-12 md:p-16 flex flex-col items-center text-center relative overflow-hidden min-h-[360px]">
          {/* Icon Placeholder */}
          <div className="w-16 h-16 bg-gray-300/80 mb-8 z-10 flex-shrink-0"></div>
          
          <h3 className="font-bold text-xl mb-4 z-10">Daftar & Upload Berkas</h3>
          <p className="text-sm text-gray-200 leading-relaxed z-10">
            Daftar langsung di platform dan unggah dokumen persyaratan tanpa berpindah website.
          </p>

          {/* Pixel Decoration Bottom Right */}
          <div className="absolute bottom-0 right-0 w-full h-full pointer-events-none">
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-[#d8a436]"></div>
            <div className="absolute bottom-16 right-16 w-12 h-12 bg-[#d8a436]"></div>
            <div className="absolute bottom-6 right-[112px] w-8 h-8 bg-[#d8a436]"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;
