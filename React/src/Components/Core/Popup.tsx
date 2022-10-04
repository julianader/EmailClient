// import * as React from "react";
import React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { FormStatus } from "src/types/FormStatus";

type PopupProps = {
    status: FormStatus;
    show: boolean;
    setShow: (show: boolean) => void;
};

export const Popup = (props: PopupProps) => {
    if (props.status === null && props.status === undefined) {
        return null;
    }
    if (props.show) {
        return (
            <Stack spacing={2}>
                {props.status === "invalid-email" && (
                    <Alert closeText="Close" variant="filled" id="error" severity="error">
                        Invalid Email!
                    </Alert>
                )}
                {props.status === "empty" && (
                    <Alert
                        id="empty"
                        severity="warning"
                        onClose={() => {
                            props.setShow(false);
                        }}
                    >
                        Please add an email!
                    </Alert>
                )}
                {props.status === "success" && (
                    <Alert
                        id="success"
                        severity="success"
                        onClose={() => {
                            props.setShow(false);
                        }}
                    >
                        Your email was sent successfully!
                    </Alert>
                )}
            </Stack>
        );
    }
};
