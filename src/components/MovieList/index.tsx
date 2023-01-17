import React from "react"
import classes from './index.module.css'
import Movie from "../Movie"
import {MovieListType, MovieType} from "../../types"
import { v4 as uuid } from 'uuid'
import {useFetchMoviesAndSave} from "../../hooks";

function MovieList() {
    const movieList = useFetchMoviesAndSave<MovieListType>()

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