import React, {useState} from 'react'
import classes from './index.module.css'
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MovieIcon from "@mui/icons-material/Movie";
import ContactPageIcon from "@mui/icons-material/ContactPage";


import SearchForm from "../SearchForm";
import {FAVORITE_ROUTE, HOME_ROUTE ,CONTACT_US_ROUTE} from "../../routes";
import {Link, redirect} from "react-router-dom";

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
                <ul className={classes.burger__openList}>
                    <SearchForm onSubmitClose={changeMenuStatus} />
                    <li onClick={changeMenuStatus}><HomeIcon /> <Link to={HOME_ROUTE}>Home Page</Link></li>
                    <li onClick={changeMenuStatus}><MovieIcon /><Link to={'/#'}>All Movies</Link></li>
                    <li onClick={changeMenuStatus}><FavoriteIcon /><Link to={FAVORITE_ROUTE}>My Favorites</Link></li>
                    <li onClick={changeMenuStatus}><ContactPageIcon /><Link to={CONTACT_US_ROUTE}>Contact Us</Link></li>
                </ul>

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