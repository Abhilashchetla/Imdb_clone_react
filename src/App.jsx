import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";
import Banner from "./components/Banner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  let [watchlist, setwatchlist] = useState(JSON.parse(localStorage.getItem("moviesapp")) || []);

  useEffect(() => {
    let data = localStorage.getItem("moviesapp");

    if (!data) return;

    try {
      setwatchlist(JSON.parse(data));
    } catch (error) {
      localStorage.removeItem("moviesapp");
    }
  }, []);

  let handleaddwatlist = (moviobj) => {
    let newwatchlist = [...watchlist, moviobj];

    setwatchlist(newwatchlist);

    localStorage.setItem("moviesapp", JSON.stringify(newwatchlist));
  };

  let handleremwatlist = (moviobj) => {
    let filterwatchlist = watchlist.filter((movie) => {
      return movie.id !== moviobj.id;
    });

    setwatchlist(filterwatchlist);

    localStorage.setItem("moviesapp", JSON.stringify(filterwatchlist));
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />

                <Movies
                  watchlist={watchlist}
                  handleaddwatlist={handleaddwatlist}
                  handleremwatlist={handleremwatlist}
                />
              </>
            }
          />

          <Route
            path="/watchlist"
            element={<Watchlist watchlist={watchlist} setwatchlist={setwatchlist}/>}

          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
