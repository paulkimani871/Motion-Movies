import { useState } from "react"
import { useNavigate } from "react-router"


function SearchInput() {

    const [query,setQuery] = useState("")
const navigate = useNavigate()

function handleSearch (e){
    e.preventDefault()
    if (!query) return

    navigate(`/search?q=${query}`)
} 

  return (

    <form onSubmit={handleSearch} className="w-2/5 md:block hidden">

        <input value={query} onChange={e=>setQuery(e.target.value)} className='border-2 rounded-2xl p-2 w-full ' type="text" placeholder='Search For Movies,Series and People ' />
    </form>
  )
}

export default SearchInput