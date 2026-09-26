import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png"; 
const Footer = () => {
  return (
    <footer className="sticky bottom-0 z-40 w-full border-t border-[#1F1F1F] bg-[#0B0C0E] py-6 px-4 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        
        {/* LEFT - Logo & Brand Name */}
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            alt="FitLog Logo"
            width={24}
            height={24}
            className="h-6 w-6 object-contain"
          />
          <span className="text-sm font-black tracking-wider text-white">
            FITLOG
          </span>
        </div>

        {/* RIGHT - Copyright & Tagline */}
        <p className="text-xs text-gray-500">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
};

export default Footer;