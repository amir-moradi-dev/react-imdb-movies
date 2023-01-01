function getMoviesFormStorage(searchKey:string) {
    if(localStorage.getItem(searchKey)===null)
        return null
    // @ts-ignore
    return JSON.parse(localStorage.getItem(searchKey))
}


export {getMoviesFormStorage}