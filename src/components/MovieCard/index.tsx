import {ReactNode} from "react";
import classes from "./index.module.css";

type MovieCardPropsType = {
    children: ReactNode
    className?: string
}

function MovieCard(props:MovieCardPropsType) {
    const newClassName = props.className ? props.className : ''

    return <>
        <div className={classes.movieContainer +' '+ newClassName}>
            {props.children}
        </div>
    </>
}

export default MovieCard