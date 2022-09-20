import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import BackgroundImage from '../../Images/pattern_wave.png'
const theme = {
    spacing: value =>value, //Depending on the input and the theme configuration
}
const bgimg = {
    backgroundImage: 'url('+ BackgroundImage+')'
}
export const Container = props => {
    return (
        <Box sx={{m:10}}>  {/* 2 curly brackets: 1 to access a proprety {margin, padding} the other as a side {top, bottom, right, left} */}
            <Card className="container" style={bgimg}>
                {props.children}
            </Card>
        </Box>
    );
};
