import {doesMovieExists} from "./doesMovieExists";

function getMoviesFormStorage<T>(searchKey:string):T|null {
    if(!doesMovieExists(searchKey))
        return null
    try{
        // @ts-ignore
        return JSON.parse(localStorage.getItem(searchKey)) as T
    }
    catch (e:any) {
        throw new Error('Error Reading Data From Storage')
    }
}


export {getMoviesFormStorage}