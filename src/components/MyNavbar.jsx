import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { Component, useEffect } from "react";
import FilterBook from "./FilterBook";
import { useState } from "react";
const MyNavbar = () => {
  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState([]);
  const location = useLocation();
  console.log("location pathname", location.pathname);

  const fetchMovie = async () => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=b5b46d60&s=movie"
      );
      if (response.ok) {
        let data = await response.json();
        setMovie(data.Search);
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
  }, [search]);

  return (
    <div>
      <Navbar bg="light" expand="lg" id="costumizeNavbar" className="top-s">
        <Navbar.Brand href="#home">
          <img
            src="https://th.bing.com/th/id/R.d01a8fbdf7bbb4d9dc936d06e151039f?rik=M%2fRoSy9w3784Dg&riu=http%3a%2f%2fwww.tubefilter.com%2fwp-content%2fuploads%2f2016%2f07%2fNetflix_logo.jpg&ehk=P%2b64IrAZDD9owhjJ6jQ9ubpeHNhDoTjfAZZ0VABXp3E%3d&risl=&pid=ImgRaw&r=0"
            id="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/" className="navbar-links">
              <div
                className={
                  location.pathname === "/" ? "nav-link active" : "navbar-links"
                }
              >
                Home
              </div>
            </Link>
            <Link to="/tv-shows" className="navbar-links">
              <div
                className={
                  location.pathname === "/tv-shows"
                    ? "nav-link active"
                    : "navbar-links"
                }
              >
                TvShows
              </div>
            </Link>
            <Link to="/" className="navbar-links">
              <div>Movies</div>
            </Link>
            <Link to="/recentlyAdded" className="navbar-links">
              <div>Recently Added</div>
            </Link>
            <Link to="/" className="navbar-links">
              <div>My List</div>
            </Link>
          </Nav>
          <Form className="row" id="flex-end">
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2 col-4"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />

            <img
              src="https://www.pngarts.com/files/5/User-Avatar-PNG-Transparent-Image.png"
              alt="user-avatar"
              className="adapt"
            />

            <NavDropdown id="basic-nav-dropdown" className="navtext">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <div className="none">
        {movie
          .filter((movie) => movie.Title.includes(search))
          .map((filteredtitle) => (
            <div className="row" id="movie-choosed">
              <div className="col-3">
                <img src={filteredtitle.Poster} alt="movie-cover" />
              </div>
              <div className="col-3">
                <li>{filteredtitle.Title}</li>
                <li>{filteredtitle.Year}</li>
                <li>{filteredtitle.inbdID}</li>
                <li>{filteredtitle.Type}</li>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MyNavbar;
