
import AddButton from "@/component/libraryDetails/addButton";
import { ILibrary } from "@/types/library.type";
import Image from "next/image";
import React from "react";
import SaveButton from "@/component/libraryDetails/saveButton";
interface ILibraryDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getLibraby = async (id: string): Promise<ILibrary> => {
  const res = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch library data");
  }

  return res.json();
};

const ILibraryDetailsPage = async ({
  params,
}: ILibraryDetailsPageProps) => {
  const { id } = await params;

  const libraryData = await getLibraby(id);

  const {
    name,
    image,
    description,
    muscleGroups,
    equipment,
    difficulty,
    sets,
    reps,
    duration,
    caloriesBurned,
    rating,
    instructions,
  } = libraryData;

  return (
    <main className="min-h-screen bg-[#0D0F12] text-white">
      <section className="mx-auto w-full max-w-375 px-4 py-8 sm:px-6 lg:px-10 xl:px-12 2xl:px-16">

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12 2xl:gap-14">

          {/* ================= IMAGE ================= */}
          <div className="overflow-hidden rounded-xl lg:self-start">
            <Image
              src={image}
              alt={name}
              width={800}
              height={800}
              priority
              className="
                h-auto
                w-full
                rounded-xl
                object-cover
                lg:max-h-162.5
                xl:max-h-175
                2xl:max-h-187.5
              "
            />
          </div>

          {/* ================= DETAILS ================= */}
          <div className="flex flex-col">

            {/* Title */}
            <h1 className="text-3xl font-extrabold uppercase tracking-tight sm:text-4xl xl:text-5xl 2xl:text-6xl">
              {name}
            </h1>

            {/* Description */}
            <p className="mt-2 max-w-2xl text-sm leading-6 text-[#9CA3AF] xl:text-base xl:leading-7">
              {description}
            </p>

            {/* Muscle Groups */}
            <div className="mt-4 flex flex-wrap gap-2">
              {muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-[#C2F800] px-3 py-1 text-[10px] font-bold uppercase text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* ================= INFO BOX ================= */}
            <div className="mt-6 overflow-hidden rounded-xl border border-[#252A31] bg-[#15181E]">

              {/* Equipment */}
              <div className="flex items-center justify-between border-b border-[#252A31] px-4 py-3">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#7D838C]">
                  Equipment
                </span>

                <span className="text-xs text-gray-300">
                  {equipment}
                </span>
              </div>

              {/* Difficulty */}
              <div className="flex items-center justify-between border-b border-[#252A31] px-4 py-3">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#7D838C]">
                  Difficulty
                </span>

                <span className="text-xs text-gray-300">
                  {difficulty}
                </span>
              </div>

              {/* Sets */}
              <div className="flex items-center justify-between border-b border-[#252A31] px-4 py-3">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#7D838C]">
                  Sets
                </span>

                <span className="text-xs text-gray-300">
                  {sets}
                </span>
              </div>

              {/* Reps */}
              <div className="flex items-center justify-between border-b border-[#252A31] px-4 py-3">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#7D838C]">
                  Reps
                </span>

                <span className="text-xs text-gray-300">
                  {reps}
                </span>
              </div>

              {/* Duration */}
              <div className="flex items-center justify-between border-b border-[#252A31] px-4 py-3">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#7D838C]">
                  Duration
                </span>

                <span className="text-xs text-gray-300">
                  {duration} min
                </span>
              </div>

              {/* Calories */}
              <div className="flex items-center justify-between border-b border-[#252A31] px-4 py-3">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#7D838C]">
                  Calories
                </span>

                <span className="text-xs text-gray-300">
                  {caloriesBurned} kcal
                </span>
              </div>

              {/* Rating */}
              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#7D838C]">
                  Rating
                </span>

                <span className="text-xs text-gray-300">
                  {rating}
                </span>
              </div>

            </div>

            {/* ================= INSTRUCTIONS ================= */}
            <div className="mt-7 xl:mt-8">

              <h2 className="text-sm font-extrabold uppercase tracking-wide">
                Instructions
              </h2>

              <div className="mt-4 space-y-3">
                {instructions.map((instruction, index) => (
                  <div
                    key={index}
                    className="flex gap-3 text-xs leading-5 text-[#A5AAB2] xl:text-sm xl:leading-6"
                  >
                    <span className="shrink-0 text-[#777D86]">
                      {index + 1}.
                    </span>

                    <p>{instruction}</p>
                  </div>
                ))}
              </div>

            </div>

            {/* ================= BUTTONS ================= */}
            <div className="mt-7 flex flex-wrap gap-3 xl:mt-8">

              <AddButton libraryData={libraryData} />

              <SaveButton libraryData={libraryData} />
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default ILibraryDetailsPage;

