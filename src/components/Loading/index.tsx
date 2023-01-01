import React from "react";
import './index.css'
import AutorenewIcon from "@mui/icons-material/Autorenew";

function Loading() {
    return <>
        <div className={'loadingContainer'}>
            <h4>Loading Movies...</h4>
            <AutorenewIcon className={'loadingIconSpin'}/>
        </div>
    </>
}

export default Loading