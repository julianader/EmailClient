// import emailimg from "../Images/mail-removebg-preview.png";
import Button from "@mui/material/Button";
import { useState } from "react";
import { InputEmail } from "./Inputs/InputEmail";
import { Popup } from "./Core/Popup";

function Main(props) {
    // Form Data
    const [emails, setEmails] = useState([]);

    const [popupStatus, setPopupStatus] = useState(null);

    return (
        <div className="main">
            <h1>Email Form</h1>
            <h3>Send breathtaking professional emails in one click!</h3>
            <h6>Please fill in the following inputs</h6>
            {/* <Popup status={popupStatus} /> */}

            <InputEmail emails={emails} setEmails={setEmails} setPopupStatus={setPopupStatus} />

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
                    }}
                >
                    SEND
                </Button>
            </div>
        </div>
    );
}
export default Main;
