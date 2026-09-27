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
        <Link href="/">
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
        </Link>
        {/* CENTER - Navigation */}
       <div className="flex items-center gap-0.5 rounded-full border border-[#242424] bg-[#181818] p-1 sm:gap-1">
          <Link
            href="/"
            className="rounded-full bg-[#C2F800] px-2.5 py-1.5 text-[11px] font-medium text-black transition-all duration-200 sm:px-4 sm:text-xs"
          >
            Workouts
          </Link>
          <Link
            href="/plan"
           className="rounded-full px-2.5 py-1.5 text-[11px] font-medium text-[#8B8B8B] transition-colors hover:text-white sm:px-4 sm:text-xs"
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

          <div className="flex items-center gap-1 text-[10px] text-gray-400 sm:gap-1.5 sm:text-xs">
            <span>Saved</span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#2A2A2A] bg-[#1A1D21] text-[10px] font-bold text-white">
              {savedPlanCount}
            </span>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
