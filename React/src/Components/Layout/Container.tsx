import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';


function Container({children}) {
    return (
        <Box  m={8}>  {/* 2 curly brackets: 1 to access a proprety {margin, padding} the other as a side {top, bottom, right, left} */}
            <Card  style={{backgroundColor: "#E0DEF6"}}>
                {children}
       </Card>
        </Box>
    );
};

export default Container;