import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
export default function Popup() {
  return (
    <Stack spacing={2}>
      <Alert closeText="Close" variant="filled" id="error" severity="error">Invalid Email!</Alert>
      <Alert variant="filled" id="empty" severity="warning"> Please add an email!</Alert>
      <Alert variant="filled" id="added" severity="info">You added an email!</Alert>
      <Alert variant="filled" id="success" severity="success">Your email was sent successfully!</Alert>
    </Stack>
  );
}
