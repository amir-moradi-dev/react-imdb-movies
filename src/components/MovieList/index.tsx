import React, {useEffect, useState,useContext} from "react"
import classes from './index.module.css'
import Movie from "../Movie"
import {MovieListType, MovieType} from "../../types"
import {fetchMoviesAndSave} from "../../helper"
import {getMoviesFormStorage} from "../../helper"
import { v4 as uuid } from 'uuid'
import {StateContext} from "../../store/StateContext"
import {useThrowAsyncError} from "../../hooks/useThrowAsyncError";
import {useFetchMoviesAndSave} from "../../hooks";
const VITE_IMDB_KEY = import.meta.env.VITE_IMDB_KEY

function MovieList() {
    const movieList = useFetchMoviesAndSave<MovieListType>({
        plotType:'short',
        imdbIDOrMovieName: 'iron man'
    })

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