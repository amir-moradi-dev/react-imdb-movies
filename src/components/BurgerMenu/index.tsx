import React, {useState} from 'react'
import './index.css'
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MovieIcon from "@mui/icons-material/Movie";
import ContactPageIcon from "@mui/icons-material/ContactPage";


import SearchForm from "../SearchForm";

function BurgerMenu() {

    const [menuIsOpen,setMenuIsOpen]= useState(false)

    function changeMenuStatus() {
        setMenuIsOpen(!menuIsOpen)
    }
    function conditionalRendering() {
        if(menuIsOpen) {
            return <>
                <div className={'burger__openIcon'}>
                    <MenuOpenIcon onClick={changeMenuStatus} fontSize={'large'} />
                </div>
                <ul className={'burger__openList'}>
                    <SearchForm />
                    <li><HomeIcon /> <h4>Home Page</h4></li>
                    <li><MovieIcon /><h4>All Movies</h4></li>
                    <li><FavoriteIcon /><h4>My Favorites</h4></li>
                    <li><ContactPageIcon /><h4>Contact Us</h4></li>
                </ul>

            </>
        }
        else {
            return <>
                <div className={'burger__close'}>
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