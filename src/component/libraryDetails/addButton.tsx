"use client";

import { LibraryContext } from "@/context/LibraryContext";
import { ILibrary } from "@/types/library.type";
import React, { useContext } from "react";

const AddButton = ({ libraryData }: { libraryData: ILibrary }) => {
  const context = useContext(LibraryContext);

  if (!context) {
    throw new Error("AddButton must be used inside LibraryProvider");
  }

  const { todayPlan, setTodayPlan } = context;

  const handleAddToTodayPlan = () => {
    const alreadyAdded = todayPlan.some(
      (item) => item.id === libraryData.id
    );

    if (alreadyAdded) {
      return;
    }

    setTodayPlan((prev) => [...prev, libraryData]);
  };

  return (
    <button
      className="btn h-10 min-h-10 rounded-lg border-none bg-[#C2F800] px-5 text-xs font-bold text-black hover:bg-[#D4FF3D]"
      onClick={handleAddToTodayPlan}
    >
      ＋ Add to today's plan
    </button>
  );
};

export default AddButton;