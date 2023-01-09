import {doesMovieExists} from "./doesMovieExists";

function getMoviesFormStorage(searchKey:string) {
    if(!doesMovieExists(searchKey))
        return null
    // @ts-ignore
    return JSON.parse(localStorage.getItem(searchKey))
}


export {getMoviesFormStorage}