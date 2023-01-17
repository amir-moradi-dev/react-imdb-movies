import axios, {AxiosError, AxiosResponse} from "axios";
import {doesMovieExists, setMoviesToStorage,getMoviesFormStorage} from "../helper";
import {useContext, useEffect, useState} from "react";
import {StateContext} from "../store/StateContext";
import {SearchKeyContextType} from "../types";

import {getApiUrl} from "../api"

// T is either => ( MovieDetailedType || MovieListType )
type DataCollection<T> = {
    Search:T
}

type UseFetchMoviesAndSaveOptionsType = {
    plotType :'short'|'full'
    imdbIDOrMovieName :SearchKeyContextType
}

function useFetchMoviesAndSave<T>(
        plotType:UseFetchMoviesAndSaveOptionsType["plotType"] = 'short',
        imdbIDOrMovieName:UseFetchMoviesAndSaveOptionsType["imdbIDOrMovieName"]=useContext(StateContext).searchKey
){


    if(doesMovieExists(imdbIDOrMovieName)) {
        return getMoviesFormStorage<T>(imdbIDOrMovieName)
    }
    const {
        setLoading:setLoadingCtx,
        setAsyncErrorMessage:setAsyncErrorMessageCtx,
    } = useContext(StateContext)



    const URL = getApiUrl(plotType,imdbIDOrMovieName)
    const [moviesListOrMovie,setMoviesListOrMovie]=useState<T|null>(null)


    useEffect(()=>{
        (async ()=> {
            setLoadingCtx(true)
            console.log('making request')
            await axios
                .get<DataCollection<T>>(URL, {timeout: 5000})
                .then(handleSuccess)
                .catch(handleError)
            setLoadingCtx(false)
        })()
    },[imdbIDOrMovieName])


    async function handleSuccess(response:AxiosResponse) {
        const data = await response.data as DataCollection<T>
        const search = data.Search as T
        setMoviesToStorage<T>(imdbIDOrMovieName,search)
        const itsSaved = getMoviesFormStorage<T>(imdbIDOrMovieName) as T
        setMoviesListOrMovie(itsSaved)
    }

    function handleError (error:AxiosError) {
        console.log(error)
        if(error.code==='ECONNABORTED')
            return setAsyncErrorMessageCtx('sorry we could not find your movie')
        if(error.code==='NETWORK_ERROR')
            return setAsyncErrorMessageCtx('maybe just maybe your offline')
        else
            throw new Error('I Dont know what fuck is happening')
    }


    return moviesListOrMovie

}

export {useFetchMoviesAndSave}