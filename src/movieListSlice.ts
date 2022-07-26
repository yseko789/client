import {Movie, Provider} from './model'
import {createSlice} from '@reduxjs/toolkit'

export type MovieProvider = [Movie, Provider]

interface movieListState{
    list: MovieProvider[]
}

const initialState: movieListState = {
    list: []
}



export const movieListSlice = createSlice({
    name: 'myMovieList',
    initialState,
    reducers:{
        addMovie: (state, action)=>{
            state.list.push(action.payload)
        },
        removeMovie: (state, action)=>{
            state.list = state.list.filter(movieProvider=>movieProvider[0].id !== action.payload)
        }
    }
})

export const {addMovie, removeMovie} = movieListSlice.actions

export default movieListSlice.reducer