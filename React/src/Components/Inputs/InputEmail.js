import { Chip, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import { isEmailValid } from "../../helper/validators";

export const InputEmail = ({ emails, setEmails }) => {
    const [inputValue, setInputValue] = useState("");
    const [errorCode, setErrorCode] = useState(null);

    return (
        <TextField
            id="outlined-textarea"
            label={"Recipients"}
            value={inputValue}
            placeholder="To:"
            fullWidth
            onChange={e => {
                setInputValue(e.target.value);
            }}
            onKeyUp={e => {
                if (e.key === "Enter" && inputValue !== "") {
                    if (isEmailValid(inputValue)) {
                        setErrorCode(null);
                        setEmails([...emails, inputValue]);
                        setInputValue("");
                    } else {
                        setErrorCode("invalid");
                    }
                }
            }}
            error={errorCode !== null}
            helperText={errorCode === null ? null : errorMessages[errorCode]}
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

const errorMessages = {
    invalid: "Invalid Email",
    required: "This field is required",
};
