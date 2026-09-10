import React from 'react'
import { useNowShowing } from '../hooks/useNowShowing'

function NowShowing() {
   const {movies}=useNowShowing()
  return (
   <div className='mr-3'>
        <div className='flex gap-3 mt-5 ml-3 flex-wrap pb-20'>
         {movies?.map(movie=>(
             <div key={movie.id}>
             <img className='rounded-[10px] w-50 mt-7 ml-7' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <h2 className='text-white text-xl font-bold mt-2 ml-7 truncate w-50'>{movie.title}</h2>
          </div>
            ))}
          
        </div>
         
      </div>
  )
}

export default NowShowing