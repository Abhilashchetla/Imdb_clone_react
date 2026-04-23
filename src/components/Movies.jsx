import React, { useEffect, useState } from "react";
import Moviecard from "./Moviecard";
import axios from "axios";
import Pagination from "./pagination";
function Movies() {
  const [movies, setmovies] = useState([]);
  const [pageno,setpageno]=useState(1)

  const handleprev=()=>{
    if (pageno==1){
        setpageno(pageno-1)
  }
}
  const handlefor=()=>{
    setpageno(pageno+1)
  }

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=dcbd77759835a62384dd4779dcfc172b&language=en-US&page=${pageno}`,
      )
      .then((res) => {
        setmovies(res.data.results);
        console.log(res.data.results);
      });
  }, [pageno]);
  return (
    <div className="p-3">
      <div className="text-2xl m-5 font-bold text-center">Trending Movies</div>
      <div className="flex flex-row flex-wrap justify-around">
        {movies.map((movieobj) => {
          return (
            <Moviecard
              key={movieobj.id}
              poster_path={`https://image.tmdb.org/t/p/original${movieobj.poster_path}`}
              name={movieobj.original_title}
            />
          );
        })}
      </div>
      <Pagination pageno={pageno} handlefor={handlefor} handleprev={handleprev}/>
    </div>
  );
}

export default Movies;

//https://api.themoviedb.org/3/movie/popular?api_key=dcbd77759835a62384dd4779dcfc172b&20language=en-US&page=1
