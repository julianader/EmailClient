// import emailimg from "../Images/mail-removebg-preview.png";
import Button from "@mui/material/Button";
import { useState } from "react";
import { InputEmail } from "./Inputs/InputEmail";
import { Popup } from "./Core/Popup";
import { Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TextField from "@mui/material/TextField";
const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Calibri',
      fontWeight: 'bold',
    },
  },
});


function Main(props) {
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
            <Popup className="Popup" status={popupStatus}/><br />
            <InputEmail className="reciepientsInput" emails={emails} setEmails={setEmails} />
            <br /><br />
            <TextField id="outlined-multiline-static"
                label="BodyText"
                multiline
                fullWidth
                rows={10}>
            </TextField>

            {/* <img className="email-img" src={emailimg} alt="Emailimg" /> */}
            {/* <div class="textarea">
                <StyleText></StyleText>
                <textarea
                    class="bodytext"
                    name="bio"
                    rows="10"
                    cols="75"
                    required
                    placeholder="    Body Paragraph..."
                ></textarea>
            </div> */}
            <div className="sendButton">
                <Button
                    variant="contained"
                    size="large"
                    onClick={e => {
                        if (emails.length === 0) {
                            setPopupStatus("empty");
                        } else {
                            setPopupStatus("success");
                            console.log(emails);
                        }
                    }}>
                    SEND
                </Button>
            </div>
        </div>
    );
}
export default Main;
