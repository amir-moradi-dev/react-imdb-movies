import classes from './index.module.css'
import TitleCard from "../../components/TitleCard";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";

function ContactUsPage() {
    return <>
        <div className={classes.contactPageContainer}>
            <TitleCard className={classes.cardTitle+' '+classes.cardTitleName}>
                <AccountBoxIcon style={{color:'green'}} />
                <span>Amir Moradi</span>
            </TitleCard>
            <TitleCard className={classes.cardTitle+' '+classes.cardTitleEmail}>
                <EmailIcon style={{color:'red'}} />
                <span>amir.moradi.dev@gmail.com</span>
            </TitleCard>
            <TitleCard className={classes.cardTitle+' '+classes.cardTitleGithub}>
                <GitHubIcon style={{color:'darkblue'}} />
                <a target={'_blank'} href={'https://github.com/amir-moradi-dev'}>amir-moradi-dev</a>
            </TitleCard>
            <TitleCard className={classes.cardTitle+' '+classes.cardTitleTelegram}>
                <TelegramIcon style={{color:'#2196f3'}} />
                <span>AmirMoradi_Telegram</span>
            </TitleCard>

        </div>
    </>
}

export default ContactUsPage