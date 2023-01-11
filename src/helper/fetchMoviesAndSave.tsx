import axios, {AxiosError, AxiosResponse} from "axios";
import {doesMovieExists, setMoviesToStorage} from ".";
import {getMoviesFormStorage} from '.';

const VITE_IMDB_KEY = import.meta.env.VITE_IMDB_KEY
// T is either => ( MovieDetailedType || MovieListType )
type DataCollection<T> = {
    Search:T
}

async function fetchMoviesAndSave<T>(movieName: string):Promise<T|null> {
    if(doesMovieExists(movieName))
        return getMoviesFormStorage<T>(movieName)

    const URL = `https://www.omdbapi.com/?apikey=${VITE_IMDB_KEY}&s=${movieName}&plot=short`

    function successfulRequest(response:AxiosResponse) {
        const data = response.data as DataCollection<T>
        console.log(data)
        const search = data.Search as T
        setMoviesToStorage<T>(movieName,search)
        return search
    }

    console.log('making request')
    return await axios.get<DataCollection<T>>(URL)
        .then(successfulRequest)
        .catch( (error:AxiosError)=> {throw new Error(error.message)})
}

export {fetchMoviesAndSave}