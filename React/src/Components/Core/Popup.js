import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

// status: "invalid-email" | "empty" | "success" | null

export const Popup = props => {
    if (props.status === null && props.status === undefined) {
        return null;
    }
    return (
        <Stack spacing={2}>
            {props.status === "invalid-email" && (
                <Alert closeText="Close" variant="filled" id="error" severity="error">
                    Invalid Email!
                </Alert>
            )}
            {props.status === "empty" && (
                <Alert variant="filled" id="empty" severity="warning">
                    Please add an email!
                </Alert>
            )}
            {props.status === "success" && (
                <Alert variant="filled" id="success" severity="success">
                    Your email was sent successfully!
                </Alert>
            )}
        </Stack>
    );
};
