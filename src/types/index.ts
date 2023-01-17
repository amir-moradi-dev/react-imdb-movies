import React from "react";

// MovieTypes

export type MovieListType = {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string
}[]

export type MovieType = {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string
}

export type MovieDetailedType = {
    "Title": string
    "Year": string
    "Rated": string
    "Released": string
    "Runtime": string
    "Genre": string
    "Director": string
    "Writer": string
    "Actors": string
    "Plot": string
    "Language": string
    "Country": string
    "Awards": string
    "Poster": string,
    "Ratings": [
    {
        "Source": string
        "Value": string
    },
    {
        "Source": string
        "Value": string
    },
    {
        "Source": string
        "Value": string
    }
],
    "Metascore": string
    "imdbRating": string
    "imdbVotes": string
    "imdbID": string
    "Type": string
    "DVD": string
    "BoxOffice": string
    "Production": string
    "Website": string
    "Response": string
}

// Context Types
export type SearchKeyContextType = string
export type SetSearchKeyContextType = React.Dispatch<React.SetStateAction<string>>
export type LoadingContextType = boolean
export type SetLoadingContextType = React.Dispatch<React.SetStateAction<boolean>>
export type FavoriteMoviesContextType = MovieListType|[]
export type SetFavoriteMoviesContextType = React.Dispatch<React.SetStateAction<MovieListType>>
export type AsyncErrorMessageContextType = string|null
export type SetAsyncErrorMessageContextType = React.Dispatch<React.SetStateAction<string|null>>
export type StateContextType = {
    searchKey:SearchKeyContextType
    setSearchKey:SetSearchKeyContextType
    loading:LoadingContextType
    setLoading:SetLoadingContextType
    favoriteMovies:FavoriteMoviesContextType
    setFavoriteMovies:SetFavoriteMoviesContextType
    asyncErrorMessage:AsyncErrorMessageContextType
    setAsyncErrorMessage:SetAsyncErrorMessageContextType
}
