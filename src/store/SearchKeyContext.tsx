import React, {createContext, ReactNode,useState} from "react"

type SearchKeyStateType = {
    searchKey:string
    setSearchKey:React.Dispatch<React.SetStateAction<string>>
}

export const SearchKeyContext = createContext<SearchKeyStateType|null>(null)

function SearchKeyContextProvider({children}: {children:ReactNode}) {

    const [searchKey,setSearchKey] = useState('iron man')

    return (
        <SearchKeyContext.Provider value={{searchKey,setSearchKey}}>
            {children}
        </SearchKeyContext.Provider>
    )
}

export default SearchKeyContextProvider