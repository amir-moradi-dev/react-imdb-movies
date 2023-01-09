import React from "react";
import classes from './index.module.css'
import AutorenewIcon from "@mui/icons-material/Autorenew";

function Loading() {
    return <>
        <div className={classes.loadingContainer}>
            <h4>Loading Movies...</h4>
            <AutorenewIcon className={classes.loadingIconSpin}/>
        </div>
    </>
}

export default Loading