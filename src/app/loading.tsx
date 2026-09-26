// app/loading.tsx
export default function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 py-20 text-white">
      {/* Spinner Animation */}
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#2A2A2A] border-t-[#C2F800]" />
      <p className="text-sm font-semibold tracking-wider text-gray-400">
        LOADING WORKOUTS...
      </p>
    </div>
  );
}