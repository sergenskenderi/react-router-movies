import React from 'react';
import {
  Link , NavLink
} from "react-router-dom";

export default function SavedList(props) {
  return (
    <div key={props.list.id} className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <NavLink key={movie.id} className="home-button" to={`/movies/${movie.id}`}>{movie.title}</NavLink>
      ))}
      <NavLink className="home-button" to="/">Home</NavLink>
    </div>
  );
}
