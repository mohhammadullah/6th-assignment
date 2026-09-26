"use client";

import React, { useContext, useState } from "react";
import Link from "next/link";
import { LibraryContext } from "@/context/LibraryContext";
import PlanCard from "@/component/shared/planCard";

const Page = () => {
  const context = useContext(LibraryContext);

  if (!context) {
    throw new Error("Plan page must be used inside LibraryProvider");
  }

  const { todayPlan, setTodayPlan, savedPlan, setSavedPlan } = context;

  // Active Tab Management
  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

  // Selected list based on tab
  const currentList = activeTab === "today" ? todayPlan : savedPlan;
  const [sortBy, setSortBy] = useState<"duration" | "name" | "calories">(
    "duration",
  );

  const sortedList = [...currentList].sort((a, b) => {
    if (sortBy === "duration") {
      return Number(a.duration ?? 0) - Number(b.duration ?? 0);
    }

    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }

    if (sortBy === "calories") {
      return Number(a.caloriesBurned ?? 0) - Number(b.caloriesBurned ?? 0);
    }

    return 0;
  });

  // Stats Calculations
  const totalExercises = currentList.length;
  const totalMinutes = currentList.reduce((acc, item) => {
    const duration = "duration" in item ? Number(item.duration ?? 0) : 0;
    return acc + duration;
  }, 0);
  const totalCalories = currentList.reduce((acc, item) => {
    const calories =
      "caloriesBurned" in item ? Number(item.caloriesBurned ?? 0) : 0;

    return acc + calories;
  }, 0);

  // Remove handler
  const handleRemove = (id: string | number) => {
    if (activeTab === "today") {
      setTodayPlan((prev) => prev.filter((item) => item.id !== id));
    } else {
      setSavedPlan((prev) => prev.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] px-4 py-8 text-white sm:px-8">
      <div className="mx-auto max-w-6xl">
        {/* HEADER SECTION */}
        <div className="mb-6">
          <h1 className="text-3xl font-extrabold uppercase tracking-tight">
            MY PLAN
          </h1>
          <p className="mt-1 text-xs text-gray-400">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* STATS DASHBOARD */}
        <div className="mb-8 grid grid-cols-3 divide-x divide-[#2A2A2A] rounded-2xl border border-[#1E1E1E] bg-[#121212] p-6">
          <div>
            <p className="text-xs text-gray-400">Exercises</p>
            <p className="mt-1 text-3xl font-black text-[#C2F800]">
              {totalExercises}
            </p>
          </div>
          <div className="pl-6">
            <p className="text-xs text-gray-400">Minutes</p>
            <p className="mt-1 text-3xl font-black">{totalMinutes}</p>
          </div>
          <div className="pl-6">
            <p className="text-xs text-gray-400">Calories</p>
            <p className="mt-1 text-3xl font-black">{totalCalories}</p>
          </div>
        </div>

        {/* TABS & SORT BAR */}
        <div className="mb-6 flex items-center justify-between border-b border-[#2A2A2A] pb-4">
          <div className="flex items-center gap-1 rounded-xl border border-[#242424] bg-[#181818] p-1">
            <button
              onClick={() => setActiveTab("today")}
              className={`rounded-lg px-4 py-1.5 text-xs font-semibold transition-all ${
                activeTab === "today"
                  ? "bg-[#252525] text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Today&apos;s Plan
            </button>
            <button
              onClick={() => setActiveTab("saved")}
              className={`rounded-lg px-4 py-1.5 text-xs font-semibold transition-all ${
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
            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as "duration" | "name" | "calories")
              }
              className="rounded-lg border border-[#2A2A2A] bg-[#181818] px-3 py-1.5 text-xs text-white focus:outline-none"
            >
              <option value="duration">Duration</option>
              <option value="name">Name</option>
              <option value="calories">Calories</option>
            </select>
          </div>
        </div>

        {/* WORKOUT LIST / EMPTY STATE */}
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
          <div className="flex flex-col gap-4">
            {sortedList.map((item) => (
              <PlanCard key={item.id} item={item} onRemove={handleRemove} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
