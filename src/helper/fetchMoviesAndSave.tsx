import axios from "axios";
import {MovieListType} from "../types";
import {setMoviesToStorage} from ".";
import {getMoviesFormStorage} from '.';

const VITE_IMDB_KEY = import.meta.env.VITE_IMDB_KEY

interface DataCollection {
    Search:MovieListType
}

async function fetchMoviesAndSave(movieName: string):Promise<null|MovieListType> {
    const URL = `http://www.omdbapi.com/?apikey=${VITE_IMDB_KEY}&s=${movieName}`
    const checkLocalStorage = JSON.parse(localStorage.getItem(movieName) || "")

    if ((checkLocalStorage === "") || (checkLocalStorage === null)) {
        console.log('making request')
        const {data} = await axios.get<DataCollection>(URL)
        console.log(data)
        const search: MovieListType = data.Search
        setMoviesToStorage(movieName,search)
        return search
    }

    return getMoviesFormStorage(movieName)
}

export {fetchMoviesAndSave}