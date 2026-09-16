import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { useSearchParams } from 'react-router'
import { useSearch } from '../hooks/useSearch'



function Search() {

  const [searchParams] = useSearchParams()

  const query = searchParams.get("q") || ""

  const {data} =useSearch(query)
  // console.log(data);

  const movies = data?.filter((item, i)=> item.media_type === "movie" && i<9 )
  const series = data?.filter((item,i)=> item.media_type === "tv"&& i<9)
  const people = data?.filter((item,i)=> item.media_type === "person"&& i<9)
  
  return (
    <div>
   { movies?.length > 0 &&
    <>
    <div className='text-white flex mt-20' > 
      <h1 className='w-full ml-4 text-2xl text-purple-400'>Poular - Movies</h1>   
      <button className='flex justify-end w-full mr-9 text-1xl text-gray-400 hover:text-purple-400'>See all <FaAngleRight className='ml-1 mt-1' /> </button>
    </div>
    </>}

    <div className=' mt-5 flex gap-3'>
      {movies?.map((movie)=>(
        < img key={movie.id} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.name} className='w-[12%] h-[30vh] ml-3 rounded-2xl'  />
      ))}
    </div>
    

{   series?.length > 0 && 
  <>
      <div className='text-white flex mt-20' > 
      <h1 className='w-full ml-4 text-2xl text-purple-400'>Poular - Series
     </h1> 
      <button className='flex justify-end w-full mr-9 text-1xl text-gray-400 hover:text-purple-400'>See all <FaAngleRight className='ml-1 mt-1' /> </button>
      
    </div>

    <div className=' mt-5 flex gap-3'>
{series?.map((film)=>(
        < img key={film.id} src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt={film.title} className='w-[12%] h-[30vh] ml-3 rounded-2xl'  />
      ))}    </div>
     </>}


      
{ people?.length > 0 &&
     <>
      <div className='text-white flex mt-20' > 
      <h1 className='w-full ml-4 text-2xl text-purple-400'>Poular - People</h1> 
      <button className='flex justify-end w-full mr-9 text-1xl text-gray-400 hover:text-purple-400'>See all <FaAngleRight className='ml-1 mt-1' /> </button>
    </div>

    <div className=' mt-5 flex gap-3'>
{people?.map((person)=>(
        < img key={person.id} src={`https://image.tmdb.org/t/p/w500${person.poster_path}`} alt={person.name} className='w-[12%] h-[30vh] ml-3 rounded-2xl'  />
      ))}    </div>
     </>}
    
    </div>
  )
}

export default Search