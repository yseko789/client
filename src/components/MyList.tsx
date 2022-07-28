import { useAppSelector } from '../redux/hooks'


const MyList: React.FC = ()=>{
    const myMovieList = useAppSelector((state)=>state.movieList.list)
    const list = myMovieList.map((movieProvider)=>{
        return(
            <div className='myMovie col-3 col-md-2 col-lg-1' key={movieProvider[0].id}>
                <img className = 'myMoviePoster' src={`https://image.tmdb.org/t/p/w500${movieProvider[0].poster}`} key={movieProvider[0].id}/>
            </div>
        )
    })
    return(
        <div className='container'>

            <div className='myMovieList'>
                {list}
            </div>
            <button onClick={()=>console.log(myMovieList)}>see</button>
        </div>
    )
}

export default MyList