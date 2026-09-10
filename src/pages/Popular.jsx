import React from 'react'
import { usePopular } from '../hooks/usePopular'

function Popular() {
  const {series}=usePopular()
  return (
     <div>
      <h1 className='text-white text-3xl  text-center'>Popular  <span className='text-purple-400'> Series </span> On Screen</h1>
      <div className='mr-3'>
        <div className='flex gap-3 mt-5 ml-3'>


         
          
        </div>
         <div className='flex gap-3 mt-5 ml-3 flex-wrap pb-20'>
            {series?.map(film=>(
             <div key={film.id}>
               <img className='rounded-[10px] w-50 mt-7 ml-7' src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} 
               alt={film.name} />
          <h2 className='text-white text-xl font-bold mt-2 ml-7 truncate w-50'>{film.name}</h2>
          </div>
          ))}
         </div>
      </div>

    </div>
  )
}

export default Popular