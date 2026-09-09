import React from 'react'
import { useSeries } from '../hooks/useSeries'

function Series() {
  const {series} = useSeries()
  return (
      <div>
      <h1 className='text-white text-3xl font-bold text-center'> Find <span className='text-purple-400'> Movies </span> You'll Enjoy Without the Hassle</h1>
      <h3 className='text-purple-200 mt-7 ml-4 '>Top Movie Streaming Options</h3>
      <div className='mr-3'>
        <h1 className='text-white text-2xl font-bold mt-35 ml-3'>All Movies</h1>
        <div className='flex gap-3 mt-5 ml-3 flex-wrap pb-20'>
          {series?.map(film=>(
             <div key={film.id}>
               <img className='rounded-[10px] w-50 mt-7 ml-7' src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt={film.name} />
          <h2 className='text-white text-xl font-bold mt-2 ml-7 truncate w-50'>{film.name}</h2>
          </div>
          ))}
         

           
        </div>
         
      </div>

    </div>
  )
}

export default Series