import classes from './index.module.css'
import CopyrightIcon from "@mui/icons-material/Copyright";

function Footer() {
    return <>
    <footer className={classes.footer}>
        <div>
            <CopyrightIcon fontSize={'small'} style={{paddingRight:"3px"}}/>
            <h6>ImdbMovies All Rights Reserved 2023</h6>
        </div>
    </footer>
    </>
}

export default Footer