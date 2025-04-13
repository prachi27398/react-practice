import React, { useEffect, useState } from 'react'
import './Movies.css'
import { WatchMovies } from './WatchMovies'
import FilterMovies from './FilterMovies'

const Movies = () => {
        const [movies,setMovies]=useState([])
        const [allMoviesFiltered,setAllMoviesFiltered]=useState([])
        const [givingRating,setRating]=useState(0)

        useEffect(()=>{
            fetchmovies();
        },[])
        
        const fetchmovies=async()=>{
            const res = await fetch("https://api.themoviedb.org/3/person/popular?api_key=ae6bb337112e97404840c61cf4f8f486")
            const data=await res.json()
            console.log(data.results);
            setMovies(data.results);
            setAllMoviesFiltered(data.results);
        }

        const allKnownForMovies = movies.flatMap(movie=>movie.known_for);


        console.log("allknownfor",allKnownForMovies)

        const handleFilter=(rating)=>{
            if(rating==givingRating){
                setRating(0)
                setMovies(allMoviesFiltered)
            }else{
                    setRating(rating)
                    const filteredMovies=allMoviesFiltered.filter(movie => 
                        movie.known_for?.some(m => m.vote_average >= rating))
                    setMovies(filteredMovies)
                }
        
    }
  return (
    <section className='movie_list'>
        <header className='movieheader'>
            <h2 className='center_ele movie_h2ead'>Popular</h2>
            <div className="center_ele movie_listadd">
                <FilterMovies givingRating={givingRating} onRatingButtonClick={handleFilter} rating={[8,7,6]}/>
                <select name="" id="" className="movie_sorting">
                    <option value="">Sort By</option>
                    <option value="">Date</option>
                    <option value="">Rating</option>
                </select>
                <select name="" id="" className="movie_sorting">
                    <option value="">Ascending</option>
                    <option value="">Descending</option>
                </select>
            </div>
        </header>
        <div className='movie_shows'>
           {allKnownForMovies.length>0 ? (allKnownForMovies.map((movie)=>(<WatchMovies key={movie.id} movie={movie}/>))):
           (<p>No Movies found for it</p>)
           } 
        </div>
    </section>
  )
}

export default Movies
