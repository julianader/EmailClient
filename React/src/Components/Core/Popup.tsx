// import * as React from "react";
import React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
// status: "invalid-email" | "empty" | "success" | null

export const Popup = (props:any) => {
    if (props.status === null && props.status === undefined) {
        return null;
    }
    if (props.show){
    return (
        <Stack spacing={2}>
            {props.status === "invalid-email" && (
                <Alert closeText="Close" variant="filled" id="error" severity="error">
                    Invalid Email!
                </Alert>
            )}
            {props.status === "empty" && (
                <Alert id="empty" severity="warning" onClose={()=>{props.setShow(false)}}>
                    Please add an email!
                </Alert>
            )}
            {props.status === "success" && (
                <Alert id="success" severity="success" onClose={()=>{props.setShow(false)}}>
                    Your email was sent successfully!
                </Alert>
            )}  
        </Stack>
    );
    }
};
