import Button from "@mui/material/Button";
import { useState } from "react";
import { InputEmail } from "./Inputs/InputEmail";
import { Popup } from "./Core/Popup";
import { Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TextField from "@mui/material/TextField";
import {StyleText} from "./Core/Styletext"
const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Calibri',
      fontWeight: 'bold',
    },
  },
});


function Main(props) {
    const [show, setShow] = useState(true);
    // Form Data
    const [emails, setEmails] = useState([]);

    const [popupStatus, setPopupStatus] = useState(null);
    return (
        <div className="main">
            <ThemeProvider theme={theme}>
            <Typography variant="h2" className="mainh1" paddingBottom={2}>
                Email Form
            </Typography>
            <Typography variant="h4" className="mainh3" paddingBottom={2}>
            Send breathtaking professional emails in one click!
            </Typography>
            <Typography variant="h6" className="mainh6" paddingBottom={2}>
            Send breathtaking professional emails in one click!
            </Typography>
            </ThemeProvider>
            <Popup className="Popup" status={popupStatus} show={show}  setShow={setShow}/><br />
            <InputEmail className="reciepientsInput" emails={emails} setEmails={setEmails} />
            <br /><br />
            <StyleText />
            <TextField id="outlined-multiline-static"
                label="BodyText"
                multiline
                fullWidth
                rows={10} /> 
            <div className="sendButton">
                <Button
                    variant="contained"
                    size="large"
                    onClick={e => {
                        if (emails.length === 0) {
                            setPopupStatus("empty");
                            setShow(true);
                        } else {
                            setPopupStatus("success");
                            console.log(emails);
                            setShow(true);
                        }
                    }}>
                    SEND
                </Button>
            </div>
        </div>
    );
}
export default Main;

