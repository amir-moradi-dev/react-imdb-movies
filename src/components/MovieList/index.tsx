import React, {useEffect, useState} from "react"
import './index.css'
import Movie from "../Movie"
import {MovieListType, MovieType} from "../../types";
import Loading from "../Loading";
import {fetchMoviesAndSave} from "../../helper";
import {getMoviesFormStorage} from "../../helper";
import { v4 as uuid } from 'uuid';


function MovieList() {
    const [movieName, setMovieName] = useState<string>('iron man')
    const [movieList,setMovieList] = useState<MovieListType|null>(getMoviesFormStorage(movieName))

    useEffect(()=>{
        (async ()=> {
            const search= await fetchMoviesAndSave(movieName)
            setMovieList(search)
        })()

    },[])

    function renderMovies() {
        if (movieList)
        return movieList.map( (movie:MovieType)=> {
            return <Movie key={uuid()} {...movie} />
        })
    }
    function conditionalRendering() {
        if (movieList)
        if(movieList.length>0) {
            return renderMovies()
        }
        return <Loading />
    }

    return <>
        {conditionalRendering()}
    </>
}

export default MovieList