
import {Movie, Provider} from '../model'
import {useState} from 'react'
import {AiFillPlusSquare, AiFillCheckSquare} from 'react-icons/ai'

interface MovieProps{
    movie: Movie,
    providers: Provider[]
}

const Film:React.FC<MovieProps> = ({movie, providers})=>{
    
    const [clicked, setClicked] = useState(false)
    const [checked, setChecked] = useState(false)

    const providerLogos = providers?.map((provider, index)=>{
        return(
            <img className='logo' src = {`https://image.tmdb.org/t/p/w500${provider.logo}`} key = {index}/>
        )
    })

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
                    <div className='icon' onClick={()=>setChecked(!checked)}>
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