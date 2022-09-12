import { useState } from "react";
import { Tag } from "../Core/Tag";

export const InputEmail = props => {
    const [emails, setEmails] = useState([]);

    const [inputValue, setInputValue] = useState("");

    return (
        <div id="tag-container" className="tag-container">
            {emails.map((email, index) => (
                <Tag
                    key={index}
                    label={email}
                    onRemove={e => {
                        const filteredEmails = emails.filter(e => e !== email);
                        setEmails(filteredEmails);
                    }}
                />
            ))}
            <input
                type="text"
                id ="hello"
                placeholder="Recipients"
                value={inputValue}
                onKeyUp={e => {
                    if (e.key === "Enter") {
                        // TODO Before adding this email, it should be valid
                        const re=  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; //REGEX
                        if (re.test(inputValue) === true){
                            document.getElementById('added').style.display = "block";
                            document.getElementById('error').style.display = "none";
                            document.getElementById('success').style.display = "none";
                            document.getElementById('empty').style.display = "none";
                            setEmails([...emails, inputValue]);
                            setInputValue("");
                        }
                        else if ( (inputValue === "")){
                            document.getElementById('empty').style.display = "block";
                            document.getElementById('added').style.display = "none";
                            document.getElementById('success').style.display = "none";
                            document.getElementById('error').style.display = "none";
                        }
                        else if ( (re.test(inputValue) === false)){
                            document.getElementById('error').style.display = "block";
                            document.getElementById('added').style.display = "none";
                            document.getElementById('empty').style.display = "none";
                            document.getElementById('success').style.display = "none";
                        }
                        
                    }
                }}
                onChange={e => {
                    setInputValue(e.target.value);
                }}
            />
            <div className="sendButton">
            <button class="main_btn" onClick={e => { 
                if (emails.length === 0){
                    document.getElementById('empty').style.display = "block";
                    document.getElementById('success').style.display = "none";
                    document.getElementById('added').style.display = "none";
                    document.getElementById('error').style.display = "none";
                }
                else{
                document.getElementById('empty').style.display = "none";
                document.getElementById('added').style.display = "none";
                document.getElementById('error').style.display = "none";
                document.getElementById('success').style.display = "block";}}
            }
            >
                    <h2>SEND</h2>
            </button>
        </div>
            
        </div>
    );
};
