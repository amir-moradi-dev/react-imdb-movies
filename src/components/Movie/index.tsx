import React from "react"
import './index.css'
import {MovieType} from "../../types"

function Movie(props:MovieType) {
    return <>
        <div className={'movieContainer'}>
            <img src={props.Poster} alt={props.Title+' Poster Image'} />
            <h2>{props.Title}</h2>
            <p>{props.Type}</p>
        </div>
    </>
}

export default Movie