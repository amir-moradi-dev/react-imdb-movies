import classes from './index.module.css'
import {MovieDetailedType} from "../../types";
import {useEffect, useState} from "react";
import MovieCard from "../../components/MovieCard";
import {useParams} from "react-router-dom";
import Loading from "../../components/Loading";
import MovieTitle from "../../components/MovieTitle";
import TitleCard from "../../components/TitleCard";
import {fetchMoviesAndSave, getMoviesFormStorage} from "../../helper";
import {useThrowAsyncError} from "../../hooks/useThrowAsyncError";
const VITE_IMDB_KEY = import.meta.env.VITE_IMDB_KEY

type ParamsType = { imdbID: string }

function MovieDetailsPage() {

    const {imdbID} = useParams() as ParamsType
    const URL = `https://www.omdbapi.com/?apikey=${VITE_IMDB_KEY}&i=${imdbID}&plot=full`
    // lazy initialization
    const [detailedMovie,setDetailedMovie]= useState<MovieDetailedType|null>(
        ()=>getMoviesFormStorage<MovieDetailedType>(imdbID))
    const throwAsyncError = useThrowAsyncError()

    useEffect(()=>{
        if(detailedMovie===null)
        (async function getMovieDetails() {
            await fetchMoviesAndSave<MovieDetailedType>(URL,imdbID,throwAsyncError)
            const data = getMoviesFormStorage<MovieDetailedType>(imdbID)
            setDetailedMovie(data)
        })()

    },[])

    function conditionalRendering() {
        if (!detailedMovie)
            return <Loading/>
        return <>
            <MovieCard className={classes.movieDetailsContainer} >

                <MovieTitle movie={detailedMovie} />

                <TitleCard className={classes.movieGenre}>
                    <h4>Genre: {detailedMovie.Genre}</h4>
                </TitleCard>

                <TitleCard className={classes.moviePlot}>
                    <h4>{detailedMovie.Plot}</h4>
                </TitleCard>
            </MovieCard>
        </>
    }

    return conditionalRendering()

}

export default MovieDetailsPage