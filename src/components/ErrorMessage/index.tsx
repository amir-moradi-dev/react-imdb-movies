import classes from './index.module.css'
import TitleCard from "../TitleCard";

function ErrorMessage({message}:{message:string}) {
    return <>
        <TitleCard className={classes.titleCard}>
            <h2>{message}</h2>
        </TitleCard>
    </>
}

export default ErrorMessage