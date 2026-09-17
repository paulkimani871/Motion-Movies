import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";


export function usePopular (){
   const [searchParams] = useSearchParams();
    const currentPage = Number(searchParams.get("page")) || 1
    const {data,isLoading,isError} = useQuery({

        queryKey:["popular", currentPage],
        queryFn:()=>fetchPopularSeries(currentPage)


    })
    return{series:data,isLoading,isError}



}

async function fetchPopularSeries(currentPage){
       const options = {
  method: 'GET',
  headers: {accept: 'application/json', Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OThhZDAzMzk1MTg0YWI5MzA3YzgyNTlkZjI3MDgxNiIsIm5iZiI6MTc4ODk2MDk3Ny42MjQsInN1YiI6IjZhYTE2MGQxMmYzNjM5OTZkMmU4MzFmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NXdU2X7E5gCNwSemFDtXLI5VccRedTXOuQz7ilOZfG0'}
};
  const response = await fetch(`https://api.themoviedb.org/3/tv/popular?page=${currentPage}`, options);
  const data = await response.json();
  return data.results;


    
}













