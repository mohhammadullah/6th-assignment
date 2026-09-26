"use client";

import { toast } from "react-toastify";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ILibrary } from "@/types/library.type";

interface PlanCardProps {
  item: ILibrary;
  onRemove: (id: string | number) => void;
}

const PlanCard = ({ item, onRemove }: PlanCardProps) => {
  // Mark as Done
  const handleComplete = () => {
    onRemove(item.id);

    toast.success(`${item.name || "Workout"} completed!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  // Remove from plan
  const handleRemove = () => {
    onRemove(item.id);

    toast.error(`${item.name || "Workout"} removed from plan.`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-[#222222] bg-[#131417] p-4 transition-all hover:border-[#333] sm:flex-row sm:items-center">
      {/* LEFT - Image & Details */}
      <div className="flex items-center gap-4">
        <div className="relative h-20 w-32 shrink-0 overflow-hidden rounded-xl border border-[#2A2A2A]">
          <Image
            src={item.image || "/placeholder.png"}
            alt={item.name}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="text-base font-extrabold uppercase text-white">
            {item.name}
          </h2>

          <p className="text-xs text-gray-400">
            {item.equipment || "Workout"}
          </p>

          <div className="mt-2 flex items-center gap-3 text-xs text-gray-300">
            <span className="flex items-center gap-1">
              ⏱ {item.duration || 0} min
            </span>

            <span className="flex items-center gap-1">
              🔥 {item.caloriesBurned ?? 0} kcal
            </span>

            <span className="flex items-center gap-1 text-gray-400">
              ⭐ {item.rating || "4.5"}
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT - Actions */}
      <div className="flex w-full items-center justify-end gap-3 sm:w-auto">
        {/* View Details */}
        <Link
          href={`/fit/${item.id}`}
          className="rounded-full border border-[#2E2E2E] bg-[#1C1C1C] px-4 py-2 text-xs font-semibold text-gray-300 transition-all hover:border-gray-500 hover:text-white"
        >
          View Details
        </Link>

        {/* Mark as Done */}
        <button
          onClick={handleComplete}
          className="flex items-center gap-1.5 rounded-full bg-[#C2F800] px-4 py-2 text-xs font-bold text-black transition-all hover:bg-[#d4ff3d]"
        >
          ✓ Mark as Done
        </button>

        {/* Remove */}
        <button
          onClick={handleRemove}
          className="ml-1 p-1 text-gray-500 transition-colors hover:text-white"
          title="Remove"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
