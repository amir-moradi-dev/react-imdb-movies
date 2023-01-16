import React, {createContext, ReactNode,useState} from "react"
import {
    AsyncErrorMessageType, FavoriteMoviesType,
    LoadingType,
    MovieListType,
    SearchKeyType,
    SetAsyncErrorMessageType,
    SetFavoriteMoviesType,
    SetLoadingType, SetSearchKeyType
} from "../types";

type StateContextType = {
    searchKey:SearchKeyType
    setSearchKey:SetSearchKeyType
    loading:LoadingType
    setLoading:SetLoadingType
    favoriteMovies:FavoriteMoviesType
    setFavoriteMovies:SetFavoriteMoviesType
    asyncErrorMessage:AsyncErrorMessageType
    setAsyncErrorMessage:SetAsyncErrorMessageType
}

// @ts-ignore
export const StateContext = createContext<StateContextType>(null)

function StateContextProvider({children}: {children:ReactNode}) {

    const [searchKey,setSearchKey] = useState<string>('iron man')
    const [loading,setLoading] =  useState<boolean>(false)
    const [favoriteMovies,setFavoriteMovies]= useState<MovieListType|[]>([])
    const [asyncErrorMessage,setAsyncErrorMessage]= useState<string|null>(null)
    const state:StateContextType = {
        searchKey,setSearchKey,
        loading,setLoading,
        favoriteMovies,setFavoriteMovies,
        asyncErrorMessage,setAsyncErrorMessage
    }

    return (
        <StateContext.Provider value={{...state}}>
            {children}
        </StateContext.Provider>
    )
}

export default StateContextProvider
