const VITE_IMDB_KEY = import.meta.env.VITE_IMDB_KEY

function getShortPlotUrl(imdbIDOrMovieName:string) {
    return `https://www.omdbapi.com/?apikey=${VITE_IMDB_KEY}&s=${imdbIDOrMovieName}&plot=short`
}

export {getShortPlotUrl}