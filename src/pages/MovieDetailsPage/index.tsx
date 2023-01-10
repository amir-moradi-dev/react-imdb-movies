import classes from './index.module.css'
import axios,{AxiosError} from 'axios'
import {MovieDetailedType} from "../../types";
import {useEffect, useState} from "react";
import MovieCard from "../../components/MovieCard";
import {useParams} from "react-router-dom";
import Loading from "../../components/Loading";
import MovieTitle from "../../components/MovieTitle";
import TitleCard from "../../components/TitleCard";
import {getMoviesFormStorage, setMoviesToStorage} from "../../helper";
const VITE_IMDB_KEY = import.meta.env.VITE_IMDB_KEY

type ParamsType = {
    imdbID: string
}

function MovieDetailsPage() {

    const {imdbID} = useParams() as ParamsType
    const URL = `https://www.omdbapi.com/?apikey=${VITE_IMDB_KEY}&i=${imdbID}&plot=full`
    const [detailedMovie,setDetailedMovie]= useState<MovieDetailedType|null>(getMoviesFormStorage(imdbID))
    let [error,setError] = useState<AxiosError|undefined>()

    useEffect(()=>{
        if(detailedMovie === null)
        (async function getMovieDetails() {
            await axios.get<MovieDetailedType>(URL)
                .then( ({data}) => {
                    setMoviesToStorage(imdbID,data)
                    setDetailedMovie(data)
                })
                .catch( (error:AxiosError) => setError(error))
        })()
    },[])

    function conditionalRendering() {
        if (error)
            return <h1>{error.message}</h1>
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

    return <>
        {conditionalRendering()}
    </>
}

export default MovieDetailsPage