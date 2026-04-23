import React from "react";
import Watchlist from "./Watchlist";

function Moviecard({ movobj, poster_path, name, handleaddwatlist, handleremwatlist, watchlist }) {
  
  function iscontain(movieobj){
    for(let i=0;i<watchlist.length; i++){
      if(watchlist[i].id==movieobj.id){
        return true
      }

    }
    return false
  }
  return (
    <div
      className="relative h-[40vh] w-[195px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer m-3 flex items-end"
      style={{
        backgroundImage: `url(${poster_path})`,
      }}
    >
 {iscontain(movobj) ? (
  <div
    onClick={() => handleremwatlist(movobj)}
    className="absolute top-2 right-2 flex justify-center items-center h-8 w-8 bg-black/70 text-white rounded-lg"
  >
    ❌
  </div>
) : (
  <div
    onClick={() => handleaddwatlist(movobj)}
    className="absolute top-2 right-2 flex justify-center items-center h-8 w-8 bg-black/70 text-white rounded-lg"
  >
    😍
  </div>
)}

      <div className="w-full text-center bg-black/70 text-white p-2 rounded-b-xl">
        {name}
      </div>
    </div>
  );
}

export default Moviecard;
