import React from 'react'
import '../styles/MoviesStyle.css'
import { Fragment } from 'react'

function Movies() {
  return (
    <Fragment>
        <div className='moviesContainer'>
            <div className='slot'></div>
            <div className='slot'></div>
            <div className='slot'></div>
            <div className='slot'></div>
            <div className='slot'></div>
            <div className='slot'></div>
        </div>
            <div className='moviesContainer'>
                <div className='slot'></div>
                <div className='slot'></div>
                <div className='slot'></div>
                <div className='slot'></div>
                <div className='slot'></div>
                <div className='slot'></div>
            </div>
        </Fragment>
  )
}

export default Movies