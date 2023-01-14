import React, {useEffect, useState,useContext} from "react"
import classes from './index.module.css'
import Movie from "../Movie"
import {MovieListType, MovieType} from "../../types"
import {fetchMoviesAndSave} from "../../helper"
import {getMoviesFormStorage} from "../../helper"
import { v4 as uuid } from 'uuid'
import {StateContext} from "../../store/StateContext"
import {useThrowAsyncError} from "../../hooks/useThrowAsyncError";
const VITE_IMDB_KEY = import.meta.env.VITE_IMDB_KEY

function MovieList() {
    const {searchKey:SearchKeyCtx, setLoading:SetLoadingCtx}= useContext(StateContext)
    const [movieName, setMovieName] = useState<string>('iron man')
    const [movieList,setMovieList] = useState<MovieListType|null>(getMoviesFormStorage<MovieListType>(movieName))
    const url = `https://www.omdbapi.com/?apikey=${VITE_IMDB_KEY}&s=${movieName}&plot=short`
    const throwAsyncError= useThrowAsyncError()

    useEffect(()=> {
        if (SearchKeyCtx)
        setMovieName(SearchKeyCtx)
    },[SearchKeyCtx])

    console.log('0.out of useEffect...')

    useEffect(()=>{
        (async ()=> {
            // console.log('1.set loading State => true')
            SetLoadingCtx(true)
            // console.log('2.making request to api')
            await fetchMoviesAndSave<MovieListType>(url,movieName,throwAsyncError)
            // console.log('3.getting movie from the storage')
            const search = getMoviesFormStorage<MovieListType>(movieName)
            // console.log('4.setting movieName State => search')
            setMovieList(search)
            // console.log('5.setting loading State=> false')
            SetLoadingCtx(false)
        })()
    },[movieName])

    console.log('6.out of useEffect...')

    function renderMovies() {
        if (movieList)
        return movieList.map( (movie:MovieType)=> {
            return <Movie key={uuid()} {...movie} />
        })
    }

    return <>
        <div className={classes.movieListContainer}>
            {movieList && movieList.length>0 && renderMovies()}
        </div>
    </>
}

export default MovieList