import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import BackgroundImage from '../../Images/pattern_wave.png'

const bgimg = {
    backgroundImage: 'url('+ BackgroundImage+')'
}
function Container(props) {
    return (
        <Box  m={8}>  {/* 2 curly brackets: 1 to access a proprety {margin, padding} the other as a side {top, bottom, right, left} */}
            <Card  style={bgimg}>
                {props.children}
       </Card>
        </Box>
    );
};

export default Container;