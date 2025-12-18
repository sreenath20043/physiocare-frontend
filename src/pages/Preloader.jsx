import { useEffect, useState } from "react";

function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      
      {/* Logo Loader */}
      <div className="relative mb-8">
        {/* Outer Ring */}
        <div className="w-20 h-20 rounded-full border-4 border-blue-100" />

        {/* Spinning Arc */}
        <div
          className="absolute inset-0 w-20 h-20 rounded-full border-4 border-transparent border-t-blue-500 animate-spin"
          style={{ animationDuration: "2s" }}
        />

        {/* Heart Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
     <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
  stroke="blue"
  width="24"
  height="24"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M3 12h4l2-5 4 10 3-7h5"
  />
</svg>
        </div>
      </div>

      {/* Brand */}
      <h1 className="text-3xl font-bold text-gray-800 mb-1">
        Physio<span className="text-blue-500">Care</span>
      </h1>
      <p className="text-gray-500 text-sm mb-8">
        Your Health, Our Priority
      </p>

      {/* Progress Bar */}
      <div className="w-64 h-2 bg-blue-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-teal-400 rounded-full transition-all duration-200 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <span className="text-sm text-gray-500 mt-3">
        {progress}%
      </span>
    </div>
  );
}

export default Preloader;
