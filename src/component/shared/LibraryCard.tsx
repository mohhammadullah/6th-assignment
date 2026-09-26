import { ILibrary } from '@/types/library.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ILibraryProps {
  library: ILibrary;
}
const LibraryCard = ({ library }:ILibraryProps ) => {
  return (
  <Link href={`/library/${library.id}`}>
    <div className="group overflow-hidden rounded-xl border border-[#292D33] bg-[#15171C] text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#C2F800]">

      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={library.image}
          alt={library.name}
          width={800}
          height={600}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Difficulty */}
        <span className="absolute right-3 top-3 rounded-md bg-black/70 px-2 py-1 text-[10px] font-semibold text-white backdrop-blur-sm">
          {library.difficulty}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">

        {/* Muscle Groups */}
        <div className="mb-3 flex flex-wrap gap-2">
          {library.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-[#C2F800] px-2.5 py-1 text-[10px] font-bold uppercase text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-lg font-extrabold uppercase tracking-wide">
          {library.name}
        </h3>

        {/* Equipment */}
        <p className="mt-1 text-xs text-[#858A93]">
          {library.equipment}
        </p>

        {/* Divider */}
        <div className="my-4 h-px bg-[#292D33]" />

        {/* Stats */}
        <div className="flex items-center justify-between text-xs text-[#9CA3AF]">

          <div className="flex items-center gap-1.5">
            <span>◷</span>
            <span>{library.duration} min</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span>🔥</span>
            <span>{library.caloriesBurned} kcal</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span>★</span>
            <span>{library.rating}</span>
          </div>

        </div>

      </div>
    </div>
    </Link>
  );
};

export default LibraryCard;
