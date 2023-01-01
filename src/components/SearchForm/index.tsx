import React, {FormEvent} from "react"
import './index.css'
import Search from "@mui/icons-material/Search";

function SearchForm() {

    function onFormSubmit(e:FormEvent<HTMLFormElement>) {
        e.preventDefault()

    }

    return <>
        <form className={'searchForm'} onSubmit={onFormSubmit}>
            <input type={'text'} placeholder={'name of movie...'} />
            <button type={'submit'}> <Search /> </button>
        </form>
    </>
}

export default SearchForm