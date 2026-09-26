"use client";

import React, { createContext, useState } from "react";
import { ILibrary } from "@/types/library.type";

interface LibraryContextType {
  todayPlan: ILibrary[];
  setTodayPlan: React.Dispatch<React.SetStateAction<ILibrary[]>>;
  savedPlan: ILibrary[];
  setSavedPlan: React.Dispatch<React.SetStateAction<ILibrary[]>>;
}

export const LibraryContext = createContext<LibraryContextType | undefined>(
  undefined
);

const LibraryProvider = ({ children }: { children: React.ReactNode }) => {
  const [todayPlan, setTodayPlan] = useState<ILibrary[]>([]);
  const [savedPlan, setSavedPlan] = useState<ILibrary[]>([]);

  const sharedState = {
    todayPlan,
    setTodayPlan,
    savedPlan,
    setSavedPlan,
  };

  return (
    <LibraryContext.Provider value={sharedState}>
      {children}
    </LibraryContext.Provider>
  );
};

export { LibraryProvider };