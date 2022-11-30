import WatchIt from "./WatchIt";
import { Component } from "react";
import { useState, useEffect } from "react";
import Commentarea from "./Commentarea";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

const MovieDetail = ({ asin, movieid }) => {
  const params = useParams();
  console.log(params.movieid);
  const [movie, setMovie] = useState("");
  const navigate = useNavigate();
  /*console.log(asin);
  const [movie, setMovie] = useState("");*/
  const fetchMovie = async () => {
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=b5b46d60&i=${params.movieid}`
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setMovie(data);
        console.log("fetched!");
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
    <div className="commentpersonal">
      <div>
        <img alt="cover" src={movie.Poster} />
      </div>
      <div>
        <div>{movie.Title}</div>
        <div>{movie.Released}</div>
        <div>{movie.Genre}</div>
        <div>
          {movie.Language}
          {""}
          {""}
          {""}
          {""}
          {""}
          <button className="success">Show less</button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
