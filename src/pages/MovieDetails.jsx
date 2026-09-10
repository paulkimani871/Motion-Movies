import React from 'react'
import { useMovie } from '../hooks/useMovie'
import { useParams } from 'react-router'

function MovieDetails() {

    const params = useParams()

    const movieId = params.movieid

    const {movie} = useMovie(movieId)
  return (
    <div className={`relative bg-center bg-cover w-full h-[90vh]`}>
        <img className='absolute w-full h-full inset-0 z-10 object-center object-cover' src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`} alt="" />

         <div className='relative z-20 w-full h-full bg-black/50'>
        <h1 className='text-purple-300 z-30 flex font-bold justify-center text-3xl
         '>{movie?.name}</h1>

        <div className='flex mt-[2%] z-30'>
             <h3 className='text-white ml-5'>{movie?.runtime} min {movie?.release_date?.split("-")[0]} {movie?.vote_average}</h3>
             <h4 className='bg-[#F5C518] w-[3%] ml-0.5 rounded-2xl pl-1 text-[14px] font-bold '>IMDb</h4>
        </div>
        <h2 className='text-gray-500 ml-5 mt-[2%] z-30'>GENRES</h2>
        <div className='text-black flex gap-2 ml-5 mt-5 z-30'>
           {movie?.genres?.map((genre)=>(
             <h3 key={genre.id} className='bg-white rounded-2xl p-1'>{genre.name}</h3>
           ))}
            
        </div>
        <h3 className='text-gray-600 ml-5 mt-5 font-bold z-30'>SUMMARY</h3>
        <h4 className='text-white w-[90%] ml-5 mt-3 z-30'>{movie?.overview}</h4>
         </div>

       





    </div>
  )
}

export default MovieDetails