import classes from './index.module.css'
import React, {ReactNode} from "react";

type TitleCardPropsType = {
    className?: string
    children: ReactNode
}

function TitleCard(props:TitleCardPropsType) {

    const newClassName = props.className ? props.className : ''

    return <>
        <div className={classes.cardTitle +' '+ newClassName }>
            {props.children}
        </div>
    </>
}

export default TitleCard