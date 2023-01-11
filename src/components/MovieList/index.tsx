import React, {useEffect, useState,useContext} from "react"
import classes from './index.module.css'
import Movie from "../Movie"
import {MovieListType, MovieType} from "../../types"
import Loading from "../Loading"
import {fetchMoviesAndSave} from "../../helper"
import {getMoviesFormStorage} from "../../helper"
import { v4 as uuid } from 'uuid'
import {StateContext} from "../../store/StateContext"

function MovieList() {
    const {searchKey:SearchKeyCtx, setLoading:SetLoadingCtx}= useContext(StateContext)
    const [movieName, setMovieName] = useState<string>('iron man')
    const [movieList,setMovieList] = useState<MovieListType|null>(getMoviesFormStorage<MovieListType>(movieName))

    useEffect(()=> {
        if (SearchKeyCtx)
        setMovieName(SearchKeyCtx)
    },[SearchKeyCtx])

    useEffect(()=>{
        (async ()=> {
            SetLoadingCtx(true)
            const search= await fetchMoviesAndSave<MovieListType>(movieName)
            setMovieList(search)
            SetLoadingCtx(false)
        })()
    },[movieName,SearchKeyCtx])

    function renderMovies() {
        if (movieList)
        return movieList.map( (movie:MovieType)=> {
            return <Movie key={uuid()} {...movie} />
        })
    }
    function conditionalRendering() {
        if (movieList && movieList.length>0)
            return renderMovies()
        return <Loading />
    }

    return <>
        <div className={classes.movieListContainer}>
            {conditionalRendering()}
        </div>
    </>
}

export default MovieList