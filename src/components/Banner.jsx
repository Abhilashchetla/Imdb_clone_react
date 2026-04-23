import React from "react";

function Banner() {
  return (
    <div
      className="h-[20vh] md:h-[75vh] bg-cover bg-center relative flex items-end"
      style={{
        backgroundImage: `url(https://i.pinimg.com/1200x/29/7d/e0/297de0761b0c756266d74ca50d03cc1d.jpg)`
      }}
    >
      {/* Dark Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

      {/* Content */}
      <div className="relative px-6 md:px-12 pb-6 text-white">
        
        {/* Title */}
        <h1 className="text-2xl md:text-5xl font-bold tracking-wider">
          Avengers: Endgame
        </h1>

        {/* Details */}
        <p className="text-sm md:text-lg text-gray-300 mt-2">
          ⭐ 8.4 | 2019 | Action, Sci-Fi | 3h 1m
        </p>

        {/* Buttons */}
        <div className="mt-4 flex gap-3">
          <button className="bg-white text-black px-4 py-2 rounded font-semibold hover:bg-gray-300">
            ▶ Play
          </button>
          <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600">
            + Watchlist
          </button>
        </div>

      </div>
    </div>
  );
}

export default Banner;