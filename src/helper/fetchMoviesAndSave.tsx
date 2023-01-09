import axios from "axios";
import {MovieListType} from "../types";
import {doesMovieExists, setMoviesToStorage} from ".";
import {getMoviesFormStorage} from '.';

const VITE_IMDB_KEY = import.meta.env.VITE_IMDB_KEY

interface DataCollection {
    Search:MovieListType
}

async function fetchMoviesAndSave(movieName: string):Promise<null|MovieListType> {
    if(doesMovieExists(movieName))
        return getMoviesFormStorage(movieName)

    const URL = `https://www.omdbapi.com/?apikey=${VITE_IMDB_KEY}&s=${movieName}&plot=short`
    console.log('making request')
    const {data} = await axios.get<DataCollection>(URL)
    console.log(data)
    const search: MovieListType = data.Search
    setMoviesToStorage(movieName,search)
    return search

}

export {fetchMoviesAndSave}