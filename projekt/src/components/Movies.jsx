import React from 'react'
import '../styles/MoviesStyle.css'
import { Link } from 'react-router-dom'


function Movies({movie}) {
    return (
        <div className="content">
          <Link to={`/details/${movie.id}`} className="movies-link">
        <div className="part_content">
          <div className="content__img">
            <img
              src={movie.image} alt={movie.title} />
          </div>
          <div className="content__description">
            <h1 className='movie-title'>{movie.title}</h1> 
          </div>
        </div>
        </Link>
      </div>
        
    );
}

export default Movies