const VITE_IMDB_KEY = import.meta.env.VITE_IMDB_KEY

function getFullPlotUrl(imdbIDOrMovieName:string) {
    return `https://www.omdbapi.com/?apikey=${VITE_IMDB_KEY}&i=${imdbIDOrMovieName}&plot=full`
}

export {getFullPlotUrl}