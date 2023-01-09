import React from "react"
import classes from './index.module.css'
import BurgerMenu from "../../components/BurgerMenu";
import {Link} from "react-router-dom";
import {HOME_ROUTE} from "../../routes";

function Header() {

    return <>
        <header>
            <nav className={classes.headerNav}>
                <Link className={classes.headerNavLeft} to={HOME_ROUTE}>
                    <span>
                        <img src={'/imdb.png'} alt={'branding_logo'} className={classes.siteLogoImage} />
                        {import.meta.env.VITE_SITE_NAME}
                    </span>
                </Link>
                <div className={classes.headerNavRight}>
                    <BurgerMenu />
                </div>
            </nav>
        </header>
    </>
}

export default Header

