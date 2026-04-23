import React from "react";
import logo from "../logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md border-b">

      <div className="flex items-center space-x-8">
        <img
          className="w-[55px] rounded-lg shadow-sm"
          src={logo}
          alt="logo"
        />

        <Link
          to="/"
          className="text-blue-500 text-2xl font-bold font-mono hover:text-red-500 transition duration-300"
        >
          Movies
        </Link>

        <Link
          to="/watchlist"
          className="text-blue-500 text-2xl font-bold font-mono hover:text-red-500 transition duration-300"
        >
          WatchList
        </Link>
      </div>
      <div>
        <button className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300 shadow-md">
          Login
        </button>
      </div>

    </nav>
  );
};

export default Navbar;