import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WatchIt from "./WatchIt";
const TvShows = () => {
  return (
    <div>
      <WatchIt horror="new" title="Trending-Now" />
      <WatchIt horror="2020" title="New Releases" />
      <WatchIt horror="horror" title="Watch It Again" />
    </div>
  );
};

export default TvShows;
