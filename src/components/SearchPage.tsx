import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../redux/hooks'

import { clearMovies} from '../redux/movieListSlice'


import SearchBar from './SearchBar'
import Nav from './Nav'
import FilmList from './FilmList'

import {Movie} from '../model'

import MyList from './MyList'



const SearchPage: React.FC = ()=>{

    const [search, setSearch] = useState<string>("")
    const [result, setResult] = useState<Movie[]>([])

    const navigate = useNavigate()
    const dispatch = useAppDispatch();


    useEffect(()=>{
        if(search===""){
            fetchTrendingMovies()
        }else{
            const timer = setTimeout(()=>fetchSearchMovies(),500)
            return (()=>clearTimeout(timer))
        }
    },[search])

    const convertToMovie = (movie: any): Movie=>{
        return {id: movie.id, title: movie.title, overview: movie.overview, poster: movie.poster_path}
    }

    const fetchTrendingMovies =async ()=>{
        const response = await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=4013d5cd1c253a9ea8f0c79b795ecdf3",{
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
        const data = await response.json()
        setResult(data.results.map((movie: any)=>convertToMovie(movie)))
        console.log(result)
    }

    const fetchSearchMovies = async()=>{
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=4013d5cd1c253a9ea8f0c79b795ecdf3&language=en-US&page=1&include_adult=false&query=${search}`,{
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
        const data = await response.json()
        setResult(data.results.map((movie: any)=>convertToMovie(movie)))
        console.log(result)
    }

    return(
        <div>
            <Nav/>
            {/* <div className='container backgroundColor'> */}

                <SearchBar search={search} setSearch={setSearch}/>
                <div className='my-list-section mb-2'>
                    <div className='container searchInput'>
                        My List
                    </div>
                    <MyList/>
                </div>
                <div className='container'>
                    <button className='btn col-6 btn-light' onClick = {()=>dispatch(clearMovies())}>Clear</button>
                    <button className = 'btn col-6 buttonColor' onClick={()=>navigate('/calculate')}>Calculate</button>
                </div>
                <div className=' mt-4'>
                    {
                        search===""&&
                        <div className='container'>
                            <div className='searchInput'>
                                Trending
                            </div>
                        </div>    
                    }
                    {
                        search!==""&&
                        <div className='container'>
                            <div className='searchInput'>
                                Search: {search}
                            </div>
                        </div>
                    }
                    {
                        result.length ===0&&
                        <h1>Loading...</h1>
                    }
                    {
                        result.length > 0 &&
                        <FilmList movies={result}/>
                    }
                </div>
            {/* </div> */}
        </div>
    )
}

export default SearchPage