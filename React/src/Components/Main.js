import emailimg from "../Images/mail-removebg-preview.png";
import { InputEmail } from "./Inputs/InputEmail";
import Popup from './Core/Popup'
import StyleText from './Core/Styletext'
function Main(props) {
    
    return (
        <div className="main">
            <h1>Email Form</h1>
            <h3>Send breathtaking professional emails in one click!</h3>
            <h6>Please fill in the following inputs</h6>
            <Popup />
            
            <InputEmail />
            <img className="email-img" src={emailimg} alt="Emailimg" />
            <div class="textarea">
                <StyleText></StyleText>
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
export default Main;
