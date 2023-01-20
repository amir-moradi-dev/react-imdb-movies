import React, {createContext, ReactNode, useContext, useState} from "react"
import {MovieListType, StateContextType} from "../types";

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


export const getNameContextValue = ()=>useContext(StateContext).searchKey
export const getAsyncErrorMessageContextValue = ()=>useContext(StateContext).asyncErrorMessage

export default StateContextProvider
