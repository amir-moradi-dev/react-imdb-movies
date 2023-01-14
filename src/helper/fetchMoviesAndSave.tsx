import axios, {AxiosError, AxiosResponse} from "axios";
import {doesMovieExists, setMoviesToStorage} from ".";
import {getMoviesFormStorage} from '.';
import {ThrowAsyncErrorType} from "../hooks/useThrowAsyncError";

// T is either => ( MovieDetailedType || MovieListType )
type DataCollection<T> = {
    Search:T
}

async function fetchMoviesAndSave<T>(URL:string,movieName: string,throwAsyncError:ThrowAsyncErrorType) {
    if(doesMovieExists(movieName)) {
        return getMoviesFormStorage<T>(movieName)
    }
    async function successfulRequest(response:AxiosResponse) {
        const data = await response.data as DataCollection<T>
        const search = data.Search as T
        setMoviesToStorage<T>(movieName,search)
    }
    await axios.get<DataCollection<T>>(URL,{timeout:5000})
        .then(successfulRequest)
        .catch( (error:AxiosError)=> {
            console.log(error)
            if(error.code==='ECONNABORTED')
              throwAsyncError(new Error('sorry we could not find your movie'))
        })
}

export {fetchMoviesAndSave}