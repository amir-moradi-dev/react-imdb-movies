// if movie does already exists => true  otherwise => false
function doesMovieExists(movieName:string):boolean {
    if(localStorage.getItem(movieName) === null)
        return false
    if(localStorage.getItem(movieName) === 'undefined')
        throw new Error('Movie Is Undefined...(bad saving)')

    return true

}

export {doesMovieExists}