import classes from './index.module.css'
import MovieIcon from "@mui/icons-material/Movie";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import React from "react";
import {MovieType} from "../../types";
import TitleCard from "../TitleCard";

type MovieTitlePropsType = {
    movie: MovieType
}

function MovieTitle(props:MovieTitlePropsType) {
    return <>
        <img src={props.movie.Poster} alt={props.movie.Title+' Poster Image'} />

        <TitleCard className={classes.movieTitle}>
            <h4><MovieIcon style={{color:"#77b2c6"}}/> {props.movie.Title}</h4>
        </TitleCard>
        <TitleCard className={classes.movieYear}>
            <h4><CalendarMonthIcon style={{color:"#77b2c6"}} /> {props.movie.Year}</h4>
        </TitleCard>
    </>
}

export default MovieTitle