import classes from './index.module.css'
import TitleCard from "../../components/TitleCard";

function ErrorPage() {
    return <>
        <div className={classes.errorPageContainer}>
            <TitleCard className={classes.cardTitle}>
                <h3 className={classes.errorPageTitle}>The Thing That You Are Searching For Is</h3>
                <h2 className={classes.errorPageMark}> 404 Not Found </h2>
            </TitleCard>
        </div>
    </>
}

export default ErrorPage