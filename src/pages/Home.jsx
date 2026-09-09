import React from 'react'
import useMovies from '../hooks/useMovies';

function Home() {

  const {movies, isLoading, isError} = useMovies();

  console.log(movies)
  return (
    <div>
      <h1 className='text-white text-3xl font-bold text-center'> Find <span className='text-purple-400'> Movies </span> You'll Enjoy Without the Hassle</h1>
      <h3 className='text-purple-200 mt-7 ml-4 '>Top Movie Streaming Options</h3>
      <div className='flex mt-5 gap-5 ml-3'>
        <img className='rounded-[60px] w-30' src="./1Yvl9eP3pmktqChitnFhHJHcBtX.webp" alt="" />
        <img className='rounded-[60px] w-30' src="./44uAnmSqvA4yBOdbPWN8YgQHjWm.webp" alt="" />
        <img className='rounded-[60px] w-30' src="./6dOWQKIRIxDmX5FD4g5dPsHxFn3.webp" alt="" />
        <img className='rounded-[60px] w-30' src="./gMZdpavHmxFNnLpMHwVxfqeux2g.webp" alt="" />
        <img className='rounded-[60px] w-30' src="./aZRENwYILujqs0RVOZutTh0BVGV.webp" alt="" />
        <img className='rounded-[60px] w-30' src="./k7iSlvgWzZuO4zU5PcBjhABMuia.webp" alt="" />
        <img className='rounded-[60px] w-30' src="./l8qT4DDRBVZWQouiT5OUnkw45m7.webp" alt="" />
        <img className='rounded-[60px] w-30' src="./qdEGArH3lKfFnAtYXMkSYk5wxuG.webp" alt="" />
        <img className='rounded-[60px] w-30' src="./wpOt6x0dRxTrIzuBosto4LGd7E9.webp" alt="" />

      </div>
      <div className='mr-3'>
        <h1 className='text-white text-2xl font-bold mt-10 ml-3'>All Movies</h1>
        
          <div className='flex gap-3 mt-5 ml-5 flex-wrap pb-20'>
         {movies?.map(movie=>(
           <div key={movie.id}>
             <img className='rounded-[10px] w-50 mt-7 ml-7' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <h2 className='text-white text-xl font-bold mt-2 ml-7 truncate w-50'>{movie.title}</h2>
          </div>
         ))}

             
      </div>
      </div>

    </div>
  )
}

export default Home