import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 w-full bg-[#111111] border border-[#2A2A2A] text-white px-4 sm:px-6">

      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between">

        {/* LEFT - Logo */}
        <div className="flex items-center gap-2 min-w-0">
          <Image
            src={logo}
            alt="FitLog Logo"
            width={28}
            height={28}
            className="w-7 h-7 object-contain"
          />

          <span className="text-sm font-bold tracking-wide">
            FITLOG
          </span>
        </div>

        {/* CENTER - Navigation */}
        <div className="hidden sm:flex items-center gap-1 bg-[#181818] rounded-full p-1 border border-[#242424]">

          <Link
            href="#workouts"
            className="px-4 py-1.5 rounded-full text-xs font-medium bg-[#C2F800] text-black transition-all duration-200"
          >
            Workouts
          </Link>

          <a
            href="#plan"
            className="px-4 py-1.5 rounded-full text-xs font-medium text-[#8B8B8B] hover:text-white transition-colors"
          >
            My Plan
          </a>

        </div>

        {/* RIGHT */}
      <div className="flex items-center gap-4">
  <button className="text-xs text-gray-400 hover:text-white transition-colors">
    Plan
  </button>

  <button className="flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors">
    Saved
    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#C2F800] text-black text-[10px] font-bold">
      0
    </span>
  </button>
</div>
          {/* Mobile menu */}
          <button className="sm:hidden p-2 text-gray-400 hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

        </div>
    </div>
  );
};

export default Navbar;