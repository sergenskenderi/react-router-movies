import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

export default function MovieCard (props) {
  const {id} = useParams();

  return(
    <div>
    {id && <div className="movie-card">
        <h2>{props.movie.title}</h2>
        <div className="movie-director">
          Director: <em>{props.movie.director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{props.movie.metascore}</strong>
        </div>
        <h3>Actors</h3>

        {id && props.movie.stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>}
    {!id && <div className="movie-card">
      <Link to={`/movies/${props.movie.id}`} style={{textDecoration : 'none' , color : 'black'}}>
      <h2>{props.movie.title}</h2>
      <div className="movie-director">
        Director: <em>{props.movie.director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{props.movie.metascore}</strong>
      </div>
      </Link>
    </div>}
    </div>
  )
}
