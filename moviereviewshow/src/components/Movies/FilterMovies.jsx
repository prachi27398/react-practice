import React from 'react'

const FilterMovies = ({givingRating,onRatingButtonClick,rating}) => {
  return (
    <ul className="center_ele movie_filter">
        {
            rating.map(rategiven=><li className={givingRating===rategiven?'movie_filter_item active':'movie_filter_item'} onClick={()=>onRatingButtonClick(rategiven)}>{rategiven}+</li>)
        }
    </ul>
  )
}

export default FilterMovies
