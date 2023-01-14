import {doesMovieExists} from "./doesMovieExists";

function setMoviesToStorage<T>(searchKey:string,data:T):void {
    if(doesMovieExists(searchKey))
        return;

    try {
        localStorage.setItem(searchKey,JSON.stringify(data))
        return;
    }
    catch (e:any) {
        throw new Error('An Error Occurred During The Saving Movie To LocalStorage...')
    }

}

export {setMoviesToStorage}