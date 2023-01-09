import classes from './index.module.css'
import {useContext} from "react";
import {StateContext} from "../../store/StateContext";
import SentimentIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import MovieIcon from "@mui/icons-material/Movie";
import Movie from "../../components/Movie";

function FavoriteMoviesPage() {
    const {favoriteMovies:FavoriteMoviesCtx} = useContext(StateContext)

    function conditionalRendering() {
        if(FavoriteMoviesCtx.length<1)
            return renderEmptyFavoriteMovies()
        return renderFavoriteMovies()
    }
    function renderFavoriteMovies() {
        return FavoriteMoviesCtx.map( fav => <Movie {...fav} />)
    }
    function renderEmptyFavoriteMovies() {
        return <>
            <div className={classes.emptyFavoriteMovies}>
                <h5><SentimentIcon fontSize={'small'} style={{paddingRight:"3px",color:"darkgoldenrod"}} /> Your Favorite Movie List Is Empty...</h5>
                <h6>
                    Ofcourse You Can
                    <SearchIcon fontSize={'small'} style={{margin:"9px 0",color:"darkgreen"}} />
                    For A
                    <MovieIcon  fontSize={'small'} style={{margin:"9px 0",color:"darkblue"}} />
                    And Then Add It To Your
                    <FavoriteIcon fontSize={'small'} style={{margin:"9px 0",color:"darkred"}}/>
                </h6>
            </div>
        </>
    }

    return <>
        <div className={classes.favoriteMovies}>
            {conditionalRendering()}
        </div>
    </>
}

export default FavoriteMoviesPage