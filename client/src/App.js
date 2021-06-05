import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SavedList from './Movies/SavedList';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

export default function App () {
  // eslint-disable-next-line
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  // eslint-disable-next-line
  const addToSavedList = id => {
     const movies = saved ;
     const mov = movieList.find(element => element.id === id);
     movies.push(mov);
     setSaved(movies);
     console.log(saved)
  };

  return (
    <div>
      <Router>
      <SavedList list={saved} />

      <div>
          <Switch>
          <Route exact path="/">
            <MovieList movies={movieList}/>
          </Route>
          <Route exact path="/movies/:id">
            <Movie addToSavedList={addToSavedList}/>
          </Route>
          </Switch>
      </div>
      </Router>
    </div>
  );
}
