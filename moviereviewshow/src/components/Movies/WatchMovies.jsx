import React from 'react'
import './WatchMovies.css'
import rating from '../../assets/images/rating_star.jpg'

export const WatchMovies = ({movie}) => {
  console.log("movies",movie);
  return (
    
        <a href={`https://www.themoviedb.org/movie/${movie.id}`} className='movie_show'>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className='movie_img' alt="Movie Details"/>
          <div className="movie_details">
              <h3 className="movie_details_h3">{movie.original_title}</h3>
              <div className='center_ele moviedate'>
                  <p>{movie.release_date}</p>
                  <p>{movie.vote_average} <img className='emoji_class' src={rating} alt='ratingItem'/>{""}</p>
              </div>
              <p className='moviedesc'>{movie.overview.slice(0,20)+".."}</p>
          </div>
        </a>
    
  )
};
