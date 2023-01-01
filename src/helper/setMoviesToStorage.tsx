import {MovieListType} from "../types";

function setMoviesToStorage(searchKey:string,data:MovieListType):boolean {
    if(localStorage.getItem(searchKey)===null) {
        localStorage.setItem(searchKey,JSON.stringify(data))
        return true
    }
    return false
}

export {setMoviesToStorage}