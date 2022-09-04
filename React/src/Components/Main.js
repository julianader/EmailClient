import emailimg from "../Images/mail-removebg-preview.png";
function Main(props) {
    return (
        <div className="main">
            <div className="left">
                <h1>Email Form</h1>
                <h3>Send breathtaking professional emails in one click!</h3>
                <h6>Please fill in the following inputs</h6>
                <div id="success" className="success">
                    Emails sent successfully
                </div>
                <div id="error" className="error">
                    Invalid Email
                </div>
                <div id="tag-container" className="tag-container">
                    <input type="text" id="myInput" placeholder="Email" />
                </div>
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
        </div>
    );
}
export default Main;
