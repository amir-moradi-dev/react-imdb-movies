import {getFullPlotUrl} from "./getFullPlotUrl";
import {getShortPlotUrl} from "./getShortPlotUrl";

function getApiUrl(type:'short'|'full',imdbIDOrMovieName:string) {

    switch (type) {
        case 'full':
            return getFullPlotUrl(imdbIDOrMovieName)
        case 'short':
            return getShortPlotUrl(imdbIDOrMovieName)
        default:
            throw new Error('some uncaught situation happened')
    }
}

export {getApiUrl}