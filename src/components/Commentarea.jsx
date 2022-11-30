import WatchIt from "./WatchIt";
import { Component } from "react";
import { useState, useEffect } from "react";
import MovieDetail from "./MovieDetail";
import { Link, useLocation } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Commentarea = ({ asin }) => {
  console.log(asin);
  const [movie, setMovie] = useState(null);
  const [selected, setSelected] = useState(false);
  const fetchMovie = async () => {
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=b5b46d60&i=${asin}`
      );
      if (response.ok) {
        let data = await response.json();
        setSelected(false);
        setMovie(data);
        console.log("fetched!");
        console.log(data.Search);
      } else {
        console.log("error fetching");
        alert("error fetching");
      }
    } catch (error) {
      console.log("error");
    }
  };
  useEffect(() => {
    fetchMovie();
  }, [asin]);

  return (
    <div>
      <Link to="/moviedetail" className="navbar-links">
        <div>
          show more{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-caret-down-fill"
            viewBox="0 0 16 16"
          >
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>
        </div>
      </Link>
    </div>
  );
};

export default Commentarea;
