import classes from './index.module.css'
import SearchIcon from "@mui/icons-material/Search";
import MovieList from "../../components/MovieList";
import React, {useContext, useEffect} from "react";
import {StateContext} from "../../store/StateContext"
import Loading from "../../components/Loading"
import ErrorMessage from "../../components/ErrorMessage";
// TODO Add Error To The Context And Show It To The User If Error Existed
function HomePage() {
    const {searchKey:searchKeyCtx,loading:LoadingCtx,asyncErrorMessage} = useContext(StateContext)
    useEffect(()=>{},[LoadingCtx])

    return <>
        {asyncErrorMessage && <ErrorMessage message={asyncErrorMessage} />}
        {!asyncErrorMessage && searchKeyCtx && (
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