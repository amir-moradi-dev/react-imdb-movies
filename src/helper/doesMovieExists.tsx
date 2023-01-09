// if movie does already exists => true  otherwise => false
function doesMovieExists(movieName:string):boolean {
    if(localStorage.getItem(movieName) !== null)
        if(localStorage.getItem(movieName) !== undefined)
            return true
    return false

}

export {doesMovieExists}