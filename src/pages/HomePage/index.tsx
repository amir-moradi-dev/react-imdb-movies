import classes from './index.module.css'
import SearchIcon from "@mui/icons-material/Search";
import MovieList from "../../components/MovieList";
import React, {useContext} from "react";
import {StateContext} from "../../store/StateContext";

function HomePage() {
    const searchKeyCtx = useContext(StateContext)?.searchKey

    return <>
        {searchKeyCtx && (
            <div className={classes.showSearchedKey}>
                <div className={classes.showSearchedKey__icon}>
                    <SearchIcon />
                    <h3>{searchKeyCtx}</h3>
                </div>
            </div>
        )}
        <MovieList />
    </>
}

export default HomePage