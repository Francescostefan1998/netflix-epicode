import { Component } from "react";
import { Spinner } from "react-bootstrap";
import Commentarea from "./Commentarea";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const WatchIt = ({ horror, title }) => {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selected, setSelected] = useState(false);
  //http://www.omdbapi.com/?apikey=b5b46d60&s=harry%20potter
  const fetchMovie = async () => {
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=b5b46d60&s=movie%20${horror}`
      );
      if (response.ok) {
        let data = await response.json();
        setMovie(data.Search);
        setIsLoading(false);
        console.log("fetched!");
        console.log(data.Search);
      } else {
        console.log("error fetching");
        alert("error while fetching");
        setIsLoading(false);
      }
    } catch (error) {
      console.log("error");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchMovie();
    }, 1500);
  }, [horror]);

  return (
    <div className="container-fluid">
      <div className="movie-gallery m-2">
        <h5 className="text-light mt-2 mb-2">{title}</h5>
        {isLoading && (
          <Spinner
            animation="border"
            role="status"
            className="custom-spinner-color"
          >
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
        <div
          id="watch-it-again"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="movie-row">
                <div className="row">
                  {movie.slice(0, 6).map((r) => (
                    <div className="col-md-2">
                      <Link to={"/moviedetail/" + r.imdbID}>
                        <img
                          className="movie-cover"
                          src={r.Poster}
                          onClick={(r) => {
                            selected === true
                              ? setSelected(false)
                              : setSelected(true);
                          }}
                        />
                      </Link>

                      {selected && <Commentarea asin={r.imdbID} />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="movie-row">
                <div className="row">
                  {movie.slice(0, 6).map((r) => (
                    <div className="col-md-2">
                      <img className="movie-cover" src={r.Poster} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#trending-now"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#trending-now"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WatchIt;
