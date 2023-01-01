import {ReactNode} from "react";

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

export type LayoutProp = {
    children: ReactNode
}



