import React from 'react';
import {
  Link
} from "react-router-dom";

export default function SavedList(props) {
  return (
    <div key={props.list.id} className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <Link className="home-button" to={`/movies/${movie.id}`}>{movie.title}</Link>
      ))}
      <Link className="home-button" to="/">Home</Link>
    </div>
  );
}
