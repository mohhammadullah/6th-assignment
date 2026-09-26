"use client";

import { LibraryContext } from "@/context/LibraryContext";
import { ILibrary } from "@/types/library.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const AddButton = ({ libraryData }: { libraryData: ILibrary }) => {
  const context = useContext(LibraryContext);

  if (!context) {
    throw new Error("AddButton must be used inside LibraryProvider");
  }

  const { todayPlan, setTodayPlan } = context;
  const isAlreadyAdded = todayPlan.some((item) => item.id === libraryData.id);

const handleAddToTodayPlan = () => {
  if (isAlreadyAdded) {
    toast.info("Already added to today's plan!");
    return;
  }

  setTodayPlan((prev) => [...prev, libraryData]);
  toast.success(`${libraryData.name || "Workout"} added to today's plan!`);
};

  return (
<button
  disabled={isAlreadyAdded}
  className={`btn h-10 min-h-10 rounded-lg border-none px-5 text-xs font-bold transition-all ${
    isAlreadyAdded
      ? "bg-[#252525] text-gray-400 cursor-not-allowed border border-[#333]"
      : "bg-[#C2F800] text-black hover:bg-[#D4FF3D]"
  }`}
  onClick={handleAddToTodayPlan}
>
  {isAlreadyAdded ? "✓ Added to plan" : "＋ Add to today's plan"}
</button>
  );
};

export default AddButton;