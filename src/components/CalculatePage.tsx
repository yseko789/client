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
            <div className="container p-2 mt-2 movieListColor" key={Number(key)}>
                <div className="provider-title container p-2">
                    <img className="logo" src = {`https://image.tmdb.org/t/p/w500${providerToMovies[Number(key)].logo}`}/>
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
            <div className="container">
                {   myMovieList.length >0&&
                    list
                }
                {
                    myMovieList.length==0&&
                    <h1>
                        You haven't added any movies yet!
                    </h1>
                }

            </div>
            
        </div>
    )
}

export default CalculatePage