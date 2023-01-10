import React, {useState} from 'react'
import classes from './index.module.css'
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/Close";
import SearchForm from "../SearchForm";
import {HOME_ROUTE} from "../../routes";
import {redirect} from "react-router-dom";
import NavigationLinks from "../NavigationLinks";

function BurgerMenu() {
    const [menuIsOpen,setMenuIsOpen]= useState(false)

    function changeMenuStatus() {
        setMenuIsOpen(!menuIsOpen)
        redirect(HOME_ROUTE)
    }

    function conditionalRendering() {
        if(menuIsOpen) {
            return <>
                <div className={classes.burger__openIcon}>
                    <MenuOpenIcon onClick={changeMenuStatus} fontSize={'large'} />
                </div>
                <div className={classes.burger__openList}>
                    <NavigationLinks changeMenuStatus={changeMenuStatus} />
                    <SearchForm onSubmitClose={changeMenuStatus} />
                </div>

            </>
        }
        else {
            return <>
                <div className={classes.burger__close}>
                    <MenuIcon onClick={changeMenuStatus} fontSize={'large'}/>
                </div>
            </>
        }
    }

    return <>
        {conditionalRendering()}
    </>
}

export default BurgerMenu