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
export type SearchKeyType = string
export type SetSearchKeyType = React.Dispatch<React.SetStateAction<string>>
export type LoadingType = boolean
export type SetLoadingType = React.Dispatch<React.SetStateAction<boolean>>
export type FavoriteMoviesType = MovieListType|[]
export type SetFavoriteMoviesType = React.Dispatch<React.SetStateAction<MovieListType>>
export type AsyncErrorMessageType = string|null
export type SetAsyncErrorMessageType = React.Dispatch<React.SetStateAction<string|null>>
