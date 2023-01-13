import { Component } from "react";
import SingleMovie from "./SingleMovie";
class RecentlyAdded extends Component {
  state = {
    movie: [],
  };

  fetchMovie = async () => {
    try {
      let response = await fetch(
        "https://benchmark-exam-2-week-backend-production.up.railway.app/medias"
      );
      if (response.ok) {
        let data = await response.json();
        this.setState({
          movie: data,
        });
        console.log("fetched!");
        console.log(data);
        console.log(this.state.movie);
        console.log(this.state.movie);
      } else {
        console.log("error fetching");
        alert("movie not found");
      }
    } catch (error) {
      console.log("error");
    }
  };

  componentDidMount() {
    console.log("component did mount");

    this.fetchMovie();
  }
  render() {
    return (
      <div>
        <h1>Added from my API</h1>
        {this.state.movie.map((movie, i) => (
          <SingleMovie movie={movie} key={i} />
        ))}
      </div>
    );
  }
}

export default RecentlyAdded;
