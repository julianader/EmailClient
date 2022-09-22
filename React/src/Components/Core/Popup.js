import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
// status: "invalid-email" | "empty" | "success" | null

export const Popup = ({status, show, setShow}) => {
    if (status === null && status === undefined) {
        return null;
    }
    if (show){
    return (
        <Stack spacing={2}>
            
            {status === "invalid-email" && (
                <Alert closeText="Close" variant="filled" id="error" severity="error">
                    Invalid Email!
                </Alert>
            )}
            {status === "empty" && (
                <Alert id="empty" severity="warning" onClose={()=>{setShow(false)}}>
                    Please add an email!
                </Alert>
            )}
            {status === "success" && (
                <Alert id="success" severity="success" onClose={()=>{setShow(false)}}>
                    Your email was sent successfully!
                </Alert>
            )}  
        </Stack>
    );
    }
};
