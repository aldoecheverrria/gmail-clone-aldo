import React from 'react'
import './Mail.css'
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import ErrorIcon from "@material-ui/icons/Error";
import DeleteIcon from "@material-ui/icons/Delete";
import EmailIcon from "@material-ui/icons/Email";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import PrintIcon from "@material-ui/icons/Print";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { IconButton } from '@material-ui/core';
import {useHistory} from "react-router-dom";


function Mail() {

    const history = useHistory();

    return (
        <div className="mail">
            
            <div className="mail__tools">
                <div className="mail__toolsLeft">
                    <IconButton onClick={() => history.push("/")}>
                        <ArrowBackIcon/>
                    </IconButton>

                    <IconButton>
                        <MoveToInboxIcon/>
                    </IconButton>

                    <IconButton>
                        <ErrorIcon/>
                    </IconButton>

                    <IconButton>
                        <DeleteIcon/>
                    </IconButton>

                    <IconButton>
                        <EmailIcon/>
                    </IconButton>

                    <IconButton>
                        <WatchLaterIcon/>
                    </IconButton>

                    <IconButton>
                        <CheckCircleIcon/>
                    </IconButton>

                    <IconButton>
                        <LabelImportantIcon/>
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>

                </div>
                <div className="mail__toolsRight">
                    <IconButton>
                        <UnfoldMoreIcon/>
                    </IconButton>
                    <IconButton>
                        <PrintIcon/>
                    </IconButton>
                    <IconButton>
                        <ExitToAppIcon/>
                    </IconButton>
                </div>

            </div>
            <div className="mail__body">
                <div className="mail__bodyHeader">
                    <h2>Asunto: esta es una prueba de correo</h2>
                    <LabelImportantIcon className="mail__important" />
                    <p>Título</p>
                    <p className="mail__time">10pm</p>
                </div>
                <div className="mail__message">
                <p>This is a test of react-router! you can go back to  home, using the back button!...
                Esta es una prueba de react-router!, puedes regresar a home usando el botón de atrás!...
                </p>
                </div>
            </div>
     
        </div>
    )
}

export default Mail
