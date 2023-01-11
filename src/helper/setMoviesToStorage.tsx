import {doesMovieExists} from "./doesMovieExists";

function setMoviesToStorage<T>(searchKey:string,data:T):void {
    if(doesMovieExists(searchKey))
        throw new Error('Movie Already Exists...')
    try {
        localStorage.setItem(searchKey,JSON.stringify(data))
        return;
    }
    catch (e:any) {
        console.log('')
        throw new Error('An Error Occurred During The Saving Movie To LocalStorage...')
    }

}

export {setMoviesToStorage}