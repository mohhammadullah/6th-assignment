"use client";

import React, { useContext, useState } from "react";
import Link from "next/link";
import { LibraryContext } from "@/context/LibraryContext";

const Page = () => {
  const context = useContext(LibraryContext);

  if (!context) {
    throw new Error("Plan page must be used inside LibraryProvider");
  }

  const { todayPlan, savedPlan } = context;

  // Active tab track korar state ('today' othoba 'saved')
  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

  // Selected tab onujayi list select kora
  const currentList = activeTab === "today" ? todayPlan : savedPlan;

  // Header Dashboard Stats Calculation
  const totalExercises = currentList.length;
  const totalMinutes = currentList.reduce(
    (acc, item) => acc + (item.duration || 0),
    0
  );
  const totalCalories = currentList.reduce(
    (acc, item) => acc + (item.calories || 0),
    0
  );

  return (
    <div className="min-h-screen bg-[#0D0D0D] px-4 py-8 text-white">
      <div className="mx-auto max-w-6xl">
        
        {/* Header Title Section */}
        <div className="mb-6">
          <h1 className="text-3xl font-extrabold uppercase tracking-tight">
            MY PLAN
          </h1>
          <p className="mt-1 text-sm text-gray-400">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Dashboard Stats Counter Box */}
        <div className="mb-8 grid grid-cols-3 divide-x divide-[#2A2A2A] rounded-xl border border-[#2A2A2A] bg-[#121212] p-6">
          <div>
            <p className="text-xs text-gray-400">Exercises</p>
            <p className="mt-1 text-3xl font-extrabold text-[#C2F800]">
              {totalExercises}
            </p>
          </div>
          <div className="pl-6">
            <p className="text-xs text-gray-400">Minutes</p>
            <p className="mt-1 text-3xl font-extrabold">{totalMinutes}</p>
          </div>
          <div className="pl-6">
            <p className="text-xs text-gray-400">Calories</p>
            <p className="mt-1 text-3xl font-extrabold">{totalCalories}</p>
          </div>
        </div>

        {/* Navigation Tabs (Today's Plan / Saved) & Sort Dropdown */}
        <div className="mb-6 flex items-center justify-between border-b border-[#2A2A2A] pb-4">
          <div className="flex items-center gap-2 rounded-lg bg-[#181818] p-1">
            <button
              onClick={() => setActiveTab("today")}
              className={`rounded-md px-4 py-1.5 text-xs font-semibold transition-all ${
                activeTab === "today"
                  ? "bg-[#252525] text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Today's Plan
            </button>
            <button
              onClick={() => setActiveTab("saved")}
              className={`rounded-md px-4 py-1.5 text-xs font-semibold transition-all ${
                activeTab === "saved"
                  ? "bg-[#252525] text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span>Sort By</span>
            <select className="rounded-md border border-[#2A2A2A] bg-[#181818] px-2 py-1 text-xs text-white focus:outline-none">
              <option value="duration">Duration</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>

        {/* Content Section: Empty State or Cards Grid */}
        {currentList.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-[#1F1F1F] bg-[#121212] py-20 text-center">
            <h2 className="text-xl font-bold uppercase tracking-wide">
              NOTHING HERE YET
            </h2>
            <p className="mt-2 text-xs text-gray-400">
              Browse the library and add a lift to get today moving.
            </p>
            <Link
              href="/"
              className="mt-6 rounded-full bg-[#C2F800] px-6 py-2.5 text-xs font-bold text-black transition-all hover:bg-[#d4ff3d]"
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {currentList.map((library) => (
              <div
                key={library.id}
                className="rounded-xl border border-[#2A2A2A] bg-[#151515] p-5"
              >
                <h2 className="mb-2 text-lg font-bold">{library.name}</h2>
                <p className="text-sm text-gray-400">{library.description}</p>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default Page;