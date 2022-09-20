import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export const Navbar = props =>{
  return (
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Email Client
          </Typography>
          <Button color="inherit" variant="h1">Login</Button>
          <Button color="inherit" variant="h1">Signup</Button>
          <Button color="inherit" variant="h1">About</Button>
        </Toolbar>
      </AppBar>
  );
}