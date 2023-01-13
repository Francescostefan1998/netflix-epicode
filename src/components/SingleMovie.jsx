const SingleMovie = ({ movie }) => {
  return (
    <div className="mt-4">
      <div>
        <strong>
          <h2>{movie.title}</h2>
        </strong>
      </div>
      <div>
        <img src={movie.poster} alt="image-cover" id="fetchedIamge" />
      </div>
      <div>{movie.year}</div>
      <div>{movie.category}</div>
      <div>{movie.type}</div>
    </div>
  );
};

export default SingleMovie;
