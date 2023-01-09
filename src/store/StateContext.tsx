import React, {createContext, ReactNode,useState} from "react"
import {MovieListType} from "../types";

type StateContextType = {
    searchKey:string
    setSearchKey:React.Dispatch<React.SetStateAction<string>>
    loading:boolean
    setLoading:React.Dispatch<React.SetStateAction<boolean>>
    favoriteMovies:MovieListType|[]
    setFavoriteMovies:React.Dispatch<React.SetStateAction<MovieListType>>
}

// @ts-ignore
export const StateContext = createContext<StateContextType>(null)

function StateContextProvider({children}: {children:ReactNode}) {

    const [searchKey,setSearchKey] = useState<string>('iron man')
    const [loading,setLoading] =  useState<boolean>(true)
    const [favoriteMovies,setFavoriteMovies]= useState<MovieListType|[]>([])
    const state = {
        searchKey,setSearchKey,
        loading,setLoading,
        favoriteMovies,setFavoriteMovies
    }

    return (
        <StateContext.Provider value={{...state}}>
            {children}
        </StateContext.Provider>
    )
}

export default StateContextProvider
