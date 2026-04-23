import React from "react";

function Moviecard({ poster_path, name }) {
  return (
    <div
      className="h-[40vh] w-[195px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer m-3 flex items-end"
      style={{
        backgroundImage: `url(${poster_path})`,
      }}
    >
      <div className="w-full text-center bg-black/70 text-white p-2 rounded-b-xl">
        {name}
      </div>
    </div>
  );
}

export default Moviecard;
