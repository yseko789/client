import {Movie, Provider} from '../model'
import Film from './Film'

import {useState, useEffect} from 'react'

interface MovieListProps{
    movies: Movie[]
}



const FilmList: React.FC<MovieListProps> = ({movies})=>{
    const [providers, setProviders] = useState<Provider[][]>([])

    const convertToProvider = (provider: any): Provider=>{
        return {logo: provider.logo_path, id: provider.provider_id}
    }

    useEffect(()=>{
        setProviders([])
        getAllProviders(movies)
    }, [movies])

    const getAllProviders = async(movies: Movie[])=>{
        for(let i = 0; i<movies.length; i++){
            await getProviders(movies[i],i)
        }
    }

    const getProviders = async(movie: Movie, index: number)=>{
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/watch/providers?api_key=4013d5cd1c253a9ea8f0c79b795ecdf3`,{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            }
        })
        const data = await response.json()
        let flatrate = 'flatrate'
        let add: Provider[] = []
        if(data.results['US'] !== undefined){
            if(flatrate in data.results['US']){
                add = data.results['US'].flatrate.map((provider: any)=>convertToProvider(provider))
            }
        }
        setProviders(providers=>[...providers, add ])
    }
    const list = movies.map((movie, index)=>{
        return(
            <Film movie={movie} providers={providers.length>= index+1?providers[index]:[]} key={index} />
        )
    })

    return(
        <div className='container'>
            <div className='row g-3'>
                {/* <button onClick={()=>console.log(providers)}>click</button> */}
                {
                    movies.map((movie, index)=>{
                        return(
                            <Film movie={movie} providers={providers[index]} key={movie.id}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FilmList