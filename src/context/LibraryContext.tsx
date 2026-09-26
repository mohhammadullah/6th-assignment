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
  const readPlan = (key: string): ILibrary[] => {
    if (typeof window === "undefined") return [];

    const storedPlan = localStorage.getItem(key);
    if (!storedPlan) return [];

    try {
      return JSON.parse(storedPlan) as ILibrary[];
    } catch (e) {
      console.error(e);
      return [];
    }
  };

  const [todayPlan, setTodayPlan] = useState<ILibrary[]>(() =>
    readPlan("fitlog_todayPlan")
  );
  const [savedPlan, setSavedPlan] = useState<ILibrary[]>(() =>
    readPlan("fitlog_savedPlan")
  );
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