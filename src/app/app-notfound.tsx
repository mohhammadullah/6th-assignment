// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center text-white">
      <h1 className="text-8xl font-black text-[#C2F800]">404</h1>
      <h2 className="mt-4 text-2xl font-bold sm:text-3xl">Page Not Found</h2>
      <p className="mt-2 max-w-md text-sm text-[#858A93]">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      
      <Link
        href="/"
        className="mt-6 rounded-xl bg-[#C2F800] px-6 py-3 text-sm font-bold text-black transition-all hover:bg-[#d4ff3d] hover:scale-105"
      >
        GO BACK HOME
      </Link>
    </div>
  );
}