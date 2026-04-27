import React, { useEffect, useState } from "react";

import genereid from "../Utility/genere";

function Watchlist({ watchlist, setwatchlist }) {
  const [search, setsearch] = useState("");
  const [generelist, setgenerelist] = useState([]);
  const [currentgenre, setcurrentgenre] = useState("All Genres");

  let handlesearch = (e) => {
    setsearch(e.target.value);
  };

  let sortincreasing = () => {
    let sortedincreeasing = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setwatchlist([...sortedincreeasing]);
  };

  let sortdecreasing = () => {
    let sorteddecreasing = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setwatchlist([...sorteddecreasing]);
  };
  let popularityincrease = () => {
    let sortedpopularity = [...watchlist].sort((movieA, movieB) => {
      return movieA.popularity - movieB.popularity;
    });

    setwatchlist(sortedpopularity);
  };

  let popularitydecrease = () => {
    let sortedpopularity = [...watchlist].sort((movieA, movieB) => {
      return movieB.popularity - movieA.popularity;
    });

    setwatchlist(sortedpopularity);
  };
  useEffect(() => {
    let temp = watchlist
      .map((movie) => genereid[movie.genre_ids[0]])
      .filter(Boolean);

    setgenerelist(["All Genres", ...new Set(temp)]);
  }, [watchlist]);
  let handledelete = (id) => {
    let updatedmovies = watchlist.filter((movie) => {
      return movie.id !== id;
    });

    setwatchlist(updatedmovies);
    localStorage.setItem("moviesapp", JSON.stringify(updatedmovies));
  };
  return (
    <div className="p-6 bg-white min-h-screen">
      <h1 className="text-4xl font-bold text-red-600 text-center mb-8">
        My Watchlist
      </h1>

      <div className="flex justify-center flex-wrap gap-4 mb-6">
        {generelist.map((genre) => {
          return (
            <button
              key={genre}
              onClick={() => setcurrentgenre(genre)}
              className={`px-5 py-2 rounded-full ${
                currentgenre === genre
                  ? "bg-red-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {genre}
            </button>
          );
        })}
      </div>

      <div className="flex justify-center mb-8">
        <input
          onChange={handlesearch}
          value={search}
          type="text"
          placeholder="Search movies..."
          className="w-80 px-4 py-2 border border-gray-400 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-red-400"
        />
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-300 shadow-sm">
        <table className="w-full text-center text-gray-700">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="py-3">Name</th>
              <th className="flex justify-center">
                <div onClick={sortincreasing} className="p-2">
                  <i className="fa-solid fa-arrow-up"></i>
                </div>
                <div className="p-2">Ratings</div>
                <div onClick={sortdecreasing} className="p-2">
                  <i className="fa-solid fa-arrow-down"></i>
                </div>
              </th>
              <th>
                <div className="flex justify-center items-center">
                  <div
                    onClick={popularityincrease}
                    className="p-2 cursor-pointer"
                  >
                    <i className="fa-solid fa-arrow-up"></i>
                  </div>
                  <div className="p-2">Popularity</div>
                  <div
                    onClick={popularitydecrease}
                    className="p-2 cursor-pointer"
                  >
                    <i className="fa-solid fa-arrow-down"></i>
                  </div>
                </div>
              </th>
              <th>Genre</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {watchlist
              .filter((movieobj) => {
                if (currentgenre === "All Genres") {
                  return true;
                } else {
                  return genereid[movieobj.genre_ids[0]] === currentgenre;
                }
              })

              .filter((movieobj) => {
                return movieobj.title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((movie) => {
                return (
                  <tr key={movie.id} className="border-b hover:bg-gray-50">
                    <td className="flex items-center px-4 py-3">
                      <img
                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                        className="h-24 w-16 object-cover rounded-md"
                      />

                      <div className="ml-4 font-medium">
                        {movie.original_title}
                      </div>
                    </td>

                    <td>{movie.vote_average}</td>
                    <td>{movie.popularity}</td>
                    <td>{genereid[movie.genre_ids[0]]}</td>

                    <td>
                      <button
                        onClick={() => handledelete(movie.id)}
                        className="text-red-500 font-semibold hover:text-red-700"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Watchlist;
