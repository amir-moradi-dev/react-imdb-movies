import classes from './index.module.css'
import SearchIcon from "@mui/icons-material/Search";
import MovieList from "../../components/MovieList";
import React, {useContext, useEffect} from "react";
import {StateContext} from "../../store/StateContext"
import Loading from "../../components/Loading"

function HomePage() {
    const {searchKey:searchKeyCtx,loading:LoadingCtx} = useContext(StateContext)
    useEffect(()=>{},[LoadingCtx])

    return <>
        {searchKeyCtx && (
            <div className={classes.showSearchedKey}>
                <div className={classes.showSearchedKey__icon}>
                    <SearchIcon />
                    <h3>{searchKeyCtx}</h3>
                </div>
            </div>
        )}
        {LoadingCtx&&<Loading />}
        <MovieList />
    </>
}

export default HomePage