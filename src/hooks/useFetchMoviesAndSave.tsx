import axios, {AxiosError, AxiosResponse} from "axios";
import {doesMovieExists, setMoviesToStorage,getMoviesFormStorage} from "../helper";
import {useContext, useEffect, useState} from "react";
import {getNameContextValue, StateContext} from "../store/StateContext";
import {MovieDetailedType, MovieListType, SearchKeyContextType} from "../types";

import {getApiUrl} from "../api"
import {useThrowAsyncError} from "./useThrowAsyncError";

// T is either => ( MovieDetailedType || MovieListType )
type DataCollection = { Search:MovieListType } | MovieDetailedType

type UseFetchMoviesAndSaveOptionsType = {
    plotType :'short'|'full'
    imdbIDOrMovieName :SearchKeyContextType
}

function useFetchMoviesAndSave<T>(
        plotType:UseFetchMoviesAndSaveOptionsType["plotType"] = 'short',
        imdbIDOrMovieName:UseFetchMoviesAndSaveOptionsType["imdbIDOrMovieName"]=getNameContextValue()
){

    const {
        setLoading:setLoadingCtx,
        setAsyncErrorMessage:setAsyncErrorMessageCtx,
    } = useContext(StateContext)

    if(doesMovieExists(imdbIDOrMovieName)) {
        return getMoviesFormStorage<T>(imdbIDOrMovieName)
    }

    const URL = getApiUrl(plotType,imdbIDOrMovieName)
    const [moviesListOrMovie,setMoviesListOrMovie]=useState<T|null>(null)
    const throwAsyncErrorToBoundary = useThrowAsyncError()

    useEffect(()=>{
        (async ()=> {
            setLoadingCtx(true)
            console.log('making request')
            await axios
                .get(URL, {timeout: 5000})
                .then(handleSuccess)
                .catch(handleError)
            setLoadingCtx(false)
        })()
    },[imdbIDOrMovieName])

    async function handleSuccess(response:AxiosResponse) {
        const data = await response.data as DataCollection

        let search:T

        if("Search" in data) {
            search = data.Search as T
        }
        else {
            search = data as T
        }

        setMoviesToStorage<T>(imdbIDOrMovieName,search)
        const itsSaved = getMoviesFormStorage<T>(imdbIDOrMovieName) as T
        return setMoviesListOrMovie(itsSaved)

    }
    function handleError (error:AxiosError) {
        console.log(error)
        if(error.code==='ECONNABORTED')
            return setAsyncErrorMessageCtx('sorry we could not find your movie')
        if(error.code==='NETWORK_ERROR')
            return setAsyncErrorMessageCtx('maybe just maybe your offline')
        else{
            setAsyncErrorMessageCtx('unhandled situation')
            return throwAsyncErrorToBoundary(new Error('unhandled situation'))
        }
    }

    return moviesListOrMovie

}

export {useFetchMoviesAndSave}