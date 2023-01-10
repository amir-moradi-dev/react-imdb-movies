import classes from './index.module.css'
import HomeIcon from "@mui/icons-material/Home";
import {Link} from "react-router-dom";
import {CONTACT_US_ROUTE, FAVORITE_ROUTE, HOME_ROUTE} from "../../routes";
import MovieIcon from "@mui/icons-material/Movie";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import React from "react";

type NavigationLinksProps = {
    changeMenuStatus: ()=>void
}

function NavigationLinks(props:NavigationLinksProps) {
    return <>
        <ul className={classes.navigationListContainer}>
            <li onClick={props.changeMenuStatus}><HomeIcon /> <Link to={HOME_ROUTE}>Home Page</Link></li>
            <li onClick={props.changeMenuStatus}><MovieIcon /><Link to={'/#'}>All Movies</Link></li>
            <li onClick={props.changeMenuStatus}><FavoriteIcon /><Link to={FAVORITE_ROUTE}>My Favorites</Link></li>
            <li onClick={props.changeMenuStatus}><ContactPageIcon /><Link to={CONTACT_US_ROUTE}>Contact Us</Link></li>
        </ul>
    </>
}

export default NavigationLinks