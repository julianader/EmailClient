import emailimg from "../Images/mail-removebg-preview.png";
import { InputEmail } from "./Inputs/InputEmail";
function Main(props) {
    return (
        <div className="main">
            <h1>Email Form</h1>
            <h3>Send breathtaking professional emails in one click!</h3>
            <h6>Please fill in the following inputs</h6>
            <div id="added" className="success">
                Email Was Added
            </div>
            <div id="error" className="error">
                Invalid Email
            </div>
            <div id="success" className="success">
                Email Was Sent Successfully!
            </div>
            <div id="empty" className="error">
                Please fill out the Recipients inputs
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
        </div>
    );
}
export default Main;
