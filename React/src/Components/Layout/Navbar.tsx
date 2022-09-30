import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export const Navbar = (props:any) =>{
  return (
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Email Client
          </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Signup</Button>
          <Button color="inherit">About</Button>
        </Toolbar>
      </AppBar>
  );
}