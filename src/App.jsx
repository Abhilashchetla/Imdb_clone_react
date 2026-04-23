import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";
import Banner from "./components/Banner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
function App() {
  let [watchlist, setwatchlist] = useState([]);

 let handleaddwatlist = (moviobj) => {
    setwatchlist([...watchlist, moviobj]);
  };

let handleremwatlist = (moviobj) => {
  let filterwatchlist = watchlist.filter((movie) => {
    return movie.id !== moviobj.id;
  });

  setwatchlist(filterwatchlist);
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
                 <Banner /><Movies watchlist={watchlist} handleaddwatlist={handleaddwatlist} handleremwatlist={handleremwatlist}/>
              </>
            }
          />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
