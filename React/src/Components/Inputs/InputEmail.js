import { useState } from "react";
import { Tag } from "../Core/Tag";

export const InputEmail = ({ emails, setEmails, setPopupStatus }) => {
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
                        const re =
                            /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; //REGEX
                        if (re.test(inputValue) === true) {
                            setEmails([...emails, inputValue]);
                            setInputValue("");
                        } else if (inputValue === "") {
                            setPopupStatus("empty");
                        } else if (re.test(inputValue) === false) {
                            setPopupStatus("invalid-email");
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
