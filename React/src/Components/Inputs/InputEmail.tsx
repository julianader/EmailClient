import React from "react";
import { Chip, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import { isEmailValid } from "../../helper/validators";

type InputEmailProps = {
    emails: string[];
    setEmails: (emails: string[]) => void;
};

export const InputEmail = (props: InputEmailProps) => {
    const [inputValue, setInputValue] = useState("");
    const [errorCode, setErrorCode] = useState<string | null>(null);

    return (
        <TextField
            id="outlined-textarea"
            label={"Recipients"}
            value={inputValue}
            placeholder="To:"
            fullWidth
            onChange={e => {
                setInputValue(e.currentTarget.value);
            }}
            onKeyUp={e => {
                if (e.key === "Enter" && inputValue !== "") {
                    if (isEmailValid(inputValue)) {
                        setErrorCode(null);
                        props.setEmails([...props.emails, inputValue]);
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
                        {props.emails.map((email, index) => (
                            <Chip
                                key={index}
                                label={email}
                                onDelete={e => {
                                    const filteredEmails = props.emails.filter(e => e !== email);
                                    props.setEmails(filteredEmails);
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
