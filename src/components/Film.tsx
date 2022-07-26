
import {Movie, Provider} from '../model'
import {useState, useEffect} from 'react'
import {AiFillPlusSquare, AiFillCheckSquare} from 'react-icons/ai'
import { addMovie, removeMovie } from '../movieListSlice'

import { RootState } from '../store'
import { useAppDispatch, useAppSelector } from '../hooks'


import {MovieProvider} from '../movieListSlice'

interface MovieProps{
    movie: Movie,
    providers: Provider[]
}

const Film:React.FC<MovieProps> = ({movie, providers})=>{

    const myMovieList = useAppSelector((state)=>state.movieList.list)
    const dispatch = useAppDispatch();
    
    const [clicked, setClicked] = useState(false)
    const [checked, setChecked] = useState(false)

    useEffect(()=>{
        if(myMovieList.length>0){
            for(let i = 0; i<myMovieList.length; i++){
                if(myMovieList[i][0].id === movie.id){
                    setChecked(true)
                    break
                }
            }

        }
    }, [])


    const providerLogos = providers?.map((provider, index)=>{
        return(
            <img className='logo' src = {`https://image.tmdb.org/t/p/w500${provider.logo}`} key = {index}/>
        )
    })

    const checkHandler = ()=>{
        if(checked){
            dispatch(removeMovie(movie.id))
        }else{
            dispatch(addMovie([movie, providers]))
        }
        setChecked(!checked)
    }

    return(
        <div className="col-6 col-md-4 col-lg-3">
            <div className="card">
                
                <div className = 'card-title text-center'>
                    <div className='movie-title px-2'>
                        {movie.title}
                    </div>
                </div>
                <div className='movie-body'>
                    <div onClick={()=>setClicked(!clicked)}>
                        <img className={`card-img movie-img ${clicked?'darken':''}`} src={movie.poster?`https://image.tmdb.org/t/p/w500${movie.poster}`:''}/>
                        <div className='movie-overview py-5 px-2' >
                            {
                                clicked&&
                                movie.overview
                            }
                        </div>
                    </div>
                    <div className='icon' onClick={()=>checkHandler()}>
                        {
                            !checked&&
                            <AiFillPlusSquare  color='white'  size='50px' />
                        }
                        {
                            checked&&
                            <AiFillCheckSquare color='white' size='50px' />
                        }
                    </div>
                </div>
                    
                <div className='card-footer'>
                    <div className="logos">
                        {
                            providerLogos
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Film