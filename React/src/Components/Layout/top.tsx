import image from "../../Images/18.png";
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react'

function Top(props:any) {
    return (
          <Box sx={{p:5}}>
            <Typography variant="h3" className="toph1" paddingTop={10}>
            A new email client <br /> designed to keep you <br /> calm and focused
            </Typography>
            <Box
            component="img"
            // align="right"
            sx={{height: 400}}
            alt="Working on Laptop."
            src={image} />
          </Box>
    );
}

export default Top;
