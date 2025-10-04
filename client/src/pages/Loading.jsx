import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          {/* Outer ring */}
          <div className="w-12 h-12 rounded-full border-4 border-gray-200"></div>
          {/* Spinning ring */}
          <div className="w-12 h-12 rounded-full border-4 border-blue-500 border-t-transparent animate-spin absolute top-0 left-0"></div>
        </div>
        {/* Loading text */}
        <p className="text-gray-600 font-medium text-sm mt-2">Loading please wait...</p>
      </div>
    </div>
  );
};

export default Loading;