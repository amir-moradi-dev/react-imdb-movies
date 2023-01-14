function deleteUndefinedMovies(itemName:string) {
    localStorage.removeItem(itemName)
}

export {deleteUndefinedMovies}