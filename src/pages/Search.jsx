import React from 'react'
import { FaAngleRight } from 'react-icons/fa'



function Search() {
  return (
    <div>

    <div className='text-white flex mt-20' > 
      <h1 className='w-full ml-4 text-2xl text-purple-400'>Poular - Movies</h1>   
      <button className='flex justify-end w-full mr-9 text-1xl text-gray-400 hover:text-purple-400'>See all <FaAngleRight className='ml-1 mt-1' /> </button>
    </div>

    <div className=' mt-5 flex gap-3'>
      <  img src="/public/1Yvl9eP3pmktqChitnFhHJHcBtX.webp" alt="" className='w-[12%] h-[30vh] ml-3 rounded-2xl'  />
      <  img src="/public/1Yvl9eP3pmktqChitnFhHJHcBtX.webp" alt="" className='w-[12%] h-[30vh] ml-3 rounded-2xl'  />
      <  img src="/public/1Yvl9eP3pmktqChitnFhHJHcBtX.webp" alt="" className='w-[12%] h-[30vh] ml-3 rounded-2xl'  />
      <  img src="/public/1Yvl9eP3pmktqChitnFhHJHcBtX.webp" alt="" className='w-[12%] h-[30vh] ml-3 rounded-2xl'  />
      <  img src="/public/1Yvl9eP3pmktqChitnFhHJHcBtX.webp" alt="" className='w-[12%] h-[30vh] ml-3 rounded-2xl'  />
      <  img src="/public/1Yvl9eP3pmktqChitnFhHJHcBtX.webp" alt="" className='w-[12%] h-[30vh] ml-3 rounded-2xl'  />
      <  img src="/public/1Yvl9eP3pmktqChitnFhHJHcBtX.webp" alt="" className='w-[12%] h-[30vh] ml-3 rounded-2xl'  />
    </div>
    

      <div className='text-white flex mt-20' > 
      <h1 className='w-full ml-4 text-2xl text-purple-400'>Poular - Series
     </h1> 
      <button className='flex justify-end w-full mr-9 text-1xl text-gray-400 hover:text-purple-400'>See all <FaAngleRight className='ml-1 mt-1' /> </button>
      
    </div>

    <div className=' mt-5 flex gap-3'>
      <  img src="/public/1Yvl9eP3pmktqChitnFhHJHcBtX.webp" alt="" className='w-[12%] h-[30vh] ml-3 rounded-2xl'  />
    </div>

      <div className='text-white flex mt-20' > 
      <h1 className='w-full ml-4 text-2xl text-purple-400'>Poular - People</h1> 
      <button className='flex justify-end w-full mr-9 text-1xl text-gray-400 hover:text-purple-400'>See all <FaAngleRight className='ml-1 mt-1' /> </button>
    </div>

    <div className=' mt-5 flex gap-3'>
      <  img src="/public/1Yvl9eP3pmktqChitnFhHJHcBtX.webp" alt="" className='w-[12%] h-[30vh] ml-3 rounded-2xl mb-6'  />
    </div>
    
    </div>
  )
}

export default Search