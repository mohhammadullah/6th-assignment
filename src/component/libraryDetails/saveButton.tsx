"use client";

import { LibraryContext } from "@/context/LibraryContext";
import { ILibrary } from "@/types/library.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";
const SaveButton = ({ libraryData }: { libraryData: ILibrary }) => {
  const context = useContext(LibraryContext);

  if (!context) {
    throw new Error("SaveButton must be used inside LibraryProvider");
  }

  const { savedPlan, setSavedPlan } = context;

const handleSaveToggle = (item: ILibrary) => {
  const isAlreadySaved = savedPlan.some(
    (saved) => saved.id === item.id
  );

  if (isAlreadySaved) {
    setSavedPlan((prev) =>
      prev.filter((saved) => saved.id !== item.id)
    );

    toast.info(`${item.name || "Workout"} removed from saved!`);
  } else {
    setSavedPlan((prev) => [...prev, item]);

    toast.success(`${item.name || "Workout"} saved for later!`);
  }
};

  const isSaved = savedPlan.some((saved) => saved.id === libraryData.id);

  return (
    <button
      onClick={() => handleSaveToggle(libraryData)}
      className={`btn h-10 min-h-10 rounded-lg border px-5 text-xs transition-all ${
        isSaved
          ? "border-[#C2F800] bg-[#181B20] text-[#C2F800]"
          : "border-[#30353D] bg-transparent text-gray-300 hover:bg-[#181B20]"
      }`}
    >
      {isSaved ? "♥ Saved" : "♡ Save for later"}
    </button>
  );
};

export default SaveButton;
