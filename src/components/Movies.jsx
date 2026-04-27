import React, { useEffect, useState } from "react";
import Moviecard from "./Moviecard";
import axios from "axios";
import Pagination from "./Pagination";

function Movies({ handleaddwatlist, handleremwatlist, watchlist }) {
  const [movies, setmovies] = useState([]);
  const [pageno, setpageno] = useState(1);
  const [loading, setLoading] = useState(true);

  const handleprev = () => {
    if (pageno > 1) {
      setpageno(pageno - 1);
    }
  };

  const handlefor = () => {
    setpageno(pageno + 1);
  };

  useEffect(() => {
    setLoading(true);

    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=dcbd77759835a62384dd4779dcfc172b&language=en-US&page=${pageno}`
      )
      .then((res) => {
        setmovies(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [pageno]);

  return (
    <div className="p-3">
      <div className="text-2xl m-5 font-bold text-center">
        Trending Movies
      </div>

      <div className="flex flex-row flex-wrap justify-around items-center min-h-[300px]">
        {loading ? (
          <div className="w-full flex justify-center">
            <div className="w-14 h-14 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          movies.map((movieobj) => {
            return (
              <Moviecard
                key={movieobj.id}
                movobj={movieobj}
                poster_path={`https://image.tmdb.org/t/p/original${movieobj.poster_path}`}
                name={movieobj.original_title}
                handleaddwatlist={handleaddwatlist}
                handleremwatlist={handleremwatlist}
                watchlist={watchlist}
              />
            );
          })
        )}
      </div>

      <Pagination
        pageno={pageno}
        handlefor={handlefor}
        handleprev={handleprev}
      />
    </div>
  );
}

export default Movies;
