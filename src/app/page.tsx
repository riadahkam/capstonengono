import Link from 'next/link';
import Navbar from '../components/navbar/Navbar';
import AboutSection from '../components/AboutSection';
import HowItWorksSection from '../components/HowItWorksSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="h-screen font-sans flex flex-col w-full overflow-y-auto scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      {/* Top Background Section containing Navbar & Hero */}
      <div id="home" className="min-h-screen bg-[#2b3175] flex flex-col pt-28">
        <Navbar />

        {/* Hero Section */}
        <main className="flex-1 flex flex-col items-center justify-center text-center px-4 -mt-16">
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-white mb-6 leading-[1.2] tracking-tight">
            Pusat Informasi Satu <br />
            Pintu <span className="text-[#00b0e4]">Informatika UMS</span>
          </h1>
          <p className="text-gray-200 text-base md:text-lg mb-10 max-w-3xl font-normal tracking-wide">
            Agregator, Bootcamp, dan Magang Terintegrasi untuk Mahasiswa
          </p>

          <Link href="/login" className="bg-[#d8a436] hover:bg-[#c4922b] transition text-white font-medium px-8 py-3 rounded-md flex items-center gap-2 group">
            Jelajahi Peluang
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </main>
      </div>

      {/* About Section (White Background) */}
      <div id="tentang-kami">
        <AboutSection />
      </div>

      {/* How It Works Section */}
      <div id="panduan">
        <HowItWorksSection />
      </div>

      {/* Footer Section */}
      <Footer />

    </div>
  );
}
