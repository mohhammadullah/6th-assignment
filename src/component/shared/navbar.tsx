"use client";

import Image from "next/image";
import React, { useContext } from "react";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { LibraryContext } from "@/context/LibraryContext";

const Navbar = () => {
  const context = useContext(LibraryContext);

  const todayPlanCount = context?.todayPlan?.length ?? 0;
  const savedPlanCount = context?.savedPlan?.length ?? 0;

  return (
    <div className="sticky top-0 z-50 w-full border-b border-[#2A2A2A] bg-[#111111] px-4 text-white sm:px-6">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between">

        {/* LEFT - Logo */}
        <div className="flex min-w-0 items-center gap-2">
          <Image
            src={logo}
            alt="FitLog Logo"
            width={28}
            height={28}
            className="h-7 w-7 object-contain"
          />
          <span className="text-sm font-bold tracking-wide">FITLOG</span>
        </div>

        {/* CENTER - Navigation */}
        <div className="hidden items-center gap-1 rounded-full border border-[#242424] bg-[#181818] p-1 sm:flex">
          <Link
            href="/"
            className="rounded-full bg-[#C2F800] px-4 py-1.5 text-xs font-medium text-black transition-all duration-200"
          >
            Workouts
          </Link>
          <Link
            href="/plan"
            className="rounded-full px-4 py-1.5 text-xs font-medium text-[#8B8B8B] transition-colors hover:text-white"
          >
            My Plan
          </Link>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-xs text-gray-400">
            <span>Plan</span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C2F800] text-[10px] font-bold text-black">
              {todayPlanCount}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-gray-400">
            <span>Saved</span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C2F800] text-[10px] font-bold text-black">
              {savedPlanCount}
            </span>
          </div>

          <button className="p-2 text-gray-400 hover:text-white sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
    </div>
  );
};

export default Navbar;