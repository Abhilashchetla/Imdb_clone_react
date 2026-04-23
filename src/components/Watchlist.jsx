import React from "react";

function Watchlist() {
  return (
    <div className="p-6 bg-white min-h-screen">
      <h1 className="text-4xl font-bold text-red-600 text-center mb-8">
        My Watchlist
      </h1>

      <div className="flex justify-center flex-wrap gap-4 mb-6">
        <button className="px-5 py-2 rounded-full bg-red-500 text-white">
          Action
        </button>

        <button className="px-5 py-2 rounded-full bg-gray-200 hover:bg-gray-300">
          Thriller
        </button>

        <button className="px-5 py-2 rounded-full bg-gray-200 hover:bg-gray-300">
          Comedy
        </button>

        <button className="px-5 py-2 rounded-full bg-gray-200 hover:bg-gray-300">
          Drama
        </button>
      </div>

      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search movies..."
          className="w-80 px-4 py-2 border border-gray-400 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-red-400"
        />
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-lg border border-gray-300 shadow-sm">
        <table className="w-full text-center text-gray-700">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="py-3">Name</th>
              <th>Ratings</th>
              <th>Popularity</th>
              <th>Genre</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b hover:bg-gray-50">
              <td className="flex items-center px-4 py-3">
                <img
                  src="https://static1.srcdn.com/wordpress/wp-content/uploads/2024/01/fighter-2024-movie-poster.jpg"
                  className="h-24 w-16 object-cover rounded-md"
                />
                <div className="ml-4 font-medium">The Matrix</div>
              </td>

              <td>8.7</td>
              <td>95</td>
              <td>Action</td>
              <td>
                <button className="text-red-500 font-semibold hover:text-red-700">
                  Delete
                </button>
              </td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="flex items-center px-4 py-3">
                <img
                  src="https://m.media-amazon.com/images/M/MV5BZjdkOTU3MGEtZGE1Mi00M2Q1LTkxNzAtNzQ0ZmQ3YTQ2ZGI5XkEyXkFqcGc@._V1_.jpg"
                  className="h-24 w-16 object-cover rounded-md"
                />
                <div className="ml-4 font-medium">Interstellar</div>
              </td>

              <td>8.9</td>
              <td>97</td>
              <td>Sci-Fi</td>
              <td>
                <button className="text-red-500 font-semibold hover:text-red-700">
                  Delete
                </button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="flex items-center px-4 py-3">
                <img
                  src="https://m.media-amazon.com/images/I/71niXI3lxlL.jpg"
                  className="h-24 w-16 object-cover rounded-md"
                />
                <div className="ml-4 font-medium">Joker</div>
              </td>

              <td>8.5</td>
              <td>92</td>
              <td>Drama</td>
              <td>
                <button className="text-red-500 font-semibold hover:text-red-700">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Watchlist;
