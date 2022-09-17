import { Chip, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";

export const InputEmail = ({ emails, setEmails, setPopupStatus }) => {
    const [inputValue, setInputValue] = useState("");

    return (
        <TextField
            variant="outlined"
            label={"Recipients"}
            value={inputValue}
            fullWidth
            onChange={e => {
                setInputValue(e.target.value);
            }}
            onKeyUp={e => {
                if (e.key === "Enter") {
                    const re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; //REGEX
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
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        {emails.map((email, index) => (
                            <Chip
                                key={index}
                                label={email}
                                onDelete={e => {
                                    const filteredEmails = emails.filter(e => e !== email);
                                    setEmails(filteredEmails);
                                }}
                            />
                        ))}
                    </InputAdornment>
                ),
            }}
        />
    );
};
