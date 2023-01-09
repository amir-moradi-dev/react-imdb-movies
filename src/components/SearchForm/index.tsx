import React, {FormEvent, useContext, useState} from "react"
import classes from './index.module.css'
import Search from "@mui/icons-material/Search";
import {StateContext} from "../../store/StateContext";

type SearchFormProps = {
    onSubmitClose:()=>void
}

function SearchForm({onSubmitClose}:SearchFormProps) {
    const searchKeyCtx = useContext(StateContext)
    const [searchKey,setSearchKey]= useState('')
    function onFormSubmit(e:FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if(searchKeyCtx) {
            searchKeyCtx.setSearchKey(searchKey)
            onSubmitClose()
            return ;
        }

        return new Error('Form Submission Failed...')
    }

    return <>
        <form className={classes.searchForm} onSubmit={onFormSubmit}>
            <input type={'text'} value={searchKey} onChange={e=>setSearchKey(e.target.value)} placeholder={'name of movie...'} />
            <button type={'submit'}> <Search /> </button>
        </form>
    </>
}

export default SearchForm