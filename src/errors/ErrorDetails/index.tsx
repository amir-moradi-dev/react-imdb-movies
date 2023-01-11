import classes from './index.module.css'
import {ErrorInfo} from "react";
import TitleCard from "../../components/TitleCard";

type ErrorDetailsProps = {
    error: Error|null
    errorInfo: ErrorInfo|null
}

function ErrorDetails(props:ErrorDetailsProps) {
    return <>
        <TitleCard className={classes.cardTitle}>
            <h3>Some Thing Went Wrong</h3>
            <p>{props.error?.message}</p>
        </TitleCard>
    </>
}

export default ErrorDetails