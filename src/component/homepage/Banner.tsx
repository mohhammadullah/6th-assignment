"use client";
import Image from "next/image";
import React from "react";
import banner from "@/assets/banner.png";

const Banner = () => {
  const scrollToLibrary = () => {
  const section = document.getElementById("library");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center bg-[#1A1A1A] text-white p-6 sm:p-8 md:p-10 lg:p-14 m-6 rounded-2xl">

      {/* Left Content */}
      <div className="flex flex-col gap-5 text-center md:text-left">

        <p className="font-semibold tracking-[3px] text-sm sm:text-base text-[#C2F800]">
          WORKOUT LIBRARY
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
          TRAIN WITH INTENT.
          <br />
          LOG EVERY SET.
        </h1>

        <h2 className="text-sm sm:text-base lg:text-lg leading-7 text-[#9CA3AF] max-w-xl mx-auto md:mx-0">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
          into today&apos;s plan, and watch the week&apos;s work add up.
        </h2>

        <div className="pt-2 flex justify-center md:justify-start">
          <button
  onClick={scrollToLibrary}
  className="btn h-14 min-h-14 px-7 sm:px-8 rounded-xl bg-[#C2F800] text-black border-none font-extrabold text-sm tracking-wider hover:bg-[#d4ff3d] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(194,248,0,0.2)] inline-flex items-center gap-2"
>
  <span>BROWSE WORKOUTS</span>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2.5}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
    />
  </svg>
</button>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex justify-center md:justify-end">
        <Image
          src={banner}
          alt="FitLog workout banner"
          priority
          className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain hover:scale-[1.03] transition-transform duration-500"
        />
      </div>

    </div>
  );
};

export default Banner;
