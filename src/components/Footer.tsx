import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#2b3175] text-white pt-16 pb-8 px-6 lg:px-20 w-full font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-16 mb-16">

        {/* Left Section: Branding & Contact Info */}
        <div className="flex flex-col max-w-sm">
          <Link href="/" className="flex items-center mb-8">
            {/* Menggunakan gambar logo yang sama dengan Navbar */}
            <img
              src="/images/ums logo.png"
              alt="Logo Universitas Muhammadiyah Surakarta"
              className="h-14 md:h-20 w-auto object-contain"
            />
          </Link>

          <div className="text-gray-300 text-sm leading-relaxed mb-8">
            <p>20619 Torrence Chapel Rd</p>
            <p>Suite 116 #1040</p>
            <p>Cornelius, NC 28031</p>
            <p>United States</p>
          </div>

          <div className="flex flex-row gap-12 sm:gap-16">
            <div>
              <h4 className="font-semibold text-white mb-2 text-sm">Phone number</h4>
              <p className="text-gray-300 text-sm">1-800-201-1019</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2 text-sm">Email</h4>
              <p className="text-gray-300 text-sm">satupintu@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Right Section: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-16 w-full lg:w-auto">

          {/* Quick Links Column */}
          <div className="flex flex-col">
            <h4 className="font-semibold text-white mb-6 text-sm md:text-base">Quick links</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-300">
              <li><Link href="#" className="hover:text-white transition">Home</Link></li>
              <li><Link href="#" className="hover:text-white transition">About us</Link></li>
              <li><Link href="#" className="hover:text-white transition">Services</Link></li>
              <li><Link href="#" className="hover:text-white transition">FAQ</Link></li>
              <li><Link href="#" className="hover:text-white transition">Contact us</Link></li>
            </ul>
          </div>

          {/* Social Column */}
          <div className="flex flex-col">
            <h4 className="font-semibold text-white mb-6 text-sm md:text-base">Social</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-300">
              <li><Link href="#" className="hover:text-white transition">Facebook</Link></li>
              <li><Link href="#" className="hover:text-white transition">Instagram</Link></li>
              <li><Link href="#" className="hover:text-white transition">Linkedin</Link></li>
              <li><Link href="#" className="hover:text-white transition">Twitter</Link></li>
              <li><Link href="#" className="hover:text-white transition">Youtube</Link></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="flex flex-col">
            <h4 className="font-semibold text-white mb-6 text-sm md:text-base">Legal</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-300">
              <li><Link href="#" className="hover:text-white transition">Terms of service</Link></li>
              <li><Link href="#" className="hover:text-white transition">Privacy policy</Link></li>
              <li><Link href="#" className="hover:text-white transition">Cookie policy</Link></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Section: Copyright (No borders, just spacing as per design) */}
      <div className="max-w-7xl mx-auto pt-8 flex items-center justify-center">
        <p className="text-gray-300 text-sm text-center">
          © 2026 UMS. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
