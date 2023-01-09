import {ReactNode} from "react";
import classes from "./index.module.css";

type MovieCardPropsType = {
    children: ReactNode
    className?: string
}

function MovieCard(props:MovieCardPropsType) {
    return <>
        <div className={classes.movieContainer +' '+ props.className}>
            {props.children}
        </div>
    </>
}

export default MovieCard