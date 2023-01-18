import classes from './index.module.css'
import {MovieDetailedType} from "../../types";
import MovieCard from "../../components/MovieCard";
import {useParams} from "react-router-dom";
import Loading from "../../components/Loading";
import MovieTitle from "../../components/MovieTitle";
import TitleCard from "../../components/TitleCard";
import {useFetchMoviesAndSave} from "../../hooks";

type ParamsType = { imdbID: string }

function MovieDetailsPage() {

    const {imdbID} = useParams() as ParamsType

    const detailedMovie = useFetchMoviesAndSave<MovieDetailedType>('full',imdbID)

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