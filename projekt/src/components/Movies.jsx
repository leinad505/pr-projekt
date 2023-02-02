import React from 'react'
import '../styles/MoviesStyle.css'
import { Link } from 'react-router-dom'


function Movies({movie}) {
    return (
        <div className="content">
          <Link to={`/details/${movie.id}`}>
        <div className="part_content">
          <img className='image' src={movie.image} alt={movie.title} />
          <p className='title'>{movie.title}</p>
        </div>
        </Link>
      </div>
        
    );
}

export default Movies