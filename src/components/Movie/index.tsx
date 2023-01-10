import React, {useContext, useEffect} from "react"
import classes from './index.module.css'
import {MovieType} from "../../types"
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import {Link} from "react-router-dom";
import {StateContext} from "../../store/StateContext";
import MovieTitle from "../MovieTitle";
import MovieCard from "../MovieCard";

function Movie(movie:MovieType) {
    const {
        favoriteMovies:FavoriteMoviesCtx,
        setFavoriteMovies:SetFavoritesCtx } = useContext(StateContext)
    const isThisMovieFavorite = FavoriteMoviesCtx.find( fav => fav.imdbID === movie.imdbID )

    useEffect(()=>{},[FavoriteMoviesCtx,SetFavoritesCtx])

    function conditionalFavoriteIcon() {
        const findResult:MovieType|undefined = FavoriteMoviesCtx.find( fav => fav.imdbID === movie.imdbID )
        if(findResult === undefined)
            return <p onClick={()=>toggleFavoriteMovie(1)}><FavoriteIcon style={{"color":"red"}}  /> Add To Favorites</p>
        return <p onClick={()=>toggleFavoriteMovie(-1)}><FavoriteBorderIcon style={{"color":"red"}} /> Remove From Favorites</p>
    }
    function toggleFavoriteMovie(action: 1 | -1 ) {
        // Remove A Movie From The FavoriteList
        if(action === -1) {
            const filteredList = FavoriteMoviesCtx.filter( fav => fav.imdbID !== movie.imdbID )
            SetFavoritesCtx(filteredList)
            return
        }
        //Add A Movie To The FavoriteList
        if(action === 1) {
            const addedList = [...FavoriteMoviesCtx,movie]
            SetFavoritesCtx(addedList)
            return
        }
        //I Have No IDEA
        return new Error('Some Thing Went Wrong')

    }

    return <>
        <MovieCard>

            <MovieTitle movie={movie} />

            <div className={classes.movieMoreDetails}>
                <Link to={'/movie-detail/'+movie.imdbID}><MovieFilterIcon style={{color:"darkgreen"}}  />Go To Details</Link>
                {conditionalFavoriteIcon()}
            </div>

            <div className={classes.favoriteMovie}>
                {isThisMovieFavorite && <FavoriteIcon style={{"color":"red"}} fontSize={"large"} />}
            </div>

        </MovieCard>
    </>
}

export default Movie