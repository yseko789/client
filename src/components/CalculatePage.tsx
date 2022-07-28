import Nav from "./Nav"

import { useAppSelector } from '../redux/hooks'
import { Provider, Movie } from "../model"

interface ProviderToMovies{
    [key: number]: LogoAndMovies
}

interface LogoAndMovies{
    name: string,
    logo: string,
    movies: Movie[]
}

const CalculatePage: React.FC = ()=>{


    const myMovieList = useAppSelector((state)=>state.movieList.list)

    const providerToMovies: ProviderToMovies = {}

    for(let i = 0; i<myMovieList.length; i++){
        let providers: Provider[] = myMovieList[i][1]
        for(let j=0; j<providers.length; j++){
            if(!(providers[j].id in providerToMovies)){
                providerToMovies[providers[j].id] = {name: providers[j].name, logo: providers[j].logo, movies: []}
            }
            // providerToMovies[providers[j].id].push(myMovieList[i][0])
            providerToMovies[providers[j].id].movies.push(myMovieList[i][0])
        }
    }

    const list = Object.keys(providerToMovies).map((key)=>{
        let movieList = providerToMovies[Number(key)].movies
        let movieListElements = movieList.map((movie)=>{
            return(
                <div className="myMovie col-3 col-md2 col-lg-1" key = {movie.id}>
                    <img className="myMoviePoster" src = {`https://image.tmdb.org/t/p/w500${movie.poster}`}/>
                </div>
            )
        })
        return(
            <div className="container" key={Number(key)}>
                <div className="provider-title container">
                    {providerToMovies[Number(key)].name} ({providerToMovies[Number(key)].movies.length})
                </div>
                <div className="myMovieList">
                    {
                        movieListElements
                    }
                </div>
            </div>
        )
    })

    return(
        <div>
            <Nav/>
            <button onClick={()=>console.log(providerToMovies)}>Click</button>
            {
                list
            }
            
        </div>
    )
}

export default CalculatePage