import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";

import MyTitle from "./components/MyTitle";
import WatchIt from "./components/WatchIt";
import MyFooter from "./components/MyFooter";
import FilterBook from "./components/FilterBook";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TvShows from "./components/TvShows";
import MovieDetail from "./components/MovieDetail";
function App() {
  return (
    <BrowserRouter>
      <div className="ad">
        <MyNavbar />

        <Routes>
          <Route
            element={<WatchIt horror="2020" title="New Releases" />}
            path="/"
          />

          <Route element={<TvShows />} path="/tv-shows" />
          <Route element={<MovieDetail />} path="/moviedetail/:movieid" />
        </Routes>
        <MyFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
