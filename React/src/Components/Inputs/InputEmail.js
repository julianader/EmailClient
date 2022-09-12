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
                placeholder="Recipients"
                value={inputValue}
                onKeyUp={e => {
                    if (e.key === "Enter") {
                        // TODO Before adding this email, it should be valid
                        const re=  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; //REGEX
                        if (re.test(inputValue) === true){
                            setEmails([...emails, inputValue]);
                            setInputValue("");
                        }
                    }
                }}
                onChange={e => {
                    setInputValue(e.target.value);
                }}
            />
        </div>
    );
};
