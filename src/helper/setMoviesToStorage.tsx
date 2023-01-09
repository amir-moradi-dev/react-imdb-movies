import {MovieDetailedType, MovieListType} from "../types";
import {doesMovieExists} from "./doesMovieExists";

function setMoviesToStorage(searchKey:string,data:MovieListType|MovieDetailedType) {
    if(doesMovieExists(searchKey))
        return new Error('Movie Already Exists...')
    return localStorage.setItem(searchKey,JSON.stringify(data))

}

export {setMoviesToStorage}