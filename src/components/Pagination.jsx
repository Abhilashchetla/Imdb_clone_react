import React from "react";

function Pagination({handleprev,handlefor,pageno}) {
  return (
    <div className="flex justify-center items-center gap-6 mt-8 mb-8">

      <button className="text-white bg-gray-800 w-10 h-10 rounded-full hover:bg-red-600 transition">
        <i onClick={handleprev} className="fa-solid fa-chevron-left"></i>
      </button>

      <div className="text-white bg-red-600 px-5 py-2 rounded-md font-bold text-lg">
        {pageno}
      </div>

      <button onClick={handlefor} className="text-white bg-gray-800 w-10 h-10 rounded-full hover:bg-red-600 transition">
        <i className="fa-solid fa-chevron-right"></i>
      </button>

    </div>
  );
}

export default Pagination;