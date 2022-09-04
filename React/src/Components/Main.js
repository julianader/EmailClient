import emailimg from "../Images/mail-removebg-preview.png";
import { InputEmail } from "./Inputs/InputEmail";
function Main(props) {
    return (
        <div className="main">
            <h1>Email Form</h1>
            <h3>Send breathtaking professional emails in one click!</h3>
            <h6>Please fill in the following inputs</h6>
            <div id="success" className="success">
                Emails sent successfully
            </div>
            <div id="error" className="error">
                Invalid Email
            </div>
            <InputEmail />
            <img className="email-img" src={emailimg} alt="Emailimg" />
            <div class="textarea">
                <textarea
                    class="bodytext"
                    name="bio"
                    rows="10"
                    cols="75"
                    required
                    placeholder="    Body Paragraph..."
                ></textarea>
            </div>
            <div class="sendButton">
                <button class="main_btn">
                    <h2>SEND</h2>
                </button>
            </div>
        </div>
    );
}
export default Main;