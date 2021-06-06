import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import MovieCard from './MovieCard';

export default function Movie(props) {
  const [movie, setMovie] = useState();
  const {id} = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`) // Study this endpoint with Postman
      .then(response => {
        // Study this response with a breakpoint or log statements
        // and set the response data as the 'movie' slice of state
        setMovie(response.data);
      })
      .catch(error => {
        console.error(error);
      });
    // This effect should run every time time
    // the `id` changes... How could we do this?
  }, [id]);

  // Uncomment this only when you have moved on to the stretch goals
  const saveMovie = evt => {
     props.addToSavedList(movie.id);
   }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className="save-wrapper">
      <MovieCard movie={movie} />
      <button className="save-button" type="submit" onClick={saveMovie}>Save</button>
    </div>
  );
}
