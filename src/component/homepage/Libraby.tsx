import React from "react";
import LibraryCard from '@/component/shared/LibraryCard'
import { ILibrary } from "@/types/library.type";



const getLibraby = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if (!res.ok) {
    throw new Error("Failed to fetch library data");
  }

  return res.json();
};

const Libraby = async () => {
  const libraryData = await getLibraby();

  return (
    <section className="container mx-auto  px-4 py-10">

      {/* Heading */}
    

        <h2 className="mt-2 text-3xl font-extrabold text-white">
         THE LIBRARY
        </h2>

        <p className="m-2 text-sm text-[#858A93]">
        Twelve lifts covering every major muscle group.</p>
   

      {/* Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {libraryData.map((library:ILibrary) => (
          <LibraryCard
            key={library.id}
            library={library}
          />
        ))}
      </div>

    </section>
  );
};

export default Libraby;