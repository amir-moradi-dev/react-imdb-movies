import React from "react"
import './index.css'
import TheatersIcon from '@mui/icons-material/Theaters';
import BurgerMenu from "../../components/BurgerMenu";

function Header() {

    return <>
        <header>
            <nav className={'header__nav'}>
                <div className={'header__navLeft'}>
                    <h2>
                        <TheatersIcon />
                        {import.meta.env.VITE_SITE_NAME}
                    </h2>
                </div>
                <div className={'header__navRight'}>
                    <BurgerMenu />
                </div>
            </nav>
        </header>
    </>
}

export default Header

